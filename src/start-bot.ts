import { REST } from '@discordjs/rest';
import { GatewayIntentBits, Options, Partials } from 'discord.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from 'dotenv';
import { createRequire } from 'node:module';

import { Button } from './buttons/index.js';
import { EndPointCommand, EndpointsCommand, HelpCommand, InfoCommand , RequestCommand, TestCommand} from './commands/chat/index.js';
import {
    ChatCommandMetadata,
    Command,
    MessageCommandMetadata,
    UserCommandMetadata,
} from './commands/index.js';
import { ViewDateSent } from './commands/message/index.js';
import { ViewDateJoined } from './commands/user/index.js';
import {
    ButtonHandler,
    CommandHandler,
    GuildJoinHandler,
    GuildLeaveHandler,
    MessageHandler,
    ReactionHandler,
    TriggerHandler,
} from './events/index.js';
import { CustomClient } from './extensions/index.js';
import { Job } from './jobs/index.js';
import { Bot } from './models/bot.js';
import { Reaction } from './reactions/index.js';
import {
    CommandRegistrationService,
    EventDataService,
    JobService,
    Logger,
} from './services/index.js';
import { Trigger } from './triggers/index.js';


const require = createRequire(import.meta.url);
export let Config = require('../config/config.json');
const http = require('node:http');

let Logs = require('../lang/logs.json');

config();

// Response for Uptime Robot
/* https://glitch.com/~pumped-chopper からお借りしました */
http.createServer(function(request: any, response: { writeHead: (arg0: number, arg1: { 'Content-Type': string; }) => void; end: (arg0: string) => void; })
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Bot is online!');
}).listen(3000);

async function start(): Promise<void> {
    // Services
    let eventDataService = new EventDataService();

    // Client
    let client = new CustomClient({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessageTyping,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildModeration,
            GatewayIntentBits.MessageContent,
        ],
        partials: (Config.client.partials as string[]).map(partial => Partials[partial]),
        makeCache: Options.cacheWithLimits({
            // Keep default caching behavior
            ...Options.DefaultMakeCacheSettings,
            // Override specific options from config
            ...Config.client.caches,
        }),
    });

    // Commands
    let commands: Command[] = [
        // Chat Commands
        new HelpCommand(),
        new InfoCommand(),
        new TestCommand(),

        // Message Context Commands
        new ViewDateSent(),

        // User Context Commands
        new ViewDateJoined(),

        new EndPointCommand(),
        new EndpointsCommand(),
        new RequestCommand(),

        // TODO: Add new commands here
    ];

    // Buttons
    let buttons: Button[] = [
        // TODO: Add new buttons here
        
    ];

    // Reactions
    let reactions: Reaction[] = [
        // TODO: Add new reactions here
    ];

    // Triggers
    let triggers: Trigger[] = [
        // TODO: Add new triggers here
    ];

    // Event handlers
    let guildJoinHandler = new GuildJoinHandler(eventDataService);
    let guildLeaveHandler = new GuildLeaveHandler();
    let commandHandler = new CommandHandler(commands, eventDataService);
    let buttonHandler = new ButtonHandler(buttons, eventDataService);
    let triggerHandler = new TriggerHandler(triggers, eventDataService);
    let messageHandler = new MessageHandler(triggerHandler);
    let reactionHandler = new ReactionHandler(reactions, eventDataService);

    // Jobs
    let jobs: Job[] = [
        // TODO: Add new jobs here
    ];

    // Bot
    let bot = new Bot(
        process.env.DISCORD_TOKEN,
        client,
        guildJoinHandler,
        guildLeaveHandler,
        messageHandler,
        commandHandler,
        buttonHandler,
        reactionHandler,
        new JobService(jobs)
    );

    // Register
    if (process.argv[2] == 'commands') {
        try {
            let rest = new REST({ version: '10' }).setToken(Config.client.token);
            let commandRegistrationService = new CommandRegistrationService(rest);
            let localCmds = [
                ...Object.values(ChatCommandMetadata).sort((a, b) => (a.name > b.name ? 1 : -1)),
                ...Object.values(MessageCommandMetadata).sort((a, b) => (a.name > b.name ? 1 : -1)),
                ...Object.values(UserCommandMetadata).sort((a, b) => (a.name > b.name ? 1 : -1)),
            ];
            await commandRegistrationService.process(localCmds, process.argv);
        } catch (error) {
            Logger.error(Logs.error.commandAction, error);
        }
        // Wait for any final logs to be written.
        await new Promise(resolve => setTimeout(resolve, 1000));
        process.exit();
    }

    await bot.start();
}

process.on('unhandledRejection', (reason, _promise) => {
    Logger.error(Logs.error.unhandledRejection, reason);
});

start().catch(error => {
    Logger.error(Logs.error.unspecified, error);
});
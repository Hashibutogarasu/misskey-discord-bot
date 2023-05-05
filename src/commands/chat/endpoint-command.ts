/* eslint-disable import/no-extraneous-dependencies */
import { ChatInputCommandInteraction, EmbedBuilder, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { api as misskeyApi } from 'misskey-js';

import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { Config } from '../../start-bot.js';
import { Command, CommandDeferType } from '../index.js';

export class EndPointCommand implements Command {
    public names = [Lang.getRef('chatCommands.endpoint', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        const instance = intr.options.get('instance')?.value as string ?? 'misskey.io';
        
        const cli = new misskeyApi.APIClient({
            origin: `https://${instance}`,
            credential: process.env.MISSKEY_TOKEN,
        });
        
        const path = intr.options.get('path').value;
        
        const endpoint = await cli.request('endpoint', { endpoint: `${path}`});
        const params = JSON.stringify(endpoint.params[0], null, '\t');

        const embed = new EmbedBuilder()
        .setTitle(`${path}`)
        .setDescription(`\`\`\`json\n${params}\`\`\``)
        .setColor('Green')
        .setTimestamp();

        await intr.editReply({ embeds : [embed] });
    }
}

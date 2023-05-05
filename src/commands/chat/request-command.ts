/* eslint-disable import/no-extraneous-dependencies */
import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { Endpoints, api as misskeyApi } from 'misskey-js';

import { MisskeyParser } from '../../misskey-parser/parser.js';
import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { Config } from '../../start-bot.js';
import { Command, CommandDeferType } from '../index.js';

export class RequestCommand implements Command {
    public names = [Lang.getRef('chatCommands.request', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        const path = intr.options.get('path').value as keyof Endpoints;
        const json = intr.options.get('json')?.value as string ?? '{}';
        const instance = intr.options.get('instance')?.value as string ?? 'misskey.io';

        const cli = new misskeyApi.APIClient({
            origin: `https://${instance}`,
            credential: process.env.MISSKEY_TOKEN,
        });
        
        const request_raw = await cli.request(`${path}`, JSON.parse(json));

        const embed = new MisskeyParser().parse(request_raw, path);

        await intr.editReply({ embeds : [embed] });
    }
}

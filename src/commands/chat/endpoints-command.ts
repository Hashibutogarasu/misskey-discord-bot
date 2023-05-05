/* eslint-disable import/no-extraneous-dependencies */
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, EmbedBuilder, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { api as misskeyApi } from 'misskey-js';

import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { Config } from '../../start-bot.js';
import { InteractionUtils } from '../../utils/interaction-utils.js';
import { Command, CommandDeferType } from '../index.js';

export class EndpointsCommand implements Command {
    public names = [Lang.getRef('chatCommands.endpoints', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        const cli = new misskeyApi.APIClient({
            origin: 'https://misskey.io',
            credential: Config.client.misskeytoken,
        });
        
        await cli.request('endpoints', {  });
        
        const embed = new EmbedBuilder().setTitle('Endpoint List')
        .setURL('https://misskey-hub.net/docs/api/endpoints.html')
        .setColor('Green');

        InteractionUtils.send(intr, embed);

        await intr.editReply({
            embeds: [embed],
        });
    }
}

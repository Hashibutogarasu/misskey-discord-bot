import {
    ApplicationCommandType,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from 'discord.js';

import { Args } from './index.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export const ChatCommandMetadata: {
    [command: string]: RESTPostAPIChatInputApplicationCommandsJSONBody;
} = {
    HELP: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.help', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.help'),
        description: Lang.getRef('commandDescs.help', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.help'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.HELP_OPTION,
                required: true,
            },
        ],
    },
    INFO: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.info', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.info'),
        description: Lang.getRef('commandDescs.info', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.info'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.INFO_OPTION,
                required: true,
            },
        ],
    },
    TEST: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.test', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.test'),
        description: Lang.getRef('commandDescs.test', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.test'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    ENDPOINT: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.endpoint', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.endpoint'),
        description: Lang.getRef('commandDescs.endpoint', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.endpoint'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.ENDPOINT_OPTION,
                required: true,
            },
        ],
    },
    ENDPOINTS: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.endpoints', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.endpoints'),
        description: Lang.getRef('commandDescs.endpoints', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.endpoints'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.INTANCE_DOMAIN_OPTION,
                required: false,
            }
        ]
    },
    REQUEST: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.request', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.request'),
        description: Lang.getRef('commandDescs.request', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.request'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.REQUEST_PATH_OPTION,
                required: true,
            },
            {
                ...Args.REQUEST_JSON_OPTION,
                required: true,
            },
            {
                ...Args.INTANCE_DOMAIN_OPTION,
                required: false,
            }
        ],
    }
};

export const MessageCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_SENT: {
        type: ApplicationCommandType.Message,
        name: Lang.getRef('messageCommands.viewDateSent', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('messageCommands.viewDateSent'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};

export const UserCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_JOINED: {
        type: ApplicationCommandType.User,
        name: Lang.getRef('userCommands.viewDateJoined', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('userCommands.viewDateJoined'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};

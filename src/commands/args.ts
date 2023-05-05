import { APIApplicationCommandBasicOption, APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from 'discord.js';

import { HelpOption, InfoOption } from '../enums/index.js';
import { EndpointsArray } from '../misskey/endpoints.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export function getEndPoints() : APIApplicationCommandOptionChoice<string>[]{
    const choices : Array<APIApplicationCommandOptionChoice<string>> = [];
    let count = 0;
    EndpointsArray.forEach((endpoint: string)=>{
        if(count <= 24){
            choices.push({
                name: endpoint,
                value: endpoint
            });
        }

        count++;
    });

    return choices;
}

export class Args {
    public static readonly HELP_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.option', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.option'),
        description: Lang.getRef('argDescs.helpOption', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('helpOptionDescs.contactSupport', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('helpOptionDescs.contactSupport'),
                value: HelpOption.CONTACT_SUPPORT,
            },
            {
                name: Lang.getRef('helpOptionDescs.commands', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('helpOptionDescs.commands'),
                value: HelpOption.COMMANDS,
            },
        ],
    };
    public static readonly INFO_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.option', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.option'),
        description: Lang.getRef('argDescs.helpOption', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('infoOptions.about', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.about'),
                value: InfoOption.ABOUT,
            },
            {
                name: Lang.getRef('infoOptions.translate', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.translate'),
                value: InfoOption.TRANSLATE,
            },
            {
                name: Lang.getRef('infoOptions.dev', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.dev'),
                value: InfoOption.DEV,
            },
        ],
    };
    public static readonly ENDPOINT_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.path', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.path'),
        description: Lang.getRef('argDescs.endpointOption', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.endpointOption'),
        type: ApplicationCommandOptionType.String,
        required: true
    };

    public static readonly INTANCE_DOMAIN_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.instance', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.instance'),
        description: Lang.getRef('argDescs.instance', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.instance'),
        type: ApplicationCommandOptionType.String,
        required: true,
    };

    public static readonly REQUEST_PATH_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.request_path', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.request_path'),
        description: Lang.getRef('argDescs.request_path', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.request_path'),
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: getEndPoints()
    };
    public static readonly REQUEST_JSON_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.request_json', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.request_json'),
        description: Lang.getRef('argDescs.request_json', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.request_json'),
        type: ApplicationCommandOptionType.String,
        required: false,
    };
}

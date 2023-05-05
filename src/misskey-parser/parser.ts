import { EmbedBuilder } from 'discord.js';
import { Endpoints } from 'misskey-js/built/api.types.js';
import { Note, User } from 'misskey-js/built/entities.js';

export class MisskeyParser{
    private result : EmbedBuilder;
    
    parse<T extends keyof Endpoints>(json : any, type : T) : EmbedBuilder{
        
        switch(type){
            case 'notes/show':
                this.result = new EmbedBuilder()
                .setAuthor({
                    name: `${json.user.name} @${json.user.username}`,
                    iconURL: json.user.avatarUrl
                })
                .setDescription(json.text)
                .setTimestamp(Date.parse(json.createdAt));
                
                if(json.files.length > 0){
                    this.result.setImage(json.files[0].url);
                }
                
                break;
            case 'users/show':
                this.result = new EmbedBuilder()
                .setAuthor({
                    name: `${json.name} @${json.username}`,
                    iconURL: json.avatarUrl
                })
                .setDescription(`onlinestatus:${json.onlineStatus}\nid:${json.id}`)
                break;
            default:
                this.result = new EmbedBuilder()
                .setDescription(`\`\`\`${JSON.stringify(json, null, '\t')}\`\`\``);
                break;
                
        }

        this.result.setColor('Green');

        return this.result;
    }
}
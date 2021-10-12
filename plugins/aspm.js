const Alpha = require('../events');
const Language = require('../language');
const Lang = Language.getString('aspm');
const Config = require('../config');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const SCRIPT = "\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n*ᴀ* \n*ɴ* \n*ᴛ* \n*ɪ* \n \n \n*ꜱ* \n*ᴩ* \n*ᴀ* \n*ᴍ* \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n *ᴀ* \n*ɴ* \n*ᴛ* \n*ɪ* \n \n \n*ꜱ* \n*ᴩ* \n*ᴀ* \n*ᴍ* \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n *ᴀ* \n*ɴ* \n*ᴛ* \n*ɪ* \n \n \n*ꜱ* \n*ᴩ* \n*ᴀ* \n*ᴍ* \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n*ᴀ* \n*ɴ* \n*ᴛ* \n*ɪ* \n \n \n*ꜱ* \n*ᴩ* \n*ᴀ* \n*ᴍ* \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n *ᴀ* \n*ɴ* \n*ᴛ* \n*ɪ* \n \n \n*ꜱ* \n*ᴩ* \n*ᴀ* \n*ᴍ* \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n *ᴀ* \n*ɴ* \n*ᴛ* \n*ɪ* \n \n \n*ꜱ* \n*ᴩ* \n*ᴀ* \n*ᴍ* \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n" 
const ENDSEC = "*❕ THIS IS AN ANTISAPM (anti lag) ❕* \n♻ _This code prevents your phone from getting stuck due to malicious messages_"
var  MUTE = '' 
if (Config.LANG == 'EN') MUTE = '*🔐 Group Closed Due To Spams 🔇*'
if (Config.LANG == 'SI') MUTE = '*🔐 ස්පැම් හේතුවෙන් සමූහය වසා ඇත 🔇*'    


Alpha.addCommand({pattern: 'aspm ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.ASPM_DESC }, (async (message, match) => {    

    if (match[1] == '') {
            await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
            await message.client.sendMessage(message.jid, MUTE ,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
            await message.client.sendMessage(message.jid, ENDSEC , MessageType.text);
        }

}));

Alpha.addCommand({pattern: 'alag ?(.*)', fromMe: true, desc: Lang.ALAG_DESC }, (async (message, match) => {    


if (match[1] == '') {

        await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
        await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
        await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
        await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
        await message.client.sendMessage(message.jid, Config.U_NAME + SCRIPT + Config.U_NAME , MessageType.text);
        await message.client.sendMessage(message.jid,ENDSEC, MessageType.text);

    }

}));

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'tagadmins$', fromMe: true, desc: Lang.TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '🔖 @' + uye.id.split('@')[0] + '📃 \n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'*==== 🍁 Gʀᴏᴜᴘ Aᴅᴍɪɴs 📯 ====*\n \n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'tagadmins$', fromMe: false, desc: Lang.TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '🔖 @' + uye.id.split('@')[0] + '📃 \n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'*==== 🍁 Gʀᴏᴜᴘ Aᴅᴍɪɴs 📯 ====*\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}

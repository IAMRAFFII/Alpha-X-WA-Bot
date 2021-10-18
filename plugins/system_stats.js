const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');
const ALIVE_MSG = '⠀    *≪━─━─━─━─◈─━─━─━─━≫*\n*⚡ Creating NEW Ａｌｐｈａ-Ｘ Bot 🚀*\n            *======== • ✠ • ========*\n \n                🔥 *D⃟ᴇᴠᴇʟᴏᴘᴇs* 😎\n*➫ ˢˡ Aʟᴘʜᴀ   ⪡* _wa.me/94772978164_\n*➫ Hᴀɴsᴀᴋᴀ ⪡* _wa.me/94763983965_\n\n                   *♠️ 🅥ᴇʀsɪᴏɴ ♠️* \n➔»➔  ```' + Config.VERSION + '```\n\n                   *🛠️ 🅑ʀᴀɴᴄʜ 🛠️* \n➔»➔  _' + Config.BRANCH + '_\n\n            *🔔 🅣ᴇʟᴇɢʀᴀᴍ 🅖ʀᴏᴜᴘ 🔔*\n➔»➔  _https://t.me/AlphaX_SUPPORT_\n\n            *🔌 🅟ʟᴜɢɪɴ 🅒ʜᴀɴɴᴇʟ 🔌*\n➔»➔  _https://t.me/AlphaX_plugin_\n\n             *🪀 🅦ʜᴀᴛsᴀᴘᴘ 🅖ʀᴏᴜᴘ 🪀*\n➔»➔  _' + Config.CHANNEL + '_'


if (Config.WORKTYPE == 'private') {

    AlphaX.addCommand({pattern: `${Config.AM_KEY}`, fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {

            var alpha = await Axios.get(`${Config.A_PIC}`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, Buffer.from(alpha.data), MessageType.image, {mimetype: Mimetype.png, caption: ALIVE_MSG })

        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {
                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL)});
            }
            else if (payload.includes('{logo}')) {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlphaXDuplicated/media/Alpha-X.png'), MessageType.video, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{asenalogo}', '')});
            }
            else {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), MessageType.text);
            }
        }
    }));


    AlphaX.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    AlphaX.addCommand({pattern: `${Config.AM_KEY}`, fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var alpha = await Axios.get(`${Config.A_PIC}`, { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid, Buffer.from(alpha.data), MessageType.image, {mimetype: Mimetype.png, caption: ALIVE_MSG })
        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {
                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL)});
            }
            else if (payload.includes('{logo}')) {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAlphaXDuplicated/media/Alpha-X.png'), MessageType.video, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{asenalogo}', '')});
            }
            else {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), MessageType.text);
            }
        }
    }));


    AlphaX.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}

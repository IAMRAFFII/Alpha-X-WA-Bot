const Alpha = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const Axios = require('axios');
const CON = require('../config')

var DESC = ''
if (CON.LANG == 'EN') DESC == 'To get profile picture of user or group'
if (CON.LANG == 'SI') DESC == 'පරිශීලකයාගේ හෝ කණ්ඩායමේ පැතිකඩ පින්තූරයක් ලබා ගැනීමට'

if (CON.WORKTYPE == 'private') {
Alpha.addCommand({ pattern: 'getpp$', fromMe: true, desc: DESC}, (async (message, match) => { 

            var ppUrl = await message.client.getProfilePicture(message.jid)
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resim.data), 
                    MessageType.image, 
                    { mimetype: Mimetype.png }
            );
     }));
} else if (CON.WORKTYPE == 'public') {
Alpha.addCommand({ pattern: 'getpp$', fromMe: false, DESC: 'To get profile picture on user or group'}, (async (message, match) => { 

            var ppUrl = await message.client.getProfilePicture(message.jid)
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resim.data), 
                    MessageType.image, 
                    { mimetype: Mimetype.png }
            );
     }));
}

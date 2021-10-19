const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

var DESC = ''
if (Config.LANG == 'EN') DESC = "You can get Emoji as image."
if (Config.LANG == 'SI') DESC = "ඉමෝජි පින්තූර ලෙස ලබාගැනීමට."

var NEED = ''
if (Config.LANG == 'EN') NEED = "*🚀 Need a Emoji!*"
if (Config.LANG == 'SI') NEED = "*🚀 Emoji එකක් අවශ්‍ය වේ*"

if (Config.WORKTYPE == 'private') {

    AlphaX.addCommand({pattern: 'emoji ?(.*)', fromMe: true, desc: DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CAPTION, quoted: message.data})


    }));
}

else if (Config.WORKTYPE == 'public') {

    AlphaX.addCommand({pattern: 'emoji ?(.*)', fromMe: false, desc: DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CAPTION, quoted: message.data})

    }));
    
}

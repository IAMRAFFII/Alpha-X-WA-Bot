const Alpha = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

// Descriptions
const RUN = "Roll dice randomly."

// Sentences
const ROLL = "❄ ```Rolling Dice!``` 🎲"

// Results
const ALPHA = "```Dice Rolled:``` "

if (Config.WORKTYPE === 'private') {

        Alpha.addCommand({pattern: 'roll', fromMe: true, desc: RUN}, (async (message, match) => {

            await message.client.sendMessage(message.jid, ROLL, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, ALPHA + `${r_text[i]}`, MessageType.text);

        }));
}

else if (Config.WORKTYPE === 'public') {

        Alpha.addCommand({pattern: 'roll', fromMe: false, desc: RUN}, (async (message, match) => {

            await message.client.sendMessage(message.jid, ROLL, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, ALPHA + `${r_text[i]}`, MessageType.text);

        }));
}

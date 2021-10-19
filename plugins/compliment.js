const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');

var DESC = ''
if (config.LANG == 'EN') DESC = 'It sends complimentry sentenses.'
if (config.LANG == 'SI') DESC = 'එය අනුපූරක වාක්‍ය යවයි.'

if (config.WORKTYPE == 'private') {

    AlphaX.addCommand({pattern: 'compliment$', fromMe: true, desc: DESC}, async (message, match) => {
 
      const url = `https://complimentr.com/api`;
	  try {
		  const response = await got(url);
		  const json = JSON.parse(response.body);
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *compliment : 🤗* ' + '\n🔎 ' + ' ```' + json.compliment + '```\n\n' , MessageType.text, {quoted: message.data});
	  } catch {
		  return await message.client.sendMessage(message.jid, '*❌ Error*' , MessageType.text, {quoted: message.data});
	  }
  });
} 

else if (config.WORKTYPE == 'public') {

    AlphaX.addCommand({pattern: 'compliment$', fromMe: false, desc: DESC}, async (message, match) => {
    
      const url = `https://complimentr.com/api`;
	  try {
		  const response = await got(url);
		  const json = JSON.parse(response.body);
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *compliment : 🤗* ' + '\n🔎 ' + ' ```' + json.compliment + '```\n\n' , MessageType.text, {quoted: message.data});
	  } catch {
		  return await message.client.sendMessage(message.jid, '*❌ Error*' , MessageType.text, {quoted: message.data});
	  }
  });
}

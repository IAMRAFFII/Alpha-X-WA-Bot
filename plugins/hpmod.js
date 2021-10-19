const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');

var DESC = ''
if (config.LANG == 'SI') DESC = 'To get mod apps.'
if (config.LANG == 'EN') DESC = 'ඔබට මොඩ් apps ලබාගැනීමට.'

if (config.WORKTYPE == 'private') {

    AlphaX.addCommand({pattern: 'mod ?(.*)', fromMe: true, desc: DESC }, async (message, match) => {
	  if (match[1] === '') return await message.reply('*🔎 Need app name!*');
	  const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	  try {
		  const response = await got(url);
		  const json = JSON.parse(response.body);
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		  '*📕 ' + '*App Name*' +'* ```' + json.result[0].title + '```\n\n' + 
		  '*📘 ' + '*Size*' +'* ```' + json.result[0].size + '```\n\n\n' + 
		  '*📗 ' + '*Link*' +':* ```' + json.result[0].link + '```\n', MessageType.text, {quoted: message.data});
	  } catch {
		  return await message.client.sendMessage(message.jid, '*❌ Error Not Found!*' , MessageType.text, {quoted: message.data});
	  }
  });
} 

else if (config.WORKTYPE == 'public') {

    AlphaX.addCommand({pattern: 'mod ?(.*)', fromMe: false, desc: DESC }, async (message, match) => {
	  if (match[1] === '') return await message.reply('*🔎 Need app name!*');
	  const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	  try {
		  const response = await got(url);
		  const json = JSON.parse(response.body);
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		  '*📕 ' + '*App Name*' +'* ```' + json.result[0].title + '```\n\n' + 
		  '*📘 ' + '*Size*' +'* ```' + json.result[0].size + '```\n\n\n' + 
		  '*📗 ' + '*Link*' +':* ```' + json.result[0].link + '```\n', MessageType.text, {quoted: message.data});
	  } catch {
		  return await message.client.sendMessage(message.jid, '*❌ Error Not Found!*' , MessageType.text, {quoted: message.data});
	  }
  });
}

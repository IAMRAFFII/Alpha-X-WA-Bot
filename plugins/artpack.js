const Alpha = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

var ARTP_DESC = '' 
if (Config.LANG == 'EN') ARTP_DESC = 'Beautifull artpack with more than 100 messages.'
if (Config.LANG == 'SI') ARTP_DESC = 'පණිවිඩ 100 කට වඩා ඇති ලස්සන කලා ඇසුරුම.'
      
if (Config.WORKTYPE == 'private') {


Alpha.addCommand({pattern: 'art ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```🔎 Need Word!```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art pack ?(.*)', fromMe: true, desc: ARTP_DESC, dontAddCommandList: false}, (async (message, match) => {

    if (match[1] == '') {
  
    await message.client.sendMessage(message.jid,'*🎨 CMND -  .art joke*\n *🎨 CMND -  .art notbad*\n *🎨 CMND -  .art smile*\n *🎨 CMND -  .art wlcm*\n *🎨 CMND -  .art heart*\n *🎨 CMND -  .art logo*\n *🎨 CMND -  .art skull*\n *🎨 CMND -  .art gun*\n *🎨 CMND -  .art shagy*\n *🎨 CMND -  .art bad*\n *🎨 CMND -  .art santa*\n *🎨 CMND -  .art hacker*\n *🎨 CMND -  .art fail*\n *🎨 CMND -  .art warn*\n *🎨 CMND -  .art hello*\n *🎨 CMND -  .art cat* \n *🎨 CMND -  .art human*\n *🎨 CMND -  .art run* \n *🎨 CMND -  .art bed*\n *🎨 CMND -  .art hello*\n *🎨 CMND -  .art love* \n *🎨 CMND -  .art loves* \n *🎨 CMND -  .art pig*\n *🎨 CMND -  .art dog* \n *🎨 CMND -  .art music* \n *🎨 CMND -  .art lock* \n *🎨 CMND -  .art plane* \n *🎨 CMND -  .art watch*\n *🎨 CMND -  .art happy*\n *🎨 CMND -  .art warn*\n *🎨 CMND -  .art del*\n *🎨 CMND -  .art mk*\n *🎨 CMND -  .art truck*\n *🎨 CMND -  .art game*\n *🎨 CMND -  .art ship*\n *🎨 CMND -  .art duck*\n *🎨 CMND -  .art ant*\n *🎨 CMND -  .art drink*\n *🎨 CMND -  .art what*\n *🎨 CMND -  .art confused*\n *🎨 CMND -  .art batterylow*\n *🎨 CMND -  .art wtf*\n *🎨 CMND -  .art smiles*\n *🎨 CMND -  .art hbd*\n *🎨 CMND -  .art 99*\n *🎨 CMND -  .art vup*\n *🎨 CMND -  .art lock*\n *🎨 CMND -  .art eat*\n *🎨 CMND -  .art ghost*\n *🎨 CMND -  .art kidding*\n *🎨 CMND -  .art hi*\n *🎨 CMND -  .art up*\n *🎨 CMND -  .art like*\n *🎨 CMND -  .art iphone*\n *🎨 CMND -  .art wtzp*\n *🎨 CMND -  .art tiktok*\n*🎨 CMND -  .art gm*\n*🎨 CMND -  .art gn*\n*🎨 CMND -  .art ga*\n*🎨 CMND -  .art ge*\n*🎨 CMND -  .art a - z*\n*🎨 CMND -  .art 1 - 9*',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art joke ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░░░░░░░███████████████░░░░░░░░\n░░░░░█████████████████████░░░░░\n░░░░████████████████████████░░░\n░░░██████████████████████████░░\n░░█████████████████████████████\n░░███████████▀░░░░░░░░████████\n░░███████████░░░░░░░░░░░░░░░███\n░████████████░░░░░░░░░░░░░░░░██\n░█░░███████░░░░░░░░░░░▄▄░░░░░██\n█░░░░█████░░░░░░▄███████░░██░░█\n█░░█░░░███░░░░░██▀▀░░░░░░░░██░█\n█░░░█░░░░░░░░░░░░▄██▄░░░░░░░███\n█░░▄█░░░░░░░░░░░░░░░░░░█▀▀█▄░██\n█░░░░░░░░░░░░░░░░░░░░░░█░░░░██░\n░███░░░░░░░░░░░░░░░░░░░█░░░░█░░\n░░█░█░░░░░░░█░░░░░██▀▄░▄██░░░█░\n░░█░█░░░░░░█░░░░░░░░░░░░░░░░░█░\n░░░██░░░░░░█░░░░▄▄▄▄▄▄░░░░░░█░░\n░░░██░░░░░░░█░░█▄▄▄▄░▀▀██░░█░░░\n░░░██░░░░░░░█░░▀████████░░█░░░░\n░░█░░█░░░░░░░█░░▀▄▄▄▄██░░█░░░░░\n░░█░░░█░░░░░░░█░░░░░░░░░█░░░░░░\n░█░░░░░█░░░░░░░░░░░░░░░░█░░░░░░\n░░░░░░░░█░░░░░░█░░░░░░░░█░░░░░░\n░░░░░░░░░░░░░░░░████████░░░░░░░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art notbad ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░█▀░░░░░░░░░░░▀▀███████░░░░\n░░█▌░░░░░░░░░░░░░░░▀██████░░░\n░█▌░░░░░░░░░░░░░░░░███████▌░░\n░█░░░░░░░░░░░░░░░░░████████░░\n▐▌░░░░░░░░░░░░░░░░░▀██████▌░░\n░▌▄███▌░░░░▀████▄░░░░▀████▌░░\n▐▀▀▄█▄░▌░░░▄██▄▄▄▀░░░░████▄▄░\n▐░▀░░═▐░░░░░░══░░▀░░░░▐▀░▄▀▌▌\n▐░░░░░▌░░░░░░░░░░░░░░░▀░▀░░▌▌\n▐░░░▄▀░░░▀░▌░░░░░░░░░░░░▌█░▌▌\n░▌░░▌░▄▄▄▄░░░▌░░░░░░░░▐░░▀▐░░\n░█░▐▄██████▄░▐░░░░░░░░█▀▄▄▀░░\n░▐░▌▌░░░░░░▀▀▄▐░░░░░░█▌░░░░░░\n░░█░░▄▀▀▀▀▄░▄═╝▄░░░▄▀░▌░░░░░░\n░░░▌▐░░░░░░▌░▀▀░░▄▀░░▐░░░░░░░\n░░░▀▄░░░░░░░░░▄▀▀░░░░█░░░░░░░\n░░░▄█▄▄▄▄▄▄▄▀▀░░░░░░░▌▌░░░░░░\n░░▄▀▌▀▌░░░░░░░░░░░░░▄▀▀▄░░░░░\n▄▀░░▌░▀▄░░░░░░░░░░▄▀░░▌░▀▄░░░\n░░░░▌█▄▄▀▄░░░░░░▄▀░░░░▌░░░▌▄▄\n░░░▄▐██████▄▄░▄▀░░▄▄▄▄▌░░░░▄░\n░░▄▌████████▄▄▄███████▌░░░░░▄\n░▄▀░██████████████████▌▀▄░░░░\n▀░░░█████▀▀░░░▀███████░░░▀▄░░\n░░░░▐█▀░░░▐░░░░░▀████▌░░░░▀▄░\n░░░░░░▌░░░▐░░░░▐░░▀▀█░░░░░░░▀\n░░░░░░▐░░░░▌░░░▐░░░░░▌░░░░░░░\n░╔╗║░╔═╗░═╦═░░░░░╔╗░░╔═╗░╦═╗░\n░║║║░║░║░░║░░░░░░╠╩╗░╠═╣░║░║░\n░║╚╝░╚═╝░░║░░░░░░╚═╝░║░║░╩═╝░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art smile ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░███████░░░░░░░░░░░\n░░░░░░░████░░░░░░░████░░░░░░░\n░░░░░██░░░░░░░░░░░░░░░██░░░░░\n░░░██░░░░░░░░░░░░░░░░░░░██░░░\n░░█░░░░░░░░░░░░░░░░░░░░░░░█░░\n░█░░████░░░░░░░░██████░░░░░█░\n█░░█░░░██░░░░░░█░░░░███░░░░░█\n█░█░░░░░░█░░░░░█░░░░░░░█░░░░█\n█░█████████░░░░█████████░░░░█\n█░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░████████████████████░░░░█\n░█░░░█▓▓▓▓▓▓▓▓█████▓▓▓█░░░░█░\n░█░░░░█▓▓▓▓▓██░░░░██▓██░░░░█░\n░░█░░░░██▓▓█░░░░░░░▒██░░░░█░░\n░░░██░░░░██░░░░░░▒██░░░░██░░░\n░░░░░██░░░░███████░░░░██░░░░░\n░░░░░░░███░░░░░░░░░███░░░░░░░\n░░░░░░░░░░█████████░░░░░░░░░░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art wlcm ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'````───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───\n───█▒▒░░░░░░░░░▒▒█───\n────█░░█░░░░░█░░█────\n─▄▄──█░░░▀█▀░░░█──▄▄─\n█░░█─▀▄░░░░░░░▄▀─█░░█\n█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█\n█░░║║║╠─║─║─║║║║║╠─░░█\n█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█\n█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art heart ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```_░▒███████\n░██▓▒░░▒▓██\n██▓▒░__░▒▓██___██████\n██▓▒░____░▓███▓__░▒▓██\n██▓▒░___░▓██▓_____░▒▓██\n██▓▒░_______________░▒▓██\n██▓▒░______________░▒▓██\n██▓▒░__________░▒▓██\n_██▓▒░________░▒▓██\n_██▓▒░________░▒▓██\n_██▓▒░_____░▒▓██\n__██▓▒░__░▒▓██\n___█▓▒░░▒▓██\n_____░▒▓██\n___░▒▓██\n_░▒▓██```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art logo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```───────────▄▄▄▄▄▄▄▄▄───────────\n────────▄█████████████▄────────\n█████──█████████████████──█████\n▐████▌─▀███▄───────▄███▀─▐████▌\n─█████▄──▀███▄───▄███▀──▄█████─\n─▐██▀███▄──▀███▄███▀──▄███▀██▌─\n──███▄▀███▄──▀███▀──▄███▀▄███──\n──▐█▄▀█▄▀███─▄─▀─▄─███▀▄█▀▄█▌──\n───███▄▀█▄██─██▄██─██▄█▀▄███───\n────▀███▄▀██─█████─██▀▄███▀────\n───█▄─▀█████─█████─█████▀─▄█───\n───███────────███────────███───\n───███▄────▄█─███─█▄────▄███───\n───█████─▄███─███─███▄─█████───\n───█████─████─███─████─█████───\n───█████─████─███─████─█████───\n───█████─████─███─████─█████───\n───█████─████▄▄▄▄▄████─█████───\n────▀███─█████████████─███▀────\n──────▀█─███─▄▄▄▄▄─███─█▀──────\n─────────▀█▌▐█████▌▐█▀─────────\n────────────███████────────────```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art skull ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```███████████████████████████\n███████▀▀▀░░░░░░░▀▀▀███████\n████▀░░░░░░░░░░░░░░░░░▀████\n███│░░░░░░░░░░░░░░░░░░░│███\n██▌│░░░░░░░░░░░░░░░░░░░│▐██\n██░└┐░░░░░░░░░░░░░░░░░┌┘░██\n██░░└┐░░░░░░░░░░░░░░░┌┘░░██\n██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██\n██▌░│██████▌░░░▐██████│░▐██\n███░│▐███▀▀░░▄░░▀▀███▌│░███\n██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██\n██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██\n████▄─┘██▌░░░░░░░▐██└─▄████\n█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████\n████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████\n█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████\n███████▄░░░░░░░░░░░▄███████\n██████████▄▄▄▄▄▄▄██████████\n███████████████████████████```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art gun ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░▐█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▄☆\n░███████████████████████\n░▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓◤\n╬▀░▐▓▓▓▓▓▓▌▀█░░░█▀░\n▒░░▓▓▓▓▓▓█▄▄▄▄▄█▀╬░\n░░█▓▓▓▓▓▌░▒▒▒▒▒▒▒▒▒\n░▐█▓▓▓▓▓░░▒▒▒▒▒▒▒▒▒\n░▐██████▌╬░▒▒▒▒▒▒▒▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art shaggy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
 
      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░░░░░░▄▄█▀▀██▄▄░░░░░░░\n░░░░░░░░░░░░░▄█▀▀░░░░░░░▀█░░░░░░\n░░░░░░░░░░░▄▀░░░░░░░░░░░░░█░░░░░\n░░░░░░░░░▄█░░░░░░░░░░░░░░░█░░░░░\n░░░░░░░██▀░░░░░░░▄▄▄░░▄░█▄█▄░░░░\n░░░░░▄▀░░░░░░░░░░████░█▄██░▀▄░░░\n░░░░█▀░░░░░░░░▄▄██▀░░█████░██░░░\n░░░█▀░░░░░░░░░▀█░▀█▀█▀▀▄██▄█▀░░░\n░░░██░░░░░░░░░░█░░█░█░░▀▀▄█▀░░░░\n░░░░█░░░░░█░░░▀█░░░░▄░░░░░▄█░░░░\n░░░░▀█░░░░███▄░█░░░░░░▄▄▄▄█▀█▄░░\n░░░░░▀██░░█▄▀▀██░░░░░░░░▄▄█░░▀▄░\n░░░░░░▀▀█▄░▀▄▄░▄░░░░░░░███▀░░▄██\n░░░░░░░░░▀▀▀███▀█▄░░░░░█▀░▀░░░▀█\n░░░░░░░░░░░░▄▀░░░▀█▄░░░░░▄▄░░▄▄░\n░░░▄▄▄▀▀▀▀▀█▀░░░░░█▄▀▄▄▄▄▄▄█▀▀░░\n░▄█░░░▄██▀░░░░░░░░░█▄░░░░░░░░░░░\n█▀▀░▄█░░░░░░░░░░░░░░▀▀█▄░░░░░░░░\n█░░░█░░░░░░░░░░░░░░░░░░█▄░░░░░░░```',MessageType.text, {quoted: message.data});

       }

}));


Alpha.addCommand({pattern: 'art bad ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░█████████████\n░░░░░░░░░███░███░░░░░░██\n███░░░░░██░░░░██░██████████\n████████░░░░░░████░░░░░░░██\n████░░░░░░░░░░██░░██████████\n████░░░░░░░░░░░███░░░░░░░░░██\n████░░░░░░░░░░░██░░██████████\n████░░░░░░░░░░░░████░░░░░░░░█\n████░░░░░░░░░░░░░███░░████░░█\n█████████░░░░░░░░░░████░░░░░█\n███░░░░░██░░░░░░░░░░░░░█████\n░░░░░░░░░███░░░░░░░██████\n░░░░░░░░░░░██░░░░░░██\n░░░░░░░░░░░░███░░░░░██\n░░░░░░░░░░░░░░██░░░░██\n░░░░░░░░░░░░░░░███░░░██\n░░░░░░░░░░░░░░░░░██░░░█\n░░░░░░░░░░░░░░░░░░█░░░█\n░░░░░░░░░░░░░░░░░░██░██\n░░░░░░░░░░░░░░░░░░░███```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art santa ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```______(█)\n___██████\n_ ████████\n_███████████\n_ (░░░░░░░)░░░)\n_(░(░█░░█░)░░░)\n (░░(░░●░░░)░░░)\n (░░░░◡░░)░░░░)\n_██(░░░░░░░░░░)██\n_███(░░░░░░░░░)███\n████ ██(░░░)██ ████\n████ █████████ ███\n████ ████░████ ███\n(░░)_ ▓▓▓▓▌▓▐▓▓▓_(░░)\n(██) ███████████ (██)\n___█████░█████_▓▓▓/\n_█████-,█████▓▓▓▓▓)\n_█████-,█████▓▓▓▓▓)\n_(░░░░░░)(░░░░░) ▓▓▓▓)\n____(███)_(███)▓▓▓▓▓▓)\n____ (████)_(████)▓▓▓▓▓)```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hacker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```███████████████████████████████\n████╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬████\n██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬███████╬╬╬╬╬╬╬╬╬███████╬╬╬█\n█╬╬██╬╬╬╬███╬╬╬╬╬╬╬███╬╬╬╬██╬╬█\n█╬██╬╬╬╬╬╬╬██╬╬╬╬╬██╬╬╬╬╬╬╬██╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬█████╬╬╬╬╬╬╬╬╬╬╬█████╬╬╬╬█\n█╬╬█████████╬╬╬╬╬╬╬█████████╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬▓▓▓▓╬╬╬╬╬╬╬█╬╬╬╬╬╬╬▓▓▓▓╬╬╬█\n█╬╬▓▓▓▓▓▓╬╬█╬╬╬█╬╬╬█╬╬▓▓▓▓▓▓╬╬█\n█╬╬╬▓▓▓▓╬╬██╬╬╬█╬╬╬██╬╬▓▓▓▓╬╬╬█\n█╬╬╬╬╬╬╬╬██╬╬╬╬█╬╬╬╬██╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬████╬╬╬╬███╬╬╬╬████╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬╬╬╬╬╬█\n██╬╬█╬╬╬╬╬╬╬╬█████╬╬╬╬╬╬╬╬█╬╬██\n██╬╬██╬╬╬╬╬╬███████╬╬╬╬╬╬██╬╬██\n██╬╬▓███╬╬╬████╬████╬╬╬███▓╬╬██\n███╬╬▓▓███████╬╬╬███████▓▓╬╬███\n███╬╬╬╬▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬███\n████╬╬╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬╬╬████\n█████╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬█████\n██████╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬██████\n███████╬╬╬╬╬╬╬███╬╬╬╬╬╬╬███████\n████████╬╬╬╬╬╬███╬╬╬╬╬╬████████\n█████████╬╬╬╬╬███╬╬╬╬╬█████████\n███████████╬╬╬╬█╬╬╬╬███████████\n███████████████████████████████```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art fail ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▄██████████████▄▐█▄▄▄▄█▌\n██████▌▄▌▄▐▐▌███▌▀▀██▀▀\n████▄█▌▄▌▄▐▐▌▀███▄▄█▌\n▄▄▄▄▄██████████████▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art cat ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art human ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```───────────────▄▄───▐█\n───▄▄▄───▄██▄──█▀───█─▄\n─▄██▀█▌─██▄▄──▐█▀▄─▐█▀\n▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌\n▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art run ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```────██──────▀▀▀██\n──▄▀█▄▄▄─────▄▀█▄▄▄\n▄▀──█▄▄──────█─█▄▄\n─▄▄▄▀──▀▄───▄▄▄▀──▀▄\n─▀───────▀▀─▀───────▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art bad ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```O────────────────O\n█▓██▄────────────█\n█▓▓░▀▄▀░░░░░░░░░░█\n█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█────────────────█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hello ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔┓┏╦━━╦┓╔┓╔━━╗╔╗\n║┗┛║┗━╣┃║┃║╯╰║║║\n║┏┓║┏━╣┗╣┗╣╰╯║╠╣\n╚┛┗╩━━╩━╩━╩━━╝╚╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art love ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```████████████████████████\n█▄─▄███─▄▄─█▄─█─▄█▄─▄▄─█\n██─██▀█─██─██─█─███─▄█▀█\n▀▄▄▄▄▄▀▄▄▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art loves ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```█───▄▀▀▀▀▄─▐█▌▐█▌▐██\n█──▐▄▄────▌─█▌▐█─▐▌─\n█──▐█▀█─▀─▌─█▌▐█─▐██\n█──▐████▄▄▌─▐▌▐▌─▐▌─\n███─▀████▀───██──▐██```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art pig ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▂╱▔▔╲╱▔▔▔▔╲╱▔▔╲▂\n╲┈▔╲┊╭╮┈┈╭╮┊╱▔┈╱\n┊▔╲╱▏┈╱▔▔╲┈▕╲╱▔┊\n┊┊┊┃┈┈▏┃┃▕┈┈┃┊┊┊\n┊┊┊▏╲┈╲▂▂╱┈╱▕┊┊┊```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art dog ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╥━━━━━━━━╭━━╮━━┳\n╢╭╮╭━━━━━┫┃▋▋━▅┣\n╢┃╰┫┈┈┈┈┈┃┃┈┈╰┫┣\n╢╰━┫┈┈┈┈┈╰╯╰┳━╯┣\n╢┊┊┃┏┳┳━━┓┏┳┫┊┊┣\n╨━━┗┛┗┛━━┗┛┗┛━━┻```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art music ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```────█▀█▄▄▄▄─────██▄\n────█▀▄▄▄▄█─────█▀▀█\n─▄▄▄█─────█──▄▄▄█\n██▀▄█─▄██▀█─███▀█\n─▀▀▀──▀█▄█▀─▀█▄█▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art lock ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──▄▀▀▀▄───────────────\n──█───█───────────────\n─███████─────────▄▀▀▄─\n░██─▀─██░░█▀█▀▀▀▀█░░█░\n░███▄███░░▀░▀░░░░░▀▀░░``` \n \n \n___________________\n ╮╭┻┻╮╭┻┻╮╭▕╮╲\n▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏\n▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏\n▕╰━━━┓┈┈┈╭╮▕╭╮▏\n▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art plane ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░░░░░░█\n░░░░░░░░▄▄█▄▄\n░░░░▀▀▀██▀▀▀██▀▀▀\n▄▄▄▄▄▄▄███████▄▄▄▄▄▄▄\n░░█▄█░░▀██▄██▀░░█▄█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art watch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╦╦╦╦╦╦▄▀▀▀▀▀▀▄╦╦╦╦╦╦\n▒▓▒▓▒█╗░░▐░░░╔█▒▓▒▓▒\n▒▓▒▓▒█║░░▐▄▄░║█▒▓▒▓▒\n▒▓▒▓▒█╝░░░░░░╚█▒▓▒▓▒\n╩╩╩╩╩╩▀▄▄▄▄▄▄▀╩╩╩╩╩╩```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art tv ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░▀▄░░▄▀\n▄▄▄██▄▄▄▄▄░▀█▀▐░▌\n█▒░▒░▒░█▀█░░█░▐░▌\n█░▒░▒░▒█▀█░░█░░█\n█▄▄▄▄▄▄███══════```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art happy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔══╗░░░░╔╦╗░░╔═════╗\n║╚═╬════╬╣╠═╗║░▀░▀░║\n╠═╗║╔╗╔╗║║║╩╣║╚═══╝║\n╚══╩╝╚╝╚╩╩╩═╝╚═════╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art apple ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```┊┊┊┊┊┊┊╱▏┊┊┊┊┊┊┊\n┊┊┊┊┊┊▕╱┊┊┊┊┊┊┊┊\n┊┊┊╱▔▔╲┊╱▔▔╲┊┊┊┊\n┊┊▕┈┈┈┈▔┈┈┈╱┊┊┊┊\n┊┊▕┈┈┈┈┈┈┈┈╲┊┊┊┊\n┊┊┊╲┈┈┈┈┈┈┈╱┊┊┊┊\n┊┊┊┊╲▂▂▂▂▂╱┊┊┊┊┊```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art mug ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```█▄▀▄▀▄█\n█░▀░▀░█▄\n█░▀░░░█─█\n█░░░▀░█▄▀\n▀▀▀▀▀▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art snake ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▄▄▀█▄───▄───────▄\n▀▀▀██──███─────███\n░▄██▀░█████░░░█████░░\n███▀▄███░███░███░███░▄\n▀█████▀░░░▀███▀░░░▀██▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art paris ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░█\n░░░░▄█▄░░╔╗╔╗╔╗─╦╔╗\n░░░▄█▀█▄░╠╝╠╣╠╩╗║╚╗\n░░▄█▄▄▄█▄╚═╩╩╩─╩╩╚╝\n▄██▀░░░▀██▄```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art warn ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╭╮╭╮╭┳━━━┳━━━┳━╮╱╭┳━━┳━╮╱╭┳━━━╮╭┳┳┳╮\n┃┃┃┃┃┃╭━╮┃╭━╮┃┃╰╮┃┣┫┣┫┃╰╮┃┃╭━╮┃┃┃┃┃┃\n┃┃┃┃┃┃┃╱┃┃╰━╯┃╭╮╰╯┃┃┃┃╭╮╰╯┃┃╱╰╯┃┃┃┃┃\n┃╰╯╰╯┃╰━╯┃╭╮╭┫┃╰╮┃┃┃┃┃┃╰╮┃┃┃╭━╮╰┻┻┻╯\n╰╮╭╮╭┫╭━╮┃┃┃╰┫┃╱┃┃┣┫┣┫┃╱┃┃┃╰┻━┃╭┳┳┳╮\n╱╰╯╰╯╰╯╱╰┻╯╰━┻╯╱╰━┻━━┻╯╱╰━┻━━━╯╰┻┻┻╯```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art del ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▒█▀▀▄ █▀▀ █░░ █▀▀ ▀▀█▀▀ █▀▀ \n▒█░▒█ █▀▀ █░░ █▀▀ ░░█░░ █▀▀ \n▒█▄▄▀ ▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art mk ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```███╗░░░███╗ ██╗░░██╗\n████╗░████║ ██║░██╔╝\n██╔████╔██║ █████═╝░\n██║╚██╔╝██║ ██╔═██╗░\n██║░╚═╝░██║ ██║░╚██╗\n╚═╝░░░░░╚═╝ ╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art truck ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▌\n───▄▄██▌█░░░░░░░░░░░░▐\n▄▄▄▌▐██▌█░░░░░░░░░░░░▐\n███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▌\n▀❍▀▀▀▀▀▀▀❍❍▀▀▀▀▀▀❍❍▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art game ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```─▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄\n█░░░█░░░░░░░░░░▄▄░██░█\n█░▀▀█▀▀░▄▀░▄▀░░▀▀░▄▄░█\n█░░░▀░░░▄▄▄▄▄░░██░▀▀░█\n─▀▄▄▄▄▄▀─────▀▄▄▄▄▄▄▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art ship ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```───────▓▓╬▓\n──────▓▓▓║▓▓\n─────▓▓▓▓╬▓▓▓▓\n░░▄░▓▓▓▓▓║▓▓▓▓▓░░░░░\n░▀████████████████▀░░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art duck ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──────────▄██▄▄\n─▄▄█████▄─██▀\n▀█████████▄██▄\n▒▒▀██████████▀▒\n▒▒▒▒▒█▄█▄▄▒▒▒▒▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art ant ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░╚══╗░╔═╔════╝\n╚═╦═╗╠═╩═╩╗╔═╦═╗\n░░║▒╠╣▒▒▒▒╠╣▒║▒║\n╔═╩═╝╠═╦═╦╝╚═╩═╝░░╔══╝░╚═╚════╗```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art drink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░▓███▓\n░░░░▓█████▓\n░░░░▓█████▓\n░░░░░▓███▓\n░░░░ *;;;;;;;;;*\n░░░░* ;;;;;;;;;*\n░░░ * ;;;;;;;;;;;*\n░░░* ;;;;;;;;;;;;*\n░░░░▓█████▓\n░░░░▓█████▓\n░░░░▓█████▓\n░░░▓███████▓\n░░▓█████████▓\n░▓███████████▓\n▓█████████████▓\n▓███░░░░░░░▀▀▀▓\n▓███░░░░████████████\n▓███░░░░█▒▒▒▒▒▒▒▒▒▒█\n▓███░░░░░█▒▒▒▒▒▒▒▒█\n▓███░░░░░░█▒▒▒▒▒▒█\n▓███░░░░░░░█▒▒▒▒█\n▓███░░░░░░░░████\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n░▓██░░░░░░░▓████▓\n░▓████▓▓█████████▓```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art what ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```┌┐┌┐┌┐┌┐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒┌┐▒┌───┐\n││││││││▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒┌┘└┐│┌─┐│\n│││││││└─┬──┬──┬──┬──┬──┼┐┌┘└┘┌┘│\n│└┘└┘││┌┐│┌┐│┌┐│┌┐│┌┐│┌┐│││▒▒▒│┌┘\n└┐┌┐┌┘││││┌┐│┌┐│┌┐│┌┐│┌┐││└┐▒▒┌┐▒\n▒└┘└┘▒└┘└┴┘└┴┘└┴┘└┴┘└┴┘└┘└─┘▒▒└┘▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art confused ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔═╗▒▒▒▒▒▒▒╔═╗▒▒▒╔═╗▒▒▒▒╔╗\n║╔╝╔═╗╔═╦╗║═╣╔╦╗║═╣╔═╗╔╝║\n║╚╗║╬║║║║║║╔╝║║║╠═║║╩╣║╬║\n╚═╝╚═╝╚╩═╝╚╝▒╚═╝╚═╝╚═╝╚═╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art batterylow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔════════════════════╗\n║║██░░░░░░░░░░░░░░░░░░╚╗\n║║██░░░░░Battery Low ░░░░░\n║║██░░░░░░░░░░░░░░░░░░╔╝\n╝════════════════════╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art wtf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```┏┓┏┓┏┓┏━━━┓┏━━━┓\n┃┃┃┃┃┃┗┓╱┏┛┃╱┏━┛\n┃┗┛┗┛┃┈┃╱┃┈┃╱┗┓\n┃╱╱╱╱┃┈┃╱┃┈┃╱┏┛\n┗━━━━┛◯┗━┛◯┗━┛◯```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art smiles ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╲╲╭━━━━━━━╮╱╱\n╲╭╯╭━╮┈╭━╮╰╮╱\n╲┃┈┃┈▊┈┃┈▊┈┃╱\n╲┃┈┗━┛┈┗━┛┈┃╱\n╱┃┈┏━━━━━┓┈┃╲\n╱┃┈┃┈┈╭━╮┃┈┃╲\n╱╰╮╰━━┻━┻╯╭╯╲```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hbd ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```Wait For Next Update```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art 99 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```██████████████]99%```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art vup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```Music♩♪♫♬ Volume: ▁ ▂ ▃ ▄ ▅ ▆ █ 100 %```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art eatyou ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```█████████\n█▄█████▄█\n█▼▼▼▼▼\n█\n I will eat you!\n█▲▲▲▲▲\n█████████\n ██ ██```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art ghost ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\n▒▒█▒▒▒▄██████████▄▒▒▒▒\n▒█▐▒▒▒████████████▒▒▒▒\n▒▌▐▒▒██▄▀██████▀▄██▒▒▒\n▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\n▐┼▐▒▒██████████████▒▒▒\n▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\n▒▒█████──────────▐███▌\n▒▒█▀▀██▄█─▄───▐─▄███▀▒\n▒▒█▒▒███████▄██████▒▒▒\n▒▒▒▒▒██████████████▒▒▒\n▒▒▒▒▒██████████████▒▒▒\n▒▒▒▒▒█████████▐▌██▌▒▒▒\n▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art kidding ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░▄▀░░░░░░░░░░░░░░░▀▀▄▄░░░░░\n░░▄▀░░░░░░░░░░░░░░░░░░░░▀▄░░░\n░▄▀░░░░░░░░░░░░░░░░░░░░░░░█░░\n░█░░░░░░░░░░░░░░░░░░░░░░░░░█░\n▐░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░░▀▀▄▄▄▄░░░▄▌░░░░░░░░░░░░▐\n▌░░░░░▌░░▀▀█▀▀░░░▄▄░░░░░░░▌░▐\n▌░░░░░░▀▀▀▀░░░░░░▌░▀██▄▄▄▀░░▐\n▌░░░░░░░░░░░░░░░░░▀▄▄▄▄▀░░░▄▌\n▐░░░░▐░░░░░░░░░░░░░░░░░░░░▄▀░\n░█░░░▌░░▌▀▀▀▄▄▄▄░░░░░░░░░▄▀░░\n░░█░░▀░░░░░░░░░░▀▌░░▌░░░█░░░░\n░░░▀▄░░░░░░░░░░░░░▄▀░░▄▀░░░░░\n░░░░░▀▄▄▄░░░░░░░░░▄▄▀▀░░░░░░░\n░░░░░░░░▐▌▀▀▀▀▀▀▀▀░░░░░░░░░░░\n░░░░░░░░█░░░░░░░░░░░░░░░░░░░░\n░░╔═╗╔═╗╔═╗░░░░░║░║╔═╗║░║░░░░\n░░╠═╣╠╦╝╠╣░░░░░░╚╦╝║░║║░║░░░░\n░░║░║║╚═╚═╝░░░░░░║░╚═╝╚═╝░░░░\n║╔═░╦░╦═╗╦═╗╦╔╗║╔═╗░░╔╦╗╔═╗╔╗\n╠╩╗░║░║░║║░║║║║║║═╗░░║║║╠╣░╔╝\n║░╚░╩░╩═╝╩═╝╩║╚╝╚═╝░░║║║╚═╝▄░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░░░▄▐░░░░\n░HI!!░░▄▄▄░░▄██▄░░░\n░░░░░░▐▀█▀▌░░░░▀█▄░\n░░░░░░▐█▄█▌░░░░░░▀█▄\n░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀\n░░░░░▄▄▄██▀▀▀▀░░░░░\n░░░░█▀▄▄▄█░▀▀░░░░░░\n░░░░▌░▄▄▄▐▌▀▀▀░░░░░\n░▄░▐░░░▄▄░█░▀▀░░░░░\n░▀█▌░░░▄░▀█▀░▀░░░░░\n░░░░░░░░▄▄▐▌▄▄░░░░░\n░░░░░░░░▀███▀█▄░░░░\n░░░░░░░▐▌▀▄▀▄▀▐░░░░\n░░░░░░░▐▀░░░░░░▐▌░░\n░░░░░░░█░░░░░░░░█░░\n░░░░░░▐▌░░░░░░░░░█░```',MessageType.text, {quoted: message.data});

       }
   
}));

Alpha.addCommand({pattern: 'art up ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```─────▄▀▀▄──────────\n─────█──█──────────\n─────█──█▄▄────────\n─────█──█──█▀▀▄▄───\n─▄▄▄─█──█──█──█─▀▄─\n─█──▀█────────▀──█─\n──▀▄─█───────────█─\n───▀▄───────────█──\n────▀▄──────────█──\n─────▀▄────────█───\n──────█▄▄▄▄▄▄▄▄█───```',MessageType.text, {quoted: message.data});

       }

}));


Alpha.addCommand({pattern: 'art like ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░░▄▄\n░░░░░█░░█\n▄▄▄▄▄█░░█▄▄▄\n▓▓▓▓█░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n███▀▀▀███████```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art iphone ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```─────────▄────\n───────▐█▌────\n───▄▄▄─▀─▄▄▄──\n─▄█████▄█████▄\n▐███████████▀─\n▐██████████───\n─███████████▄─\n──███████████▀\n───▀██▀─▀██▀──\n──────────────\n▀▐▀█▐────▄──▄▄\n█▐▀▀▐█▐█▌▐█▌▌█\n█▐──▐▐▐▄▌▐▐▌█▄\n```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art wtzp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──▄▄█▀▀▀▀▀█▄▄──\n▄█▀░░▄▄░░░░░▀█▄\n█░░░███░░░░░░░█\n█░░░██▄░░░░░░░█\n█░░░░▀██▄░██░░█\n█░░░░░░▀███▀░░█\n▀█▄░░░░░░░░░▄█▀\n─▄█░░░▄▄▄▄█▀▀──\n─█░░▄█▀────────\n─▀▀▀▀──────────\n.<> Whatsapp <>.```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art tiktok ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```████████▀▀▀████\n████████────▀██\n████████──█▄──█\n███▀▀▀██──█████\n█▀──▄▄██──█████\n█──█████──█████\n█▄──▀▀▀──▄█████\n███▄▄▄▄▄███████\n╔══╦╦╦╗╔══╦═╦╦╗\n╚╗╔╣║═╣╚╗╔╣║║═╣\n═╚╝╚╩╩╝═╚╝╚═╩╩╝\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art gm ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```█████▀█████████████████\n█─▄▄▄▄█─▄▄─█─▄▄─█▄─▄▄▀█\n█─██▄─█─██─█─██─██─██─█\n▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▀\n \n╔═╗╔═╗\n║║╚╝║║ \n║╔╗╔╗╠══╦═╦═╗╔╦═╗╔══╗\n║║║║║║╔╗║╔╣╔╗╬╣╔╗╣╔╗║\n║║║║║║╚╝║║║║║║║║║║╚╝║\n╚╝╚╝╚╩══╩╝╚╝╚╩╩╝╚╩═╗║\n─────────────────╔═╝║\n─────────────────╚══╝```',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art ga ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█▀▀█ █▀▀█ █▀▀█ █▀▀▄ \n░█─▄▄ █──█ █──█ █──█ \n░█▄▄█ ▀▀▀▀ ▀▀▀▀ ▀▀▀─\n \n╭━━━╮╭━┳╮\n┃╭━╮┃┃╭╯╰╮ \n┃┃╱┃┣╯╰╮╭╋━━┳━┳━╮╭━━┳━━┳━╮\n┃╰━╯┣╮╭┫┃┃┃━┫╭┫╭╮┫╭╮┃╭╮┃╭╮╮\n┃╭━╮┃┃┃┃╰┫┃━┫┃┃┃┃┃╰╯┃╰╯┃┃┃┃\n╰╯╱╰╯╰╯╰━┻━━┻╯╰╯╰┻━━┻━━┻╯╰╯```',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art ge ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```┏━━┓╋╋╋╋┏┓\n┃┏━╋━┳━┳┛┃\n┃┗┓┃╋┃╋┃╋┃\n┗━━┻━┻━┻━┛\n \n▒█▀▀▀ ▀█░█▀ █▀▀ █▀▀▄ ░▀░ █▀▀▄ █▀▀▀ \n▒█▀▀▀ ░█▄█░ █▀▀ █░░█ ▀█▀ █░░█ █░▀█ \n▒█▄▄▄ ░░▀░░ ▀▀▀ ▀░░▀ ▀▀▀ ▀░░▀ ▀▀▀▀```',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art gn ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```╭━━━╮╱╱╱╱╱╱╱╭╮\n┃╭━╮┃╱╱╱╱╱╱╱┃┃\n┃┃╱╰╋━━┳━━┳━╯┃\n┃┃╭━┫╭╮┃╭╮┃╭╮┃\n┃╰┻━┃╰╯┃╰╯┃╰╯┃\n╰━━━┻━━┻━━┻━━╯\n\n╔═╗─╔╗───╔╗─╔╗\n║║╚╗║║───║║╔╝╚╗\n║╔╗╚╝╠╦══╣╚╩╗╔╝\n║║╚╗║╠╣╔╗║╔╗║║\n║║─║║║║╚╝║║║║╚╗\n╚╝─╚═╩╩═╗╠╝╚╩═╝\n──────╔═╝║\n──────╚══╝```',MessageType.text, {quoted: message.data});

     }

}));  

Alpha.addCommand({pattern: 'art a ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art b ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╦╝\n██╔══██╗\n██████╦╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art c ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art e ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n█████╗░░\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art f ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n█████╗░░\n██╔══╝░░\n██║░░░░░\n╚═╝░░░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art g ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art h ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art ı ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗\n██║\n██║\n██║\n██║\n╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art i ?(.*)', fromMe: true, dontAddCommandList: true,}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗\n╚═╝\n██╗\n██║\n██║\n██║\n██║\n╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art j ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░░░░░██╗\n░░░░░██║\n░░░░░██║\n██╗░░██║\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art k ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art l ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░░░\n██║░░░░░\n██║░░░░░\n██║░░░░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art m ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███╗░░░███╗\n████╗░████║\n██╔████╔██║\n██║╚██╔╝██║\n██║░╚═╝░██║\n╚═╝░░░░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art n ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art o ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art p ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╔╝\n██╔═══╝░\n██║░░░░░\n╚═╝░░░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art q ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██████╗░\n██╔═══██╗\n██║██╗██║\n╚██████╔╝\n░╚═██╔═╝░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art r ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╔╝\n██╔══██╗\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art s ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██████╗\n██╔════╝\n╚█████╗░\n░╚═══██╗\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art t ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```████████╗\n╚══██╔══╝\n░░░██║░░░\n░░░██║░░░\n░░░██║░░░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art u ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░██╗\n██║░░░██║\n██║░░░██║\n██║░░░██║\n╚██████╔╝\n░╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art w ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██╗░░░░░░░██╗\n░██║░░██╗░░██║\n░╚██╗████╗██╔╝\n░░████╔═████║░\n░░╚██╔╝░╚██╔╝░\n░░░╚═╝░░░╚═╝░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art v ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░██╗\n██║░░░██║\n╚██╗░██╔╝\n░╚████╔╝░\n░░╚██╔╝░░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art x ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░██╗\n╚██╗██╔╝\n░╚███╔╝░\n░██╔██╗░\n██╔╝╚██╗\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art y ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░██╗\n╚██╗░██╔╝\n░╚████╔╝░\n░░╚██╔╝░░\n░░░██║░░░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art z ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n╚════██║\n░░███╔═╝\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));


Alpha.addCommand({pattern: 'art 1 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░░███╗░░\n░████║░░\n██╔██║░░\n╚═╝██║░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 2 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n╚════██╗\n░░███╔═╝\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 3 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n╚════██╗\n░█████╔╝\n░╚═══██╗\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 4 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░░██╗██╗\n░██╔╝██║\n██╔╝░██║\n███████║\n╚════██║\n░░░░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 5 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 6 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔═══╝░\n██████╗░\n██╔══██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 7 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n╚════██║\n░░░░██╔╝\n░░░██╔╝░\n░░██╔╝░░\n░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 8 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n╚█████╔╝\n██╔══██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 9 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n╚██████║\n░╚═══██║\n░█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art cry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

if (match[1] == '') {

    var r_text = new Array ();

r_text[0] = " *๐·°(৹˃̵﹏˂̵৹)°·๐* ";
r_text[1] = " *‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚* ";
r_text[2] = " *(つ﹏<)･ﾟ｡* ";
r_text[3] = " *｡ﾟ･（>﹏<）･ﾟ｡* ";
r_text[4] = " *๐·°(৹˃̵﹏˂̵৹)°·๐* ";
r_text[5] = " *.·´¯`(>▂<)´¯`·.* ";
r_text[6] = " *｡･ﾟﾟ･(>д<)･ﾟﾟ･｡* ";
r_text[7] = " *(ToT)* ";
r_text[8] = " *(┳Д┳)* ";
r_text[9] = " *(ಥ﹏ಥ)* ";
r_text[10] = " *（；へ：）* ";
r_text[11] = " *ಥʖ̯ಥ* ";
r_text[12] = " *ಥ ͜ʖಥ* ";
r_text[13] = " *☭ ͜ʖ ☭* ";
r_text[14] = " *ཀ ʖ̯ ཀ* ";
r_text[15] = " *(;﹏;)* ";
r_text[16] = " *（πーπ）* ";
r_text[17] = " *(⋟﹏⋞)* ";
r_text[18] = " *（>﹏<）* ";
r_text[19] = " *(つ﹏⊂)* ";
r_text[20] = " *༼☯﹏☯༽* ";
r_text[21] = " *(ノ﹏ヽ)* ";
r_text[22] = " *(╥_╥)* ";
r_text[23] = " *(T⌓T)* ";
r_text[24] = " *(༎ຶ⌑༎ຶ)* ";
r_text[25] = " *(☍﹏⁰)｡* ";
r_text[26] = " *(இ﹏இ`｡)* ";
r_text[27] = " *༼ ༎ຶ ෴ ༎ຶ༽* ";
r_text[28] = " *ᕕ( ཀ ʖ̯ ཀ)ᕗ* ";
r_text[29] = " *( ɵ̥̥ ˑ̫ ɵ̥̥)* ";
r_text[30] = " *(个_个)* ";
r_text[31] = " *( ͒˃̩̩⌂˂̩̩ ͒)* ";
r_text[32] = " *╥﹏╥* ";
r_text[33] = " *༼ಢ_ಢ༽* ";

var i = Math.floor(34*Math.random())

await message.client.sendMessage(message.jid,`${r_text[i]}`);

    }

})); 

    
}

else if (Config.WORKTYPE == 'public') {


Alpha.addCommand({pattern: 'art ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```🔎 Need Word!```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art pack ?(.*)', fromMe: false, desc: ARTP_DESC, dontAddCommandList: false}, (async (message, match) => {

    if (match[1] == '') {
  
    await message.client.sendMessage(message.jid,'*🎨 CMND -  .art joke*\n *🎨 CMND -  .art notbad*\n *🎨 CMND -  .art smile*\n *🎨 CMND -  .art wlcm*\n *🎨 CMND -  .art heart*\n *🎨 CMND -  .art logo*\n *🎨 CMND -  .art skull*\n *🎨 CMND -  .art gun*\n *🎨 CMND -  .art shagy*\n *🎨 CMND -  .art bad*\n *🎨 CMND -  .art santa*\n *🎨 CMND -  .art hacker*\n *🎨 CMND -  .art fail*\n *🎨 CMND -  .art warn*\n *🎨 CMND -  .art hello*\n *🎨 CMND -  .art cat* \n *🎨 CMND -  .art human*\n *🎨 CMND -  .art run* \n *🎨 CMND -  .art bed*\n *🎨 CMND -  .art hello*\n *🎨 CMND -  .art love* \n *🎨 CMND -  .art loves* \n *🎨 CMND -  .art pig*\n *🎨 CMND -  .art dog* \n *🎨 CMND -  .art music* \n *🎨 CMND -  .art lock* \n *🎨 CMND -  .art plane* \n *🎨 CMND -  .art watch*\n *🎨 CMND -  .art happy*\n *🎨 CMND -  .art warn*\n *🎨 CMND -  .art del*\n *🎨 CMND -  .art mk*\n *🎨 CMND -  .art truck*\n *🎨 CMND -  .art game*\n *🎨 CMND -  .art ship*\n *🎨 CMND -  .art duck*\n *🎨 CMND -  .art ant*\n *🎨 CMND -  .art drink*\n *🎨 CMND -  .art what*\n *🎨 CMND -  .art confused*\n *🎨 CMND -  .art batterylow*\n *🎨 CMND -  .art wtf*\n *🎨 CMND -  .art smiles*\n *🎨 CMND -  .art hbd*\n *🎨 CMND -  .art 99*\n *🎨 CMND -  .art vup*\n *🎨 CMND -  .art lock*\n *🎨 CMND -  .art eat*\n *🎨 CMND -  .art ghost*\n *🎨 CMND -  .art kidding*\n *🎨 CMND -  .art hi*\n *🎨 CMND -  .art up*\n *🎨 CMND -  .art like*\n *🎨 CMND -  .art iphone*\n *🎨 CMND -  .art wtzp*\n *🎨 CMND -  .art tiktok*\n*🎨 CMND -  .art gm*\n*🎨 CMND -  .art gn*\n*🎨 CMND -  .art ga*\n*🎨 CMND -  .art ge*\n*🎨 CMND -  .art a - z*\n*🎨 CMND -  .art 1 - 9*',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art joke ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░░░░░░░███████████████░░░░░░░░\n░░░░░█████████████████████░░░░░\n░░░░████████████████████████░░░\n░░░██████████████████████████░░\n░░█████████████████████████████\n░░███████████▀░░░░░░░░████████\n░░███████████░░░░░░░░░░░░░░░███\n░████████████░░░░░░░░░░░░░░░░██\n░█░░███████░░░░░░░░░░░▄▄░░░░░██\n█░░░░█████░░░░░░▄███████░░██░░█\n█░░█░░░███░░░░░██▀▀░░░░░░░░██░█\n█░░░█░░░░░░░░░░░░▄██▄░░░░░░░███\n█░░▄█░░░░░░░░░░░░░░░░░░█▀▀█▄░██\n█░░░░░░░░░░░░░░░░░░░░░░█░░░░██░\n░███░░░░░░░░░░░░░░░░░░░█░░░░█░░\n░░█░█░░░░░░░█░░░░░██▀▄░▄██░░░█░\n░░█░█░░░░░░█░░░░░░░░░░░░░░░░░█░\n░░░██░░░░░░█░░░░▄▄▄▄▄▄░░░░░░█░░\n░░░██░░░░░░░█░░█▄▄▄▄░▀▀██░░█░░░\n░░░██░░░░░░░█░░▀████████░░█░░░░\n░░█░░█░░░░░░░█░░▀▄▄▄▄██░░█░░░░░\n░░█░░░█░░░░░░░█░░░░░░░░░█░░░░░░\n░█░░░░░█░░░░░░░░░░░░░░░░█░░░░░░\n░░░░░░░░█░░░░░░█░░░░░░░░█░░░░░░\n░░░░░░░░░░░░░░░░████████░░░░░░░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art notbad ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░█▀░░░░░░░░░░░▀▀███████░░░░\n░░█▌░░░░░░░░░░░░░░░▀██████░░░\n░█▌░░░░░░░░░░░░░░░░███████▌░░\n░█░░░░░░░░░░░░░░░░░████████░░\n▐▌░░░░░░░░░░░░░░░░░▀██████▌░░\n░▌▄███▌░░░░▀████▄░░░░▀████▌░░\n▐▀▀▄█▄░▌░░░▄██▄▄▄▀░░░░████▄▄░\n▐░▀░░═▐░░░░░░══░░▀░░░░▐▀░▄▀▌▌\n▐░░░░░▌░░░░░░░░░░░░░░░▀░▀░░▌▌\n▐░░░▄▀░░░▀░▌░░░░░░░░░░░░▌█░▌▌\n░▌░░▌░▄▄▄▄░░░▌░░░░░░░░▐░░▀▐░░\n░█░▐▄██████▄░▐░░░░░░░░█▀▄▄▀░░\n░▐░▌▌░░░░░░▀▀▄▐░░░░░░█▌░░░░░░\n░░█░░▄▀▀▀▀▄░▄═╝▄░░░▄▀░▌░░░░░░\n░░░▌▐░░░░░░▌░▀▀░░▄▀░░▐░░░░░░░\n░░░▀▄░░░░░░░░░▄▀▀░░░░█░░░░░░░\n░░░▄█▄▄▄▄▄▄▄▀▀░░░░░░░▌▌░░░░░░\n░░▄▀▌▀▌░░░░░░░░░░░░░▄▀▀▄░░░░░\n▄▀░░▌░▀▄░░░░░░░░░░▄▀░░▌░▀▄░░░\n░░░░▌█▄▄▀▄░░░░░░▄▀░░░░▌░░░▌▄▄\n░░░▄▐██████▄▄░▄▀░░▄▄▄▄▌░░░░▄░\n░░▄▌████████▄▄▄███████▌░░░░░▄\n░▄▀░██████████████████▌▀▄░░░░\n▀░░░█████▀▀░░░▀███████░░░▀▄░░\n░░░░▐█▀░░░▐░░░░░▀████▌░░░░▀▄░\n░░░░░░▌░░░▐░░░░▐░░▀▀█░░░░░░░▀\n░░░░░░▐░░░░▌░░░▐░░░░░▌░░░░░░░\n░╔╗║░╔═╗░═╦═░░░░░╔╗░░╔═╗░╦═╗░\n░║║║░║░║░░║░░░░░░╠╩╗░╠═╣░║░║░\n░║╚╝░╚═╝░░║░░░░░░╚═╝░║░║░╩═╝░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art smile ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░███████░░░░░░░░░░░\n░░░░░░░████░░░░░░░████░░░░░░░\n░░░░░██░░░░░░░░░░░░░░░██░░░░░\n░░░██░░░░░░░░░░░░░░░░░░░██░░░\n░░█░░░░░░░░░░░░░░░░░░░░░░░█░░\n░█░░████░░░░░░░░██████░░░░░█░\n█░░█░░░██░░░░░░█░░░░███░░░░░█\n█░█░░░░░░█░░░░░█░░░░░░░█░░░░█\n█░█████████░░░░█████████░░░░█\n█░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░████████████████████░░░░█\n░█░░░█▓▓▓▓▓▓▓▓█████▓▓▓█░░░░█░\n░█░░░░█▓▓▓▓▓██░░░░██▓██░░░░█░\n░░█░░░░██▓▓█░░░░░░░▒██░░░░█░░\n░░░██░░░░██░░░░░░▒██░░░░██░░░\n░░░░░██░░░░███████░░░░██░░░░░\n░░░░░░░███░░░░░░░░░███░░░░░░░\n░░░░░░░░░░█████████░░░░░░░░░░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art wlcm ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'````───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───\n───█▒▒░░░░░░░░░▒▒█───\n────█░░█░░░░░█░░█────\n─▄▄──█░░░▀█▀░░░█──▄▄─\n█░░█─▀▄░░░░░░░▄▀─█░░█\n█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█\n█░░║║║╠─║─║─║║║║║╠─░░█\n█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█\n█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art heart ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```_░▒███████\n░██▓▒░░▒▓██\n██▓▒░__░▒▓██___██████\n██▓▒░____░▓███▓__░▒▓██\n██▓▒░___░▓██▓_____░▒▓██\n██▓▒░_______________░▒▓██\n██▓▒░______________░▒▓██\n██▓▒░__________░▒▓██\n_██▓▒░________░▒▓██\n_██▓▒░________░▒▓██\n_██▓▒░_____░▒▓██\n__██▓▒░__░▒▓██\n___█▓▒░░▒▓██\n_____░▒▓██\n___░▒▓██\n_░▒▓██```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art logo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```───────────▄▄▄▄▄▄▄▄▄───────────\n────────▄█████████████▄────────\n█████──█████████████████──█████\n▐████▌─▀███▄───────▄███▀─▐████▌\n─█████▄──▀███▄───▄███▀──▄█████─\n─▐██▀███▄──▀███▄███▀──▄███▀██▌─\n──███▄▀███▄──▀███▀──▄███▀▄███──\n──▐█▄▀█▄▀███─▄─▀─▄─███▀▄█▀▄█▌──\n───███▄▀█▄██─██▄██─██▄█▀▄███───\n────▀███▄▀██─█████─██▀▄███▀────\n───█▄─▀█████─█████─█████▀─▄█───\n───███────────███────────███───\n───███▄────▄█─███─█▄────▄███───\n───█████─▄███─███─███▄─█████───\n───█████─████─███─████─█████───\n───█████─████─███─████─█████───\n───█████─████─███─████─█████───\n───█████─████▄▄▄▄▄████─█████───\n────▀███─█████████████─███▀────\n──────▀█─███─▄▄▄▄▄─███─█▀──────\n─────────▀█▌▐█████▌▐█▀─────────\n────────────███████────────────```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art skull ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```███████████████████████████\n███████▀▀▀░░░░░░░▀▀▀███████\n████▀░░░░░░░░░░░░░░░░░▀████\n███│░░░░░░░░░░░░░░░░░░░│███\n██▌│░░░░░░░░░░░░░░░░░░░│▐██\n██░└┐░░░░░░░░░░░░░░░░░┌┘░██\n██░░└┐░░░░░░░░░░░░░░░┌┘░░██\n██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██\n██▌░│██████▌░░░▐██████│░▐██\n███░│▐███▀▀░░▄░░▀▀███▌│░███\n██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██\n██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██\n████▄─┘██▌░░░░░░░▐██└─▄████\n█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████\n████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████\n█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████\n███████▄░░░░░░░░░░░▄███████\n██████████▄▄▄▄▄▄▄██████████\n███████████████████████████```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art gun ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░▐█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▄☆\n░███████████████████████\n░▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓◤\n╬▀░▐▓▓▓▓▓▓▌▀█░░░█▀░\n▒░░▓▓▓▓▓▓█▄▄▄▄▄█▀╬░\n░░█▓▓▓▓▓▌░▒▒▒▒▒▒▒▒▒\n░▐█▓▓▓▓▓░░▒▒▒▒▒▒▒▒▒\n░▐██████▌╬░▒▒▒▒▒▒▒▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art shaggy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
 
      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░░░░░░▄▄█▀▀██▄▄░░░░░░░\n░░░░░░░░░░░░░▄█▀▀░░░░░░░▀█░░░░░░\n░░░░░░░░░░░▄▀░░░░░░░░░░░░░█░░░░░\n░░░░░░░░░▄█░░░░░░░░░░░░░░░█░░░░░\n░░░░░░░██▀░░░░░░░▄▄▄░░▄░█▄█▄░░░░\n░░░░░▄▀░░░░░░░░░░████░█▄██░▀▄░░░\n░░░░█▀░░░░░░░░▄▄██▀░░█████░██░░░\n░░░█▀░░░░░░░░░▀█░▀█▀█▀▀▄██▄█▀░░░\n░░░██░░░░░░░░░░█░░█░█░░▀▀▄█▀░░░░\n░░░░█░░░░░█░░░▀█░░░░▄░░░░░▄█░░░░\n░░░░▀█░░░░███▄░█░░░░░░▄▄▄▄█▀█▄░░\n░░░░░▀██░░█▄▀▀██░░░░░░░░▄▄█░░▀▄░\n░░░░░░▀▀█▄░▀▄▄░▄░░░░░░░███▀░░▄██\n░░░░░░░░░▀▀▀███▀█▄░░░░░█▀░▀░░░▀█\n░░░░░░░░░░░░▄▀░░░▀█▄░░░░░▄▄░░▄▄░\n░░░▄▄▄▀▀▀▀▀█▀░░░░░█▄▀▄▄▄▄▄▄█▀▀░░\n░▄█░░░▄██▀░░░░░░░░░█▄░░░░░░░░░░░\n█▀▀░▄█░░░░░░░░░░░░░░▀▀█▄░░░░░░░░\n█░░░█░░░░░░░░░░░░░░░░░░█▄░░░░░░░```',MessageType.text, {quoted: message.data});

       }

}));


Alpha.addCommand({pattern: 'art bad ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░█████████████\n░░░░░░░░░███░███░░░░░░██\n███░░░░░██░░░░██░██████████\n████████░░░░░░████░░░░░░░██\n████░░░░░░░░░░██░░██████████\n████░░░░░░░░░░░███░░░░░░░░░██\n████░░░░░░░░░░░██░░██████████\n████░░░░░░░░░░░░████░░░░░░░░█\n████░░░░░░░░░░░░░███░░████░░█\n█████████░░░░░░░░░░████░░░░░█\n███░░░░░██░░░░░░░░░░░░░█████\n░░░░░░░░░███░░░░░░░██████\n░░░░░░░░░░░██░░░░░░██\n░░░░░░░░░░░░███░░░░░██\n░░░░░░░░░░░░░░██░░░░██\n░░░░░░░░░░░░░░░███░░░██\n░░░░░░░░░░░░░░░░░██░░░█\n░░░░░░░░░░░░░░░░░░█░░░█\n░░░░░░░░░░░░░░░░░░██░██\n░░░░░░░░░░░░░░░░░░░███```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art santa ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  
      await message.client.sendMessage(message.jid,'```______(█)\n___██████\n_ ████████\n_███████████\n_ (░░░░░░░)░░░)\n_(░(░█░░█░)░░░)\n (░░(░░●░░░)░░░)\n (░░░░◡░░)░░░░)\n_██(░░░░░░░░░░)██\n_███(░░░░░░░░░)███\n████ ██(░░░)██ ████\n████ █████████ ███\n████ ████░████ ███\n(░░)_ ▓▓▓▓▌▓▐▓▓▓_(░░)\n(██) ███████████ (██)\n___█████░█████_▓▓▓/\n_█████-,█████▓▓▓▓▓)\n_█████-,█████▓▓▓▓▓)\n_(░░░░░░)(░░░░░) ▓▓▓▓)\n____(███)_(███)▓▓▓▓▓▓)\n____ (████)_(████)▓▓▓▓▓)```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hacker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```███████████████████████████████\n████╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬████\n██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬███████╬╬╬╬╬╬╬╬╬███████╬╬╬█\n█╬╬██╬╬╬╬███╬╬╬╬╬╬╬███╬╬╬╬██╬╬█\n█╬██╬╬╬╬╬╬╬██╬╬╬╬╬██╬╬╬╬╬╬╬██╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬█████╬╬╬╬╬╬╬╬╬╬╬█████╬╬╬╬█\n█╬╬█████████╬╬╬╬╬╬╬█████████╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬▓▓▓▓╬╬╬╬╬╬╬█╬╬╬╬╬╬╬▓▓▓▓╬╬╬█\n█╬╬▓▓▓▓▓▓╬╬█╬╬╬█╬╬╬█╬╬▓▓▓▓▓▓╬╬█\n█╬╬╬▓▓▓▓╬╬██╬╬╬█╬╬╬██╬╬▓▓▓▓╬╬╬█\n█╬╬╬╬╬╬╬╬██╬╬╬╬█╬╬╬╬██╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬████╬╬╬╬███╬╬╬╬████╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬╬╬╬╬╬█\n██╬╬█╬╬╬╬╬╬╬╬█████╬╬╬╬╬╬╬╬█╬╬██\n██╬╬██╬╬╬╬╬╬███████╬╬╬╬╬╬██╬╬██\n██╬╬▓███╬╬╬████╬████╬╬╬███▓╬╬██\n███╬╬▓▓███████╬╬╬███████▓▓╬╬███\n███╬╬╬╬▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬███\n████╬╬╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬╬╬████\n█████╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬█████\n██████╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬██████\n███████╬╬╬╬╬╬╬███╬╬╬╬╬╬╬███████\n████████╬╬╬╬╬╬███╬╬╬╬╬╬████████\n█████████╬╬╬╬╬███╬╬╬╬╬█████████\n███████████╬╬╬╬█╬╬╬╬███████████\n███████████████████████████████```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art fail ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▄██████████████▄▐█▄▄▄▄█▌\n██████▌▄▌▄▐▐▌███▌▀▀██▀▀\n████▄█▌▄▌▄▐▐▌▀███▄▄█▌\n▄▄▄▄▄██████████████▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art cat ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art human ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```───────────────▄▄───▐█\n───▄▄▄───▄██▄──█▀───█─▄\n─▄██▀█▌─██▄▄──▐█▀▄─▐█▀\n▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌\n▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art run ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```────██──────▀▀▀██\n──▄▀█▄▄▄─────▄▀█▄▄▄\n▄▀──█▄▄──────█─█▄▄\n─▄▄▄▀──▀▄───▄▄▄▀──▀▄\n─▀───────▀▀─▀───────▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art bad ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```O────────────────O\n█▓██▄────────────█\n█▓▓░▀▄▀░░░░░░░░░░█\n█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█────────────────█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hello ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔┓┏╦━━╦┓╔┓╔━━╗╔╗\n║┗┛║┗━╣┃║┃║╯╰║║║\n║┏┓║┏━╣┗╣┗╣╰╯║╠╣\n╚┛┗╩━━╩━╩━╩━━╝╚╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art love ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```████████████████████████\n█▄─▄███─▄▄─█▄─█─▄█▄─▄▄─█\n██─██▀█─██─██─█─███─▄█▀█\n▀▄▄▄▄▄▀▄▄▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art loves ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```█───▄▀▀▀▀▄─▐█▌▐█▌▐██\n█──▐▄▄────▌─█▌▐█─▐▌─\n█──▐█▀█─▀─▌─█▌▐█─▐██\n█──▐████▄▄▌─▐▌▐▌─▐▌─\n███─▀████▀───██──▐██```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art pig ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▂╱▔▔╲╱▔▔▔▔╲╱▔▔╲▂\n╲┈▔╲┊╭╮┈┈╭╮┊╱▔┈╱\n┊▔╲╱▏┈╱▔▔╲┈▕╲╱▔┊\n┊┊┊┃┈┈▏┃┃▕┈┈┃┊┊┊\n┊┊┊▏╲┈╲▂▂╱┈╱▕┊┊┊```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art dog ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╥━━━━━━━━╭━━╮━━┳\n╢╭╮╭━━━━━┫┃▋▋━▅┣\n╢┃╰┫┈┈┈┈┈┃┃┈┈╰┫┣\n╢╰━┫┈┈┈┈┈╰╯╰┳━╯┣\n╢┊┊┃┏┳┳━━┓┏┳┫┊┊┣\n╨━━┗┛┗┛━━┗┛┗┛━━┻```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art music ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```────█▀█▄▄▄▄─────██▄\n────█▀▄▄▄▄█─────█▀▀█\n─▄▄▄█─────█──▄▄▄█\n██▀▄█─▄██▀█─███▀█\n─▀▀▀──▀█▄█▀─▀█▄█▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art lock ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──▄▀▀▀▄───────────────\n──█───█───────────────\n─███████─────────▄▀▀▄─\n░██─▀─██░░█▀█▀▀▀▀█░░█░\n░███▄███░░▀░▀░░░░░▀▀░░``` \n \n \n___________________\n ╮╭┻┻╮╭┻┻╮╭▕╮╲\n▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏\n▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏\n▕╰━━━┓┈┈┈╭╮▕╭╮▏\n▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art plane ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░░░░░░█\n░░░░░░░░▄▄█▄▄\n░░░░▀▀▀██▀▀▀██▀▀▀\n▄▄▄▄▄▄▄███████▄▄▄▄▄▄▄\n░░█▄█░░▀██▄██▀░░█▄█```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art watch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╦╦╦╦╦╦▄▀▀▀▀▀▀▄╦╦╦╦╦╦\n▒▓▒▓▒█╗░░▐░░░╔█▒▓▒▓▒\n▒▓▒▓▒█║░░▐▄▄░║█▒▓▒▓▒\n▒▓▒▓▒█╝░░░░░░╚█▒▓▒▓▒\n╩╩╩╩╩╩▀▄▄▄▄▄▄▀╩╩╩╩╩╩```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art tv ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░▀▄░░▄▀\n▄▄▄██▄▄▄▄▄░▀█▀▐░▌\n█▒░▒░▒░█▀█░░█░▐░▌\n█░▒░▒░▒█▀█░░█░░█\n█▄▄▄▄▄▄███══════```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art happy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔══╗░░░░╔╦╗░░╔═════╗\n║╚═╬════╬╣╠═╗║░▀░▀░║\n╠═╗║╔╗╔╗║║║╩╣║╚═══╝║\n╚══╩╝╚╝╚╩╩╩═╝╚═════╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art apple ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```┊┊┊┊┊┊┊╱▏┊┊┊┊┊┊┊\n┊┊┊┊┊┊▕╱┊┊┊┊┊┊┊┊\n┊┊┊╱▔▔╲┊╱▔▔╲┊┊┊┊\n┊┊▕┈┈┈┈▔┈┈┈╱┊┊┊┊\n┊┊▕┈┈┈┈┈┈┈┈╲┊┊┊┊\n┊┊┊╲┈┈┈┈┈┈┈╱┊┊┊┊\n┊┊┊┊╲▂▂▂▂▂╱┊┊┊┊┊```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art mug ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```█▄▀▄▀▄█\n█░▀░▀░█▄\n█░▀░░░█─█\n█░░░▀░█▄▀\n▀▀▀▀▀▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art snake ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▄▄▀█▄───▄───────▄\n▀▀▀██──███─────███\n░▄██▀░█████░░░█████░░\n███▀▄███░███░███░███░▄\n▀█████▀░░░▀███▀░░░▀██▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art paris ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░█\n░░░░▄█▄░░╔╗╔╗╔╗─╦╔╗\n░░░▄█▀█▄░╠╝╠╣╠╩╗║╚╗\n░░▄█▄▄▄█▄╚═╩╩╩─╩╩╚╝\n▄██▀░░░▀██▄```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art warn ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╭╮╭╮╭┳━━━┳━━━┳━╮╱╭┳━━┳━╮╱╭┳━━━╮╭┳┳┳╮\n┃┃┃┃┃┃╭━╮┃╭━╮┃┃╰╮┃┣┫┣┫┃╰╮┃┃╭━╮┃┃┃┃┃┃\n┃┃┃┃┃┃┃╱┃┃╰━╯┃╭╮╰╯┃┃┃┃╭╮╰╯┃┃╱╰╯┃┃┃┃┃\n┃╰╯╰╯┃╰━╯┃╭╮╭┫┃╰╮┃┃┃┃┃┃╰╮┃┃┃╭━╮╰┻┻┻╯\n╰╮╭╮╭┫╭━╮┃┃┃╰┫┃╱┃┃┣┫┣┫┃╱┃┃┃╰┻━┃╭┳┳┳╮\n╱╰╯╰╯╰╯╱╰┻╯╰━┻╯╱╰━┻━━┻╯╱╰━┻━━━╯╰┻┻┻╯```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art del ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▒█▀▀▄ █▀▀ █░░ █▀▀ ▀▀█▀▀ █▀▀ \n▒█░▒█ █▀▀ █░░ █▀▀ ░░█░░ █▀▀ \n▒█▄▄▀ ▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art mk ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```███╗░░░███╗ ██╗░░██╗\n████╗░████║ ██║░██╔╝\n██╔████╔██║ █████═╝░\n██║╚██╔╝██║ ██╔═██╗░\n██║░╚═╝░██║ ██║░╚██╗\n╚═╝░░░░░╚═╝ ╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art truck ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▌\n───▄▄██▌█░░░░░░░░░░░░▐\n▄▄▄▌▐██▌█░░░░░░░░░░░░▐\n███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▌\n▀❍▀▀▀▀▀▀▀❍❍▀▀▀▀▀▀❍❍▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art game ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```─▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄\n█░░░█░░░░░░░░░░▄▄░██░█\n█░▀▀█▀▀░▄▀░▄▀░░▀▀░▄▄░█\n█░░░▀░░░▄▄▄▄▄░░██░▀▀░█\n─▀▄▄▄▄▄▀─────▀▄▄▄▄▄▄▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art ship ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```───────▓▓╬▓\n──────▓▓▓║▓▓\n─────▓▓▓▓╬▓▓▓▓\n░░▄░▓▓▓▓▓║▓▓▓▓▓░░░░░\n░▀████████████████▀░░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art duck ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──────────▄██▄▄\n─▄▄█████▄─██▀\n▀█████████▄██▄\n▒▒▀██████████▀▒\n▒▒▒▒▒█▄█▄▄▒▒▒▒▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art ant ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░╚══╗░╔═╔════╝\n╚═╦═╗╠═╩═╩╗╔═╦═╗\n░░║▒╠╣▒▒▒▒╠╣▒║▒║\n╔═╩═╝╠═╦═╦╝╚═╩═╝░░╔══╝░╚═╚════╗```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art drink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░▓███▓\n░░░░▓█████▓\n░░░░▓█████▓\n░░░░░▓███▓\n░░░░ *;;;;;;;;;*\n░░░░* ;;;;;;;;;*\n░░░ * ;;;;;;;;;;;*\n░░░* ;;;;;;;;;;;;*\n░░░░▓█████▓\n░░░░▓█████▓\n░░░░▓█████▓\n░░░▓███████▓\n░░▓█████████▓\n░▓███████████▓\n▓█████████████▓\n▓███░░░░░░░▀▀▀▓\n▓███░░░░████████████\n▓███░░░░█▒▒▒▒▒▒▒▒▒▒█\n▓███░░░░░█▒▒▒▒▒▒▒▒█\n▓███░░░░░░█▒▒▒▒▒▒█\n▓███░░░░░░░█▒▒▒▒█\n▓███░░░░░░░░████\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n░▓██░░░░░░░▓████▓\n░▓████▓▓█████████▓```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art what ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```┌┐┌┐┌┐┌┐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒┌┐▒┌───┐\n││││││││▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒┌┘└┐│┌─┐│\n│││││││└─┬──┬──┬──┬──┬──┼┐┌┘└┘┌┘│\n│└┘└┘││┌┐│┌┐│┌┐│┌┐│┌┐│┌┐│││▒▒▒│┌┘\n└┐┌┐┌┘││││┌┐│┌┐│┌┐│┌┐│┌┐││└┐▒▒┌┐▒\n▒└┘└┘▒└┘└┴┘└┴┘└┴┘└┴┘└┴┘└┘└─┘▒▒└┘▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art confused ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔═╗▒▒▒▒▒▒▒╔═╗▒▒▒╔═╗▒▒▒▒╔╗\n║╔╝╔═╗╔═╦╗║═╣╔╦╗║═╣╔═╗╔╝║\n║╚╗║╬║║║║║║╔╝║║║╠═║║╩╣║╬║\n╚═╝╚═╝╚╩═╝╚╝▒╚═╝╚═╝╚═╝╚═╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art batterylow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╔════════════════════╗\n║║██░░░░░░░░░░░░░░░░░░╚╗\n║║██░░░░░Battery Low ░░░░░\n║║██░░░░░░░░░░░░░░░░░░╔╝\n╝════════════════════╝```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art wtf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```┏┓┏┓┏┓┏━━━┓┏━━━┓\n┃┃┃┃┃┃┗┓╱┏┛┃╱┏━┛\n┃┗┛┗┛┃┈┃╱┃┈┃╱┗┓\n┃╱╱╱╱┃┈┃╱┃┈┃╱┏┛\n┗━━━━┛◯┗━┛◯┗━┛◯```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art smiles ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```╲╲╭━━━━━━━╮╱╱\n╲╭╯╭━╮┈╭━╮╰╮╱\n╲┃┈┃┈▊┈┃┈▊┈┃╱\n╲┃┈┗━┛┈┗━┛┈┃╱\n╱┃┈┏━━━━━┓┈┃╲\n╱┃┈┃┈┈╭━╮┃┈┃╲\n╱╰╮╰━━┻━┻╯╭╯╲```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hbd ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```Wait For Next Update```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art 99 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```██████████████]99%```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art vup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```Music♩♪♫♬ Volume: ▁ ▂ ▃ ▄ ▅ ▆ █ 100 %```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art eatyou ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```█████████\n█▄█████▄█\n█▼▼▼▼▼\n█\n I will eat you!\n█▲▲▲▲▲\n█████████\n ██ ██```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art ghost ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\n▒▒█▒▒▒▄██████████▄▒▒▒▒\n▒█▐▒▒▒████████████▒▒▒▒\n▒▌▐▒▒██▄▀██████▀▄██▒▒▒\n▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\n▐┼▐▒▒██████████████▒▒▒\n▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\n▒▒█████──────────▐███▌\n▒▒█▀▀██▄█─▄───▐─▄███▀▒\n▒▒█▒▒███████▄██████▒▒▒\n▒▒▒▒▒██████████████▒▒▒\n▒▒▒▒▒██████████████▒▒▒\n▒▒▒▒▒█████████▐▌██▌▒▒▒\n▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art kidding ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░▄▀░░░░░░░░░░░░░░░▀▀▄▄░░░░░\n░░▄▀░░░░░░░░░░░░░░░░░░░░▀▄░░░\n░▄▀░░░░░░░░░░░░░░░░░░░░░░░█░░\n░█░░░░░░░░░░░░░░░░░░░░░░░░░█░\n▐░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░░▀▀▄▄▄▄░░░▄▌░░░░░░░░░░░░▐\n▌░░░░░▌░░▀▀█▀▀░░░▄▄░░░░░░░▌░▐\n▌░░░░░░▀▀▀▀░░░░░░▌░▀██▄▄▄▀░░▐\n▌░░░░░░░░░░░░░░░░░▀▄▄▄▄▀░░░▄▌\n▐░░░░▐░░░░░░░░░░░░░░░░░░░░▄▀░\n░█░░░▌░░▌▀▀▀▄▄▄▄░░░░░░░░░▄▀░░\n░░█░░▀░░░░░░░░░░▀▌░░▌░░░█░░░░\n░░░▀▄░░░░░░░░░░░░░▄▀░░▄▀░░░░░\n░░░░░▀▄▄▄░░░░░░░░░▄▄▀▀░░░░░░░\n░░░░░░░░▐▌▀▀▀▀▀▀▀▀░░░░░░░░░░░\n░░░░░░░░█░░░░░░░░░░░░░░░░░░░░\n░░╔═╗╔═╗╔═╗░░░░░║░║╔═╗║░║░░░░\n░░╠═╣╠╦╝╠╣░░░░░░╚╦╝║░║║░║░░░░\n░░║░║║╚═╚═╝░░░░░░║░╚═╝╚═╝░░░░\n║╔═░╦░╦═╗╦═╗╦╔╗║╔═╗░░╔╦╗╔═╗╔╗\n╠╩╗░║░║░║║░║║║║║║═╗░░║║║╠╣░╔╝\n║░╚░╩░╩═╝╩═╝╩║╚╝╚═╝░░║║║╚═╝▄░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art hi ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░░░░░░░░░▄▐░░░░\n░HI!!░░▄▄▄░░▄██▄░░░\n░░░░░░▐▀█▀▌░░░░▀█▄░\n░░░░░░▐█▄█▌░░░░░░▀█▄\n░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀\n░░░░░▄▄▄██▀▀▀▀░░░░░\n░░░░█▀▄▄▄█░▀▀░░░░░░\n░░░░▌░▄▄▄▐▌▀▀▀░░░░░\n░▄░▐░░░▄▄░█░▀▀░░░░░\n░▀█▌░░░▄░▀█▀░▀░░░░░\n░░░░░░░░▄▄▐▌▄▄░░░░░\n░░░░░░░░▀███▀█▄░░░░\n░░░░░░░▐▌▀▄▀▄▀▐░░░░\n░░░░░░░▐▀░░░░░░▐▌░░\n░░░░░░░█░░░░░░░░█░░\n░░░░░░▐▌░░░░░░░░░█░```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art up ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```─────▄▀▀▄──────────\n─────█──█──────────\n─────█──█▄▄────────\n─────█──█──█▀▀▄▄───\n─▄▄▄─█──█──█──█─▀▄─\n─█──▀█────────▀──█─\n──▀▄─█───────────█─\n───▀▄───────────█──\n────▀▄──────────█──\n─────▀▄────────█───\n──────█▄▄▄▄▄▄▄▄█───```',MessageType.text, {quoted: message.data});

       }

}));


Alpha.addCommand({pattern: 'art like ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```░░░░░░▄▄\n░░░░░█░░█\n▄▄▄▄▄█░░█▄▄▄\n▓▓▓▓█░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n███▀▀▀███████```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art iphone ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```─────────▄────\n───────▐█▌────\n───▄▄▄─▀─▄▄▄──\n─▄█████▄█████▄\n▐███████████▀─\n▐██████████───\n─███████████▄─\n──███████████▀\n───▀██▀─▀██▀──\n──────────────\n▀▐▀█▐────▄──▄▄\n█▐▀▀▐█▐█▌▐█▌▌█\n█▐──▐▐▐▄▌▐▐▌█▄\n```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art wtzp ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```──▄▄█▀▀▀▀▀█▄▄──\n▄█▀░░▄▄░░░░░▀█▄\n█░░░███░░░░░░░█\n█░░░██▄░░░░░░░█\n█░░░░▀██▄░██░░█\n█░░░░░░▀███▀░░█\n▀█▄░░░░░░░░░▄█▀\n─▄█░░░▄▄▄▄█▀▀──\n─█░░▄█▀────────\n─▀▀▀▀──────────\n.<> Whatsapp <>.```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art tiktok ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {
  

      await message.client.sendMessage(message.jid,'```████████▀▀▀████\n████████────▀██\n████████──█▄──█\n███▀▀▀██──█████\n█▀──▄▄██──█████\n█──█████──█████\n█▄──▀▀▀──▄█████\n███▄▄▄▄▄███████\n╔══╦╦╦╗╔══╦═╦╦╗\n╚╗╔╣║═╣╚╗╔╣║║═╣\n═╚╝╚╩╩╝═╚╝╚═╩╩╝\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀```',MessageType.text, {quoted: message.data});

       }

}));

Alpha.addCommand({pattern: 'art gm ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```█████▀█████████████████\n█─▄▄▄▄█─▄▄─█─▄▄─█▄─▄▄▀█\n█─██▄─█─██─█─██─██─██─█\n▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▀\n \n╔═╗╔═╗\n║║╚╝║║ \n║╔╗╔╗╠══╦═╦═╗╔╦═╗╔══╗\n║║║║║║╔╗║╔╣╔╗╬╣╔╗╣╔╗║\n║║║║║║╚╝║║║║║║║║║║╚╝║\n╚╝╚╝╚╩══╩╝╚╝╚╩╩╝╚╩═╗║\n─────────────────╔═╝║\n─────────────────╚══╝```',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art ga ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█▀▀█ █▀▀█ █▀▀█ █▀▀▄ \n░█─▄▄ █──█ █──█ █──█ \n░█▄▄█ ▀▀▀▀ ▀▀▀▀ ▀▀▀─\n \n╭━━━╮╭━┳╮\n┃╭━╮┃┃╭╯╰╮ \n┃┃╱┃┣╯╰╮╭╋━━┳━┳━╮╭━━┳━━┳━╮\n┃╰━╯┣╮╭┫┃┃┃━┫╭┫╭╮┫╭╮┃╭╮┃╭╮╮\n┃╭━╮┃┃┃┃╰┫┃━┫┃┃┃┃┃╰╯┃╰╯┃┃┃┃\n╰╯╱╰╯╰╯╰━┻━━┻╯╰╯╰┻━━┻━━┻╯╰╯```',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art ge ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```┏━━┓╋╋╋╋┏┓\n┃┏━╋━┳━┳┛┃\n┃┗┓┃╋┃╋┃╋┃\n┗━━┻━┻━┻━┛\n \n▒█▀▀▀ ▀█░█▀ █▀▀ █▀▀▄ ░▀░ █▀▀▄ █▀▀▀ \n▒█▀▀▀ ░█▄█░ █▀▀ █░░█ ▀█▀ █░░█ █░▀█ \n▒█▄▄▄ ░░▀░░ ▀▀▀ ▀░░▀ ▀▀▀ ▀░░▀ ▀▀▀▀```',MessageType.text, {quoted: message.data});

     }

}));

Alpha.addCommand({pattern: 'art gn ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```╭━━━╮╱╱╱╱╱╱╱╭╮\n┃╭━╮┃╱╱╱╱╱╱╱┃┃\n┃┃╱╰╋━━┳━━┳━╯┃\n┃┃╭━┫╭╮┃╭╮┃╭╮┃\n┃╰┻━┃╰╯┃╰╯┃╰╯┃\n╰━━━┻━━┻━━┻━━╯\n\n╔═╗─╔╗───╔╗─╔╗\n║║╚╗║║───║║╔╝╚╗\n║╔╗╚╝╠╦══╣╚╩╗╔╝\n║║╚╗║╠╣╔╗║╔╗║║\n║║─║║║║╚╝║║║║╚╗\n╚╝─╚═╩╩═╗╠╝╚╩═╝\n──────╔═╝║\n──────╚══╝```',MessageType.text, {quoted: message.data});

     }

}));  

Alpha.addCommand({pattern: 'art a ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art b ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╦╝\n██╔══██╗\n██████╦╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art c ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art e ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n█████╗░░\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art f ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n█████╗░░\n██╔══╝░░\n██║░░░░░\n╚═╝░░░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art g ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art h ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art ı ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗\n██║\n██║\n██║\n██║\n╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art i ?(.*)', fromMe: false, dontAddCommandList: true,}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗\n╚═╝\n██╗\n██║\n██║\n██║\n██║\n╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art j ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░░░░░██╗\n░░░░░██║\n░░░░░██║\n██╗░░██║\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art k ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art l ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░░░\n██║░░░░░\n██║░░░░░\n██║░░░░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art m ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███╗░░░███╗\n████╗░████║\n██╔████╔██║\n██║╚██╔╝██║\n██║░╚═╝░██║\n╚═╝░░░░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art n ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art o ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art p ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╔╝\n██╔═══╝░\n██║░░░░░\n╚═╝░░░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art q ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██████╗░\n██╔═══██╗\n██║██╗██║\n╚██████╔╝\n░╚═██╔═╝░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art r ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╔╝\n██╔══██╗\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art s ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██████╗\n██╔════╝\n╚█████╗░\n░╚═══██╗\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art t ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```████████╗\n╚══██╔══╝\n░░░██║░░░\n░░░██║░░░\n░░░██║░░░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art u ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░██╗\n██║░░░██║\n██║░░░██║\n██║░░░██║\n╚██████╔╝\n░╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art w ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░██╗░░░░░░░██╗\n░██║░░██╗░░██║\n░╚██╗████╗██╔╝\n░░████╔═████║░\n░░╚██╔╝░╚██╔╝░\n░░░╚═╝░░░╚═╝░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art v ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░██╗\n██║░░░██║\n╚██╗░██╔╝\n░╚████╔╝░\n░░╚██╔╝░░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art x ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░██╗\n╚██╗██╔╝\n░╚███╔╝░\n░██╔██╗░\n██╔╝╚██╗\n╚═╝░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art y ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██╗░░░██╗\n╚██╗░██╔╝\n░╚████╔╝░\n░░╚██╔╝░░\n░░░██║░░░\n░░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art z ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n╚════██║\n░░███╔═╝\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));


Alpha.addCommand({pattern: 'art 1 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░░███╗░░\n░████║░░\n██╔██║░░\n╚═╝██║░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 2 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n╚════██╗\n░░███╔═╝\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 3 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```██████╗░\n╚════██╗\n░█████╔╝\n░╚═══██╗\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 4 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░░██╗██╗\n░██╔╝██║\n██╔╝░██║\n███████║\n╚════██║\n░░░░░╚═╝```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 5 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 6 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔═══╝░\n██████╗░\n██╔══██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 7 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```███████╗\n╚════██║\n░░░░██╔╝\n░░░██╔╝░\n░░██╔╝░░\n░░╚═╝░░░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 8 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n╚█████╔╝\n██╔══██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art 9 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] == '') {

    await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n╚██████║\n░╚═══██║\n░█████╔╝\n░╚════╝░```',MessageType.text, {quoted: message.data});

    }

}));

Alpha.addCommand({pattern: 'art cry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

if (match[1] == '') {

    var r_text = new Array ();

r_text[0] = " *๐·°(৹˃̵﹏˂̵৹)°·๐* ";
r_text[1] = " *‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚* ";
r_text[2] = " *(つ﹏<)･ﾟ｡* ";
r_text[3] = " *｡ﾟ･（>﹏<）･ﾟ｡* ";
r_text[4] = " *๐·°(৹˃̵﹏˂̵৹)°·๐* ";
r_text[5] = " *.·´¯`(>▂<)´¯`·.* ";
r_text[6] = " *｡･ﾟﾟ･(>д<)･ﾟﾟ･｡* ";
r_text[7] = " *(ToT)* ";
r_text[8] = " *(┳Д┳)* ";
r_text[9] = " *(ಥ﹏ಥ)* ";
r_text[10] = " *（；へ：）* ";
r_text[11] = " *ಥʖ̯ಥ* ";
r_text[12] = " *ಥ ͜ʖಥ* ";
r_text[13] = " *☭ ͜ʖ ☭* ";
r_text[14] = " *ཀ ʖ̯ ཀ* ";
r_text[15] = " *(;﹏;)* ";
r_text[16] = " *（πーπ）* ";
r_text[17] = " *(⋟﹏⋞)* ";
r_text[18] = " *（>﹏<）* ";
r_text[19] = " *(つ﹏⊂)* ";
r_text[20] = " *༼☯﹏☯༽* ";
r_text[21] = " *(ノ﹏ヽ)* ";
r_text[22] = " *(╥_╥)* ";
r_text[23] = " *(T⌓T)* ";
r_text[24] = " *(༎ຶ⌑༎ຶ)* ";
r_text[25] = " *(☍﹏⁰)｡* ";
r_text[26] = " *(இ﹏இ`｡)* ";
r_text[27] = " *༼ ༎ຶ ෴ ༎ຶ༽* ";
r_text[28] = " *ᕕ( ཀ ʖ̯ ཀ)ᕗ* ";
r_text[29] = " *( ɵ̥̥ ˑ̫ ɵ̥̥)* ";
r_text[30] = " *(个_个)* ";
r_text[31] = " *( ͒˃̩̩⌂˂̩̩ ͒)* ";
r_text[32] = " *╥﹏╥* ";
r_text[33] = " *༼ಢ_ಢ༽* ";

var i = Math.floor(34*Math.random())

await message.client.sendMessage(message.jid,`${r_text[i]}`,MessageType.text, {quoted: message.data});

    }

})); 

    
}

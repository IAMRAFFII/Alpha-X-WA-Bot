const simpleGit = require('simple-git');
const git = simpleGit();
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const AlphaXnpm = require('alpha-wabot-npm');
const Language = require('../language');
const Lang = Language.getString('updater');


Asena.addCommand({pattern: 'up$', fromMe: true, desc: Lang.UPDATER_DESC}, (async (message, match) => {
    await AlphaXnpm.startwhatsasena()
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var Updates = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                Updates += '|⌛️ [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
        
        await message.client.sendMessage(
            message.jid,
            Updates, MessageType.text
        ); 
    }
}));
var Action = ''
if (Config.LANG == 'TR') Action = '*🚀 Ａｌｐｈａ- X Halihazırda Güncelleniyor!*'
if (Config.LANG == 'SI') Action = '*🚀 Ａｌｐｈａ- X දැනට යාවත්කාලීන වෙමින් පවතී!*'
if (Config.LANG == 'AZ') Action = '*🚀 Ａｌｐｈａ- X Hal -hazırda Yenilənir!*'
if (Config.LANG == 'EN') Action = '*🚀 Ａｌｐｈａ- X Currently Updating!*'
if (Config.LANG == 'RU') Action = '*🚀 Ａｌｐｈａ- X сейчас обновляется!*'
if (Config.LANG == 'ES') Action = '*🚀 Ａｌｐｈａ- X Actualizando actualmente!*'
if (Config.LANG == 'PT') Action = '*🚀 Ａｌｐｈａ- X está sendo atualizado no momento!*'
if (Config.LANG == 'ML') Action = '*🚀 Ａｌｐｈａ- X നിലവിൽ അപ്ഡേറ്റ് ചെയ്യുന്നു!*'
if (Config.LANG == 'HI') Action = '*🚀 Ａｌｐｈａ- X वर्तमान में अपडेट हो रहा है!*'
if (Config.LANG == 'ID') Action = '*🚀 Ａｌｐｈａ- X Saat Ini Memperbarui!*'
Asena.addCommand({pattern: 'up now$', fromMe: true, desc: Lang.UPDATE_NOW_DESC}, (async (message, match) => {
    await AlphaXnpm.startwhatsasena()
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var on_progress = false
        if (on_progress) return await message.client.sendMessage(message.jid,Action,MessageType.text)
        var guncelleme = await message.reply(Lang.UPDATING);
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,Lang.IN_AF, MessageType.text);
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            on_progress = true
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid,Lang.UPDATED, MessageType.text);

            await message.sendMessage(Lang.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,Lang.UPDATED_LOCAL, MessageType.text);
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ Update fail*\n*error:* ```' + err + '```', MessageType.text);
                }
            }));
            await guncelleme.delete();
        }
    }
}));

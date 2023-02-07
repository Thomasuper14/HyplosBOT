//Use latest fork to get latest features
//update your repo to get new updates

process.on('uncaughtException', console.error)
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zA17 = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority');
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { A17Tiktok } = require('./lib/tiktokmikudl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')
const kaitime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const kaidate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')

        if(time2 < "23:59:00"){

        var ucapanWaktu = 'Buona Notte 🌌'

}

        if(time2 < "19:00:00"){

        var ucapanWaktu = 'Buon Pomeriggio 🌆'

}

        if(time2 < "18:00:00"){

        var ucapanWaktu = 'Buon Pomeriggio 🌇'

}

        if(time2 < "15:00:00"){

        var ucapanWaktu = 'Buon Pomeriggio 🏞'

}

        if(time2 < "11:00:00"){

        var ucapanWaktu = 'Buon Giorno 🌅'

}

        if(time2 < "05:00:00"){

        var ucapanWaktu = 'Buona Notte 🏙'

}

const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let kaiaudio = JSON.parse(fs.readFileSync('./Media-Database/audio.json'));
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))


const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = A17 = async (A17, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await A17.decodeJid(A17.user.id)
const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await A17.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')




const mongoose = require("mongoose");

   
	
	
	
	
/* Dm and Groups Autoreply/Bot chat

if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=166512&key=5nz1Ha6nS9Zx1MfT&uid=[uid]&msg=[msg]=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }    
    
  */  

//auto recording everything
    if (global.autoRecord) { if (m.chat) { A17.sendPresenceUpdate('recording', m.chat) }
}
//auto typing everything
  if (global.autoTyping) { if (m.chat) { A17.sendPresenceUpdate('composing', m.chat) }
}
	
	
	
	
	
_sewa.expiredCheck(A17, sewa)

const reply = (teks) => {
            A17.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            A17.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            


const pikaReactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
	

	
	
	
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGGIO ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Chat Privata', m.chat))
        }

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Bronzo V'
        if (levelRole <= 5) {
            role = 'Bronzo IV'
        } else if (levelRole <= 10) {
            role = 'Bronzo III'
        } else if (levelRole <= 15) {
            role = 'Bronzo II'
        } else if (levelRole <= 20) {
            role = 'Bronzo I'
        } else if (levelRole <= 25) {
            role = 'Argento V'
        } else if (levelRole <= 30) {
            role = 'Argento IV'
        } else if (levelRole <= 35) {
            role = 'Argento III'
        } else if (levelRole <= 40) {
            role = 'Argento II'
        } else if (levelRole <= 45) {
            role = 'Argento I'
        } else if (levelRole <= 50) {
            role = 'Oro V'
        } else if (levelRole <= 55) {
            role = 'Oro IV'
        } else if (levelRole <= 60) {
            role = 'Oro III'
        } else if (levelRole <= 65) {
            role = 'Oro II'
        } else if (levelRole <= 70) {
            role = 'Oro I'
        } else if (levelRole <= 75) {
            role = 'Platino V'
        } else if (levelRole <= 80) {
            role = 'Platino IV'
        } else if (levelRole <= 85) {
            role = 'Platino III'
        } else if (levelRole <= 90) {
            role = 'Platino II'
        } else if (levelRole <= 95) {
            role = 'Platino I'
        } else if (levelRole < 100) {
            role = 'Sterminatore'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
   
                        if (m.isGroup && isLeveling && isUser && A17.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「 *Livvellamento* 」\n\n@${m.sender.split("@")[0]} è salito di livello!!\n\n*User XP*: ${getLevelingXp(m.sender)}\n*Livello*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*Ruolo*: ${role} \n\n`
A17.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ C'è stato un errore !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ C'è stato un errore !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
		A17.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await A17.sendPresenceUpdate('composing', m.chat)
A17.sendReadReceipt(from, m.sender, [m.key.id])}
}
/*
  if (global.autoReadGc) {
  if (m.isGroup) { A17.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

  if (global.autoReadAll) { if (m.chat) { A17.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { A17.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { A17.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { A17.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Giorno ${jjam}Ora ${mmmenit}Minuto ${ddetik}Secondo`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Giorni " + hours + "Ore " + minutes + "Minuti " + seconds + "Secondi"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
A17.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,                    
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
 

        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Perfavore non provare a taggarlo
Lui non è nella tastiera ${reason ? 'per il motivo ' + reason : 'per nessun motivo'}
Durata ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
Perfavore non provare a taggarlo
Lui è offline ${user.afkReason ? ' dopo ' + user.afkReason : ''}
Durata ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


if (m.mtype === 'groupInviteMessage') {
teks = `Non posso unirmi al gruppo finché il mio *Owner* non mi chiede di unirmi. Digita *-owner* per ottenere il numero del proprietario e chiediglielo.`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Assets/pic10.jpg'), `${watermark}`, `${BotName}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}


if (AntiLink) {
    linkgce = await A17.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    reply(`\`\`\`「  Antilink System  」\`\`\`\n\nIl link appartiene a questo gruppo. Nessun Provvedimento preso!`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`「  *Antilink System*  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
    if (isAdmins) return reply(bvl)
    if (m.key.fromMe) return reply(bvl)
    if (isCreator) return reply(bvl)
    kice = m.sender
    await A17.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il baka è stato rimosso per aver mandato link di altri gruppi WhatsApp nel gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }
 
    if (antiWame)
    if (budy.includes(`wa.me`)) {
  if (!isBotAdmins) return
  bvl = `\`\`\`「 _'wa.me' PM link Detected!_  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
  if (isAdmins) return reply(bvl)
  if (m.key.fromMe) return reply(bvl)
  if (isCreator) return reply(bvl)
  kice = m.sender
  await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
  A17.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  } else {
  }
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
A17.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]}  Il Baka è stato rimosso per aver mandato link in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
    if (budy.length > 3500) {
    reply(`*Caution!*\n\n`.repeat(300))
    reply(`\`\`\`Virus Detected !!\`\`\`\n\nRevoving sender...`)
    if (!isBotAdmins) return reply(mess.botAdmin)
    A17.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }


    if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await A17.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「  Antilink System  」\`\`\`\n\nIl link appartiene a questo gruppo. Nessun Provvedimento preso!`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link di un video YouTube in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link di un canale YouTube in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato il link di un profilo Instagram in questo gruppo! Non sono ammesse Promozioni!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link di Facebook in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link di Telegram in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://www.tiktok.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link di TikTok in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link di Twitter in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nIl Link è stato inviato dall'admin. Nessun Provvedimento preso!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await A17.groupParticipantsUpdate(m.chat, [kice], 'remove')
        A17.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Il Baka è stato rimosso per aver mandato link in questo gruppo!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Europe/London').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Europe/London').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
A17.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Forse è stato aperto dal bot`))
}


if (!A17.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Limiti Resettati')
    }, {
    scheduled: true,
    timezone: "Europe/London"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await A17.sendButtonText(m.chat, [{ buttonId: 'indovina la canzone', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nRisposta Corretta 🎉\n\nGiochiamo ancora? Premi il bottone qui sotto`, `${global.BotName}`, m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*Wrong answer!*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.toLowerCase() == jawaban) {
        await A17.sendButtonText(m.chat, [{ buttonId: 'indovina la figura', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nRisposta Corretta 🎉\n\nGiochiamo ancora? Premi il bottone qui sotto`, `${global.BotName}`, m)
        delete tebakgambar[m.sender.split('@')[0]]
        } else reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await A17.sendButtonText(m.chat, [{ buttonId: 'indovina la parola', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nRisposta Corretta 🎉\n\nGiochiamo ancora? Premi il bottone qui sotto`, `${global.BotName}`, m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await A17.sendButtonText(m.chat, [{ buttonId: 'indovina il detto', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nRisposta Corretta 🎉\n\nGiochiamo ancora? Premi il bottone qui sotto`, `${global.BotName}`, m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await A17.sendButtonText(m.chat, [{ buttonId: 'indovina la scena', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nRisposta Corretta 🎉\n\nGiochiamo ancora? Premi il bottone qui sotto`, `${global.BotName}`, m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await A17.sendButtonText(m.chat, [{ buttonId: 'indovina la lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nRisposta Corretta 🎉\n\nGiochiamo ancora? Premi il bottone qui sotto`, `${global.BotName}`, m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await A17.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nRisposta Corretta 🎉\n\nGiochiamo ancora? Premi il bottone qui sotto`, `${global.BotName}`, m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*Risposta Sbagliata!*')
          }
          
          if (('family100'+m.chat in _family100) && isCmd) {
          kuis = true
          let room = _family100['family100'+m.chat]
          let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
          let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
          if (!isSurender) {
          let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
          if (room.terjawab[index]) return !0
          room.terjawab[index] = m.sender
          }
          let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
          let caption = `
          Answer the following questions :\n${room.soal}\n\n\nAbbiamo ${room.jawaban.length} Rispondi ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
          ${isWin ? `Hai risposto a tutto` : isSurender ? 'Resa!' : ''}
          ${Array.from(room.jawaban, (jawaban, index) => {
          return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
          }).filter(v => v).join('\n')}
          ${isSurender ? '' : `Player Perfetto`}`.trim()
          A17.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
          if (isWin || isSurender) delete _family100['family100'+m.chat]
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
          A17.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} respinta la suit, la suit è annullata`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          A17.sendText(m.chat, `La suit è stata inviata in chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) A17.sendText(roof.p, `Perfavore Seleziona \n\nSasso🗿\nCarta📄\nForbici✂️`, m)
          if (!roof.pilih2) A17.sendText(roof.p2, `Perfavore Seleziona \n\nSasso🗿\nCarta📄\nForbici✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) A17.sendText(m.chat, `Entrambi i giocatori non vogliono giocare,\nSuit annullato`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          A17.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} suit non scelta. Gioco Terminato!`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /scissors/i
          let b = /rock/i
          let k = /paper/i
          let reg = /^(scissors|rock|paper)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nIn attesa che l'avversario scelga` : ''}`)
          if (!roof.pilih2) A17.sendText(roof.p2, 'L^avversario ha scelto_\nOra tocca a te', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nIn attesa che l'avversario scelga` : ''}`)
          if (!roof.pilih) A17.sendText(roof.p, 'L^avversario ha scelto_\nOra tocca a te', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            A17.sendText(roof.asal, `_*Risultati Suit*_${tie ? '\nSERIES' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Vinto \n` : ` Perso \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Vinto \n` : ` Perso \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
                  let title = category.toLowerCase().replace(/[()*]/g, "")
                  let judul = title.replace(/\s/g, "-")
                  let page = Math.floor(Math.random() * 5)
                  axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
                  .then((get) => {
                      let $ = cheerio.load(get.data)
                      let link = []
                      $('article.post').each(function (a, b) {
                          link.push($(b).find('a').attr('href'))
                      })
                      let random = link[Math.floor(Math.random() * link.length)]
                      axios.get(random)
                      .then((res) => {
                          let $$ = cheerio.load(res.data)
                          let hasil = {
                              title: $$('#content > article > h1').text(),
                              author: $$('#content > article').text().split('Piccola Storia: ')[1].split('Categoria: ')[0],
                              kategori: $$('#content > article').text().split('Categoria: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Moderazione passata: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

          if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await reply(`「 *Matematica Quiz* 」\n\n 🎉 Risposta Corretta 🎉\n\nVorresti giocare ancora? manda ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else reply('*Risposta Sbagliata!*')
            }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: A17.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, A17.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              A17.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                A17.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/pic4.jpg')}) 
                }
                
               
             
                const ftoko = {
                key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                },
                message: {
                "productMessage": {
                "product": {
                "productImage":{
                "mimetype": "image/jpeg",
                "jpegThumbnail": BotLogo
                },
                "title": `${global.OwnerName}`, 
                "description": `${global.BotName}`, 
                "currencyCode": "USD",
                "priceAmount1000": "2000",
                "retailerId": `${global.WaterMark}`,
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }
                }

                const fgi = {
                  key: { 
                        fromMe: false,
                       participant: `0@s.whatsapp.net`, ...(from ? 
                  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
                               },
                  message: { 
                                "videoMessage": { 
                                "title": `A17`,
                                "h": `A17`,
                                'duration': '99999', 
                                'gifPlayback': 'true', 
                                'caption': `Kai`,
                                'jpegThumbnail': fs.readFileSync('./Assets/A17.mp4')
                                       }
                                      }
                                   } 

//FAKEREPLY TROLI
const ftroli = {
  key : {
  participant : '0@s.whatsapp.net'
  },
  message: {
  orderMessage: {
  itemCount : 1,
  status: 1,
  surface : 1,
  message: `${global.OwnerName}`, 
  orderTitle: `${global.BotName}`,
  thumbnail: BotLogo, //Pic
  sellerJid: '0@s.whatsapp.net'
  
  }
  }
  }
  //FAKEREPLY LOCATION
  const flokasi = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  locationMessage: {
  name: `${global.location}`,
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY DOCUMENT
  const fdocs = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${global.BotName}`, 
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY VIDEO
  const fvideo = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "videoMessage": { 
  "title": `${global.BotName}`,
  "h": `${global.OwnerName}`,
  'seconds': '30', 
  'caption': `${global.WaterMark}`,
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GROUPINVITE
  const fgclink = {
  "key": {
  "fromMe": false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
  "groupJid": "916909137213-1616169743@g.us",
  "inviteCode": `${global.OwnerName}`,
  "groupName": `${global.BotName}`, 
  "caption":`${global.WaterMark}`, 
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GIF
  const fgif = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
   "videoMessage": { 
   "title":`${global.BotName}`,
   "h": `${global.OwnerName}`,
   'seconds': "30", 
   'gifPlayback': 'true', 
   'caption': `${global.WaterMark}`,
   'jpegThumbnail': BotLogo
  }
  }
  } 
  //FAKEREPLY TEXT WITH THUMBNAIL
  const ftextt = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "extendedTextMessage": {
   "text":`${global.OwnerName}`,
  "title": `${global.BotName}`,
   'jpegThumbnail': BotLogo
  }
  } 
  }
  //FAKEREPLY VN
  const fvn = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "audioMessage": {
  "mimetype":"audio/ogg; codecs=opus",
  "seconds": "9999999999999999",
  "ptt": "true"
  }
  } 
  }
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }


    const menulist = `
    Hey ${pushname} Salve 👋. Sono ${global.BotName}, un bot sviluppato da *Hypnos* - *plo19* per portare il tuo whatsapp a un livello superiore!
        
       「 Info Sistema 」
    
    Velocità : ${latensie.toFixed(4)} miliseconds
    Tempo Processo : ${runtime(process.uptime())}
    Nome: ${global.BotName}
    Nome Owner: ${global.OwnerName}
    𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Amazon AWS
    𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
       「 User Info 」
    
    Livello User : ${levelMenu}
    XP User : ${xpMenu} \ ${reqXp}
    Ruolo User : ${role}
    
    
       「 Banca dell'User 」
    
    Bilancio User : ${uangku}
    Ferro : ${getBesi(m.sender)}
    Oro : ${getEmas(m.sender)}
    Smeraldo : ${getEmerald(m.sender)}
    Pozione : ${getPotion(m.sender)}
    
    
    Scrivi *-menu* o premi qualsiasi bottone qui sotto per iniziare ad utilizzare *${global.BotName}*
    
    ©️ *${global.BotName}* Tutti i diritti riservati da: *plo19* - *Hypnos*
    `
        const qtod = m.quoted? "Vero":"Falso"
        
        

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

	//auto vn reply
for (let anju of kaiaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Assets/audio/${anju}.mp3`)
					A17.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
        
	
	
	

	this.game = this.game ? this.game : {}
            let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
            if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            //reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { 
            if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
            reply({
            '-3': 'Il gioco è finito',
            '-2': 'Invalido',
            '-1': 'Posizione Invalida',
            0: 'Posizione Invalida',
            }[ok])
            return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            if (isSurrender) {
            room.game._currentTurn = m.sender === room.game.playerX
            isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `ID Stanza: ${room.id}
    ${arr.slice(0, 3).join('')}
    ${arr.slice(3, 6).join('')}
    ${arr.slice(6).join('')}
    ${isWin ? `@${winner.split('@')[0]} Vince!` : isTie ? `Gioco Terminato` : `Turno di ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
    ❌: @${room.game.playerX.split('@')[0]}
    ⭕: @${room.game.playerO.split('@')[0]}
    Digita *surrender* per arrenderti!`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await A17.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await A17.sendText(room.o, str, m, { mentions: parseMention(str) } )
            if (isTie || isWin) {
            delete this.game[room.id]
            }
            }
	
	
	
	
	
	
	let smallinput = budy.toLowerCase()
    if (smallinput.includes('ciao')) {
      reply (`Ciao ${pushname}, Sono ${BotName}. Come posso aiutarti?`);
    } 
	
//if (smallinput.includes('hi')) {

   //   reply (`Hello ${pushname}, I am ${BotName}. How can i help you?`);

   // } 
		
    if( smallinput.includes('plo19') || smallinput.includes('hypnos') || smallinput.includes('sviluppatori') || smallinput.includes('developer')){
        reply (`I miei sviluppatori si sono persi in un Multiverso lontano, e ho perso la connessione con loro...`)
    }
	
	

    if( smallinput.includes('konichiwa') || smallinput.includes('konochiwa') || smallinput.includes('konichiba') || smallinput.includes('salute')){
      reply (`Konichiwa ${pushname}, I am ${BotName}. How can i help you?`);
    }
    
	
	
	 if (smallinput=='Hyplos') {
        reply ('Si Sono Vivo! 🫂')
    }
	
	
if (smallinput=='ping') {
        reply (`Hey ${pushname} Pong ${latensie.toFixed(4)} ms`)
    }

	
    if (smallinput.includes('buongiorno') || smallinput.includes('buon giorno')) {
      reply (`Buon Giorno anche a te ${pushname} ☺️. Abbi una buona giornata 😇.`);
    }
	
    if (smallinput.includes('buonpomeriggio') || smallinput.includes('buon pomeriggio')) {

      reply (`Buon Pomeriggio anche a te ${pushname} ✨. Spero tu abbia un pomeriggio entusiasmate 😇🤞🏻.`);

    }



    //if (smallinput.includes('good afthernoon')) {
     // reply (`Huh ${pushname} 😇. Wishing you an enjoyable afternoon too.`);
 //   }
	
	
	
	
    if (smallinput.includes('buonanotte')) {
      reply (`Buona Notte anche a te ${pushname} 😇. Dormi Bene e Sogni D'Orzo.`);
    }

    if (smallinput.includes('grazie')|| smallinput.includes('thx') || smallinput.includes('grz') || smallinput.includes('thanks')) {
      reply (`Tranquillo ${pushname} 😇. Sono un bot dopo tutto.`);
    }
	
	
	
	
	

switch(command) {
	
    case 'sc': case 'script': case 'sourcecode': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    let { data } = await axios.get('https://api.github.com/repos/Kai0071/A17');
    teks = `*Hyplos Script*\n\n*Total Stars*: ${data.stargazers_count}⭐\n*Total Forks*: ${data.forks_count} forks\n*GitHub*: https://github.com/Kai0071/A17\n\nDont forget to follow me on *GitHub* and give a ⭐️ to my projects. `
    let buttons = [
    {buttonId: `${prefix}owner`, buttonText: {displayText: '🍁 SVILUPPATORI 🍁'}, type: 1}
    ]
    let buttonMessage = {
    image: Thumb,
    jpegThumbnail: BotLogo ,
    caption: teks,
    footer: `${BotName }`,
    buttons: buttons,
    headerType: 4,
    /*contextInfo:{externalAdReply:{
    title:"Powered by Kai",
    body: " ", 
    thumbnail: fs.readFileSync("Assets/pic2.jpg"),
    mediaType:1,
    mediaUrl: 'https://wallpapercave.com/wp/wp10524580.jpg',
    sourceUrl: "https://wallpapercave.com/wp/wp10524580.jpg"
    }}*/

    }
    A17.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'me': case 'profile': case 'p':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'Profilo Utente')
     var bio= await A17.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "Si":"No"
     
     try {
        
        pfp=await A17.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://wallpapercave.com/wp/wp10524580.jpg'
    }

     const profilexx = `*「 Info Profilo  」*\n\n*Nome Utente* : ${pushname}\n*Descrizione* : ${bioo}\n*Admin* : ${adn}\n*Livello* : ${levelMenu}\n*Exp* : ${xpMenu} fuori da ${reqXp}\n*Ruolo* : ${role}`
 


let buttonspro = [
    {buttonId: `${prefix}soulmate`, buttonText: {displayText: 'La Tua Ship'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspro,
                headerType: 4
            }
        A17.sendMessage(m.chat,buttonMessage,{quoted:m})
		
		
		
		
        	
            break

		case 'report': case 'suggest ': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    if (!text) return reply(`perfavore provvedi un messaggio di segnalazione`)
    if (text.length > 300) return reply(`Stai provando a mandare un Virus!`)
    const txtmsg = `*📮 Messaggio di Report*\n\n*Sender ➛* wa.me/${m.sender.split("@")[0]}\n\n*Nome Gruppo ➛* ${groupName}\n\n*Messaggio ➛*  ${text}`
	for (let mod of global.Owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '6297175943@s.whatsapp.net'))
	await A17.sendMessage(`${mod}`, {text: `${txtmsg}`},  { quoted: m })
	await A17.sendMessage(`120363026915700516@g.us`, {text: `${txtmsg}`, mentions: groupAdmins}, { quoted: m })
    replay(`*✅ La tua segnalazione è stata inviata con successo al supporto del gruppo & Owner*\n\n*Riceverai risposta a breve ♥️*`); 
 }
 break   
		
		
		
//game
		
      case'daily': case'claim': case 'reward': {
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        let user = m.sender
	const cara = "cara"
	const daily  = await eco.daily(user, cara, 9999); //give 999 for daily, can be changed
	
	        if (daily.cd) return replay(`Hai già riscattato tutto per oggi, ritorna ${daily.cdL}`); //cdL is already formatted cooldown Left
	
            replay(`Hai riscattato 💎${daily.amount} per oggi`);        
}
break
		
				

  case'wallet':  case 'purse': {

        if (isBan) return reply(mess.banned)	 			

        if (isBanChat) return reply(mess.bangc)

	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)

    const user = m.sender

    const cara = "cara"

    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.

    await replay(`👛 ${pushname}'s Purse:\n\n_💎${balance.wallet}_`);

}

break

    	
	case'bank':  case 'levee': {
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
    const user = m.sender
    const cara = "cara"
    const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
    await replay(`🏦 Banca di ${pushname}:\n\n_💎${balance.bank}/${balance.bankCapacity}_`); 
}
break
		
		
		case'capacity':  case 'bankupgrade': {
	//if (!isCreator) return replay(mess.botowner)
	if (!text) return replay(`💴 Capacità-Banca 💳\n\n1 | 1000 sp = 💎100\n\n2 | 10000 sp = 💎1000\n\n3 | 100000 sp = 💎10000\n\nExample- ${prefix}capacity 1 o ${prefix}bankupgrade 1000`)	
	if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
	const cara = "cara"
	let value = text.trim();
	let k = parseInt(value)
	const balance  = await eco.balance(user, cara) 
  switch (value) {
          case '1000':
          case '1':
          if (k > balance.wallet ) return replay(`Devi pagare 💎100 per aumentare la capacità della banca ~ 1000 sp`);
            const deduct1 = await eco.deduct(user, cara, 100);
            const add1 = eco.giveCapacity(user, cara, 1000); 
                await replay(`È stato aggiunto un deposito di 1000 💎diamond nella banca ${pushname}`)
         case '10000':
          case '2':
          if (k > balance.wallet ) return replay(`Devi pagare 💎1000 per aumentare la capacità della banca ~ 10000 sp`);
            const deduct2 = await eco.deduct(user, cara, 1000);
            const add2 = eco.giveCapacity(user, cara, 10000); 
                await replay(`È stato aggiunto un deposito di 10000 💎diamond nella banca ${pushname}`)
         case '100000':
          case '3':
          if (k > balance.wallet ) return replay(`Devi pagare 💎10000 per aumentare la capacità della banca ~ 100000 sp`);
            const deduct3 = await eco.deduct(user, cara, 10000);
            const add3 = eco.giveCapacity(user, cara, 100000); 
                await replay(`
                È stato aggiunto un deposito di 100000 💎diamond nella banca ${pushname}`)
          }
            }
                break
		
		
		  
		  
	case'deposit':  case 'pay-in': {
        if (isBan) return reply(mess.banned)	 			
        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
		if (!text) return replay("Provide the amount you want to deposit!");
		const texts = text.trim();
		const user = m.sender;
		const cara = 'cara'
        const deposit = await eco.deposit(user, cara, texts);
            if(deposit.noten) return replay('Non puoi depositare ciò che non hai'); //if user states more than whats in his wallet
             replay(`Depositato con Successo 💎${deposit.amount} alla tua banca.`)
		
}
break	
		
	
		  
		  
		case'withdraw':  case 'withdrawal': {
      if (isBan) return reply(mess.banned)	 			
      if (isBanChat) return reply(mess.bangc)
      if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.sender
		if (!text) return replay("Fornisci l'importo che desideri prelevare!");
		const query = text.trim();
        const cara = 'cara'
        const withdraw = await eco.withdraw(user, cara, query);
        if(withdraw.noten) return replay('🏧 Fondi insufficienti in banca'); //if user states more than whats in his wallet
        const add = eco.give(user, cara, query);
          replay(`🏧 ALERT  💎${withdraw.amount} è stato aggiunto nel tuo portafoglio.`)
        
}
break  
	
		  
		  
		  
		case'rob':  case 'attack': {
	if (!text) return replay(`Use ${prefix}rob @user`)
	const target =
			             m.quoted && m.mentionedJid.length === 0
			             ? m.quoted.sender
			             : m.mentionedJid[0] || null;    
           if (!target || target === m.sender) return replay("Cosa stai cercando di fare!")
           if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
	    const k = 250
	const balance1  = await eco.balance(user1, cara)
	const balance2  = await eco.balance(user2, cara)
	const typ = ['ran','rob','caught'];
    const random = typ[Math.floor(Math.random() * typ.length)];
    if (k > balance1.wallet) return replay(`☹️ Non hai abbastanza soldi per pagare in caso ti becchino`);
    if (k > balance2.wallet) return replay(`Scusa, la tua vittima è troppo povera 🤷🏽‍♂️ lascia andare.`);
    let tpy = random
  switch (random) {
          case 'ran':
                await replay(`La tua vittima è scappata, sii più spaventoso... la prossima volta.`)
  }
	}
                break  
		
		
		  
	case'transfer':  case 'give': {
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
	let value = text.trim().split(" ");
	if (value[0] === "") return replay(`Usa ${prefix}transfer 100 @user`);
	const target =
			             m.quoted && m.mentionedJid.length === 0
			             ? m.quoted.sender
			             : m.mentionedJid[0] || null;    
           if (!target || target === m.sender) return replay("Cosa stai provando a fare!")
           if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
		           const word = value[0];
		           const code = value[1];
		let d = parseInt(word)
		if (!d) return replay("Controlla il tuo testo perfavore. Stai usando il comando in modo sbagliato")
		
		const balance = await eco.balance(user1, cara); 
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
        if(a == true) return replay("non hai abbastanza denaro da trasferire");
        
        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        replay(`📠 Transazione andata a buon fine`)

}
break  	  
	
		
		
	 case 'wealth': case 'ritual': {
                    if (!isCreator) return replay(mess.botowner)
                    var user = m.sender
                    var cara = 'cara'
                    const give1 = eco.give(user, cara, 2000)
                    replay(`Sei il più ricco mio *Signore*`)
            }
            break
            
		
		
		case'gamble':  case 'lottery': {
    //var response = await Miku.groupInviteCode(from)
    //var link1 = `https://chat.whatsapp.com/${response}`
    //var link2 = `https://chat.whatsapp.com/BXQaaeg7utI29OI4RbhdIhl`
    var texts = text.trim().split(" ");
    var opp = texts[1];// your value
    var value = texts[0].toLowerCase();
    var gg = parseInt(value)
    var user = m.sender //m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    const cara = 'cara'
    const balance = await eco.balance(user, cara); 
    const g = (balance.wallet) > parseInt(value)
    const k = 50
    const a = (k) > parseInt(value)
    const twice = gg*2
    const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
    const r = f[Math.floor(Math.random () * f.length)]
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return reply(mess.grouponly)
    //if (link1 == link2){
       if (texts[0] === "")
           return replay(
               `Esempio:  ${prefix}gamble 100 direzione(left,right,up,down)`
           );
       if (!value) return replay("*Per favore, specifica l'importo con cui stai giocando!");
       if (!opp) return replay("Specifica la direzione su cui stai scommettendo!");
       if (!gg) return replay("Controlla il tuo testo per favore, stai usando il comando in modo sbagliato")
       if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
       if (g == false) return replay(`Non hai abbastanza 💎 Diamante con cui scommettere`);
       if (a == true) return replay(`Spiacente ${pushname}, puoi giocare solo con più di 💎50.`);
       if ( r == opp){
          let give = await eco.give(user , cara, twice);
          replay(`*📉 Hai Vinto 💎${twice}*`)
       }
       else{
          let deduct = await eco.deduct(user, cara, texts[0]);
          replay(`*📈 Hai Perso 💎${texts[0]}*`)
        }
    //}
    //else{
        //replay(`Gambling is allowed only in Casino/Gamble Group,\n\ntype ${prefix}casino to get the group link`)
    //}
}
break
		
	//-----------------Slot----------------------
/*
case'slot': case 'spin': {
       if (isBan) return replay(mess.banned);
       if (isBanChat) return replay(mess.bangc)
       if (!m.isGroup) return replay(mess.grouponly)
       var today = new Date();
   if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
       if (text == 'help') return replay(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💎100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
       if (text == 'money') return replay(`*1:* Small Win --> +💎20\n\n*2:* Small Lose --> -💎20\n\n*3:* Big Win --> +💎100\n\n*4:* Big Lose --> -💎50\n\n*5:* 🎉 JackPot --> +💎1000`)
       const fruit1= ["🥥", "🍎", "🍇"]
       const fruit2 = ["🍎", "🍇", "🥥"]  
       const fruit3 = ["🍇", "🥥", "🍎"]         
       const fruit4 = ["🍇", "🍎", "🥥"]
       const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
       const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
       const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']             
       const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']          
       const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💎1000*']
       const user = m.sender
       const cara = "cara"
       const k = 100
       const balance1  = await eco.balance(user, cara)
       
       if (k > balance1.wallet) return replay(`You are going to be spinning on your wallet, you need at least 💎100`);
       const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
       const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
       const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
       const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
       const mess1 = lose[Math.floor(Math.random() * lose.length)];
       const mess2 = won[Math.floor(Math.random() * won.length)];
       const mess3 = near[Math.floor(Math.random() * near.length)];
       const mess4 = jack[Math.floor(Math.random() * jack.length)];
       const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
       
       if ((f1 !== f2) && f2 !== f3){
          const deduct1 = await eco.deduct(user, cara, 50);
                 replay(`${mess1}\n\n*Big Lose -->* _💎50_`)
       }
       else if ((f1 == f2) && f2 == f3){
          const give1 = await eco.give(user, cara, 100); 
                replay(`${mess2}\n*_Big Win -->* _💎100_`)
       }
       else if ((f1 == f2) && f2 !== f3){
          const give2 = await eco.give(user, cara, 20);
                replay(`${mess3}\n*Small Win -->* _💎20_`)
       }
       else if ((f1 !== f2) && f1 == f3){
          const deduct2 = await eco.deduct(user, cara, 20);
                replay(`${mess5}\n\n*Small Lose -->* _💎20_`)
       }
       else if ((f1 !== f2) && f2 == f3){
          const give4 = eco.give(user, cara, 20); 
                replay(`${mess3}\n\n*Small Win -->* _💎20_`)
       }
       else if (((f1 == f2) && f2 == f3) && f3 == f4){
          const give5 = eco.give(user, cara, 1000);
               replay(`${mess4}\n\n_🎊 JackPot --> _💎1000_`)
       }
       else { 
               replay(`Do you understand what you are doing?`)
       }
    }
    else{
           replay(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
    }
}
break
*/	

case'slot': case 'spin': {
    if (isBan) return replay(mess.banned);
    if (isBanChat) return replay(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    var today = new Date();
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
    if (text == 'help') return replay(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💎100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
    if (text == 'money') return replay(`*1:* Small Win --> +💎20\n\n*2:* Small Lose --> -💎20\n\n*3:* Big Win --> +💎100\n\n*4:* Big Lose --> -💎50\n\n*5:* 🎉 JackPot --> +💎1000`)
    const fruit1= ["🥥", "🍎", "🍇"]
    const fruit2 = ["🍎", "🍇", "🥥"]  
    const fruit3 = ["🍇", "🥥", "🍎"]         
    const fruit4 = ["🍇", "🥥", "🍎"]
    const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
    const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
    const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']             
    const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']          
    const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💎1000*']
    const user = m.sender
    const cara = "cara"
    const k = 100
    const balance1  = await eco.balance(user, cara)
    
    if (k > balance1.wallet) return replay(`You are going to be spinning on your wallet, you need at least 💎100`);
    const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
    const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
    const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
    const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
    const mess1 = lose[Math.floor(Math.random() * lose.length)];
    const mess2 = won[Math.floor(Math.random() * won.length)];
    const mess3 = near[Math.floor(Math.random() * near.length)];
    const mess4 = jack[Math.floor(Math.random() * jack.length)];
    const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
    
    if ((f1 !== f2) && f2 !== f3){
       const deduct1 = await eco.deduct(user, cara, 50);
              replay(`${mess1}\n\n*Grande Perdita -->* _💎50_`)
    }
    else if ((f1 == f2) && f2 == f3){
       const give1 = await eco.give(user, cara, 100); 
             replay(`${mess2}\n*_Grande Vincita -->* _💎100_`)
    }
    else if ((f1 == f2) && f2 !== f3){
       const give2 = await eco.give(user, cara, 20);
             replay(`${mess3}\n*Piccola Vincita -->* _💎20_`)
    }
    else if ((f1 !== f2) && f1 == f3){
       const deduct2 = await eco.deduct(user, cara, 20);
             replay(`${mess5}\n\n*Piccola Perdita -->* _💎20_`)
    }
    else if ((f1 !== f2) && f2 == f3){
       const give4 = eco.give(user, cara, 20); 
             replay(`${mess3}\n\n*Piccola Vincita -->* _💎20_`)
    }
    else if (((f1 == f2) && f2 == f3) && f3 == f4){
       const give5 = eco.give(user, cara, 1000);
            replay(`${mess4}\n\n_🎊 JackPot --> _💎1000_`)
    }
    else { 
            replay(`Capisci cosa stai facendo?`)
    }
 }
 else{
        replay(`*Puoi giocare a questo gioco solo durante i fine settimana*\n\n*🌿 venerdì*\n*🎏 sabato*\n*🎐 domenica*`)
 }
}
break
	
		
		
		
		
case 'ttc': case 'tris': case 'tictactoe': {
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    let TicTacToe = require("./lib/tictactoe")
    this.game = this.game ? this.game : {}
    if (Object.values(this.game).find(room => room.id.startsWith('tris') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`Sei già in partita!`)
    let room = Object.values(this.game).find(room => room.state === 'ASPETTANDO' && (text ? room.name === text : true))
    if (room) {
    reply('Partner found!')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Aspettando @${room.game.currentTurn.split('@')[0]}
Digita *surrender* per arrenderti!`
    if (room.x !== room.o) await A17.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await   A17.sendText(room.o, str, m, { mentions: parseMention(str) } )
    } else {
    room = {
    id: 'tictactoe-' + (+new Date),
    x: m.chat,
    o: '',
    game: new TicTacToe(m.sender, 'o'),
    state: 'WAITING'
    }
    if (text) room.name = text
    reply('Ricerca Avversario' + (text ? ` Digita il comando qua sotto ${prefix}${command} ${text}` : ''))
    this.game[room.id] = room
    }
    }
    break		
		
		//Hosted platfrom info
		   case 'statusbot': case 'server':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocità risposta ${latensi.toFixed(4)} _Secondi_ \n ${oldd - neww} _Millisecondi_\n\nRuntime : ${runtime(process.uptime())}
» Hyplos Server Info 
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break

		
		
case 'banchat': case 'bangroup':{
if (isBan) return reply(mess.banned)	 			
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (isBanChat) return replay('A questo gruppo è già vietato l\'utilizzo di me!')
banchat.push(from)
replay('A questo gruppo è stato vietato di usarmi!')
var groupe = await A17.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
A17.sendMessage(from, {text: `\`\`\`「 Notizia 」\`\`\`\n\nA questo gruppo è vietato l'uso di bot. Quindi, qui nessuno può più usarmi!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('A questo gruppo è già vietato l\'utilizzo di me!')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('Questo gruppo è stato *sbloccato* dall\'usarmi!')
} else {
  let buttonsntnsfw = [
  { buttonId: `${prefix}bangroup on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${prefix}bangroup off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await A17.sendButtonText(m.chat, buttonsntnsfw, `Si prega di scegliere un pulsante qui sotto.\n\n *On / Off*`, `${global.BotName }`, m)
  }
  }
  break
		  

case 'supporto': case 'supportgc':
    
    reply(`⚙ *Gruppo dei miei sviluppatori:* ⚙ *In Arrivo*`)
    break

case 'repo': case 'botrepo':
    
    reply(`⚙ Il mio codice sorgente è </> - https://github.com/Kai0071/A17`)
    break

case 'nsfwmenu':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!AntiNsfw) return reply(mess.nonsfw)
        reply(` *━━〈 ⚠️ NSFW Menu ⚠️  〉━━*\n\nhentaivideo, blowjobgif, hneko, masturbation, thighs, pussy, panties, orgy, ahegao, ass, bdsm, blowjob, cuckold, ero, gasm, cum, femdom, foot, gangbang, glasses, jahy, trap, blowjobgif, spank, hneko, hwaifu, gasm`)
    break

case 'reazioni': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━〈  ⚡ Reazioni ⚡  〉━━*\n\nbonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe`)
        break   
    

case 'limituser': case 'userlimit': case 'limit':
            if (isBan) return reply(mess.banned)	 			
            if (isBanChat) return reply(mess.bangc)
            {      
               let txt = `「 *All User Limit* 」\n\n`
                 for (let i of _limit){
                 txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                 }
                reply(txt)       
              }
             break
    



case 'ringtone': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`Esempio: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		A17.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'film': case 'movie': case 'moviesearch':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	reply(mess.waiting)
if (!q) return reply(`Inserisci un termine di ricerca Film...\nEsempio: ${prefix}movie Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*Termine Di Ricerca:* ${q}\n\n`
			    for (let i of data) {
                krl += (`${prefix}----------------------------------------------------------------------------\n\n\n*Nome Film:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
                }
               A17.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break


case 'wallpaper': case 'animewallpaper': case 'animewall': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("Perfavore inserisci un termine da ricercare!")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*Termine Di Ricerca:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        A17.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'wikimedia': case 'wikiimage': {
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                if (!args.join(" ")) return reply("Quale figura stai cercando??")
		let { wikimedia } = require('./lib/scraper')
        anu = await wikimedia(args)
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Prossima Immagine'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: hasil.image },
            caption: `Titolo : ${hasil.title}\Sorgente : ${hasil.source}\nUrl : ${hasil.image}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        A17.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break

case 'quotesimagexxx': case 'qoutesimagexxx': case 'quoteimage':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
				   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   reply(mess.waiting)
				  A17.sendMessage(m.chat, { image: { url: cok }, caption: 'Here it is...' }, { quoted: m })
				  break

case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
		let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}quotesanime`, buttonText: {displayText: '>>'}, type: 1}
        ]
        let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
            footer: 'A17',
            buttons: buttons,
            headerType: 2
        }
        A17.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'animestory': { 
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  A17.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: BotName,
       title: OwnerName,
       buttonText: "Search Results",
       sections
      }, { quoted : m }
    )  
})
}
  break


  case 'grupsetting':
    case 'groupsetting':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`group open`,`leveling on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
            let comm = [`group close`,`leveling off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
            let listnya = [`Group open/close`,`Leveling on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`]
            let suruh = [`Abilita`, `Disabilita`]
            let fiturname = [`Group`,`Leveling`,`Auto Sticker`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Auto Revoke`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `Attivato ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `Disattivato ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  A17.sendMessage(
from, 
{
text: "Impostazioni Gruppo",
footer: BotName,
title: "Configura qui le impostazioni del tuo gruppo...",
buttonText: "Clicca Il Bottone",
sections
}, { quoted : m }
)  
}
break

/*
case 'animesearchxxx': case 'anime':{
    await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
    .then((res) => {
    let txt = `   _Anime Search Engine_ \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
    A17.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
    })
    }
    break
*/

case 'caffè': case 'kopi': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `${prefix}caffè`, buttonText: {displayText: '>>'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `Ecco il tuo caffè...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    A17.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'emojimix': {
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*Esempio :* ${prefix + command} 😊+🌹`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await A17.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'getcase':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break


 case 'emoji': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await A17.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Here it is...`}, {quoted:m})
await A17.sendMessage(from, {text:"reply -s to this image to make sticker"}, {quoted:mese})
})
}
break

/*
case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) return replay('How can i delete messages of other person? Baka!')
 A17.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
*/

 case 'deleteall': case 'delall': case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Perfavore rispondi a un messaggio Baka!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await A17.sendMessage(m.chat, { delete: key })
 }
 break



 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  A17's pm user list  」\n\nTotal ${anu.length} users are using A17 in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Europe/London").format("DD/MM/YYYY HH:mm:ss")}`
 }
 A17.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  Elenco degli utenti del gruppo di Hyplos  」\n\nTotal ${anu.length} gli utenti utilizzano il bot in Gruppi.`
 for (let i of anu) {
  let metadata = await A17.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 A17.sendTextWithMentions(m.chat, teks, m)
 }
 break
		
		
		
		
case 'listonline': case 'onlineora': case 'qui': case 'here':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 A17.sendText(m.chat, '  「 *Membri Online Ora* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
		
		
			
		
		
	case "pp": case "setdp":
      case "setbotpp":
        {
          if (!isCreator) return replay(mess.botowner);
          if (!quoted)
            return replay(`Invia/Rispondi immagine con didascalia ${prefix}setbotpp`);
          if (!/image/.test(mime))
          return replay(`Invia/Rispondi immagine con didascalia ${prefix}setbotpp`);
          if (/webp/.test(mime))
          return replay(`Invia/Rispondi immagine con didascalia ${prefix}setbotpp`);
          let media = await A17.downloadAndSaveMediaMessage(quoted);
          await A17.updateProfilePicture(botNumber, {
            url: media,
          }).catch((err) => fs.unlinkSync(media));
          replay(`*✨ ${pushname}...!! La mia foto proflo è stata aggiornata! ✨*`);
        }
         break;
		
		

		
		
		
		
		case 'status': case 'post': {
        if (!isCreator) return replay(mess.owner)
        if (!quoted) return replay(`Invia/Rispondi immagine con didascalia ${prefix}stato`)
        if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 30) return reply('È consentito un video di massimo 30 secondi!')
        }
        const messageType = Object.keys (m.message)[0]
        if (messageType === 'imageMessage') {
            const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
            await writeFile('./image.jpeg', media)
            await A17.sendMessage(botNumber, 'status@broadcast',  { url: './image.jpeg', media}).catch((err) => fs.unlinkSync(media))
           replay(`*✨ ${pushname}...!! Pubblicato sul mio stato ✨*`);
        }
        else if (messageType === 'videoMessage') {
            const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
            await writeFile('./video.mp4', media)
            await A17.sendMessage(botNumber, 'status@broadcast',  { url: 'video.mp4', media}).catch((err) => fs.unlinkSync(media))
		replay(`*✨ ${pushname}...!! Pubblicato sul mio stato ✨*`);
        }
        else {
            replay(`an error occurred`)
        }

 }
 break
		
		case 'speedtest': case 'speedcheck': {
             m.reply(`Perfavore Aspetta ${pushname} Testando la velocità... ⚙️`)
             let cp = require('child_process')
             let { promisify } = require('util')
             let exec = promisify(cp.exec).bind(cp)
           let o
           try {
           o = await exec('python speed.py')
           } catch (e) {
           o = e
          } finally {
         let { stdout, stderr } = o
         if (stdout.trim()) m.reply(stdout)
         if (stderr.trim()) m.reply(stderr)
             }
             }
             break
		
		
		
		
 case 'afk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} è ora lontano dalla tastiera.\nAFK Reason : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'fliptext': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${OwnerName}`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`「  Flipper Di Testo  」\`\`\`\n*Testo Input :*\n${quere}\n*Testo Flippato :*\n${flipe}`)
 }
 break

 case 'toletter': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!Number(args[0])) return replay(`Esempio:\n${prefisso}tolettera 956`)
 try {
 quere = args.join(" ")
 convertes = await toHur(quere)
 replay(`\`\`\`「  Creazione Parole  」\`\`\`\n*Numeri Input :*\n${quere}\n*Alfabeto Convertito :*\n${convertes}`)
 } catch {
 replay(`Errore!`)
 }
 }

   case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('Digita su *Abilita*\nDigita su *Disabilita*')
 if (args[0] === 'on'){
 if (isLeveling) return reply(`Già Attivato`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Livellamento Attivato')
 } else if (args[0] === 'off'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Livellamento Disattivato')
 } 
 break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLink) return replay('Già Attivato')
 ntilink.push(from)
 replay('Attivato _Antilink_ In questo gruppo.')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 Attenzione 」\`\`\`\n\nSistema AntiLink Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLink) return replay('Già Disattivato!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('Deactivated _Antilink_ in this group!')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Si prega di fare clic sul pulsante in basso On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeVid) return replay('Già Attivato')
 ntilinkytvid.push(from)
 replay('Antilink video youtube attivato !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 ATTENZIONE 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeVid) return replay('Già Attivato')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('Antilink video youtube disattivato!')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Si prega di fare clic sul pulsante in basso On / Off`, `${global.BotName}`, m)
   }
   }
   break



     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeChannel) return replay('Già Attivato')
 ntilinkytch.push(from)
 replay('Antilink canale youtube attivato !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 ATTENZIONE 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeChannel) return replay('Già Attivato')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('Antilink canale youtube disattivato !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Si prega di fare clic sul pulsante in basso On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkInstagram) return replay('Già Attivato')
 ntilinkig.push(from)
 replay('Antilink instagram attivato !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 ATTENZIONE 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkInstagram) return replay('Già Disattivato')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Antilink instagram Disattivato !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Si prega di fare clic sul pulsante in basso On / Off`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkFacebook) return replay('Già Attivato')
 ntilinkfb.push(from)
 replay('AntiLink Facebook Attivato !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 ATTENZIONE 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkFacebook) return replay('Già Disattivato')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('Antilink facebook disattivato !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Si prega di fare clic sul pulsante in basso On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTelegram) return replay('Già Attivato')
 ntilinktg.push(from)
 replay('Antilink telegram attivato !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 ATTENZIONE 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTelegram) return replay('Già Disattivato')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Telegram antilink disattivato in questo gruppo')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Si prega di fare clic sul pulsante in basso On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTiktok) return replay('Già Attivato')
 ntilinktt.push(from)
 replay('Tiktok antilink attivato !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 Attenzione 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTiktok) return replay('Già Disattivato')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('Antilink tiktok disattivato !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Fare clic sul pulsante in basso\n\nOn per abilitare\nOff per disabilitare`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Già Attivato')
 ntilinktwt.push(from)
 replay('Twitter antilink attivato in questo gruppo !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 ATTENZIONE 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTwitter) return replay('Già Disattivato')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('Antilink Twitter disattivato !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Fare clic sul pulsante in basso\n\nOn per abilitare\nOff per disabilitare`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Già Attivato')
 ntilinkall.push(from)
 replay('Abilitato AntiLink Per Tutto !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 ATTENZIONE 」\`\`\`\n\nAntilink System Attivato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Già Disattivato')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabilitato tutto l\'antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntilink, `Fare clic sul pulsante in basso\n\nOn per abilitare\nOff per disabilitare`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (antiWame) return replay('Già Attivato')
 ntwame.push(from)
 replay('Attivato antiwame !')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`*「  ATTENZIONE  」*\`\`\`\n\nAntilink Abilitato!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!antiWame) return replay('Già Disattivato')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Disattivato antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `${prefix}antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntwame, `Fare clic sul pulsante in basso\n\nOn per abilitare\nOff per disabilitare`, `${global.BotName}`, m)
   }
   }
   break


   case 'nsfw': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiNsfw) return replay('Già Attivato')
 ntnsfw.push(from)
 replay('Abilitati Comandi NSFW!')
 var groupe = await A17.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 A17.sendMessage(from, {text: `\`\`\`「 Avvertimento 」\`\`\`\n\nLa funzione NSFW (non sicura per il lavoro) è stata abilitata in questo gruppo, il che significa che chiunque qui può accedere ai comandi per adulti!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiNsfw) return replay('Già Attivato')
 let off = ntnsfw.indexOf(from)
 ntnsfw.splice(off, 1)
 replay('Comandi NSFW Disabilitati!')
 } else {
   let buttonsntnsfw = [
   { buttonId: `${prefix}nsfw on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}nsfw off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await A17.sendButtonText(m.chat, buttonsntnsfw, `Fare clic sul pulsante in basso\n\nOn per abilitare\nOff per disabilitare`, `${global.BotName}`, m)
   }
   }
   break


   case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Seleziona add o del (add per bannare, del er unbannare), Ad esempio: Rispondi *${prefix}ban add* all'utente che vuoi bannare.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('L\'User è stato già Bannato.')
banUser.push(orgnye)
replay(`L\'user è stato bannato con Successo.`)
} else if (args[0] === "del") {
if (!isBane) return ads('L\'User è già stato UnBannato.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`User UnBannato con Successo.`)
} else {
replay("Errore")
}
}
break


case 'listonline': case 'online': case 'qui':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 A17.sendText(m.chat, '  「 *Membri Online* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break

 case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Selezionare add o del (add per bannare, del per unbannare), Ad esempio: Rispondi *${prefix}ban add* all'utente che vuoi bannare.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('L\'utente era già stato Bannato.')
banUser.push(orgnye)
replay(`Utente bannato con successo`)
} else if (args[0] === "del") {
if (!isBane) return ads('L\'utente era già stato UnBannato.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Sbannato con successo l'utente.`)
} else {
replay("Errore")
}
}
break


case 'happymod': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Esempio : ${prefix + command} Kinemaster`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```「 HappyMod Motore Di Ricerca 」```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨ Menu ✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 A17.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break
 case 'yts': case 'ytsearch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Esempio : -yts Heat waves`)
 let yts = require("@adiwajshing/keyed-db2")
 let search = await yts(args.join(" "))
 let teks = '```「 Ricerca YouTube 」```\n\n Termine Di Ricerca: '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `Risultato No : ${no++}\n\nTitolo : ${i.title}\n\nVisualizzazioni : ${i.views}\n\nDurata : ${i.timestamp}\n\nCaricamenti : ${i.ago}\n\nAutore : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 A17.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break 

 case 'setname': case 'setsubject': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Immettere -setname <Nuovo nome gruppo> per modificare questo nome gruppo')
 await A17.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

case 'block': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await A17.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

case 'unblock': {
            if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await A17.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

 case 'setdesc': case 'setdesk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Immettere -setname <New Group Description> per modificare questa descrizione del gruppo.')
 await A17.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`Invia/Rispondi immagine con didascalia ${prefix + command}`)
 if (!/image/.test(mime)) return replay(`Invia/Rispondi immagine con didascalia ${prefix + command} per cambiare l'immagine del profilo di questo gruppo.`)
 if (/webp/.test(mime)) return replay(`Invia/Rispondi immagine con didascalia ${prefix + command} per cambiare l'immagine del profilo di questo gruppo.`)
 let media = await A17.downloadAndSaveMediaMessage(quoted)
 await A17.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 case 'tag': case 'taggatutti': case 'tagall': case 'all':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `「 ATTENZIONE 」
  
 *Messaggio : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
 for (let mem of participants) {
 teks += `» @${mem.id.split('@')[0]}\n`
 }
 A17.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break

 case 'hidetag': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 A17.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break

		
		
		
		
		
		
		case'tagadmins': case 'admins': case 'admin': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!text) return replay(`*Si prega di citare o scrivere un messaggio significativo a cui taggare gli amministratori*`)
 let teks = `*「 Tag Admins 」*
  
 *Message : ${text}*\n\n`
 for (let mem of groupAdmins) {
 teks += `🎀 @${mem.split('@')[0]}\n`
 }
 A17.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
 }
 break
		
		
		
		
		
		
		
		
		
		
/*
     case 'purge':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)

        const delay = time => new Promise(res=>setTimeout(res,time));

        let users = (await A17.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
        for (let user of users){

            await A17.groupParticipantsUpdate(m.chat, [user], 'remove')
            await delay(3000)
        }
    }
     break

*/

case 'purge':{mess
    if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
const delay = time => new Promise(res=>setTimeout(res,time));
let mentioned = participants.map(v => v.jid)
      for (let member of mentioned) {     
      A17.groupParticipantsUpdate(m.chat, [member], 'remove')
      }
    }

    break




    case 'nowa':  case 'stalk': case 'stalknumber':{
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply(`Usa comandi come: ${prefix}stalk <numero>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('Non hai aggiunto x')
        reply(`Ricerca dell'account WhatsApp in un determinato intervallo...`)
        reply(`Attendi mentre recupero i dettagli...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var nomerny = `*『 Lista Numeri Whatsapp 』*\n\n`
        var nobio = `\n*Descrizione:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numeri senza account WhatsApp all'interno dell'intervallo che hai fornito*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await A17.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await A17.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `🖤 *Numero:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Descrizione :* ${anu1.status}\n🔸 *Aggiornato A :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
        }
        break







 case 'grouplink': case 'gclink': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await A17.groupInviteCode(m.chat)
 A17.sendMessage(m.chat, {text:`*Nome Gruppo:* *${groupMetadata.subject}* \n\n*Link Gruppo :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'revoke':
    case 'resetlink':
    case 'resetgrouplink':
    case 'resetgclink':
    case 'resetgruplink': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    A17.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'grup': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await A17.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Il gruppo è stato chiuso!`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await A17.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Il gruppo è stato aperto!`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: '-group open', buttonText: { displayText: 'Open' }, type: 1 },
     { buttonId: '-group close', buttonText: { displayText: 'Close' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     A17.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'promote': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await A17.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'demote': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await A17.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'remove':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await A17.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break


     case 'join': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`Dov'è il Link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalido!")
     if (isCreator) {
     await A17.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Successo!")
     } else {
     A17.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Siamo spiacenti,sono necessari minimo 20 membri in un gruppo per aggiungere bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916909137213@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await A17.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Entrato !")
     } else {
     replay("Errore")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'volume': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
     media = await A17.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     A17.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     A17.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("Si prega di inviare solo file video/audio!")
     }
     }
     break

     case 'tempo': {
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
        if (!args.join(" ")) return reply(`Esempio: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await A17.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        A17.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else if (isQuotedVideo) {
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        A17.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else {
        reply("Si prega di inviare solo file video/audio!")
        }
        }
        break

        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
            try {
            let set
            if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
            if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/reverse/.test(command)) set = '-filter_complex "areverse"'
            if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await A17.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(err)
            let buff = fs.readFileSync(ran)
            A17.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })
            } else reply(`Si prega di menzionare l'audio che si desidera modificare _${prefix + command}_`)
            } catch (e) {
            reply(e)
            }
            break


case 'calculator': case 'cal': case 'calculate':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*Esempio :*\n${prefix}calculator 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Calcolatrice_ 」\`\`\`\n\n*Input :* ${qsd}\n*Risultato :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'public': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 A17.public = true
 reply('Ora sono pubblicamente accessibile!')
 A17.setStatus(`Mode : Public`)
 }
 break
 
 case 'self': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 A17.public = false
 reply('Solo il proprietario può usarmi ora!')
 A17.setStatus(`Mode : Self`)
 }
 break


case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Adesivo di risposta con didascalia *${prefix + command}*`)
reply(mess.waiting)
let media = await A17.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
A17.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'tomp4': case 'tovideo': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Adesivo di risposta con didascalia *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await A17.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await A17.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Ecco qua...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'toaud': case 'toaudio': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Invia/rispondi a video/audio che desideri utilizzare come audio con didascalia ${prefix + command}`)
 if (!m.quoted) return reply(`Invia/rispondi a video/audio che desideri utilizzare come audio con didascalia ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 A17.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break

case 'tomp3': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (/document/.test(mime)) return reply(`Invia/Rispondi video/audio che desideri convertire in MP3 con didascalia ${prefix + command}`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Invia/Rispondi video/audio che desideri convertire in MP3 con didascalia ${prefix + command}`)
 if (!m.quoted) return reply(`Invia/Rispondi video/audio che desideri convertire in MP3 con didascalia ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 A17.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convertito Da ${global.BotName} (${m.id}).mp3`}, { quoted : m })
 }
break


case 'togif': case 'getgif':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Adesivo di risposta con didascalia *${prefix + command}*`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await A17.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await A17.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convertito da Webp a Gif' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'tourl': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 reply(mess.wait)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await A17.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break


 case 'owner': case 'creator': case 'mod': case 'mods':{
    A17.sendContact(m.chat, global.Owner, m)
    }
    break

case 'translate': case 'trans': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("Perfavore inserire qualsiasi testo da tradurre")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTraduzione : ${Infoo}`)
    }
    break


case 'gimage': case 'gig': case 'googleimage':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("Inserisci un termine di ricerca per ottenere Google Image!")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `「 _Google Cerca Immagini_ 」

_Search Term_ : ${text}
_Media Url_ : ${images}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'google': case 'search': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `「 *Google Ricerche* 」\n\n*Termine di Ricerca:* ${text}\n\n\n`
 for (let g of res) {
 teks += `*Titolo* : ${g.title}\n\n`
 teks += `*Descrizione* : ${g.snippet}\n\n`
 teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break

 case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
 try {
 hx.igdl(args[0]).then(async(resed) => {
 ini_anu = []
 anu_list = []
 textbv = `「 _Instagram Downloader_ 」\n\nNome Utente : ${resed.user.username ? resed.user.name : "undefined"}\nFollowers : ${resed.user.followers}`
 urut = 1
 for (let i = 0; i < resed.medias.length; i++) {
 ini_anu.push({
  "type": resed.medias[i].fileType,
  "url": resed.medias[i].url
 })
 }
 ilod = 1
 for (let i of ini_anu) {
 anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
 }
 textbv += `\n\n_Selezionare il media di seguito per il download_`
 let buttons = anu_list
 let buttonMessage = {
 image:BotLogo,
 jpegThumbnail:Thumb,
 caption: textbv,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 A17.sendMessage(from, buttonMessage, {quoted:m})
 })
 } catch (err) {
 reply("C'è stato un errore!")
 }
 }
 break

 case 'ig': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
A17.sendMessage(from, {video:{url:args[1]}, caption:'Ecco qua...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
A17.sendMessage(from, {image:{url:args[1]}, caption:'Ecco qua...'}, {quoted:m})
} else {
reply("Errore! ")
}
}
break

case 'mp4' : {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Perfavore fornisci un Link!`)
try {
A17.sendMessage(from, {video:{url:args[0]}, caption:"Successo!", contextInfo:{externalAdReply:{
title:`${global.BotName}`,
body:`${global.OwnerName}`,
thumbnail: BotLogo,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Perfavore fornisci un Link!`)
 try {
 A17.sendMessage(from, {image:{url:args[0]}, caption:"Successo!"}, {quoted:m})
 } catch {
 reply("Link error")
 }
 }
 break

 case 'igtv': {	            
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
                 if (!text) return reply(`Perfavore fornisci un Link!`)
                 const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
                 instagramdlv3(`${text}`).then(async (data) => {            
                 var buf = await getBuffer(data[0].thumbnail)        
                 A17.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break
             
case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Perfavore fornisci un Link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `「 _Twitter Downloader_ 」\n\n`
                    txt += `*Titolo :* ${data.title}\n`
                    txt += `*Qualità :* ${data.medias[1].quality}\n`
                    txt += `*Tipo :* ${data.medias[1].extension}\n`
                    txt += `*Grandezza :* ${data.medias[1].formattedSize}\n`
                    txt += `*Durata :* ${data.medias.length}\n`
                    txt += `*URL :* ${data.url}\n\n`
                    txt += `*${BotName}*`
                buf = await getBuffer(data.thumbnail)    
                A17.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                A17.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break

case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Perfavore fornisci un Link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {
                A17.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break

case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `「 _Twitter Downloader_ 」
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}
_Perfavore scegli la qualità del video_`
let buttons = [
{buttonId: `${prefix}twitter ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefix}twitter ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link Error!")
}
}
break

case 'twddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Ecco qua...",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 A17.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
              if (!text) return reply(`Perfavore fornisci un Link!\n\nEsempio: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                 if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
             let bocil = require('@bochilteam/scraper')  
                 bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                     let txt = `「 _Facebook Downloader_ 」\n\n`
                     txt += `*Titolo :* ${data.title}\n`
                     txt += `*Qualità :* ${data.result[0].quality}\n`
                     txt += `*Descrizione:* ${data.description}\n`
                     txt += `*URL :* ${text}\n\n`
                 buf = await getBuffer(data.thumbnail)    
                 A17.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                 for (let i of data.result) {     
                 A17.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Qualità :* ${i.quality}`}, { quoted: m })
                 }          
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break

case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                  if (!text) return reply(`Perfavore fornisci un Link!\n\nEsempio: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  A17.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break


case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Esempio :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `「 _Facebook Downloader_ 」
Tipo : video/${resd.medias[0].extension}
Qualità : ${resd.medias[0].quality}
Spazio : ${resd.medias[0].formattedSize}
_Clicca il bottone qui sotto per scaricare_`
let buttons = [
{buttonId: `${prefix}fbdl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break

case 'fbddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Fatto!",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 A17.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'tiktok':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Perfavore fornisci un Link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Invalid tiktok link!`)
 const musim_rambutan = await A17Tiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const A17tiktokop = musim_rambutan.result.watermark
texttk = `_Perfavore scegli il bottone qui sotto_`
let buttons = [
{buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'Watermark Free'}, type: 1},
{buttonId: `${prefix}ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:A17tiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
A17.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktoknowm': case 'ttnowm':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Perfavore fornisci un Link!')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Questo non è un link di TikTok!`)
 const musim_rambutan = await A17Tiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const A17tiktoknowm = musim_rambutan.result.nowatermark
  A17.sendMessage(from, { video: { url: A17tiktoknowm }, caption: "Ecco qua..." }, { quoted: m })
 }
break

case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Dov\'è l\'audio?')
if (!q.includes('tiktok')) return reply(`Questo non è un link di TikTok!`)
 const musim_rambutan = await A17Tiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const A17tiktokaudio = musim_rambutan.result.nowatermark
  A17.sendMessage(from, { audio: { url: A17tiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
 }
break
case 'music': case 'p': case 'play': case 'song': case 'ytplay': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
 const { isUrl, fetchBuffer } = require('./lib/Function')

 if(!text) return A17.sendMessage(from,{text:"Perfavore scrivi il titolo della canzone che vuoi!"},{quoted:m})
 let yts = require("@adiwajshing/keyed-db2")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `${prefix}ytad ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `${prefix}ytvd ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  HyPlos Youtube Player 2.0  」

✨ *Titolo :* ${anu.title}

⏳ *Durata :* ${anu.timestamp}

📈 *Visualizzazioni :* ${anu.views}

📍 *Caricamenti :* ${anu.ago}

🎐 *Canale :* ${anu.author.name}

🔗 *Url :* ${anu.url}`,
	 
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 A17.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
 case 'ytad': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    let yts = require("@adiwajshing/keyed-db2")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    
 await A17.sendMessage(from, {document: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break 
 case 'ytvd': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    let yts = require("@adiwajshing/keyed-db2")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp4play = await YT.mp4(anu.url)
 A17.sendMessage(from, {video:{url:ytmp4play.videoUrl}, mimetype:"video/mp4", caption:anu.title+' By *A17 MD*',}, {quoted:m})
 }
 break
 case 'ytmp3': case 'ytmusic':  case 'ytmp4': case 'ytvideo': case 'ytdl':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(mess.nolink)

 const YT=require('./lib/ytdlcore')
 if(!text) return A17.sendMessage(from,{text:"Perfavore fornisci un Link YouTube Valido!"},{quoted:m})
 let yts = require("@adiwajshing/keyed-db2")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `${prefix}ytad2 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `${prefix}ytvd2 ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  HyPlos Youtube Downloader 2.0  」

✨ *Titolo :* ${anu.title}

⏳ *Durata :* ${anu.timestamp}
👀 *Visualizzazioni :* ${anu.views}
📍 *Caricamenti :* ${anu.ago}
🎐 *Canale :* ${anu.author.name}
🔗 *Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 A17.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break 
 case 'ytad2': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    const ytmp3play2 = await YT.mp3(text)
    
 await A17.sendMessage(from, {document: fs.readFileSync(ytmp3play2.path),fileName:'A17_YTmp3_Downloader.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break

 case 'ytvd2': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    const ytmp4play2 = await YT.mp4(text)
 A17.sendMessage(from, {video:{url:ytmp4play2.videoUrl}, mimetype:"video/mp4", caption:'Downloaded by *A17 MD*',}, {quoted:m})
 }
 break


case 'couplepp': case 'cpp': case 'ppcouple': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         reply(mess.waiting)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         A17.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m })
         A17.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m })
     }
 break



case 'pinterest': case 'pin': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("Perfavore fornisci un Termine Di Ricerca!")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Titolo : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 A17.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Errore")
 }
 }
 break



case 'swm': case 'take': case 'stickerwm': case 'steal':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply(`Usa il comando: -steal Hyplos|By: plo19 - hypnos`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
A17.downloadAndSaveMediaMessage(quoted, "gifee")
A17.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await A17.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Sono consentiti massimo 10 secondi!')
let media = await quoted.download()
let encmedia = await A17.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Invia immagine/video con didascalia ${prefisso + comando}\nLa durata del video è consentita da 1 a 9 secondi!`)
}
}
break




case 'smeme': case 'stickermeme': case 'stickmeme': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Invia/rispondi a foto con didascalia ${prefisso + comando} *testo*`)
if (text.includes('|')) return reply(`Invia/rispondi a foto con didascalia ${prefisso + comando} *testo*`)
if (!/image/.test(mime)) return reply(`Invia/rispondi a foto con didascalia ${prefisso + comando} *testo*`)
reply(mess.wait)
mee = await A17.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await A17.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break

case 'sgif': case 'sticker': case 's': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await A17.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('Massimo 10 secondi!')
 let media = await quoted.download()
 let encmedia = await A17.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`Invia immagine/video con didascalia ${prefisso + comando}\nDurata video 1-9 secondi`)
 }
 }
 break

case 'wiki':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply('Che cosa sta cercando?? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('Risultato errore non trovato!') 
}) 
const result2 = `*Titolo :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
A17.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break

case 'earthquake':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Tempo : ${Waktu}\nLatitudine : ${Lintang}\nLongitudine : ${Bujur}\nRegione : ${Wilayah}`
A17.sendMessage(from, { image : { url : Map }, caption : captt})
break

case 'covidinfo':
case 'covid':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
A17.sendMessage(from, {text : `Casu : ${kasus}\n\nMorti : ${kematian}\n\nGuariti : ${sembuh}`}, m)
break


case 'couple': case 'ship': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ohh Vedo 👀💖...`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'Congratulazioni ❤️' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttons, jawab, A17.user.name, m, {mentions: menst})
}
break

case 'soulmate': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫 Ship
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'Fai la mia Ship ❤️' }, type: 1 }
]
await A17.sendButtonText(m.chat, buttons, jawab, A17.user.name, m, {mentions: ments})
}
break

case 'handsomecheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tagga Qualcuno, Esempio : ${prefix + command} @plo19`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
A17.sendMessage(from, { text: `*${command}*\n\nNome : ${q}\nRisposta : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tagga Qualcuno, Esempio : ${prefix + command} @plo19`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
A17.sendMessage(from, { text: `*${command}*\n\nNome : ${q}\nRisposta : *${tik}%*` }, { quoted: m })
					break

case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
                        if (isBan) return reply(mess.banned)
                        if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tagga Qualcuno, Esempio : ${prefix + command} @plo19`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
A17.sendMessage(from, { text: `*${command}*\n\nNome : ${q}\nRisposta : *${sange}%*` }, { quoted: m })
					break


case 'charactercheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
					if (!text) return replay(`Tagga Qualcuno, Esempio : ${prefix + command} @plo19`)
					const A17tttt =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = A17tttt[Math.floor(Math.random() * A17tttt.length)]
					A17.sendMessage(from, { text: `Controllo caratteri: ${q}\nRisposta: *${taky}*` }, { quoted: m })
				     break
                   
 case 'dare':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                   const dare =[
         "mangiare 2 cucchiai di riso senza contorno, se si trascina si può bere",
         "lascia perdere le persone che ti fanno fare delle pause",
         "chiama subito crush/pickle e invia ss",
         "lascia cadere solo l'emote ogni volta che scrivi su gc/pc per 1 giorno",
         "Dite Benvenuti a Chi vuol essere milionario! a tutti i gruppi che avete",
         "chiama l'ex dicendo "signorina"",
         "canta il ritornello dell'ultima canzone che hai suonato",
         "vn la tua ex/cricca/ragazza, dice ciao (nome), vuole chiamare, solo un momento. IO miss🥺👉🏼👈🏼",
         "Sbattere sul tavolo (che è a casa) finché non si viene sgridati perché si è rumorosi",
         "Dite a persone a caso: prima mi hanno detto che ero la tua gemella, ci siamo separate, poi mi sono sottoposta a un intervento di chirurgia plastica. E questa è la cosa più ciyusss_",
         "menzionare il nome dell'ex",
         "fai 1 rima per i membri!",
         "invia la tua lista di chat whatsapp",
         "chatta con persone a caso con il linguaggio gheto e poi ss qui",
         "racconta la tua versione di cose imbarazzanti",
         "tagga la persona che odi",
         "Fingere di essere posseduto, ad esempio: posseduto dal cane, posseduto dalle cavallette, posseduto dal frigorifero, ecc,
         "cambiare nome in *Sono un cane* per 24 ore",
         "gridare *ma chuda ma chuda ma chuda* davanti a casa tua",
         "Scattare/pubblicare foto del fidanzato/crush",
         "Dimmi il tuo tipo di ragazzo!",
         "Dite *mi sono preso una cotta per te, vuoi essere la mia ragazza?* al sesso opposto, l'ultima volta che avete chattato (inviate su wa/tele), aspettate che risponda, se l'avete fatto, lasciate un messaggio qui",
         "registra la tua voce che recita *titar ke age do titar, titar ke piche do titar*",
         "Fai uno scherzo all'ex e digli *ti amo, per favore torna.* senza dire osa!",
         "chatta per contattare wa nell'ordine in base alla tua percentuale di batteria, poi digli *sono fortunato ad averti!*",
         "cambia il nome in *sono un figlio di randi* per 5 ore",
         "Scrivi in bengalese per 24 ore",
         "Usa la foto di selmon bhoi per 3 giorni",
         "citare una canzone e taggare un membro adatto per quella citazione",
         "Invia una nota vocale dicendo: "Posso chiamarti baby?",
         "Chiamate recenti su whatsapp",
         "Dire *Sei così bella non mentire* ai ragazzi!",
         "Fai un salto da un membro del gruppo e mandalo a quel paese",
         "Comportati come un pollo davanti ai tuoi genitori",
         "Prendi un libro a caso e leggi una pagina ad alta voce in vn e mandala qui",
         "Aprire la porta di casa e ululare come un lupo per 10 secondi",
         "Scatta un selfie imbarazzante e incollalo sulla foto del tuo profilo",
         "Lasciate che il gruppo scelga una parola e una canzone ben nota. Dovete cantare quella canzone e inviarla con una nota vocale",
         "Camminare sui gomiti e sulle ginocchia il più a lungo possibile",
         "Cantare l'inno nazionale in nota vocale",
         "Breakdance per 30 secondi in salotto😂",
         "Racconta la storia più triste che conosci",
         "Fai un video di twerk dance e mettilo sullo status per 5 minuti",
         "Mangiare un pezzo di aglio crudo",
         "Mostra le ultime cinque persone con cui hai messaggiato e cosa dicevano i messaggi",
         "Metti il tuo nome completo sullo status per 5 ore",
         "Fai un breve video di danza senza alcun filtro solo con la musica e mettilo sul tuo stato per 5 ore",
         "chiama la tua migliore amica, stronza",
         "Metti la tua foto senza filtro sul tuo stato per 10 minuti",
         "Di' che amo oli london con la voce note🤣🤣",
         "Manda un messaggio al tuo ex e digli che mi piaci ancora",
         "Chiama subito la tua cotta/fidanzata/amicizia e fai uno screenshot qui",
         "Vai nella chat personale di uno dei membri del gruppo e dì che sei un brutto bastardo",
         "Dì che SEI BELLA/HANDSOME a una delle persone che sono in cima alla tua pinlist o alla prima persona della tua chatlist",
         "inviare note vocali e dire, posso chiamarti baby, se sei ragazzo tagga ragazza/se ragazza tagga ragazzo",
         "scrivete i love you (nome di un membro del gruppo a caso, che è online) nella chat personale, (se siete ragazzi scrivete il nome di una ragazza/se siete ragazze scrivete il nome di un ragazzo) fate uno scatto della foto e inviatela qui",
         "usa una foto di un qualsiasi attore di Bollywood come pfp per 3 giorni",
         "Metti la foto della tua cotta nello status con la didascalia, questa è la mia cotta",
         "Cambia il tuo nome in I AM GAY per 5 ore",
         "Chatta con qualsiasi contatto su whatsapp e dì che sarò il tuo bf/gf per 5 ore",
         "inviare una nota vocale che dice che ho una cotta per te, vuoi essere la mia ragazza/il mio ragazzo o no? a una persona a caso del gruppo (se sei una ragazza scegli il ragazzo, se il ragazzo scegli la ragazza",
         "schiaffeggia il tuo sedere e difficilmente invia il suono dello schiaffo attraverso la nota vocale😂",
         "dichiarate il vostro tipo di fidanzato/a e inviate la foto qui con la didascalia, la ragazza/il ragazzo più brutto del mondo",
         "grida bravooooooooo e invia la foto qui attraverso una nota vocale",
         "Scatta la tua faccia e inviala qui",
         "Invia la tua foto con la didascalia, sono lesbica",
         "urla usando parole dure e mandale qui tramite vn",
         "urla che sei un bastardo davanti a tua madre/papà",
         "Cambia il nome in "Sono un idiota" per 24 ore",
         "schiaffeggiati con forza e invia il suono dello schiaffo attraverso la nota vocale😂",
         "dire che amo il proprietario del bot Kai attraverso una nota vocale",
         "Invia qui la foto del tuo fidanzato o fidanzata",
         "Fai un qualsiasi video di sfida di danza tiktok e mettilo nello status, puoi cancellarlo dopo 5 ore",
         "rompi con il tuo migliore amico per 5 ore senza dirgli che è una sfida",
          "Di' a uno dei tuoi amici che lo ami e che vuoi sposarlo, senza dirgli che è una sfida",
          "dire che amo depak kalal attraverso una nota vocale",
          "Scrivi che mi sento arrapato e mettilo sullo status, puoi cancellarlo solo dopo 5 ore",
          "Scrivi che sono lesbica e mettilo sullo status, puoi cancellarlo solo dopo 5 ore",
          "Bacia la tua mamma o il tuo papà e dì che ti amo😌",
          "Metti il nome di tuo padre sullo status per 5 ore",
          "invia parole offensive in qualsiasi gruppo, tranne questo gruppo, e invia la prova dello screenshot qui".
     ]
                   const A17dareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://wallpapercave.com/wp/wp10524609.jpg`)
                   A17.sendMessage(from, { image: buffer, caption: '*You have chosen Dare*\n\n'+ A17dareww }, {quoted:m})
                   break
                       

case 'truth':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                           const truth =[
"Ti è mai piaciuto qualcuno? Da quanto tempo?",
                 "Se puoi o se vuoi, con quale gc/esterno faresti amicizia? (magari diverso/stesso tipo)",
                 "apa ketakutan terbesar kamu?",
                 "Ti è mai piaciuto qualcuno e hai sentito che anche tu piaci a quella persona?",
                 "Come si chiama l'ex ragazza di un tuo amico che ti piaceva di nascosto?",
                 "Hai mai rubato dei soldi a tuo padre o a tua madre? Il motivo?",
                 "Cosa ti rende felice quando sei triste?",
                 "Hai mai avuto un amore a senso unico? Se sì, chi? Come ci si sente, fratello?", 
                 "Sei mai stato l'amante di qualcuno?",
                 "La cosa più temuta",
                 "Chi è la persona più influente nella tua vita?",
                 "Che cosa ti ha reso orgoglioso quest'anno?", 
                 "Chi è la persona che può renderti fantastico", 
                 "Chi è la persona che ti ha reso molto felice?", 
                 "Chi si avvicina di più al tuo tipo di partner ideale", 
                 "Con chi ti piace giocare?", 
                 "Hai mai rifiutato delle persone? E perché?",
                 "Cita un episodio che ti ha fatto soffrire e che ancora ricordi", 
                 "Quali risultati hai ottenuto quest'anno?",
                 "Qual è la tua peggiore abitudine a scuola?",
                 "Qual è la canzone che canti di più sotto la doccia?",
                 "Hai mai avuto un'esperienza di pre-morte?",
                 "Quando è stata l'ultima volta che ti sei arrabbiato veramente? Perché?",
                 "Chi è l'ultima persona che ti ha chiamato",
                 "Hai dei talenti nascosti, quali sono?",
                 "Qual è la parola che odi di più?",
                 "Qual è l'ultimo video di YouTube che hai guardato?",
                 "Qual è l'ultima cosa che hai cercato su Google",
                 "Con chi di questo gruppo vorresti scambiare la vita per una settimana",
                 "Qual è la cosa più spaventosa che ti sia mai capitata",
                 "Hai mai scoreggiato dando la colpa a qualcun altro",
                 "Quando è stata l'ultima volta che hai fatto piangere qualcun altro",
                 "Hai mai fatto il ghosting di un amico",
                 "Hai mai visto un cadavere",
                 "Quale membro della tua famiglia ti infastidisce di più e perché",
                 "Se dovessi cancellare un'app dal tuo telefono, quale sarebbe?",
                 "Su quale app perdi più tempo",
                 "Hai mai finto di essere malato per tornare a casa da scuola",
                 "Qual è l'oggetto più imbarazzante nella tua stanza",
                 "Quali sono i cinque oggetti che porteresti con te se fossi bloccato su un'isola deserta",
                 "Hai mai riso così tanto da farti la pipì addosso?",
                 "Senti l'odore delle tue scoregge",
                 "Hai mai fatto la pipì sul letto mentre dormivi?",
                 "Qual è l'errore più grande che hai commesso",
                 "Hai mai imbrogliato in un esame?",
                 "Qual è la cosa peggiore che hai fatto",
                 "Quando è stata l'ultima volta che hai pianto",
                 "Chi ami di più tra i tuoi genitori", 
                 "A volte metti il dito nel naso", 
                 "chi era la tua cotta ai tempi della scuola",
                 "Dimmi sinceramente se ti piace qualche ragazzo di questo gruppo",
                 "Ti è mai piaciuto qualcuno? Da quanto tempo?",
                 "hai un fidanzato/un fidanzato", "qual è la tua più grande paura?",
                 "Ti è mai piaciuto qualcuno e hai sentito che anche tu piaci a quella persona?",
                 "Come si chiama il tuo ex ragazzo o il tuo amico che una volta ti piaceva tranquillamente?",
                 "Hai mai rubato i soldi di tua madre o di tuo padre?",
                 "cosa ti rende felice quando sei triste",
                 "Ti piace qualcuno che fa parte di questo gruppo? Se sì, chi?",
                 "Sei mai stato tradito da qualcuno?",
                 "chi è la persona più importante della tua vita",
                 "quali cose orgogliose hai ricevuto quest'anno",
                 "chi è la persona che può renderti felice quando sei triste",
                 "chi è la persona che ti ha mai fatto sentire a disagio",
                 "hai mai mentito ai tuoi genitori",
                 "ti piace ancora il tuo ex",
                 "Con chi ti piace giocare insieme?",
                 "Hai mai rubato qualcosa di importante nella tua vita? E perché?",
                 "Cita l'incidente che ti ha fatto soffrire e che ancora ricordi",
                 "Quali risultati hai ottenuto quest'anno?",
                 "Qual è stata la tua peggiore abitudine a scuola?",
                 "Ami il creatore di bot Kai?",
                 "Hai mai pensato di vendicarti del tuo insegnante?",
                 "Ti piace l'attuale primo ministro del tuo Paese?",
                 "Non sei vegano o vegano",
                 "se potessi essere invisibile, qual è la prima cosa che faresti",
                 "qual è il segreto che hai tenuto nascosto ai tuoi genitori",
                 "Chi è la tua cotta segreta",
                 "Chi è l'ultima persona che hai infastidito sui social media",
                 "Se un genio ti concedesse tre desideri, cosa chiederesti",
                 "Qual è il tuo più grande rimpianto",
                 "A quale animale pensi di assomigliare di più",
                 "Quanti selfie ti fai al giorno",
                 "Qual era il tuo programma d'infanzia preferito",
                 "Se potessi essere un personaggio di fantasia per un giorno, chi sceglieresti",
                 "A chi mandi più messaggi",
                 "Qual è la più grande bugia che hai detto ai tuoi genitori",
                 "Chi è la tua cotta per le celebrità",
                 "Qual è il sogno più strano che hai fatto",
                 "giochi a pubg, se si allora invia il tuo numero di id".
             ]
                           const A17truthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://wallpapercave.com/wp/wp10524609.jpg`)
                           A17.sendMessage(from, { image: buffer, caption: '*You have chosen Truth*\n'+ A17truthww }, {quoted:m})
                           break



case 'nsfwA17':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
A17.sendMessage(from, {image:{url:nye}, caption:"Master..."}, {quoted:m})
break

case 'mediafire': case 'mediafiredl': {
	if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Il link che hai fornito non è valido`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File oltre il limite* '+util.format(baby1))
const result4 = `「  *Mediafire Downloader*  」
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
A17.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break

case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!AntiNsfw) return reply(mess.nonsfw)
try{
reply(mess.waiting)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
A17.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Errore")}	
break

case 'spank':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await A17.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Errore!')
                                    })
break

case 'blowjobgif': case 'bj' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await A17.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break

case 'hentaivid': case 'hentaivideo': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
A17.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Titolo : ${result912.title}\nCategoria : ${result912.category}\n$Mimetype : ${result912.type}\nVisualizzazioni : ${result912.views_count}\nCondivisioni : ${result912.share_count}\nSorgente : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `${prefix}trap`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ecco Qui...`,
  buttons: trapbot,
  headerType: 1
  }     
            await A17.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Errore!')
                })
break

case 'hentai-neko' :
case 'hneko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Uaaah...`,
  buttons: hnekobot,
  headerType: 1
  }      
            await A17.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Errore!')
                })
break

case 'hentai-waifu' :
case 'hwaifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ecco Qui...`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await A17.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Errore!')
                })
break

case 'gasm':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `${prefix}gasm`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Ecco Qui...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await A17.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Errore!')
                })
break  


case 'smug2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `${prefix}smug2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Ecco Qui...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await A17.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Errore!')
                })
break

case 'foxgirl':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `${prefix}foxgirl`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Awooo...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await A17.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Errore!')
                })
break   

case 'animenom' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `${prefix}animenom`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ecco Qua...`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await A17.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Errore!')
                })
break

case 'waifu3':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `${prefix}waifu3`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Ecco Qua...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await A17.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Errore!')
                })
break



case 'crossplay': case 'crosplay': case 'cosplay':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                const buttons = [
        {buttonId: '-crossplay', buttonText: {displayText: '>>'}, type: 1},
            ]               
        const cosplybutton = {
        image: {url: 'https://hanzz-web.herokuapp.com/api/randomimage/cosplay'},
        caption: "Indovina chi sono...",
        footer: `${global.BotName}`,
        buttons: buttons,
        headerType: 4
        }
                  
        await A17.sendMessage(m.chat,cosplybutton, { quoted:m }).catch(err => {
            return('Errore!')
        })  

        break




case 'neko2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `${prefix}neko2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Ecco Qui...`,
      footer: `${global.BotName}`,
      buttons: wbutsss,
      headerType: 4
      }
            await A17.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Errore!')
                })               
                break



case 'feed':
case 'meow':
case 'tickle':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Ecco Qui...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await A17.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Errore!')
                })
break



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'cry':  case 'handhold':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'nom':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is eating with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'hug':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} hugged themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


case 'dance':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is dancing alone!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'kill': case 'pat': case 'lick': case 'kiss': case 'bite':
case 'bully': case 'bonk': case 'poke': case 'slap':
case 'happy':
case 'cuddle': case 'kick':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break



case 'yeet':
case 'wink': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp':
case 'cringe': case 'highfive':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed at themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		A17.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet':
case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance':
case 'cringe': case 'cuddle': case 'highfive': case 'handhold': case 'kick':

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)						
resggh = await axios.get(`https://nekos.life/api/v2/img/${command}`)         
let resffj = await getBuffer(resggh.data.url)
let resmain = await GIFBufferToVideoBuffer(resffj)   
      await A17.sendMessage(m.chat,{video: resmain, gifPlayback:true},{ quoted:m }).catch(err => {
                  return reply('error..')
                                  })
break

*/




case 'megumin':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `${prefix}megumin`, buttonText: {displayText: `>>`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Ecco Qui...`,
      footer: `${global.BotName}`,
          buttons: wbutsss,
     headerType: 4
                      }
await A17.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Errore!')
    })               
break     

case 'awoo':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `${prefix}awoo`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ecco Qui...`,
   footer: `${global.BotName}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await A17.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Errore!')
                })
break


case 'animewall2': case 'animewallpaper2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('Inserisci un termine di ricerca!')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `${prefix}animewall2 ${q}`, buttonText: {displayText: `>>`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Termine Di Ricerca:* ${q}`,
      footer: `${global.BotName}`,
      buttons: walb,
      headerType: 4
      }     
            await A17.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Errore!')
                })          
break


case 'anime':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	    if(!q) return reply(`Fornisci un termine di ricerca!\n\n*Esempio:* ${prefix}anime naruto`)
reply(mess.waiting)							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `*Titolo:* ${result.title}\n`;
    details += `*Formato:* ${result.type}\n`;
    details += `*Stato:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*Episodi Totali:* ${result.episodes}\n`;
    details += `*Durata:* ${result.duration}\n`;
    details += `*Genere:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*Basato Su:* ${result.source.toUpperCase()}\n`;
    details += `*Studio:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*Produttori:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*Premiere Su:* ${result.aired.from}\n`;
    details += `*Finisce Su:* ${result.aired.to}\n`;
    details += `*Popolarità:* ${result.popularity}\n`;
    details += `*Preferiti:* ${result.favorites}\n`;
    details += `*Valutazione:* ${result.rating}\n`;
    details += `*Rank:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*Trailer:* ${result.trailer.url}\n\n`;
    details += `*URL:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*Sfondo:* ${result.background}\n\n`;
    details += `*Descrizione:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
A17.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break

case 'manga':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `*Titolo:* ${srh.data[0].title}\n`;
    mang += `*Stato:* ${srh.data[0].status}\n`;
    mang += `*Volumi Totali:* ${srh.data[0].volumes}\n`;
    mang += `*Capitoli Totali:* ${srh.data[0].chapters}\n`;
    mang += `*Genere:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    mang += `*Pubblicato Su:* ${srh.data[0].published.from}\n`;
    mang += `*Punteggio:* ${srh.data[0].scored}\n`;
    mang += `*Popolarità:* ${srh.data[0].popularity}\n`;
    mang += `*Preferiti:* ${srh.data[0].favorites}\n`;
    mang += `*Autori:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `*Sfondo:* ${srh.data[0].background}`;
    mang += `*Descrizione:* ${srh.data[0].synopsis.replace(
      /\[Scritto Da MAL Rewrite]/g,
      ""
    )}`;
A17.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break



case 'waifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `${prefix}waifu`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let button4Messagess = {
        image: {url:waifuddd.data.url},
        caption: 'Più di un waifu rovinerà sicuramente il tuo Laifu!',
        buttons: wbuttsssr,
        headerType: 4
         }     
                                  
    await A17.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'neko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `${prefix}neko`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'Nyaa...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await A17.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'loli' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `${prefix}loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'Non essere un lolicon !',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await A17.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'lyrics': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!text) return reply(`Uso Corretto: ${prefix}lyrics Thunder`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Titolo :* ${result.title}
*Autore :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break


case "quotes":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Quotes()
teks = `\n*Autore:* ${res.author}\n`
teks += `\n*Quota:*\n`
teks += `${res.quotes}\n`

replay(teks)
break

case "darkjoke":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Darkjokes()
teks = "\nDarkjokes"
A17.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

case 'leavegc': case 'leavegroup': case 'bye': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await A17.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break


case 'bc': case 'broadcast': case 'bcall': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`Inserisci del testo da trasmettere! \n\nEsempio:${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Invia trasmissione alla chat di ${anu.length}\nIl tempo è scaduto ${anu.length * 1.5} secondo`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: '💡 Menu 💡',
id: '-menu'
}  
}, {
quickReplyButton: {
displayText: 'Bot Owner',
id: '-owner'
}
}]
let txt = `「 *Broadcast Di ${global.OwnerName}* 」\n\n${text}`
A17.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('Broadcast Inviato !')
}
break    


case 'help': case 'h': case 'menu': case 'allmenu': case 'listmenu':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
A17.sendMessage(from, { react: { text: "📃" , key: m.key }})      
const helpmenu = `Hey *${pushname}* Salve...!! ${ucapanWaktu} ,

│───────────────────────│
┠⬡│▸ ${pushname} Sono *HyPlosBOT*, Un Bot Sviluppato Da *plo19* - *Hypnos*.
│───────────────────────│
│╭────────────────···▸
┠─────═[ *OGGI* ]═────
│╰────────────────···▸
│╭────────────────···▸
┴│▸ 
⬡│▸ *Ora* : ${kaitime}
⬡│▸ *Data* : ${kaidate}
┬│▸
│╰────────────────···▸
┠───═[ *BOT INFO* ]═──▸
│╭────────────────···▸
┴│▸ 
⬡│▸ *Nome Bot  :* ${pushname} 
⬡│▸ *Il Mio Prefisso :*  ${prefix}
⬡│▸ *Nome Owner :* ${global.OwnerName} 
⬡│▸ *Velocità Bot :* ${latensie.toFixed(4)} ms 
⬡│▸ *User Totali Bot :* ${Object.keys(global.db.users).length}
⬡│▸ *Bot runtime :* ${runtime(process.uptime())} 
⬡│▸ *Piattaforma :* VPS 
┬│▸
│╰────────────────···▸
┠⬡│▸ Ecco la lista dei miei comandi!
│╭────────────────···▸
│╰────────────────···▸
┠─━━〈 ⚙️ *Core* ⚙️ 〉━━
│╭────────────────···▸
┴│▸ 
⬡│▸ speak, A17, stalk
⬡│▸ profile, delete
⬡│▸ deleteall, listgc, listpc
⬡│▸ welcome, support
⬡│▸ repo, script, help
┬│▸
╰────────────────···▸
┠━━〈 ❤️‍🔥 *Owner* ❤️‍🔥 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ self, public,
⬡│▸ setdp, post
⬡│▸ join, bye
⬡│▸ listonline, listgc
⬡│▸ listpc, cpp, getcase
⬡│▸ bangroup, block, 
⬡│▸ unblock, broadcast,
⬡│▸ ban add, ban del
┬│▸ 
╰────────────────···▸
┠━━〈 ⭕ *Gruppi* ⭕ 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ add, remove, tagall
⬡│▸ promote, demote, revoke
⬡│▸ hidetag, groupsetting 
⬡│▸ grouplink, setgcpp
⬡│▸ setname, setdesc,leveling
⬡│▸ group, nsfw, nsnfwmenu
┬│▸
╰────────────────···▸
┠━━〈 ❗ *Anti Link ❗* 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ antilinkgc, antilinktg
⬡│▸ antilinktt, antilinkytch
⬡│▸ antilinkytvid, antilinkig
⬡│▸ antilinkfb, antilinktwit
⬡│▸ antilinkall, antiwame
┬│▸
╰────────────────···▸
┠━━〈 🔍 *Ricerca* 🔎 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ play, ytmp3, ytmp4 
⬡│▸ yts, lyrics, movie
⬡│▸ google, gimage, pinterest
⬡│▸ image, wallpaper
⬡│▸ searchgc, happymod
⬡│▸ wikimedia, ringtone
⬡│▸ anime, animestory
⬡│▸ manga, ringtone
┬│▸
╰────────────────···▸
┠━━〈 📈 *Economia* 📈 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ daily, wallet
⬡│▸ bank, bankupgrade
⬡│▸ deposit, withdraw 
⬡│▸ rob / attack
⬡│▸ transfer / give
⬡│▸ wealth / ritual
┬│▸
╰────────────────···▸
┠━━〈 🎮 *Giochi* 🎮 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ ttt / tris
⬡│▸ truth, dare
⬡│▸ spin / slot
⬡│▸ gamble / lottery
┬│▸
╰────────────────···▸
┠━━〈 🛠️ *Conversione* 🛠️ 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ sticker, toimg, tovideo
⬡│▸ togif, steal, stickermeme
⬡│▸ emojimix, tourl, tomp3, toaudio
┬│▸
╰────────────────···▸
┠━━〈 🎼 *Audio* 🎼 〉━━
│╭───────────────···▸
┴│▸ 
⬡│▸ bass, tempo, blown,
⬡│▸ robot, slow, squirrel
⬡│▸ deep, earrape, fast,
⬡│▸ fat, nightcore, reverse,
┬│▸
╰────────────────···▸
┠━━〈 📍 *Reazioni* 📍 〉━━
│╭───────────────···▸
┴│▸  
⬡│▸ cuddle, hug, kiss, 
⬡│▸ bonk, cry, bully,
⬡│▸ slap, kill, happy,
⬡│▸ lick, pat, smug,
⬡│▸ nom, glomp, bite,
⬡│▸ yeet, blush, smile,
⬡│▸ wave, highfive, handhold,
⬡│▸ wink, poke, dance, cringe
┬│▸
╰────────────────···▸
┠━━〈 🌌 *Downloader* 🌌 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ ytvideo, mediafire, instagram,
⬡│▸ igtv, facebook, fbmp3,
⬡│▸ twitter, twittermp3,
⬡│▸ tiktok, tiktokaudio, happymod
⬡│▸ tiktoknowm, mediafire  
┬│▸
╰────────────────···▸
┠━━〈 🎐 *Divertimento* 🎐 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ reaction,  cutecheck
⬡│▸ couple, soulmate, handsomecheck
⬡│▸ beautifulcheck, awesomecheck
⬡│▸ greatcheck, gaycheck,
⬡│▸ uglycheck, charactercheck
⬡│▸ lesbiancheck, hornycheck,
⬡│▸ prettycheck, lovelycheck,
┬│▸
╰────────────────···▸
┠━━〈 🈴 *Weeb* 🈴 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ crosplay, waifu, loli,
⬡│▸ tickle, wallpaper, coffee,
⬡│▸ neko, ppcouple, feed,
⬡│▸ foxgirl, feed, meow,
⬡│▸ animenom, waifu3, neko2,
⬡│▸ feed, meow, tickle, migumin
⬡│▸ awoo, animewallpaper2
⬡│▸ anime, manga
┬│▸
╰────────────────···▸
┠━━〈 ♨️ *Informazioni* ♨️ 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ animequote, quote, weather
⬡│▸ covid, earthquake, wiki
⬡│▸ stalknumber / nowa
┬│▸
╰────────────────···▸
━━〈 🪁 *Essenziali* 🪁 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ qr, say, translate, 
⬡│▸ fliptext, toletter
┬│▸
╰────────────────···▸
┠━━〈 🎗 *Altro* 🎗 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ stickermeme, quotes,
⬡│▸ Report, darkjoke, afk
┬│▸
╰────────────────···▸
┠━━〈 ⚠️ *NSFW* ⚠️ 〉━━
│╭───────────────···▸
┴│▸
⬡│▸ 🍁 Digita " *${prefix}nsfw* " quindi abilita NSFW (solo amministratore!)
⬡│▸
⬡│▸ 🍁 Quindi digita " *${prefix}nsfwmenu* " per tutti i comandi NSFW.
⬡│▸
⬡│▸
⬡│▸ 『 *${global.BotName}* 』
⬡│▸  Sviluppato da: *plo19* - *Hypnos*
⬡│▸
⬡│▸ 🌹 Per usare uno di questi comandi digita
⬡│▸ " *${prefisso}<Nome comando>* ".
⬡│▸
⬡│▸ 🌹 Per ottenere il link del gruppo di supporto digita " *${prefix}support* ".
⬡│▸
⬡│▸ 🌹 Digita " *${prefix}help* " per ottenere l'elenco completo dei comandi.`
    

 let buttonshelpm = [
    {buttonId: `${prefix}owner`, buttonText: {displayText: 'Bot Owner'}, type: 1}
    ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/A17_2.mp4'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            A17.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break
 

case '':
    if(isCmd){
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

      A17pic ='https://wallpapercave.com/wp/wp10524580.jpg'
    
        
 const needhelpmenu = `Hai bisogno di aiuto ${pushname} ? Digita *${prefix}help* per ottenere il mio elenco completo dei comandi.`
     
         let butRun = [
                {buttonId: `${prefix}help`, buttonText: {displayText: 'Help'}, type: 1}
                ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/A17.mp4'),gifPlayback:true,
                    caption: needhelpmenu,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            A17.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break



case '': case '': 
		
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

const txt = `Do you love A17? Then we are the same.`
const A17array= [
            "https://c.tenor.com/SOeIW-QVZvoAAAPo/scared-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/FDe7lTs0xvMAAAPo/A17-Bot-Bot-A17.mp4",
            "https://c.tenor.com/IWKYIP6AMIgAAAPo/A17-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/qE3H_Ae_jTQAAAPo/A17-Bot-Bot.mp4",
            "https://c.tenor.com/9ijVngbm_ZMAAAPo/itsuki-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/Fz9xGVR_FHAAAAPo/A17-Bot-Bot-A17.mp4",
            "https://c.tenor.com/ALV6SZoJZb8AAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/QHefpWiqvN4AAAPo/blush-anime.mp4",
            "https://c.tenor.com/NJVFjOYEcsIAAAPo/A17-gotoubun.mp4",
            "https://c.tenor.com/DA88NW5x_0wAAAPo/A17-Bot-stare.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/A17-Bot.mp4",
            "https://c.tenor.com/V9XEKQYRwrEAAAPo/A17-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/GDH4WFhELpAAAAPo/anime-pout.mp4",
            "https://c.tenor.com/ME0cvLQiW0kAAAPo/Bot-A17-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/d5pE_0GJUf0AAAPo/A17-Bot.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/A17-Bot.mp4",
            "https://c.tenor.com/pCgBkgDBbnIAAAPo/Bot-A17-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/6GTU3JEtpKoAAAPo/A17-Bot-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/XNbmenhVucMAAAPo/5toubun-no-hanayome-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/lyMqrhEK4scAAAPo/%EC%98%A4%EB%93%B1%EB%B6%84-5%EB%93%B1%EB%B6%84.mp4",
            "https://c.tenor.com/vQ9TpmdjfWAAAAPo/cuteness-overload.mp4",
            "https://c.tenor.com/PHngM6-NJVwAAAPo/A17-quintessential.mp4",
            "https://c.tenor.com/yniTgeiOo4gAAAPo/A17-Bot.mp4",
            "https://c.tenor.com/AULffc4ZKFIAAAPo/A17-god-A17.mp4",
            "https://c.tenor.com/Y8Y1GbmQSOIAAAPo/A17-Bot-quintessential-quintuplets.mp4",
            "https://c.tenor.com/m0EjrelpOfkAAAPo/A17-Bot-Bot-A17.mp4",
            "https://c.tenor.com/x6RTarQTMzoAAAPo/A17-Bot.mp4",
            "https://c.tenor.com/hUzZGMltInkAAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/9-7azOBpr84AAAPo/A17-Bot-and-i-love-you.mp4",
            "https://c.tenor.com/Ed5IC_yxZkoAAAPo/A17-Bot-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/hDKieuZGiU0AAAPo/A17-Bot.mp4",
            "https://c.tenor.com/WD8L3QLO024AAAPo/whaatt-the-quintessential-quintuplets.mp4"
            
            ]
        
            const A17selection = A17array[Math.floor(Math.random()*A17array.length)]
        
            A17.sendMessage(from,{video:{url:A17selection},gifPlayback:true,caption:txt},{quoted:m})
		break

case 'add':{     			
    if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`Per favore, scrivi il numero della persona che vuoi aggiungere a questo gruppo`)
  await A17.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`Utente aggiunto con successo!`)).catch((err) => replay(`Impossibile aggiungere quell'utente a questo gruppo!`))
 }
 break
		
case 'weather':
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply("Inserisci la tua posizione per cercare meteo.")
         myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertxt = `           🌤 Previsioni Meteo 🌤  \n\n🔎 Ricerca Posizione: ${myweather.data.name}\n*💮 Stato:* ${myweather.data.sys.country}\n🌈 Meteo: ${myweather.data.weather[0].description}\n🌡️ Temperatura: ${myweather.data.main.temp}°C\n❄️ Minima: ${myweather.data.main.temp_min}°C\n📛 Massima: ${myweather.data.main.temp_max}°C\n💦 Umidità: ${myweather.data.main.humidity}%\n🎐 Vento: ${myweather.data.wind.speed} km/h\n`
        A17.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertxt }, { quoted: m })

        break
		

 case "tts":  case "texttospeech":  case "say": case "speak":{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Per favore, dammi un messaggio in modo che io possa pronunciarlo!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
      A17.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `A17SpeechEngine.mp3`,},{quoted: m,});
    }
    break;


    case 'qr': case 'qrcode':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        if (!m.isGroup) return replay(mess.grouponly)
    reply(`Esecuzione di repl....Attendere che repl.it risponda...`)						
    var replqr =  await getBuffer(`https://miku-qr--fantox001.repl.co/`)
                               var qrbutton = [
            {buttonId: `${prefix}qr`, buttonText: {displayText: `Re-run Repl`}, type: 1}
            ]
          let bmffg = {
           image: replqr,
           caption:  `Scansiona il qr entro 10-15 secondi...`,
          footer: `${global.BotName}`,
          buttons: qrbutton,
          headerType: 4
          }     
                await A17.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Errore!')
                    })
    break



default:

    if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`Nessun comando programmato *${pushname}* senpai! Digita *${prefix}help* per ottenere il mio elenco completo dei comandi!`)

    }	 			


if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
A17.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await A17.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return A17.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
A17.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
A17.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

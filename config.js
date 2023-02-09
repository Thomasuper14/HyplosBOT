const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to yon, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['393477037227','393662531766']  //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.OwnerNumber = ['393477037227','393662531766']  //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.ownertag = ['393477037227','393662531766']
global.BotName = "Hyplos"
global.packname = "Hyplos BOT"
global.author = "By: Hypnos & plo19"
global.OwnerName = "Hypnos & plo19"
global.BotSourceCode = "https://youtu.be/dQw4w9WgXcQ"
global.SupportGroupLink = "https://chat.whatsapp.com/EsNqFrGKxGXFrdwgRaQl9q"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['-'] 


global.location = "Italia"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' }
global.websitex = "https://youtu.be/dQw4w9WgXcQ"
global.lolhuman = "Hypnos"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Lavoro completato...',
    useradmin: 'Mi dispiace, solo gli *Amministratori* possono usare questo *Comando*!',
    botadmin: 'Mi dispiace, non posso eseguire questo comando siccome non sono un *Amministratore* di questo gruppo.',
    botowner: 'Solo i miei *Proprietari* possono usare questo *Comando*!',
    grouponly: 'Questo comando è utilizzabile sono nei *Gruppi*!',
    privateonly: 'Questo comando è utilizzabile solo in *Chat Privata*!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: ' Caricamento...',
    nolink: 'Please provide me *link*, Uff!',
    error: 'An error occured!',
    banned: 'You are *Banned* fron using commands!, Haha',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert  Uff! This is not a NSFW enabled group!, Uff!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348083209378";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_14_08_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA0MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5K29RT0dNb0NEVTBHOEhYK004V1lvbkYwMzVydiswY3o3d01kY1prTi80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODMyMDkzNzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExRkFCOUZDRDI2RkNCQUFERDVDNzlBRTQ0OUEzMjRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzg1MDA2NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2MEl0cElsLVQtT0JVbzRmUXB2aXd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2MzViYWNkLTE1ZGQtNDdlMi04YjMyLTExMzYzZTlmZTkwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDUzLFxuICAgICAgMTAsXG4gICAgICAyMixcbiAgICAgIDY1LFxuICAgICAgNTksXG4gICAgICAyMjUsXG4gICAgICAyNTEsXG4gICAgICA4OSxcbiAgICAgIDEwMCxcbiAgICAgIDE2MSxcbiAgICAgIDIzMyxcbiAgICAgIDEzNyxcbiAgICAgIDU0LFxuICAgICAgMTQwLFxuICAgICAgMjUxLFxuICAgICAgMjA5LFxuICAgICAgNjMsXG4gICAgICAyMzMsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjE5LFxuICAgICAgMTc2LFxuICAgICAgMjM5LFxuICAgICAgMjQxLFxuICAgICAgMjIzLFxuICAgICAgMjUzLFxuICAgICAgMTIyLFxuICAgICAgMjM3LFxuICAgICAgMzUsXG4gICAgICAxNjgsXG4gICAgICAzMyxcbiAgICAgIDE3MSxcbiAgICAgIDg1LFxuICAgICAgMjIyLFxuICAgICAgMTUzLFxuICAgICAgNjEsXG4gICAgICAyOSxcbiAgICAgIDE1MCxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRRE1BQjc5V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MzIwOTM3ODozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkDhtKzhtLPhtLHhtLrhtLDhtKzwlqOCIOG0uOG0sSDhtLPhtL/htKzhtLrhtLBcIixcbiAgICBcImxpZFwiOiBcIjI1OTE1NDQzNDM1NTIwODozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcURqa2NReDdyL3RRWVlHeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImE3ek5UWWM2ckY2SzczQVZCL2NIUUZBU29FcnZ0T2pySHlPZ2k3Z2paVG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQndXa05aY2NoRHNlY0o4ZTJuSWJjMzB6T2RWUUFZVWpNS0xJQnpVNGdxKzRLMmU3bitxMFc4UFZJZEtoM0c4U29EYlpGUHdMbkhyYmM1NzFkWGxBQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmVoWVJGaWcxa2NsYlA3Yk15WlMvVXNELzhqWEZNanNHbnh3dWc3MzBiRFdIdFBySnNiN0UrcHA5eDAwZzNxbFNRdml0SlRGNmI2UkhDMnZBNDArQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MzIwOTM3ODozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzODUwMDU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkRPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzSDhrK1g3eUxWWFBzK2NMSWhSNXZ2dE10SVJSV2NxODJRS3JMamJWWnMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTEyNzY1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "agenda",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

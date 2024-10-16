const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9130238351";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_58_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdQdEc4aXNUb1ZISTFsMzNDYWhVMHBLTStVSFZxZXFZd08vam40OTV1dGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImh2c2VCc1RxUVN1YlZORFBldE5NZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGY3NDliNDktNGNhMS00ODAzLTkzNGItNjRkYTRjNTZlMWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMjA0LFxuICAgICAgMTM0LFxuICAgICAgMCxcbiAgICAgIDIwMixcbiAgICAgIDY0LFxuICAgICAgNzQsXG4gICAgICAyNSxcbiAgICAgIDE2NyxcbiAgICAgIDI0MCxcbiAgICAgIDIwOCxcbiAgICAgIDExNyxcbiAgICAgIDE4MSxcbiAgICAgIDIzNyxcbiAgICAgIDE2LFxuICAgICAgMTYwLFxuICAgICAgMjI5LFxuICAgICAgMjQ3LFxuICAgICAgMTk5LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMTMwLFxuICAgICAgODMsXG4gICAgICAyNDcsXG4gICAgICAxMDQsXG4gICAgICA0NixcbiAgICAgIDE0LFxuICAgICAgMTA3LFxuICAgICAgNSxcbiAgICAgIDkyLFxuICAgICAgODksXG4gICAgICAzOSxcbiAgICAgIDIxMSxcbiAgICAgIDExMCxcbiAgICAgIDY4LFxuICAgICAgODIsXG4gICAgICA0MCxcbiAgICAgIDg5LFxuICAgICAgMTgwLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFBUUUdKRjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzAyMzgzNTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImludmVzdG9yIEVsaWphaFwiLFxuICAgIFwibGlkXCI6IFwiNzM0MDMwMDQzNTYzMzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zQ3lxWUNFT250d0xnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamd0QmVoZWxyVUtlaUpsa0owekkvako1N05rcEx2YmNTYXM2Y2NzMDlHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpTFArT2lWbDJoa1pLblZvZ1U0YS8xMjdtdnVRaVdxUHFqTnNJRWZUMHRwQStXaWpTREFoWDBVdXRab3VudDhHN21acmFJNllHMDRMOXVZN1ZnbVhEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVMVFaMUhCUnU4N3JlNTd1M2hHb1o5dzZPN25QSkphV0lwQU5uL3cvUjlxUWxvUFBJVU4xVE1Sc1JXdmNGWkUzUDdSZVFxa3JKeGgxNmFESWlSZ0pqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMwMjM4MzUxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkxMTU4ODVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 

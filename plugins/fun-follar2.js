let handler = async (m, { conn, text, usedPrefix, command }) => { 
let cometido
cometido = `@${m.sender.split('@')[0]}`

if(!text && !m.quoted) return conn.reply(m.chat, 
`𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴𝐿.𝑀𝐸𝑁𝑆𝐴𝐽𝐸 𝑂𝐻 𝐸𝑇𝐼𝑄𝑈𝐸𝑇𝐸́ 𝑈𝑆𝐴𝑁𝐷𝑂  ${usedPrefix + command}*`, m)
if (text.length >= 1) {
} else if (m.quoted && m.quoted.sender) {
text = `@${m.quoted.sender.split('@')[0].replace('@', '')}`
} else if (m.quoted && m.quoted.fromMe) {
text = `${m.mentionedJid.map((user)=>(user === m.sender) ? text.replace('@', '') : `${user.split('@')[0].replace('@', '')}`).join(', ')}`
}
if (/[a-zA-Z]/.test(text) && !text.includes('@')) return conn.reply(m.chat, `𝐸𝑇𝐼𝑄𝑈𝐸𝑇𝐸 𝐴 𝑈𝑁𝐴 𝑃𝐸𝑅𝑆𝑂𝑁𝐴 𝑂𝐻 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴𝐿 𝑀𝐸𝑁𝑆𝑆𝐽𝐸 𝑄𝑈𝐸 𝑁𝑂 𝑆𝑂𝑌 𝐴𝐷𝐼𝑉𝐼𝑁𝑂🤬`, m)
text = text.match(/[\d@]+/g).join('')
  
let coger = 
  `🤤👅🥵 𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!🥵👅🤤
    
  𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚 ${text} ⁩ 𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!
    
  ${text} 
🤤🥵 ¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎! 🥵🤤
 `.trim();

await conn.reply(m.chat, coger, m, { mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net'] })
}

handler.command = /^(coger_2|follar_2)$/i
export default handler

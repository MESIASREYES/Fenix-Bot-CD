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
  
let esclavisar = 
   `*${text}*= 🤑𝙏𝙀 𝘼𝘾𝘼𝘽𝘼𝙉 𝘿𝙀 𝙀𝙎𝘾𝙇𝘼𝙑𝙄𝙎𝘼𝙍

😱¡𝒀 𝘼𝙃𝙊𝙍𝘼 𝙀𝙍𝙀𝙎 𝙐𝙉 𝙀𝙎𝘾𝙇𝘼𝙑𝙊 𝙎𝙀𝙓𝙐𝘼𝙇!🥵🥵

🥷𝙌𝙐𝙀 𝙇𝙀 𝙋𝙀𝙍𝙏𝙀𝙉𝙀𝘾𝙀 𝘼  *${cometido}*😎`.trim()

await conn.reply(m.chat, esclavisar, m, { mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net'] })
}

handler.command = /^(esclavisar|sr)$/i
export default handler


let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐩𝐚𝐥𝐨𝐦𝐚𝐬𝐥𝐨𝐜𝐚𝐬_𝐭𝐞𝐚𝐦: ${pesan}`
let teks = `𝐍𝐨 𝐪𝐮𝐢𝐞𝐫𝐨 🌱 𝐥𝐥𝐞𝐧𝐞𝐧 𝐥𝐢𝐬𝐭𝐚𝐬 💦 \n\n❏ ${oi}\n❏ 👨🏻‍💻💙➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🕊🤍 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐥𝐢𝐧𝐝𝐚 𝐩𝐫𝐢𝐬`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler

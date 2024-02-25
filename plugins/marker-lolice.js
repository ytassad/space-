const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lolice', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/2f0bb4be6d19d12454a71.jpg'),
  }), 'error.png', '*البوت دخل في وضع الطوارئ *', m);
};
handler.help = ['lolice'];
handler.tags = ['maker'];
handler.command = /^(lolice)$/i;
export default handler;

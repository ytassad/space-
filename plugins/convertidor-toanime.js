import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽*';
  m.reply('*صورتك قبيحة جدا لايمكن تحويلها لأنمي*');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const`https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '*صورتك قبيحة جدا لايمكن ان تصبح انمي*';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;

import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*قم بالبحث عن صور مثال: ${usedPrefix + command} Minecraft*`;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('انتظر قليلا حتى اعثر على الصورة لاتنسى دعوة اصدقائك للمجموعة');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `🔎 *النتائج:* ${text}\n🔗 *الرابط* ${link}\n🌎 *المصدر :* Google`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|image|imagen)$/i;
export default handler;

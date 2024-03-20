const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*معلومات المجموعة الكاملة*\n
*معرف المجموعة :* 
${groupMetadata.id}

*رقم المجموعة:* 
${groupMetadata.subject}

*الوصف:* 
${groupMetadata.desc?.toString() || 'الخ...'}

*أعضاء المجموعة:*
${participants.length} Participantes

*𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
@${owner.split('@')[0]}

*مسؤل المجموعة:*
${listAdmin}

*قائمة ميزات المجموعة:*
—◉ الترحيب: ${welcome ? '✅' : '❌'}
—◉ الفاحص: ${detect ? '✅' : '❌'} 
—◉ الفاحص 2: ${detect2 ? '✅' : '❌'} 
—◉ مضاد الروابط 2: ${antiLink ? '✅' : '❌'} 
—◉ مضاد الروابط: ${antiLink2 ? '✅' : '❌'} 
—◉ الوضع الساخن: ${modohorny ? '✅' : '❌'} 
—◉ ملصقات تلقائية: ${autosticker ? '✅' : '❌'} 
—◉ الأصوات: ${audios ? '✅' : '❌'} 
—◉ مانع الصور الإباحية: ${antiviewonce ? '✅' : '❌'} 
—◉ مانع الحذف: ${antidelete ? '✅' : '❌'} 
—◉ مانع الشتم : ${antiToxic ? '✅' : '❌'} 
—◉ مانع العرب : ${antiTraba ? '✅' : '❌'} 
—◉ وضع المسؤول : ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;

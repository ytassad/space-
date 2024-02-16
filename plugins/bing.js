case prefix + ['bing'] : case prefix + ['bingai'] : {
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return msg.reply(`*[ LIMIT KAMU HABIS ]*\nSilahkan ketik #buylimit atau tunggu 24 Jam untuk cooldown`)
        if (!q) return msg.reply('mau tanya apa')
        const { key } = await client.sendMessage(from, { text: "```ياسمينة تبحث```" }, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "_YanzBotz-APIs Terverifikasi Oleh WhatsApp_"}}});
         try {
         let quest = await fetchJson("https://api.yanzbotz.my.id/api/ai/bing?query=" + q + "&model=precise&cookie=" + global.cookie + "&apiKey=" + global.apikey)
          await client.sendMessage(from, { text: quest.result.text.replace(/\*\*/g, '*'), edit: key });
          } catch (e) {
              client.sendMessage(from, { text: "Eror", edit: key });
           }
        }
        break
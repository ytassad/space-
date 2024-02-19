import fetch from 'node-fetch' 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply('هذا الامر خاص بتوليد صور من bing سوف أعطيك مثالا تكتب هكذا :\n\n*.bimg* a 26 years old boy salutes the national flag of morocco and he is wearing a shirt print is likemorocco flag and "arther" and 10 number anddima meghribe in small is written on it s back inbig and bold fonts, 3d illustration')
    m.reply("تابع صاحب البوت في حساباته تشجيعا له ...\ninstagram.com/i_arther_ven")

    try {
const apikey = ["prabowo"];
const randomIndex = Math.floor(Math.random() * apikey.length);
const selectedKey = apikey[randomIndex];
        let response = await fetch(`https://api.yanzbotz.my.id/feature/text2img?prompt=${text}&apikey=prabowo`)
        let result = await response.json()

        if (result.status === "Success" && result.result.length > 0) {
            for (let i = 0; i < result.result.length; i++) {
                setTimeout(() => {
                    conn.sendFile(m.chat, result.result[i], `apa${i + 1}`, `instagram.com/i_arther_ven`, m)
                }, i * 5000)
            }
        } else {
            m.reply("*انتهت صلاحية رمز api*")
        }
    } catch (e) {
        console.error(e)
        m.reply("حدث خطأ أثناء معالجة الطلب.")
    }
}

handler.help = ["bimg"]
handler.tags = ["drawing"]
handler.command = ["bimg"]

export default handler
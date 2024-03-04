import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply('هذا الأمر يستخدم لإنشاء صور باستخدام OpenAI GPT-3. يرجى إعطاء نص لتوليد الصورة.');

    m.reply("تابع صاحب البوت في حساباته تشجيعاً له ...\ninstagram.com/i_arther_ven");

    try {
        const apiKey = "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"; 
        const prompt = `generate image: ${text}`;
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt,
                max_tokens: 256,
            }),
        });

        const result = await response.json();

        if (result.choices && result.choices[0] && result.choices[0].text) {
            conn.sendFile(m.chat, result.choices[0].text, 'generated_image', 'Image generated by OpenAI GPT-3', m);
        } else {
            m.reply("لم يتمكن من إنشاء الصورة.");
        }
    } catch (e) {
        console.error(e);
        m.reply("حدث خطأ أثناء معالجة الطلب.");
    }
};

handler.help = ["imggn"];
handler.tags = ["imggn"];
handler.command = ["imggn"];

export default handler;

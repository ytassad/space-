import fetch from "node-fetch";
import { FormData } from "formdata-node";

let handler = async (m, { command, usedPrefix, conn, text, args }) => {
  try {
    let text;
    if (args.length >= 1) {
      text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
      text = m.quoted.text;
    } else return m.reply("أكتب نص عزيزي المستخدم");
    await m.reply(wait);
    let result = await PromptMaker(text);
    if (!result) {
      throw "*حدث خطأ أثناء تحويل الصورة㋛*";
    }
    let list = result.output
      .map((chat, index) => {
        return `*[ ${index + 1} ]*\n*Title:* ${chat.title || ""}\n*Prompt:* ${
          chat.prompt || ""
        }`;
      })
      .join("\n\n");
    await m.reply(`لائحة ﻹستدعات:\n\n${list}`);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
handler.help = ["boredprompt"].map((v) => v + " (Input teks)");
handler.tags = ["tools"];
handler.command = /^(boredprompt)$/i;

export default handler;

async function PromptMaker(prompt) {
  try {
    let form = new FormData();
    form.append("prompt", encodeURIComponent(prompt));
    const response = await fetch("https://boredhumans.com/prompts_api.php", {
      method: "POST",
      body: form,
    });
    if (!response.ok) {
      throw new Error("فشل طلب ㋛︎" + response.status);
    }
    const base64Data = await response.text();
    return JSON.parse(base64Data);
  } catch (error) {
    return null;
  }
}

const axios = require("axios");
const fs = require("fs");

module.exports = {
 config: {
 name: "leaderboard",
 aliases: ["leader"],
 version: "1.0",
 author: "Lusiper",
 role: 0,
 shortDescription: {
 en: "Top 15 orang Terkaya"
 },
 longDescription: {
 en: "Top 15 Orang terkaya"
 },
 category: "MEDIA",
 guide: {
 en: "{p}"
 }
 },
 onStart: async function ({ api, args, message, event, usersData }) {

 const allUsers = await usersData.getAll();

 const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 15);

 const topUsersList = topUsers.map((user, index) => `[━━━━━| ${index + 1} |━━━━━]\n【 Nama ➤ ${user.name} 】\n【 Money ➤ ${user.money} 】\n【 UID ➤ ${user.userID} 】`);

 api.setMessageReaction('🎭', event.messageID, () => {}, true);

 const messageText = `✨ Top 15 orang terkaya\n ${topUsersList.join('\n')}\n[━━━━━━━━━━━━━━]`;

 const pesan = await message.reply({ body: messageText });
 setTimeout(() => { api.unsendMessage(pesan.messageID); }, 20000);
 }
}

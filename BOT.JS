const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv/config");

const { ask } = require("./ai.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Ready! " + `logged in as ${client.user.tag}`);
});


client.on("messageCreate", async (message) => {
  if (message.content.substring(0, 1) === "!") {
    const prompt = message.content.substring(1);
    const ans = await ask(prompt);
    client.channels.fetch(message.channelId).then(channel => channel.send(ans));
  }
});

client.login(process.env.TOKEN);

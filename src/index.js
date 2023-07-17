require("dotenv").config();
const {
  Client,
  IntentsBitField,
  ActivityType,
  EmbedBuilder,
  Embed,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is now online!`);

  client.user.setActivity({
    name: `${c.guilds.cache.size} guilds`,
    type: ActivityType.Watching,
  });
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed title")
      .setDescription("This is an embed description")
      .setColor("#4a6aff")
      .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
      .addFields({
        name: "Field title",
        value: "Some random value",
        inline: true,
      }, {
        name: "2nd Field title",
        value: "Some random value",
        inline: true,

      });

    interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === "ping") {
    interaction.reply("pong!");
  }
});

client.login(process.env.TOKEN);

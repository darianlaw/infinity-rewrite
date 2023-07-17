/* importing libaries */

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

/* when the client is ready print out 'Bot Name is ready!' */

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is now online!`);


  /* set activity to watching the number of servers */
  
  client.user.setActivity({
    name: `${c.guilds.cache.size} guilds`,
    type: ActivityType.Watching,
  });
});

/* embed and pong commad */

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "help") {
    const embed = new EmbedBuilder()
      .setTitle("Bot Commands")
      .setDescription("Description of the commands!")
      .setColor("#4a6aff")
      .addFields({
        name: "Field title",
        value: "Some random value",
        inline: false,
      }, {
        name: "2nd Field title",
        value: "Some random value",
        inline: false,

      });

    interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === "ping") {
    interaction.reply("pong!");
  }
});

/* logs the bot in if no errors are found */

client.login(process.env.TOKEN);

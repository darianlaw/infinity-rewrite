require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is now online!`);

    client.user.setActivity({
        name: `${c.guilds.cache.size} guilds`,
        type: ActivityType.Watching,
    });
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('hey!');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('pong!');
    }
});


client.login(process.env.TOKEN);
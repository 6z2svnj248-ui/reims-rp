const {
  Client,
  GatewayIntentBits,
  PermissionsBitField,
  REST,
  Routes,
  SlashCommandBuilder
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

// ⚠️ NE METS PAS TON TOKEN DIRECTEMENT ICI
const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Vérifie si le bot fonctionne."),

  new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Affiche les informations du serveur."),

  new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Supprime des messages.")
    .addIntegerOption(option =>
      option
        .setName("nombre")
        .setDescription("Nombre de messages à supprimer")
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
    ),

  new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Expulse un membre.")
    .addUserOption(option =>
      option
        .setName("membre")
        .setDescription("Membre à expulser")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bannit un membre.")
    .addUserOption(option =>
      option
        .setName("membre")
        .setDescription("Membre à bannir")
        .setRequired(true)
    )
].map(command => command.toJSON());

client.once("ready", async () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);

  const rest = new REST({ version: "10" }).setToken(TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    );

    console.log("✅ Commandes enregistrées !");
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return interaction.reply("🏓 Pong ! Reims RP Bot fonctionne !");
  }

  if (interaction.commandName === "serverinfo") {
    const guild = interaction.guild;

    return interaction.reply(
      `🏙️ **${guild.name}**\n👥 Membres : ${guild.memberCount}`
    );
  }

  if (interaction.commandName === "clear") {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      return interaction.reply({
        content: "❌ Tu n'as pas la permission.",
        ephemeral: true
      });
    }

    const nombre = interaction.options.getInteger("nombre");

    await interaction.channel.bulkDelete(nombre, true);

    return interaction.reply({
      content: `🧹 ${nombre} messages supprimés.`,
      ephemeral: true
    });
  }

  if (interaction.commandName === "kick") {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      return interaction.reply({
        content: "❌ Tu n'as pas la permission.",
        ephemeral: true
      });
    }

    const membre = interaction.options.getMember("membre");

    if (!membre) {
      return interaction.reply("❌ Membre introuvable.");
    }

    await membre.kick();

    return interaction.reply(`👢 **${membre.user.tag}** a été expulsé.`);
  }

  if (interaction.commandName === "ban") {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return interaction.reply({
        content: "❌ Tu n'as pas la permission.",
        ephemeral: true
      });
    }

    const membre = interaction.options.getMember("membre");

    if (!membre) {
      return interaction.reply("❌ Membre introuvable.");
    }

    await membre.ban();

    return interaction.reply(`🔨 **${membre.user.tag}** a été banni.`);
  }
});

client.login(TOKEN);

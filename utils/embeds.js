const { EmbedBuilder } = require('discord.js')

const COLORS = {
  WELCOME: 0x57f287,
  RESPONSE: 0x5865f2,
  END: 0x95a5a6,
  ERROR: 0xed4245,
}

function botAuthor(client) {
  return {
    name: client.user.displayName || client.user.username,
    iconURL: client.user.displayAvatarURL(),
  }
}

function createWelcomeEmbed(client, username, messageText) {
  return new EmbedBuilder()
    .setColor(COLORS.WELCOME)
    .setAuthor(botAuthor(client))
    .setDescription(`Hey **${username}**! I'm here to help.\n\n${messageText}`)
    .setFooter({ text: 'Powered by Crunch AI' })
    .setTimestamp()
}

function createResponseEmbed(client, messageText) {
  return new EmbedBuilder()
    .setColor(COLORS.RESPONSE)
    .setAuthor(botAuthor(client))
    .setDescription(messageText)
    .setFooter({ text: 'Powered by Crunch AI' })
}

function createEndEmbed(client) {
  return new EmbedBuilder()
    .setColor(COLORS.END)
    .setAuthor(botAuthor(client))
    .setDescription('Thanks for chatting! This conversation has ended.')
    .setFooter({
      text: 'Start a new message in the channel to begin a fresh conversation.',
    })
    .setTimestamp()
}

function createImageEmbed(client, imageUrl) {
  return new EmbedBuilder()
    .setColor(COLORS.RESPONSE)
    .setAuthor(botAuthor(client))
    .setImage(imageUrl)
    .setFooter({ text: 'Powered by Crunch AI' })
}

function createErrorEmbed(client) {
  return new EmbedBuilder()
    .setColor(COLORS.ERROR)
    .setAuthor(botAuthor(client))
    .setDescription(
      'Something went wrong while processing your request. Please try again.'
    )
    .setFooter({ text: 'Powered by Crunch AI' })
}

module.exports = {
  createWelcomeEmbed,
  createResponseEmbed,
  createEndEmbed,
  createImageEmbed,
  createErrorEmbed,
}

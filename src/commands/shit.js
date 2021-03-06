const GenericImageCommand = require('../models/GenericImageCommand.js')

const command = new GenericImageCommand('shit', (msg, args) => {
  if (msg.mentions[0]) {
    args = msg.mentions[0].username
  } else {
    if (!args[0]) {
      args = msg.author.username
    } else if (args.join(' ').length > 35) {
      msg.channel.createMessage(`This shit was too large. You're ${args.join(' ').length - 35} characters over the limit!`)
      return false
    } else {
      args = args.join(' ')
    }
  }

  if (!/^[\x00-\x7F]*$/.test(args)) { // eslint-disable-line
    msg.channel.createMessage('Your argument contains invalid characters. Please try again.')
    return false
  }

  return args
}, {
  description: 'The shit on my shoe!',
  aliases: ['shitty']
})

module.exports = command

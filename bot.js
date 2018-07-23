const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === "test") {
  var ms = 20000;
      var interval = setInterval (function () {
        message.channel.send("eg")
      }, ms); 
    }
});

client.login('TOKEN');
client.login(process.env.BOT_TOKEN);

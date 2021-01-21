const Discord = require('discord.js');
const token = ('봇토큰')
const client = new Discord.Client();

client.on('ready', async() => {   
    console.log(`${client.user.tag}가 로그인했어!!`) 
});
 



client.on('message', (message) => {
    if(message.content === 'ping') {
        message.reply('pong')
    }
});

client.login(token)




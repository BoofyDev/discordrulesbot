const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$';

client.once('ready', () => {
    console.log('bot is running in all servers');
    client.user.setActivity('VTC | $help', { type: 'PLAYING'}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === ''){
        message.channel.send(`${message.author.username}, **Type {help For Commands List**`);
    }
});
//Help Command
client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'help':
                //message.channel.send('@here @everyone');
            const embed = new Discord.MessageEmbed()
                .setTitle('**Server Commands, Bellow**')
                .addField('**-/Ping**','```Shows if your on a stable connection.```')
                .addField('**-/Rules**','```Shows server rules.```')
                .addField('**-/Server**','```Shows what server is about.```')
                .addField('**-/Info**','```Shows bot info.```')
                .addField('**-/Help**','```Shows server commands.```')
                .addField('**-/Owner**','```Shows rights.```')
                .setColor(0xFF7F50)
                //hex color code #FF7F50
                .setTimestamp()
                .setFooter(message.author.username)
                message.channel.send(embed);
            break;
    }//end

    //ping command
    switch(args[0]){
        case 'ping':
                //message.channel.send('@here @everyone');
            const embed = new Discord.MessageEmbed()
                .setTitle('**Connection Is Stable**')
                .setColor(0xFF7F50)
                //hex color code #FF7F50
                .setTimestamp()
                .setFooter(message.author.username)
                message.channel.send(embed);
            break;
    }//end

    //rules command
    switch(args[0]){
        case 'rules':
               // message.channel.send('@here @everyone');
            const embed = new Discord.MessageEmbed()
                .setTitle('**Welcome, Rules Bellow**')
                .addField('**1.**','```Respect admin decisions.```')
                .addField('**2.**','```No publishing of personal information (including real names, addresses, emails, passwords, bank account and credit card```')
                .addField('**3.**','```No advertising once so ever unless in #◈-𝗦𝗘𝗟𝗙-𝗣𝗥𝗢𝗠𝗢.```')
                .addField('**4.**','```No annoying noises in voice chats.```')
                .addField('**5.**','```Spamming is not tolerated.```')
                .addField('**6.**','```No being disrespectful to other members will be tolerated.```')
                .addField('**7.**','```No hacking, scamming, Doxing, ddos and or dosing related content.```')
                .addField('**8.**','```No racism will be tolerated.```')
                .addField('**9.**','```Please do not @ owners, and or admins.```')
                .addField('**10.**','```Have fun!```')
                .setColor(0xFF7F50)
                //hex color code #FF7F50
                .setFooter('Please abide to Discords Terms of Service and Community Guidelines Action will be taken upon people violating these rules. Talk of malicious hacking, carding, or anything related will result in an instant 1-day ban (no warnings). Thank you!                                                                           Connection Stable...')
            message.channel.send(embed);
            break;
    }//end

    //info command
    switch(args[0]){
        case 'info':
               // message.channel.send('@here @everyone');
            const embed = new Discord.MessageEmbed()
                .setTitle('**Bot Info, Bellow**')
                .addField('**Language**','```@Rules Bot was hard coded in Javascript.```')
                .addField('**About**','```@Rules Bot is here to make it easier to get a feel for our server```')
                .addField('**Owner**','```@Rules Bot was developed by @Boofy#0012```')
                .setColor(0xFF7F50)
                //hex color code #FF7F50
                .setTimestamp()
                .setFooter(message.author.username)
            message.channel.send(embed);
            break;
    }//end

    //server command
    switch(args[0]){
        case 'server':
               // message.channel.send('@here @everyone');
            const embed = new Discord.MessageEmbed()
                .setTitle('**Server Info, Bellow**')
                .addField('**About**','```This server is mained for having fun with friends, the server is public so new people can join.```')
                .addField('**Community**','```Our community is very user friendly and open minded, for the most part. All we ask is to not be toxic.```')
                .addField('**T.O.S**','```As long as you follow #◈-𝗥𝗨𝗟𝗘𝗦, you will be perfectly fine.```')
                .addField('**Owner**','```Server owner @Boofy#0012```')
                .addField('**Invite**', 'https://discord.gg/jXzchUZsk')
                .setColor(0xFF7F50)
                //hex color code #FF7F50
                .setTimestamp()
                .setFooter(message.author.username)
            message.channel.send(embed);
            break;
    }//end

    
    //owner command
    switch(args[0]){
        case 'owner':
               // message.channel.send('@here @everyone');
            const embed = new Discord.MessageEmbed()
                .setTitle('**The Rights To This Bot Goes To, @Boofy#0012**')
                .addField('**YouTube**', 'https://www.youtube.com/channel/UCbvOXen_DeJ8EHz1zL0bwoQ')
                .addField('**Steam**', 'https://steamcommunity.com/profiles/76561199146661348')
                .addField('**Twitch**', 'https://www.twitch.tv/qrrds')
                .setColor(0xFF7F50)
                //hex color code #FF7F50
                .setTimestamp()
                .setFooter(message.author.username)
            message.channel.send(embed);
            break;
    }//end
});
client.login('ODI2Mjk4NDk0ODIyMTIxNDgy.YGKccQ.U0cJlQUFACBpyuxU4t8I1lvrL9U');
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require ("fs")
client.on('guildMemberAdd',async member => {
var Canvas = require("canvas")
const jimp = require('jimp');
  const w = ['./welcome_4.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(800, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 800, 300);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
          ctx.font = '36px Arial';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(member.user.username, 545, 177);
         
          ctx.font = '16px Arial Bold';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
         
          let Avatar = Canvas.Image;
          let ava = new Avatar;
          ava.src = buf;
          ctx.beginPath();
          ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(ava, 36, 21, 260, 260);
 			
		  const c = client.channels.get("480947981516800000");
          c.sendFile(canvas.toBuffer());
 
});
});
});


var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Hangout.")//حط اسم السرفر مكان eyad..
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'join-leave');// حط اسم الروم بدل codes
    if (!channel) {
        console.log("i have Error !!");
        return;
    }
			 	         var currentTime = new Date(),
		  hours = currentTime.getHours() + 4 ,
          hours2 = currentTime.getHours() + 1 ,             
		   minutes = currentTime.getMinutes(),             
		   seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
            var suffix = 'AM';
            if (hours >= 12) {
                suffix = 'PM';
                hours = hours - 12;	
            }
            if (hours == 0) {
                hours = 12;
            }
         var ee = member.user;
		     var guild;
    while (!guild)
        guild = client.guilds.find("name", "Hangout.")//حط اسم السرفر مكان eyad..
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
ee.send(`We Thank ${Invite.inviter}\nFor he has brought you into the server \nYou are logged in from this link https://discord.gg/${Invite.code}`);
 channel.send({embed : new Discord.RichEmbed()
       .setColor('RANDOM')
       .setThumbnail(ee.avatarURL)
       .setTitle(`**New Member !! **`)	
       .setDescription(`1- Invited By : ${Invite.inviter} \n2- Link Invited : https://discord.gg/${Invite.code} \n3- Member Name : ${member} \n4- Member ID : ${member.id} \n5- Data : ${Day}-${Month}-${Year} \n6- Time : ${hours2}:${minutes}:${seconds} ${suffix}`)
	   });
            dat[Inv] = Invite.uses;
 }
         })
    })

	});
client.login(process.env.BOT_TOKEN);


const { getWeather } = require('./getWeather');

// 各種通知
var webhookEvent = function (bot) {
    // 被加入好友
    bot.on('follow', async (event) => {
        event.reply('感謝將我加為好友');
    })

    // 被解除好友
    bot.on('unfollow', async (event) => {
        console.log('被解除好友了 QQ');
    })

    // 被加入群組/聊天室
    bot.on('join', async (event) => {
        event.reply('感謝將我加入群組');
    })

    // 被踢出群組/聊天室
    bot.on('leave', async (event) => {
        console.log('被踢出群組了 QQ');
    })

    // 有人加入群組/聊天室
    bot.on('memberJoined', async (event) => {
        event.reply('歡迎加入群組 ^^');
    })

    // 有人離開群組/聊天室
    bot.on('memberLeft', async (event) => {
        console.log('有人離開群組了 QQ');
    })
}

// 氣象機器人
let weatherBot = function (bot) {
    bot.on('message', function (event) {
        var userMsg = event.message.text;
        console.log(userMsg);

        getWeather(userMsg)
            .then((res) => {
                console.log(res);
                event.reply(res);
            })
            .catch((err) => {
                console.log(err);
                event.reply('Oops, 好像哪裡出錯了...');
            });
        
    });
}

module.exports = {
    webhookEvent,
    weatherBot
}
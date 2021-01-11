const { getWeather } = require('./getWeather');

// 氣象機器人
let weatherBot = function (bot) {
    bot.on('message', function (event) {
        var userMsg = event.mssage.text;

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
    weatherBot
}
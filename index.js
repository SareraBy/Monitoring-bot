const { Client, GatewayIntentBits } = require('discord.js')

let config = require('./config.json');
let token = config.token;
let prefix = config.prefix;
let game = config.game;
let ip = config.ip;
let port = config.port;

console.log(prefix)

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
})

const gamedig = require('gamedig');

async function online() {
    gamedig.query({type: `${game}`, host:  "62.122.215.164", port:  "9876", requestRules: true
     }).then((state) => {
        console.log(state)

        client.user.setActivity(
            `Онлайн [${state.raw.numplayers}/${state.maxplayers}] `, {type: 0});

    }).catch((error) => {
        client.user.setActivity(`Сервер offline`, {type: 0});
        console.log(error)
    });
}

client.on("ready", () => {
    console.log(`Bot_UP!`);
    online()
    setInterval(online, 10000)
});


1





client.login(token)
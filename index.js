const { Client, GatewayIntentBits } = require('discord.js')

const mySecret = `${process.env['TOKEN']}`;
require("dotenv").config();
const gamedig = require('gamedig');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
})
console.log(mySecret)
async function online() {
    gamedig.query({type: 'valheim', host: `62.122.215.164`, port: "9876", requestRules: true
    }).then((state) => {
        client.user.setActivity(`Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
    }).catch((error) => {
        client.user.setActivity(`Сервер offline`, {type: 0});
        console.log(error)
    });
}

client.on("ready", () => {
    console.log(`Bot_UP!`);
    online()
    setInterval(online, 50000)
});



client.login('MTAxNzE1NTcyMjcwMzgxODg5NA.GhT2IR.XcvmE-NkXRoBXNjmii5Ux4Df_1q-8LXA1wNoH4')
module.exports = async (bot,message,args,argsF) => {

    const {guild} = message;


    message.reply({
        embeds: [{
            title: guild.name,
            description: guild.description,
            fields: [
                {
                    name: "Участников:", value: `${guild.memberCount}`
                },
                {
                    name: "Овнер:", value: `<@${guild.ownerId}>`
                }
            ],
        }]
    });


};
module.exports.names = ["info"];
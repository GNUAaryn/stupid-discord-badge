const { CommandClient } = require('eris')

// Stupid ass bot creation
async function init(token) {
    const stupidAssBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the stupid ass command
    stupidAssBot.on('ready', async () => {
        await stupidAssBot.bulkEditCommands([{
            name: 'rere',
            description: 'louden hatin bot',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${stupidAssBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Stupid ass interaction creation event
    stupidAssBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'louden sucks!!'
            })
            console.log('Self destructing...')
            process.exit(0)
        }
    })
    stupidAssBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);

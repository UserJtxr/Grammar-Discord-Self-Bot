const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();
const cooldown = new Set();

client.on('message', async message => {
    if (message.author.id !== client.user.id) return;
    
    const corrections = {
        '\\bi\\b': 'I',
        '(^|\\.\\s+)(.)': (match, p1, p2) => p1 + p2.toUpperCase(),

'\\basap\\b': 'as soon as possible',
'\\bbtw\\b': 'by the way',
'\\bbrb\\b': 'be right back',
'\\bfyi\\b': 'for your information',
'\\bidc\\b': 'I dont care',
'\\bjk\\b': 'just kidding',
'\\bnp\\b': 'no problem',
'\\bomg\\b': 'oh my god',
'\\bttyl\\b': 'talk to you later',
'\\bwyd\\b': 'what you doing',
'\\bwb\\b': 'welcome back',
        '\bbtw\b': 'by the way',
        '\bidk\b': "I don't know",
        '\btbh\b': 'to be honest',
        '\bthx\b': 'thanks',
        '\bty\b': 'thank you',
        '\blol\b': 'laugh out loud',
        '\bomg\b': 'oh my god',
        '\bwtf\b': 'what the fuck',
        '\bafaik\b': 'as far as I know',
        '\bight\b': "alright", 
        '\bnvm\b': "never mind",
    };
    
    let correctedMessage = message.content;
  if (!correctedMessage.endsWith('.')) {
        correctedMessage += '.';
    }

    if (correctedMessage === message.content) return;
    
    Object.entries(corrections).forEach(([regex, replacement]) => {
        correctedMessage = correctedMessage.replace(new RegExp(regex, 'gi'), replacement);
    });

    if (correctedMessage === message.content) return;
    
    if (!cooldown.has(message.author.id)) { 
        cooldown.add(message.author.id); 
        setTimeout(() => cooldown.delete(message.author.id), 20000); // Change this if you like its in ms.

        try {
            await message.edit(correctedMessage);
        } catch (err) {
            console.error(err);
        }
    }
});

client.login(process.env.TOKEN) // READ the README.md File if it doesnt work for you, scroll down to "Side Note"
.catch(err => console.error(`Failed to login: ${err}`));

// **code by JTXR AKA KHAOS.**

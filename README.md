
# Discord Auto-Correct Selfbot
This clever little self bot prowls your Discord chats, always on the lookout for basic grammar slip-ups. Spot a lowercase `'i'` standing alone? Not on its watch! From capitalizing the first letter of your sentences to correcting common internet shorthand like `'btw'` to `'by the way'`, **this bot's got your back.** It's like having your very own pocket-sized English teacher. So go ahead, type away, and let the `#GrammarPolice` handle the rest! 

## Features

- Corrects common shorthand like 'btw', 'lol', 'omg', 'idk' to their full forms.
- Ensures every sentence ends with a period.
- Capitalizes the first letter of sentences.
- Respects a cooldown to prevent spamming edits.

## Disclaimer

Use this selfbot responsibly and ensure you adhere to Discord's TOS when using it. We are not responsible for any misuse of this bot.

## Contributing

If you'd like to contribute or have any suggestions, feel free to open an issue or a pull request!

## License

This project is licensed. See LICENSE file for details.

Remember to replace `'your_token_here'` with your actual token, and never share your token with anyone. Happy coding! 🚀

**Let's Get Building.**

# Setting up the self bot
Aight, let's break this down step by step.

1. **Set Up Your Environment:** Make sure you have Node.js and npm installed. You can download Node.js from their official website and npm is included in the installation. 

2. **Install the Discord.js-selfbot-v13 Library:** Open your terminal/command prompt and type `npm install discord.js-selfbot-v13`. This will install the library which allows you to interact with the Discord API.

3. **Create Your Bot File:** Create a new file in your working directory and name it whatever you want (for example, `bot.js`). This is where you'll be putting your bot's code.

# The Code: Now, let's dive into the actual code. 

```js
const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();
const cooldown = new Set();
```
This block of code is responsible for importing the necessary libraries and initializing the bot client. The cooldown set is used to prevent spamming edits.

```js
client.on('message', async message => {
    if (message.author.id !== client.user.id) return;
```
This part listens for any messages sent in any server the bot is in. It then checks if the message was sent by the bot. If not, it stops executing the function.

```js
const corrections = {
    // your corrections here
};
```
In this object, you define your corrections. The keys are regular expressions that match words or phrases, and the values are the corrected versions.

```js
let correctedMessage = message.content;
if (!correctedMessage.endsWith('.')) {
    correctedMessage += '.';
}
```
This part takes the content of the message and adds a period at the end if there isn't one already.

```js
Object.entries(corrections).forEach(([regex, replacement]) => {
    correctedMessage = correctedMessage.replace(new RegExp(regex, 'gi'), replacement);
});
```
This part goes through each correction and applies it to the message content.

```js
if (correctedMessage === message.content) return;
if (!cooldown.has(message.author.id)) { 
    cooldown.add(message.author.id); 
    setTimeout(() => cooldown.delete(message.author.id), 20000);
```
Here, we check whether the message was changed. If not, we stop the function. Then, we add the author to the cooldown set to prevent spamming.

```js
Try {
    await message.edit(correctedMessage);
} catch (err) {
    console.error(err);
}
```
This part attempts to edit the message. If an error occurs, it logs it to the console.

```js
});
```
This closes the event listener for the message event.

```js
client.login(process.env.TOKEN)
.catch(err => console.error(`Failed to login: ${err}`));
```

Finally, this part logs the bot in using the token provided in an environment variable.

Hope this helps! Let me know if you have any questions.

## Side Note
Create a `.env` file and add your bot token like so: `TOKEN=your_token_here`.

## Ending Message 

Hey Everyone, JTXR here! I have created this bot for educational purposes only haha. 

Send this github page to the friend who doesnt know how to write properply!

Also Please Add ME, We can talk together. :) 

User - ``1132589798029262919`` / ``Khaos#5861``

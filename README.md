# knock-knock
Quick hack of steam-bot for Vive notification, using https://github.com/Steam-Chat-Bot/node-steam-chat-bot

Clone the repo, do `npm install steam-chat-bot` and move the `pmTigger.js` file into the `node_modules/steam-chat-bot/lib/triggers` directory. Edit the `myBot.js` file to include the username and password for the bot account. Edit `triggers-config.js` to include your userId to be pm'd by the bot.

Use `node myBot.js` to run it once to prompt the Steam Guard email. Grab the code, put it into `myBot.js` and run it again to have it save the sentry file. You can then remove the steam guard code.

You'll need to be friends with the bot account for them to be able to pm you.

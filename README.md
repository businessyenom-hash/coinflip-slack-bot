Coin flip Slack Bot

so this is a little slack bot I put together for hack club star dance.
its deliberately small no database, no external Api, just a few slashes of commands you can try that do simple stuff

WHAT IT DOES?
Try typing these commands below in slack hack club you will find a section where it says #bot spam
/coin-flip-flip flips a coin, and gives you heads or tails
/coin-flip-dice roll a die and gives you number from 1 to 6 
/coin-flip-help lists all the commands if you ever forget 
I gave all the commands the coin-flip the symbol "-" cuz so they dont clash at each other bots in the work space.
and here's the hard part 
here is the instructions to running it locally 


1. Install Node.js 20 or newer
2. Run npm install
3. Copy .env.example` to `.env`
4. Add your Slack bot token to SLACK_BOT_TOKEN and your Socket Mode app token to SLACK_APP_TOKEN
5. Run npm test to check everything's working
6. Run npm start to get it running
7. Test the commands in #bot-spam or a private channel just don't touch `stardance for testing

One thing to be careful about: never commit your .env or share any Slack tokens anywhere not in chat, screenshots, devlogs, or GitHub. If a token ever leaks, rotate it right away before anything else.

Slack app settings

and now im going to deploy out slack bot to hack club Nest.

The bot has to stay online even when my laptop is shut, so I'm planning to host it on Hack Club Nest. 


var ChatBot = require("steam-chat-bot").ChatBot;

// This will log in a steam user with the specified username and password 
// You can also pass in a steam guard code from an email
var myBot = new ChatBot("username", "password", {
	//this is required on the first run if you have steamguard enabled, but not after that.
	//guardCode:        '',

	//the built-in webserver is enabled by default
	disableWebServer: false,

	//If you run steam-chat-bot as root, it will eat your babies. DO NOT RUN steam-chat-bot AS ROOT. Use nginx, lighttpd, or apache as a frontend webserver, or use iptables or your router to forward the port. DO NOT RUN AS ROOT!
	webServerPort:    8080,

	//Color logs in the console? errors are red, etc.
	consoleColors:    true,

	//timestamp logs in console?
	consoleTime:      true,

	//can also be error, debug, none, or other valid winston log levels. Mostly, only Error, Debug, Info get used. 
	logLevel:         "info",

	//can also be error or debug - only controls what gets logged to console; above controls the logfile.
	consoleLogLevel:  "info",

	//Why would you *not* want it to autoconnect?
	autoconnect:      true,

	//You probably want to set this to true, though...
	autoReconnect:    false,

	//log metadata about all http requests?
	httpLogMeta:      true,

	//format expressWinston logs the way it likes?
	httpFormat:       false,

	//that's 5 minutes, if you can't do math. The babysitter checks to make sure we're online if above is true.
	babysitTimer:     5*60*1000,

	//ignore these people for all triggers that don't explicitly *not* ignore them. (this way you can still log them)
	//ignores: ['steamid64','steamid64','steamid64']
});

// Set up the triggers to control the bot
var triggers = require("./triggers-config");
myBot.addTriggers(triggers);


myBot.connect();

// Set up the webserver
myBot.express.use(myBot.Express.static('public'));
myBot.express.get('/kk', function (req, res) {
  kk = myBot.triggers["KnockKnock"];
  var foo = kk._respond("!say Knock knock");
  res.send('Message sent');
})

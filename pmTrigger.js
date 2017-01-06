// This needs to be put in the node_modules/steam-chat-bot/lib/triggers directory...

var util = require("util");
var BaseTrigger = require("./baseTrigger.js").BaseTrigger;
/*
Trigger that makes the bot send a message to a groupchat or private message a person.
command = string - a message must start with this + a space before a response will be given
*/

var PmTrigger = function() {
	PmTrigger.super_.apply(this, arguments);
};

util.inherits(PmTrigger, BaseTrigger);

var type = "PmTrigger";
exports.triggerType = type;
exports.create = function(name, chatBot, options) {
	var trigger = new PmTrigger(type, name, chatBot, options);
		trigger.options.users = options.users || undefined;
		trigger.options.command = trigger.options.command || "!say";
		trigger.respectsMute = false;
	return trigger;
};

// Return true if a message was sent
PmTrigger.prototype._respondToFriendMessage = function(userId, message) {
	return this._respond(message);
}

// Return true if a message was sent
PmTrigger.prototype._respondToChatMessage = function(roomId, chatterId, message) {
	return this._respond(message);
}

PmTrigger.prototype._respond = function(message) {
	var toId = this.options.users[0];
	var query = this._stripCommand(message);
	if(query && query.params[1]) {
		query.params.splice(0,1); //dump the command.
		this._sendMessageAfterDelay(toId, query.params.join(" ")); //send the message
		return true;
	}
	return false;
}

PmTrigger.prototype._stripCommand = function(message) {
	if (this.options.command && message && message.toLowerCase().indexOf(this.options.command.toLowerCase() + " ") === 0) {
		return {message: message, params: message.split(" ")};
	}
	return null;
}

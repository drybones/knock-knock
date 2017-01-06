// this file contains example trigger config/definitions and is meant to be required and passed into ChatBot.addTriggers()

module.exports = [
	{
		name: "KnockKnock",
		type: "PmTrigger",
		options: {
			users: ["userIdToPm"]
		}
	}
];

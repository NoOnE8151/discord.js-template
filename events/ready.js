const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
	//bot status
		client.user.setActivity('template by @no_one0521', {
  type: ActivityType.Playing 
});
		console.log(`Logged in as ${client.user.tag} \n template by No OnE#8151.`);
	},
};

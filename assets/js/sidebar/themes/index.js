export default async function () {
	return {
		'default': await import('./default.js'),
		'discord': await import('./discord.js'),
		'amoled': await import('./amoled.js'),
		'light': await import('./light.js')
	}
}
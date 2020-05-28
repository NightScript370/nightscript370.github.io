const importThemes = async () => {
	return {
		'default': await import('./default.js'),
		'discord': await import('./discord.js'),
		'light': await import('./light.js')
	}
}

export default importThemes
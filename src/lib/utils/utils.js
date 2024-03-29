import EmblaCarousel from 'embla-carousel';

export function sortAndMapPluginToOptions(plugins) {
	return plugins
		.concat()
		.sort((a, b) => (a.name > b.name ? 1 : -1))
		.map((plugin) => plugin.options);
}

export function arePluginsEqual(pluginsA, pluginsB) {
	if (pluginsA.length !== pluginsB.length) return false;

	const { areEqual } = EmblaCarousel.optionsHandler();
	const optionsA = sortAndMapPluginToOptions(pluginsA);
	const optionsB = sortAndMapPluginToOptions(pluginsB);

	return optionsA.every((optionA, index) => {
		const optionB = optionsB[index];
		return areEqual(optionA, optionB);
	});
}

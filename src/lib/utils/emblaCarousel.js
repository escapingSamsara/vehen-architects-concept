import { areOptionsEqual, arePluginsEqual, canUseDOM } from './embla-carousel-reactive-utils';
import EmblaCarousel from 'embla-carousel';

function emblaCarouselSvelte(emblaNode, emblaConfig = { options: {}, plugins: [] }) {
	let storedEmblaConfig = emblaConfig;
	let embla;

	if (canUseDOM()) {
		EmblaCarousel.globalOptions = emblaCarouselSvelte.globalOptions;
		embla = EmblaCarousel(emblaNode, storedEmblaConfig.options, storedEmblaConfig.plugins);
		embla.on('init', () => emblaNode.dispatchEvent(new CustomEvent('init', { detail: embla })));
	}

	return {
		destroy: () => {
			if (embla) embla.destroy();
		},
		update: (newEmblaConfig) => {
			const optionsChanged = !areOptionsEqual(storedEmblaConfig.options, newEmblaConfig.options);
			const pluginsChanged = !arePluginsEqual(storedEmblaConfig.plugins, newEmblaConfig.plugins);

			if (!optionsChanged && !pluginsChanged) return;
			storedEmblaConfig = newEmblaConfig;

			if (embla) {
				embla.reInit(storedEmblaConfig.options, storedEmblaConfig.plugins);
			}
		}
	};
}

emblaCarouselSvelte.globalOptions = undefined;

export default emblaCarouselSvelte;

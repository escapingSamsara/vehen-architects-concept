<script type="text/javascript">
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let emblaApi;
	import Autoplay from "embla-carousel-autoplay";

	const autoplayOptions = {
		delay: 3000,
		stopOnInteraction: false,
		stopOnMouseEnter: true
	};
	let options = { loop: true, axis: "x" };// axis: 'x' | 'y' | 'both', x=default
	let plugins = [Autoplay(autoplayOptions)];

	let prevButtonEnabled = false;
	let nextButtonEnabled = false;

	const onInit = () => {
		emblaApi = event.detail;
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
		onSelect();
	};

	const onSelect = () => {
		if (!emblaApi) return;
		prevButtonEnabled = emblaApi.canScrollPrev();
		nextButtonEnabled = emblaApi.canScrollNext();
	};

	const scrollPrev = () => {
		if (emblaApi) emblaApi.scrollPrev();
	};

	const scrollNext = () => {
		if (emblaApi) emblaApi.scrollNext();
	};

	export let carouselArray = [
		{
			imageUrl: "http://placekitten.com/g/800/250",
			imageDescription: "Slide 1"
		},
		{
			imageUrl: "http://placekitten.com/g/800/250",
			imageDescription: "Slide 1"

		},
		{
			imageUrl: "http://placekitten.com/g/800/250",
			imageDescription: "Slide 1"
		}
	]

</script>

<section class="embla">
	<div class="embla__viewport" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
		<div class="embla__container">
			{#each carouselArray as carouselImage}
			<div class="embla__slide">
<!--				<img class="embla__slide__img" src={carouselImage.imageUrl} alt={carouselImage.imageDescription} />-->
				<div class="image-description embla__slide__img" style="background-image: url({carouselImage.imageUrl})">
				<div class="image-description-box">{carouselImage.imageDescription}</div>
				</div>
			</div>
				{/each}
		</div>
	</div>
	<button
		class="embla__button embla__button--prev"
		on:click={scrollPrev}
		disabled={!prevButtonEnabled}
	>
		-
	</button>
	<button
		class="embla__button embla__button--next"
		on:click={scrollNext}
		disabled={!nextButtonEnabled}
	>
		+
	</button>
</section>

<style lang="scss">
	.embla {
		position: relative;
		padding: 0;
		height: calc(100vh - 200px);
		max-width:100%;
		margin-left: auto;
		margin-right: auto;
	}

	.embla__viewport {
		overflow: hidden;
		display: block;
	}

	.embla__container {
		display: flex;
		margin-left: -5px;
	}

	.embla__slide {
		padding-top: 110px;
		flex: 0 0 100%;
		min-width: 0;
		padding-left: 5px;
		bottom: 0;
		height:calc(100vh);
		counter-increment: slide-number;
		position: relative;
	}
	.embla__slide__img {

	}

	.embla__button {
		outline: 0;
		cursor: pointer;
		background-color: transparent;
		touch-action: manipulation;
		position: absolute;
		border: none;
		z-index: 1;
		top: calc(68%);
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		justify-content: center;
		align-items: center;
		padding: 0;
		font-size: 2rem;
	}

	.embla__button:disabled {
		cursor: default;
		opacity: 0.3;
	}

	.embla__button--prev {
		left: 27px;
	}

	.embla__button--next {
		right: 27px;
	}
	.image-description{
		position: relative;
		width: 100%;
		flex-grow: 1;
		object-fit: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		display: block;
		height: 100%;
		max-width: 100%;
		&:before{
			content: '';
			height: 100%;
			width: 100%;
			position: absolute;
			background: rgba(0, 0, 0, 0.2);
		}
	.image-description-box{
		position: absolute;
		bottom: 0;
		height: fit-content;
		padding: 1rem;
		font-size: 3rem;
		max-width: 80%;
		color: #fff;
		font-weight: lighter;
		text-transform: uppercase;
        line-height: 2.4rem;
		text-shadow: 1px 1px 27px rgba(0, 0, 0, 0.13)
	}
	}
</style>

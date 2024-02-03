<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	let options = { loop: true, startIndex: 0, align: 'center', draggable: true };
	const autoplayOptions = { delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true };
	let plugins = [Autoplay(autoplayOptions)];
	export let images: any[] = [];
</script>

<div class="macbook-box">
	<div class="embla-box">
		<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
			<div class="embla__container">
				{#each images as image}
					<div class="embla__slide"><img src={image} alt="website preview" /></div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.macbook-box {
		margin-top: auto;
		max-height: 550px;
		position: relative;
		min-height: 500px;
		background: url('$lib/assets/projects/macbook.png') no-repeat center center;
		background-size: contain;
	}
	.embla-box {
		position: absolute;
		left: 14.6%;
		top: 3%;
		margin: auto;
		height: 88%;
		width: 72%;
		display: grid;
		place-content: center;

		@include for-phone-only {
			top: 5%;
		}
	}
	.embla {
		background: #f4f5f6;
		border-radius: 4px;
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>

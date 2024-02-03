<script lang="ts">
	import ft_iphone_left from '$lib/assets/projects/finance_tracker_FT/ft_iphone_left.png';
	import ft_iphone_right from '$lib/assets/projects/finance_tracker_FT/ft_iphone_right.png';
	import iphone_mockup from '$lib/assets/projects/iphone_mockup.png';
	import Autoplay from 'embla-carousel-autoplay';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { onMount } from 'svelte';
	import ScrollIcon from '$lib/icons/ScrollIcon.svelte';
	let options = { loop: true, draggable: true, axis: 'y', startIndex: 0 };
	const autoplayOptions = {
		delay: 3000,
		stopOnInteraction: false,
		stopOnMouseEnter: true
	};
	// let plugins = [Autoplay(autoplayOptions)];
	export let images: any[] = [];
</script>

<div class="iphone-container">
	<img src={ft_iphone_left} class="iphone_mockup_left iphone_mockup" alt="" />
	<img src={ft_iphone_right} class="iphone_mockup_right iphone_mockup" alt="" />
	<div class="iphone-box">
		<div class="embla-box">
			<div class="embla" use:emblaCarouselSvelte={{ options }}>
				<div class="embla__container">
					{#each images as image}
						<div class="embla__slide"><img src={image} alt="website preview" /></div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!--	<div class="scroll-icon">-->
	<!--		<ScrollIcon />-->
	<!--	</div>-->
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.iphone-container {
		position: relative;
		height: 100%;
		width: 100%;
	}
	.iphone-box {
		position: relative;
		height: 600px;
		width: 300px;
		background: url('$lib/assets/projects/iphone_mockup.png') no-repeat center center;
		background-size: 210px;
		z-index: 3;
	}
	.embla-box {
		position: absolute;
		margin: auto;
		width: 190px;
		height: auto;
		left: 18%;
		top: 16.25%;
		display: grid;
		place-content: center;
		scale: 1;
	}
	.embla {
		border-radius: 26px;
		overflow: hidden;
	}
	.embla__container {
		height: 405px;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.embla__slide {
		min-width: 0;
		height: 98%;
		scale: 1;
	}
	.iphone_mockup_left,
	.iphone_mockup_right {
		height: 400px;
		position: absolute;
		width: auto;
		z-index: 1;
		@include for-tablet-landscape-down {
			display: none;
		}
	}
	.iphone_mockup {
		border-radius: 40px;
		transform: translate(-50%, -50%) scale(1);
	}
	.iphone_mockup_left {
		top: 40%;
		left: 12%;
	}
	.iphone_mockup_right {
		left: 84%;
		top: 58%;
	}

	.scroll-icon {
		position: absolute;
		left: 70%;
		transform: translateX(-50%);
		z-index: 9000;
		top: 10%;
		height: 55px;
		width: 55px;
		display: grid;
		place-content: center;
	}
</style>

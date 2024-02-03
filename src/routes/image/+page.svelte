<script>
	import '$lib/scss/global.scss';
	import { onMount } from 'svelte';

	let isMobileView = false;
	let handleResize = () => {
		window.innerWidth < 768 ? (isMobileView = true) : (isMobileView = false);
		const appHeight = () => {
			const doc = document.documentElement;
			doc.style.setProperty('--app-height', `${window.innerHeight}px`);
		};
		window.addEventListener('resize', appHeight);
		appHeight();
	};
	onMount(() => {
		handleResize();
	});
</script>

<svelte:window on:resize={handleResize} />
<section class="section-wrapper">
	<img src="#" alt="sister-goddess-retreat-preview-image" />
</section>

<style lang="scss">
	:global(:root) {
		--app-height: 100%;
	}
	.section-wrapper {
		height: 100vh;
		display: grid;
		place-items: center;
		background: var(--main-bg-color-light);
	}
</style>

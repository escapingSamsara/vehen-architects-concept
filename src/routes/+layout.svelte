<script>
	import '$lib/scss/global.scss';
	let scrolledValue = 0;
	$: clientHeight = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:scrollY={scrolledValue} bind:innerHeight />
<div class="main-wrapper" bind:clientHeight>
	<slot />
</div>

<style>
	.main-wrapper {
		/*cursor: none;*/
	}
</style>

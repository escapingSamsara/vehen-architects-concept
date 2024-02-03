<script>
	import { onMount } from 'svelte';
	import { run, showPreferences } from 'vanilla-cookieconsent';
	import config from '$lib/cookieconsent/cookieconsent-config';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	/**
	 * Only run plugin on the client side
	 */
	onMount(() => {
		run(config);
	});
</script>

<button on:click={showPreferences}>Cookie-Einstellungen verwalten</button>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	button {
		margin-top: 1rem;
	}
</style>

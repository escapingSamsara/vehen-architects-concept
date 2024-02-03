<script>
	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';
	import { onMount } from 'svelte';
	import { isLoading } from '$lib/stores/isLoading.js';

	onMount(() => {
		console.log('mounted');
		$isLoading = false;
	});

	$: console.log($isLoading, 'isLoading');
</script>

<svelte:head>
	<link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
	<meta property="og:url" content={siteBaseUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="main-wrapper">
	<slot />
</main>

<style>
</style>

<script lang="ts">
	import '$lib/scss/global.scss';
	import { onMount } from 'svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import { imagesLoading } from '../../stores/imagesLoading';
	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';
	import SvelteSeo from 'svelte-seo';
	import SubrouteHeader from '$lib/components/SubrouteHeader.svelte';

	let isLoading = true;
	onMount(() => {
		isLoading = true;
		{
			if (!$imagesLoading) {
				isLoading = false;
			}
		}
	});
</script>

<svelte:head>
	<meta
		name="robot"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta property="og:image" content={image} />
	<meta property="og:url" content={siteBaseUrl} />
	<SvelteSeo
		title="Preview Image - {title}"
		{description}
		canonical={siteBaseUrl}
		keywords={keywords.join(', ')}
		openGraph={{
			title: title,
			description: description,
			url: siteBaseUrl,
			type: 'website',
			site_name: title,
			locale: 'de_DE'
		}}
		twitter={{
			title: title,
			description: description,
			card: 'summary_large_image'
		}}
	/>
</svelte:head>

<div class="app scroll-to-target-container child-route">
	{#if isLoading}
		<main>
			<PageLoader />
		</main>
	{:else}
		<SubrouteHeader />
		<main>
			<slot />
		</main>
	{/if}
</div>

<style lang="scss">
	.child-route {
		background: var(--main-bg-color);
		height: 100dvh;
	}
</style>

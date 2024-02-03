<script>
	import { description, image, keywords, siteBaseUrl } from '$lib/data/meta.ts';
	import Header from '$lib/components/organisms/Header.svelte';
	let impressumTitle = 'impressum - jakobpusterhofer.dev';
</script>

<svelte:head>
	<link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{impressumTitle}</title>
	<meta property="og:title" content={impressumTitle} />
	<meta name="twitter:title" content={impressumTitle} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
	<meta property="og:url" content={siteBaseUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />
<main>
	<slot />
</main>

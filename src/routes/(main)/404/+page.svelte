<script>
	import TextScramble404 from '$lib/components/molecules/TextScramble404.svelte';
</script>

<div class="container">
	<TextScramble404 />
	<br />
	<p>seems like there was some sort of error.</p>

	<a href="/" class="error-link">try again ?</a>
</div>

<style lang="scss">
	.container {
		height: 100vh;
		width: 100dvw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		a {
			height: 40px;
			display: grid;
			align-items: center;
		}
		.error-link {
			color: var(--color--primary);

			&:hover {
				color: var(--color--primary-tint);
			}
		}
	}
</style>

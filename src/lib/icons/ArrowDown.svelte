<script>
	export let handleClick;
</script>

<svg
	on:click={handleClick}
	width="34px"
	height="34px"
	stroke-width="1.5"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	color="currentColor"
	><path
		d="M6 9L12 15L18 9"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/></svg
>

<style lang="scss">
	svg {
		&:hover {
			cursor: pointer;
			transition: all 0.2s ease-in-out;
			color: var(--color--primary-tint);
		}
	}
</style>

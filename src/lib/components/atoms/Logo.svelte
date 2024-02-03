<script>
	export let animated = false;
</script>

<div class="logo" class:animated>
	<a>jakobpusterhofer<span>.</span>dev</a>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	.logo {
		letter-spacing: 1px;
		width: auto;
		height: 100%;
		display: flex;
		gap: 16px;
		font-weight: bold;
		align-items: center;

		@include for-phone-only {
			gap: 8px;
		}
		span {
			color: var(--color--primary);
		}
	}
</style>

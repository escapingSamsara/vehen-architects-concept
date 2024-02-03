<script>
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	export let size = 17;
	export let handleClick;
	export let text = 'get in touch';
</script>

<div class="cta-button-box">
	<button class="cta-btn" on:click={handleClick}>{text} <slot /></button>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.cta-button-box {
		@include flex-center();
		max-width: 180px;
		min-width: 150px;
		@include full-height-width();

		@include for-tablet-portrait-down {
			font-size: 1rem;
			padding: 0 0.25rem;
		}
		.cta-btn {
			@include full-height-width();
			line-height: var(--main-text-line-height);
			font-size: 1.15rem;
			max-height: 60px;
			min-height: 40px;
			max-width: 180px;
			min-width: 100px;
			border-radius: 50px;
			border: 2px solid var(--color--primary);
			padding: 0 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: none;
			color: var(--color--text);
			&:hover {
				cursor: pointer;
				transition: all 0.2s ease-in-out;
				border: 2px solid var(--color--primary-tint);
			}
			@include for-tablet-portrait-down {
				font-size: 1rem;
				padding: 0 0.75rem;
			}
		}
	}
</style>

<script>
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	export let size = 12;
</script>

<div class="contact-sitemap-wrapper">
	<div class="contact-sitemap">
		<div class="sitemap-header">sitemap</div>
		<div class="sitemap-content">
			<div class="cta-button-box">
				<a class="cta-btn" href="#hero"><span>home</span><ArrowRight {size} /></a>
			</div>
			<div class="cta-button-box">
				<a class="cta-btn" href="#about"><span>about</span><ArrowRight {size} /></a>
			</div>
			<div class="cta-button-box">
				<a class="cta-btn" href="#latest-projects"><span>projects</span><ArrowRight {size} /></a>
			</div>
			<div class="cta-button-box">
				<a class="cta-btn" href="#services"><span>services</span><ArrowRight {size} /></a>
			</div>
		</div>
	</div>
	<div class="contact-sitemap">
		<div class="sitemap-header">connect</div>
		<div class="sitemap-content">
			<div class="cta-button-box">
				<a href="mailto:office@jakobpusterhofer.dev" rel="noopener norefferer" class="cta-btn"
					><span>mail</span><ArrowRight {size} /></a
				>
			</div>
			<div class="cta-button-box">
				<a href="https://github.com/escapingSamsara" rel="noopener norefferer" class="cta-btn"
					><span>github</span><ArrowRight {size} /></a
				>
			</div>
			<div class="cta-button-box">
				<a rel="noopener norefferer" class="cta-btn"><span>twitter</span><ArrowRight {size} /></a>
			</div>
			<div class="cta-button-box">
				<a
					href="https://www.linkedin.com/in/jakob-pusterhofer-abb46417b/"
					rel="noopener norefferer"
					class="cta-btn"><span>linkedin</span><ArrowRight {size} /></a
				>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.contact-sitemap-wrapper {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 20px;
		height: 425px;
		@include for-tablet-landscape-down {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			height: 380px;
		}
		@include for-tablet-portrait-down {
			height: 360px;
		}
		@include for-phone-only {
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding-top: 0;
			gap: 40px;
			height: 260px;
		}
	}
	.contact-sitemap {
		width: 110px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		.sitemap-header {
			width: 100%;
			font-size: 1.15rem;
			font-weight: lighter;
			margin-bottom: 0.15rem;
			@include for-phone-only {
				font-size: 1rem;
			}
		}
	}
	.cta-button-box {
		width: 100px;
		.cta-btn {
			margin-bottom: 0.2rem;
			@include full-height-width();
			@include main-text-size-height();
			width: 100%;
			display: flex;
			border-bottom: 1px solid var(--color--text);
			border-top: none;
			border-left: none;
			border-right: none;
			justify-content: space-between;
			align-items: center;
			background: none;
			color: var(--color--text);
			font-weight: lighter;
			transition: all 0.2s ease-in-out;

			&:hover {
				cursor: pointer;
				transition: all 0.2s ease-in-out;
				border-bottom: 1px solid var(--color--primary);
			}
			span {
				padding-right: 0.5em;
			}
		}
	}
</style>

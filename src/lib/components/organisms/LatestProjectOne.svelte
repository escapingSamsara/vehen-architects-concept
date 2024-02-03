<script>
	import sgr_hero from '$lib/assets/projects/sister-goddess-retreat_SGR/sgr_hero.png';
	import sgr_overview from '$lib/assets/projects/sister-goddess-retreat_SGR/sgr_overview.png';
	import sgr_sisterhood from '$lib/assets/projects/sister-goddess-retreat_SGR/sgr_sisterhood.png';
	import WebsiteIcon from '$lib/icons/WebsiteIcon.svelte';
	import sgr_phone from '$lib/assets/projects/sister-goddess-retreat_SGR/sgr_phone.png';
	import MacbookScrollable from '$lib/components/molecules/MacbookScrollable.svelte';
	import iphone_mockup from '$lib/assets/projects/iphone_mockup.png';
	import EmblaCarousel from '$lib/components/molecules/EmblaCarousel.svelte';
	export let macbookImages = [sgr_hero, sgr_overview, sgr_sisterhood];
</script>

<div class="spacer-10" />
<section id="latest-projects">
	<div class="section-header-box">
		<h2 class="section-header">latest projects</h2>
	</div>
	<div class="section-content-container">
		<div class="section-content-column about-me-text-content-column">
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">
						sistergoddess.at <a
							href="https://www.sistergoddess.at"
							target="_blank"
							rel="noreferrer noopener"><WebsiteIcon /></a
						>
					</h4>
					<div class="phone-content-box">
						website
						<span class="image-box-phone">
							<!--							<img src={sgr_phone} alt="" />-->
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="section-content-column projects-image-content-column">
			<!--			<MacbookScrollable images={macbookImages} />-->
		</div>
		<EmblaCarousel />
	</div>
</section>
<div class="spacer-10" />

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.spacer-10 {
		height: calc(10rem);
	}
	#latest-projects {
		min-height: calc(100vh);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 200px 1fr;
		gap: 0;

		@include for-phone-only {
			grid-template-rows: 160px 1fr;
		}
	}
	.section-header-box {
		//border: 1px solid red;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		width: 100%;
		.section-header {
			@include section-header-size-height();
		}
	}

	.section-content-container {
		//border: 1px solid red;
		display: grid;
		grid-template-columns: 1fr 1.75fr;
		grid-template-rows: 1fr;
		@include full-height-width();
		min-height: calc(100vh - 200px);

		@include for-phone-only {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.section-content-column {
			@include full-height-width();
			display: grid;
			height: 100%;
			margin: auto 0;

			@include for-phone-only {
				height: 100%;
			}
		}
		.about-me-text-content-column {
			.text-box {
				@include full-height-width();
				.text-box-content {
					display: flex;
					justify-content: flex-start;
					padding-top: 1rem;
					flex-direction: column;
					@include full-height-width();

					.text-box-header {
						display: flex;
						justify-content: flex-start;
						@include text-box-header-size-height();

						a {
							padding-left: 1rem;
							transition: all 0.2s ease-in-out;
							&:hover {
								transition: all 0.2s ease-in-out;
								transform: scale(0.95);
							}
						}
					}
					.phone-content-box {
						display: grid;
						height: 100%;
						grid-template-rows: 50px 1fr;
						max-width: 500px;
						@include main-text-size-height();
						font-weight: bold;

						.image-box-phone {
							display: grid;
							place-content: center;

							img {
								width: 100%;
								max-width: 420px;
							}
						}
					}
				}
			}
		}
	}
</style>

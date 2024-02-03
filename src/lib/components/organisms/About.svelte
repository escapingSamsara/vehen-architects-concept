<script>
	import { sectionContentStore } from '$lib/stores/studioStores';

	let aboutHeader2 = $sectionContentStore[1].header;
	let aboutText2 = $sectionContentStore[1].description;
	let aboutHeader3 = $sectionContentStore[2].header;
	let aboutText3 = $sectionContentStore[2].description;
	let aboutHeader4 = $sectionContentStore[3].header;
	let aboutText4 = $sectionContentStore[3].description;
	let aboutHeader5 = $sectionContentStore[4].header;
	let aboutText5 = $sectionContentStore[4].description;
</script>

<section id="route-wrapper">
	<div class="section-header-box">
		<h2 class="section-header">about us</h2>
	</div>
	<div class="section-content-container">
		<div class="section-content-column about-me-text-content-column">
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">
						{aboutHeader2}
					</h4>
					<p class="text-box-text">
						{aboutText2}
					</p>
				</div>
			</div>
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">
						{aboutHeader3}
					</h4>
					<p class="text-box-text">
						{aboutText3}
					</p>
				</div>
			</div>
		</div>
		<div class="section-content-column about-me-text-content-column">
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">
						{aboutHeader5}
					</h4>
					<p class="text-box-text">
						{aboutText5}
					</p>
				</div>
			</div>
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">
						{aboutHeader4}
					</h4>
					<p class="text-box-text">
						{aboutText4}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.spacer-10 {
		height: calc(10rem);
	}
	#about {
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
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		width: 100%;
		.section-header {
			@include section-header-size-height();
			font-size: 3rem;
			font-weight: lighter;
			text-transform: uppercase;
		}
	}

	.section-content-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		@include full-height-width();
		min-height: calc(100vh - 200px);
		border: 1px solid red;

		@include for-phone-only {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.section-content-column {
			@include full-height-width();
			display: grid;
			height: 95%;
			grid-template-rows: 1fr 1fr;
			margin: 0 0 auto 0;
			@include for-phone-only {
				height: 100%;
			}
		}
		.about-me-text-content-column {
			.text-box {
				@include full-height-width();
				/* border: 1px solid red; */
				padding-right: 10px;
				.text-box-content {
					@include full-height-width();
					display: flex;
					justify-content: center;
					flex-direction: column;

					.text-box-header {
						font-weight: bold;
						font-size: 1.5rem;
						padding-top: 0.5rem;
						height: 60px;
					}
					.text-box-text {
						max-width: 400px;
						@include main-text-size-height();
						height: calc(100% - 60px);
					}
				}
			}
		}
		.about-me-image-content-column {
			grid-template-rows: 1fr;
			.about-me-image-box {
				@include flex-center();
				.about-me-image {
					height: 100%;
					border-radius: 8px;
					transition: all 0.2s ease-in-out;
				}
			}
		}
	}
</style>

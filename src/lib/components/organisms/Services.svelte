<script>
	let aboutMeImg = 'https://placehold.co/300'
</script>

<section id="route-wrapper">
	<div class="section-header-box">
		<h2 class="section-header">services</h2>
	</div>
	<div class="section-content-container">
		<div class="section-content-column about-me-text-content-column">
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">lorem</h4>
					<p class="text-box-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, blanditiis dolor, doloremque ea exosam magni nobis nostrum officiis quaerat vel?
					</p>
				</div>
			</div>
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">lorem</h4>
					<p class="text-box-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, blanditiis dolor, doloremque ea explicabo fa laboriosam magni nobis nostrum officiis quaerat vel?
					</p>
				</div>
			</div>
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">lorem</h4>
					<p class="text-box-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, blanditiis dolor, doloremque ea explicabo facilis fuga hic, in laboriosam magni nobis nostrum officiis quaerat vel?
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.iciis quaerat vel?Lorem ieriores, blanditiis dolor, doloremque ea explicabo facilis fuga hic, in laboriosam magni nobis nostrum officiis quaerat vel?
					</p>
				</div>
			</div>
		</div>
		<div class="section-content-column about-me-image-content-column">
			<div class="about-me-image-box">
				<img src={aboutMeImg} class="about-me-image" alt="ABOUT-IMG-ALT" title="ABOUR-IMG-TITLE" />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.spacer-10 {
		height: calc(10rem);
	}
	#projects {
		min-height: calc(100vh);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 200px 1fr;
		gap: 0;
		border: 1px solid red;

		@include for-phone-only {
			grid-template-rows: 160px 1fr;
		}
	}
	.section-header-box {
		border: 1px solid red;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		width: 100%;
		.section-header {
			@include section-header-size-height();
		}
	}

	.section-content-container {
		border: 1px solid red;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		@include full-height-width();
		min-height: calc(100vh - 200px);

		@include for-phone-only {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.section-content-column {
			border: 1px solid red;
			@include full-height-width();
			display: grid;
			height:95%;
			margin: 0 0 auto 0;
			@include for-phone-only {
				height: 100%;
			}
		}
		.about-me-text-content-column {
			.text-box {
				@include full-height-width();
				.text-box-content {
					display: flex;
					justify-content: center;
					flex-direction: column;
					@include full-height-width();

					.text-box-header {
						@include text-box-header-size-height();
					}
					.text-box-text {
						max-width: 500px;
						@include main-text-size-height();
						font-weight: bold;
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

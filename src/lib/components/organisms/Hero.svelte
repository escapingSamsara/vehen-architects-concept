<script lang="ts">
	import {sectionContentStore} from '$lib/stores/studioStores';
import {projectsStore} from "$lib/stores/studioStores";
	import CompanyLogo from "$lib/icons/CompanyLogo.svelte";
	let heroHeader = $sectionContentStore[8].description
let heroImage = $projectsStore[0].imageUrls[0]
	console.log(heroImage, 'heroImage')
	export let size = 45
	export let color = "#fff"
	export let hideIcon = false
</script>


<section id="route-wrapper">
<div class="spacer10"></div>
	<div class="section-content-container">
		<div class="section-content-column about-me-text-content-column">
				<h1 class="section-header">{heroHeader}</h1>
		</div>
		<div class="section-content-column about-me-image-content-column">
			<div class="about-me-image-box">
				<img src={heroImage} class="about-me-image" alt="ABOUT-IMG-ALT" title="ABOUR-IMG-TITLE" />
			</div>
			<div class="company-logo">
				<CompanyLogo {size} {color} {hideIcon}/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.spacer-10 {
		height: calc(10rem);
	}
	#route-wrapper {
		overflow: hidden;
		grid-template-rows: 1fr;
		position: relative;
		@include for-phone-only {
			grid-template-rows: 160px 1fr;
		}
	}
		.section-header {
			@include section-header-size-height();
			font-family: Montserrat, sans-serif;
			font-weight: 400;
			text-transform: uppercase;
			z-index: 1;
			position: absolute;
			top: 150px;
			mix-blend-mode: difference;
			color: white;
			max-width: 950px;
			}
	.section-content-container {
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
			background: black;
			grid-template-rows: 1fr;
			position: absolute;
			bottom: 0;
			z-index: -1;
			height: 68vh;


			@include for-phone-only{
				height: 56.5vh;
			}

			.about-me-image-box {
				@include flex-center();
				filter:contrast(1.5);


				&:before{
					content: "";
					height: 100%;
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background: linear-gradient(320deg, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.01) 100%);
				}
				.about-me-image {
					height: 100%;
					width: auto;
					transition: all 0.2s ease-in-out;
				}
			}
			.company-logo{
				position: absolute;
			    bottom: 8%;
				right: 5%;
				scale: 3;
				border: 1px pink;
			}
		}
	}
</style>

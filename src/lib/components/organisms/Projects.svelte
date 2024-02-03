<script>
import EmblaCarousel from '$lib/components/molecules/EmblaCarousel.svelte'
	import {projectsStore} from "$lib/stores/studioStores.js";

const formattedProjects =$projectsStore?.imageUrls.map((url, index) => ({
	imageUrl: url,
	imageDescription: $projectsStore?.imageDescription[index]
}));


</script>

<section id="route-wrapper">
	<div class="section-content-container">
		<div class="projects-header">projects</div>
				<EmblaCarousel carouselArray={formattedProjects}/>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	#projects {
		min-height: calc(100vh);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0;

		@include for-phone-only {
		}
	}
	.projects-header{
		z-index: 2;
		position: absolute;
		justify-content: center;
		align-items: center;
		display: flex;
		left: 20vw;
		top: 64px;
		font-size: 4rem;
		text-transform: uppercase;
		background: linear-gradient(to bottom, black 50%, #f8f8f8 40%);
		-webkit-background-clip: text;
		color: transparent;


	}
</style>

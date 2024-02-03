<script lang="ts">
	import AddIcon from '$lib/icons/AddIcon.svelte';

	export let images: any[] = [];
	import ft_dashboard from '$lib/assets/projects/finance_tracker_FT/ft_dashboard.png';

	export let size = 60;
</script>

<div class="macbook-box-wrapper">
	<div class="macbook-box">
		<div class="macbook">
			<div class="macbook__container">
				<div class="macbook__slide"><img src={ft_dashboard} alt="website preview" /></div>
			</div>
		</div>
	</div>
	<div class="interaction-button-container">
		<div class="interactive-section-box section-box-1">1</div>
		<div class="interactive-section-box section-box-2"><AddIcon {size} /></div>
		<div class="interactive-section-box section-box-3">3</div>
	</div>
</div>

<style lang="scss">
	.macbook-box-wrapper {
		margin-top: auto;
		max-height: 550px;
		position: relative;
		min-height: 500px;
		background: url('$lib/assets/projects/macbook.png') no-repeat center center;
		background-size: contain;
	}
	.interaction-button-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		display: flex;
		width: 80%;
		height: 80%;
	}
	.interactive-section-box {
		height: 80px;
		width: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid #333;
		cursor: pointer;
		font-size: 0.5rem;
	}

	.section-box-1 {
		position: absolute;
		top: 9%;
		left: 7.65%;
		transform: translate(-50%, -50%);
	}
	.section-box-2 {
		position: absolute;
		top: 54%;
		left: 64.65%;
		transform: translate(-50%, -50%);
		border: none;
	}
	.macbook-box {
		position: absolute;
		left: 14.5%;
		top: 8%;
		margin: auto;
		height: 80%;
		width: 72%;
		display: grid;
		place-content: center;
	}
	.macbook {
		overflow: hidden;
	}
	.macbook__container {
		display: flex;
	}
	.macbook__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>

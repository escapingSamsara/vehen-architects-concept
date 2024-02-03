<script>
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { openModal } from 'svelte-modals';
	import CtaBtn from '$lib/components/atoms/CtaBtn.svelte';
	function handleFormClick() {
		openModal(() => import('$lib/components/organisms/ContactModal.svelte'));
	}
	export let size = 17;
	export let text = 'get in touch';
</script>

<div class="text-box">
	<div class="text-box-content">
		<div class="top-line line">
			<div class="word">how about</div>
		</div>
		<div class="second-line line">
			<div class="word">we</div>
			<div class="spacer" />
			<!--			<div class="cta-button-box">-->
			<!--				<button class="cta-btn" on:click={handleClick}>get in touch <ArrowRight {size} /></button>-->
			<!--			</div>-->
			<CtaBtn handleClick={handleFormClick} {text} {size}><ArrowRight {size} /></CtaBtn>
			<div class="spacer" />
			<div class="word">create</div>
		</div>
		<div class="third-line line">
			<div class="word">digital magic,</div>
		</div>
		<div class="fourth-line line">
			<div class="word">together</div>
			<div class="spacer" />
			<div class="word small"><p>BEYOND THE ORDINARY</p></div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.text-box {
		@include full-height-width();
		.text-box-content {
			margin: auto 0;
			display: grid;
			justify-content: flex-start;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(4, 1fr);
			height: 425px;
			@include for-tablet-landscape-down {
				height: 380px;
			}
			@include for-tablet-portrait-down {
				height: 360px;
			}
			.spacer {
				width: 20px;
			}
			.spacer-small {
				width: 10px;
			}
			.line {
				display: flex;
				width: 60vw;
				min-width: 300px;
				height: calc(5 * 1.175em);
				@include for-tablet-landscape-down {
					width: 100%;
					height: calc(5 * 1em);
				}

				.word {
					scale: 1;
					@include flex-center();
					font-size: 5em;
					@include section-header-size-height();
					letter-spacing: -0.05rem;
					font-weight: bolder;

					@include for-phone-only {
						letter-spacing: -0.1rem;
					}
				}
				.small {
					padding-bottom: 2.5%;
					display: flex;
					align-items: flex-end;
					justify-content: center;
					min-width: fit-content;
					font-size: 1rem;
					font-weight: lighter;
					letter-spacing: 0;
					color: var(--color--primary);
				}
			}
		}
	}
</style>

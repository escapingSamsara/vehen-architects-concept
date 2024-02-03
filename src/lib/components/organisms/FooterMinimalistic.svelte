<script>
	import SocialLinks from '$lib/components/molecules/SocialLinks.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { run, showPreferences } from 'vanilla-cookieconsent';
	import config from '$lib/cookieconsent/cookieconsent-config';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	onMount(() => {
		run(config);
	});
	const handleImprintRedirect = () => {
		browser && goto('/impressum');
	};

	const handlePrivacyPolicyRedirect = () => {
		browser && goto('/privacy-policy');
	};
</script>

<footer class="container">
	<div class="content">
		<div class="dislaimer">
			<div class="disclaimer-box">
				<button on:click={showPreferences}><small>cookies</small></button>
			</div>
			<div class="disclaimer-box">
				<button on:click={handlePrivacyPolicyRedirect}><small>privacy</small></button>
			</div>
			<div class="disclaimer-box">
				<button on:click={handleImprintRedirect}><small>impressum</small></button>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	footer {
		padding: 1rem 30px;
		height: 100px;
		width: 100%;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.content {
			@include full-height-width;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;
			text-align: center;
			.dislaimer {
				text-align: right;
				@include full-height-width;
				.disclaimer-box {
					height: 33.3333333%;
					color: var(--color--text);
					font-weight: lighter;
					transition: all 0.2s ease-in-out;

					&:hover {
						cursor: pointer;
						transition: all 0.2s ease-in-out;
					}
					span {
						padding-right: 0.5em;
					}
					button {
						all: unset;
						background: none;
						border: none;
						transition: all 0.2s ease;
						color: var(--color--text-shade);
						&:hover {
							transition: all 0.2s ease;
							cursor: pointer;
							color: var(--color--primary);
						}
					}
				}
			}
			.credits {
				display: grid;
				place-content: center;
				width: 280px;
				height: 25px;
				font-weight: 400;
				.credits-text {
					color: var(--color--text-shade);
					font-size: 0.65rem;
				}
			}
		}
		a {
			color: var(--color--text-shade);
			&:hover {
				color: var(--color--primary);
			}
		}
	}
</style>

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

<footer>
	<div class="content">
		<div class="socials">
			<SocialLinks />
		</div>
		<div class="dislaimer">
			<div class="disclaimer-box">
				<button on:click={handleImprintRedirect}><small>impressum</small></button>
			</div>
			<div class="disclaimer-box">
				<button on:click={showPreferences}><small>cookies</small></button>
			</div>
			<div class="disclaimer-box">
				<button on:click={handlePrivacyPolicyRedirect}><small>privacy</small></button>
			</div>
		</div>
		<div class="credits">
			<p class="credits-text">
				powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
					>sveltekit</a
				>
			</p>
		</div>
	</div>
</footer>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	footer {
		padding: 1rem;
		height: 120px;
		width: 100%;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-weight: 600;
			text-align: center;
			.dislaimer {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 20px;
				align-items: center;
				width: 280px;
				grid-template-rows: 1fr;
				height: 35px;
				padding-top: 10px;
				font-weight: 400;
				font-size: 0.75rem;
				text-transform: uppercase;
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

<script lang="ts">
	import LinkedInIcon from '../../icons/socials/LinkedInIcon.svelte';
	import GithubIcon from '../../icons/socials/GithubIcon.svelte';
	import EmailIcon from '$lib/icons/socials/EmailIcon.svelte';
	import MediumIcon from '$lib/icons/socials/MediumIcon.svelte';
	import { openModal } from 'svelte-modals';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	function handleClick() {
		openModal(() => import('$lib/components/organisms/ContactModal.svelte'));
	}
</script>

<div class="socials">
	<a
		href="https://github.com/escapingSamsara/"
		target="_blank"
		rel="noopener noreferrer"
		title="Check out our GitHub Profile!"
	>
		<GithubIcon />
	</a>
	<button class="contact-modal-form" title="Contact Me!" on:click={handleClick}
		><EmailIcon /></button
	>
	<a
		href="https://medium.com/@jpusterhofer"
		target="_blank"
		rel="noopener noreferrer"
		title="Check out our latest articles!"
	>
		<MediumIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/jakob-pusterhofer-abb46417b/"
		target="_blank"
		rel="noopener noreferrer"
		title="Let's connect on LinkedIn!"
	>
		<LinkedInIcon />
	</a>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.socials {
		display: flex;
		min-height: 52px;
		align-items: center;
		justify-content: space-evenly;
		width: 280px;
		a {
			@include flex-center();
			transition: all 0.2s ease-in-out;
			width: 34px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: rgba(0, 173, 181, 1);
				fill: rgba(0, 173, 181, 1);
				filter: drop-shadow(0px 0px 1px rgba(0, 173, 181, 0.5));
			}
		}
	}

	.contact-modal-form {
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
		background: none;
		border: none;
		padding: 0;
		height: 34px;
		transition: all 0.2s ease-in-out;
		color: var(--color--text);
		fill: var(--color--text);

		&:hover {
			color: rgba(0, 173, 181, 1);
			fill: rgba(0, 173, 181, 1);
			filter: drop-shadow(0px 0px 1px rgba(0, 173, 181, 0.5));
		}
	}
</style>

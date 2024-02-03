<script>
	import OnePlusTwoIsFour from '$lib/icons/1+2=4.svelte';
	import CookieIcon from '$lib/icons/CookieIcon.svelte';
	import { fade } from 'svelte/transition';
	import CookieConsentComponent from '$lib/cookieconsent/cookieconsent.svelte';
	import { onMount } from 'svelte';
	import { hidePreferences, showPreferences } from 'vanilla-cookieconsent';
	import { closeModal, Modals } from 'svelte-modals';
	onMount(() => {
		setTimeout(() => {
			hidePreferences();
		}, 200);
	});
</script>

<div class="privacy-policy-box">
	<div class="left-policy-container">
		<div class="cookie-faq">
			<h3>Cookie Policy</h3>
			<p>
				<small>
					This Cookie Policy explains what cookies are and how we use them, the types of cookies I
					use i.e, the information we collect using cookies and how that information is used, and how
					to manage the cookie settings.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h4>What are cookies?</h4>
			<p>
				<small>
					Cookies are small text files that are used to store small pieces of information. They are
					stored on your device when the website is loaded on your browser. These cookies help us
					make the website function properly, make it more secure, provide better user experience,
					and understand how the website performs and to analyze what works and where it needs
					improvement.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h4>How do we use cookies?</h4>
			<p>
				<small>
					As most of the online services, our website uses first-party and third-party cookies for
					several purposes. First-party cookies are mostly necessary for the website to function the
					right way, and they do not collect any of your personally identifiable data.
				</small>
			</p>
			<p>
				<small>
					The third-party cookies used on our website are mainly for understanding how the website
					performs, how you interact with our website, keeping our services secure, providing
					advertisements that are relevant to you, and all in all providing you with a better and
					improved user experience and help speed up your future interactions with our website.
				</small>
			</p>
		</div>
	</div>
	<div class="right-policy-container">
		<div class="cookie-faq">
			<h4>Manage cookie preferences:</h4>
			<p>
				<small>
					You can change your cookie preferences any time by clicking <button
						class="change-preferences-btn"
						on:click={() => showPreferences()}>here</button
					>. This will let you revisit the cookie consent banner and change your preferences or
					withdraw your consent right away. In addition to this, different browsers provide
					different methods to block and delete cookies used by websites. You can change the
					settings of your browser to block/delete the cookies.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h4>Support documents:</h4>
			<p>
				<small>
					Links to the support documents on how to manage and delete cookies from the major web
					browsers can be found here:
					<a
						href="https://support.google.com/accounts/answer/32050"
						rel="noopener noreferrer"
						target="_blank">Chrome</a
					>
					|
					<a
						href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
						rel="noopener noreferrer"
						target="_blank">Safari</a
					>
					|
					<a
						rel="noopener noreferrer"
						href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
						target="_blank">Firefox</a
					>
					|
					<a
						rel="noopener noreferrer"
						href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
						target="_blank">Internet Explorer</a
					>
				</small>

				<small>
					If you are using any other web browser, please visit your browser’s official support
					documents.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<div class="cookie-faq cookie-logo">
				<CookieIcon />
			</div>
		</div>
	</div>
</div>
<div class="cookie-faq-bottom-info">
	<div class="cookie-faq-dates">
		<p>
			<small>Last Updated: 27.10.2023</small>
		</p>
	</div>
</div>
<Modals>
	<div slot="backdrop" transition:fade class="backdrop" on:click={closeModal} />
</Modals>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.privacy-policy-box {
		display: grid;
		padding-top: 20px;
		height: 100%;
		min-height: calc(100vh - 60px - 60px);
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}
	}
	.cookie-faq-content {
		display: grid;
		gap: 20px;
	}
	.cookie-faq {
		padding-bottom: 1rem;
		max-width: 600px;
	}

	.cookie-logo {
		padding-top: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.cookie-faq-header-box {
		max-width: 600px;
		height: 100%;
	}
	.cookie-faq-bottom-info {
		display: flex;
		height: 55px;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		p {
			line-height: 0.85rem;
			font-size: 0.75rem;
		}
		.cookie-faq-disclaimer,
		.cookie-faq-dates {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			flex-direction: column;
		}
	}
	p {
		@include main-text-size-height();
	}
	a {
		cursor: pointer;
		color: var(--color--primary);

		&:hover {
			color: var(--color--primary-tint);
		}
	}
	.left-policy-container {
		display: flex;
		flex-direction: column;
	}
	.right-policy-container {
		padding-top: 35px;
		display: flex;
		flex-direction: column;

		@include for-tablet-portrait-down {
			padding-top: 0;
		}
	}

	.change-preferences-btn {
		background: none;
		border: none;
		outline: none;
		color: var(--color--primary);
		cursor: pointer;

		&:hover {
			color: var(--color--primary-tint);
		}
	}
</style>

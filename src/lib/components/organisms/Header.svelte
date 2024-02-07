<script lang="ts">
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';

	import CompanyLogo from '$lib/icons/CompanyLogo.svelte';
	import { onMount } from 'svelte';
	let opacity = 1;
	let lastScroll = 0;
	let showHeader = true; // Control the visibility of the header

	onMount(() => {
		if (window) {
			window.addEventListener('scroll', handleScroll);
		}
	});
	function handleScroll() {
		const scrollPos = window.scrollY;

		// Update opacity based on scroll position
		opacity = scrollPos > 100 ? 0.125 : 1;

		showHeader = (scrollPos < lastScroll && scrollPos >= 100) || scrollPos < 100;

		lastScroll = scrollPos;
	}
</script>

<header style="opacity: {opacity}" class:showNav={showHeader}>
	<nav class="container">
		<div class="logo">
			<button title="i want to go home">
				<a href="/">
					<CompanyLogo />
				</a>
			</button>
		</div>
		<div class="links">
			<div class="nav-link-box">
				<ul class="nav-links-list">
					<li><a href="/">home</a></li>
					<li><a href="/projects">projects</a></li>
					<!-- <li><a href="/about">about</a></li> -->
					<!-- <li><a href="/blog">blog</a></li> -->
					<!-- <li><a href="/contact">contact</a></li> -->
				</ul>
			</div>
			<!--			<ThemeToggle />-->
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	header:not(.showNav) {
		transform: translateY(-100%);
	}
	header {
		left: 0;
		top: 0;
		width: 100%;
		height: 80px;
		position: fixed;
		transition: transform 0.3s ease-in-out;
		z-index: 99;

		.container {
			height: 100%;
			width: 100%;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;

			@include for-phone-only {
				padding: 0 10px;
				top: 0;
			}
		}

		.logo {
			height: 100%;
			display: flex;
			flex: 1;
			padding-top: 10px;
		}

		button {
			width: 72px !important;
			all: unset;
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;
			padding-left: 50px;
			width: 500px;
			.nav-link-box {
				//padding-right: 25px;
				width: 100%;
				.nav-links-list {
					display: flex;
					// justify-content: space-between;
					justify-content: flex-end;
					align-items: center;
					list-style: none;
					text-transform: uppercase;
					font-size: 0.75rem;

					li {
						padding-left: 20px;
						transition: all 0.125s ease-in-out;
						&:hover {
							cursor: pointer;
							color: var(--color--primary);
							transition: all 0.125s ease-in-out;
						}
					}
				}
			}
			button {
				text-decoration: none;

				&:hover {
					color: var(--color--primary);
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}
	}
</style>

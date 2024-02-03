<script>
	import ft_dashboard from '$lib/assets/projects/finance_tracker_FT/ft_dashboard.png';
	import ft_transactions from '$lib/assets/projects/finance_tracker_FT/ft_transactions.png';
	import WebsiteIcon from '$lib/icons/WebsiteIcon.svelte';
	import MacbookScrollable from '$lib/components/molecules/MacbookScrollable.svelte';
	import ft_iphone_page0 from '$lib/assets/projects/finance_tracker_FT/ft_iphone_page0.png';
	import ft_iphone_page1 from '$lib/assets/projects/finance_tracker_FT/ft_iphone_page1.png';
	import ft_iphone_page2 from '$lib/assets/projects/finance_tracker_FT/ft_iphone_page2.png';
	import ft_iphone_page3 from '$lib/assets/projects/finance_tracker_FT/ft_iphone_page3.png';
	import ft_iphone_page4 from '$lib/assets/projects/finance_tracker_FT/ft_iphone_page4.png';
	import IphoneScrollable from '$lib/components/molecules/IphoneScrollable.svelte';
	import MacbookInteractive from '$lib/components/molecules/MacbookInteractive.svelte';
	import ScrollIcon from '$lib/icons/ScrollIcon.svelte';
	export let macbookImages = [ft_dashboard, ft_transactions];

	export let ft_iphone_images = [
		ft_iphone_page0,
		ft_iphone_page1,
		ft_iphone_page2,
		ft_iphone_page3,
		ft_iphone_page4
	];
</script>

<div class="spacer-10" />
<section id="latest-projects">
	<div class="section-header-box">
		<h2 class="section-header">latest projects</h2>
	</div>
	<div class="section-content-container">
		<div class="section-content-column about-me-text-content-column">
			<div class="text-box">
				<div class="text-box-content">
					<h4 class="text-box-header">
						1+2≡4 <a
							href="https://www.figma.com/file/WxMfubxvAMk3z8GaeVOaXo/finance-app-svelte?type=design&mode=design&t=4gjCpYtPKLjqSUCK-0"
							target="_blank"
							rel="noreferrer noopener"><WebsiteIcon /></a
						>
					</h4>
					<div class="phone-content-box">
						dashboard web app (concept)
						<div class="image-box-phone">
							<IphoneScrollable images={ft_iphone_images} />
							<div class="scroll-icon-box">
								<ScrollIcon />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section-content-column projects-image-content-column">
			<MacbookScrollable images={macbookImages} />
			<!--			&lt;!&ndash;			<MacbookInteractive />&ndash;&gt;-->
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.spacer-10 {
		height: calc(10rem);
	}
	#latest-projects {
		min-height: calc(100vh);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 200px 1fr;
		gap: 0;

		@include for-phone-only {
			grid-template-rows: 160px 1fr;
		}
	}
	.section-header-box {
		//border: 1px solid red;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		width: 100%;
		.section-header {
			@include section-header-size-height();
		}
	}

	.section-content-container {
		//border: 1px solid red;
		display: grid;
		grid-template-columns: 1fr 1.75fr;
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
			margin: auto 0;
			@include for-phone-only {
				height: fit-content;
			}
		}
		.about-me-text-content-column {
			.text-box {
				@include full-height-width();
				.text-box-content {
					display: flex;
					justify-content: flex-start;
					padding-top: 1rem;
					flex-direction: column;
					@include full-height-width();
					.text-box-header {
						display: flex;
						justify-content: flex-start;
						text-align: left;
						@include text-box-header-size-height();
						font-family: Poppins, sans-serif;

						a {
							padding-left: 1rem;
							transition: all 0.2s ease-in-out;
							&:hover {
								transition: all 0.2s ease-in-out;
								transform: scale(0.95);
							}
						}
					}
					.phone-content-box {
						align-items: center;
						display: grid;
						height: 100%;
						grid-template-rows: 50px 1fr;
						@include main-text-size-height();
						font-weight: bold;
						width: 100%;
						.image-box-phone {
							display: grid;
							place-content: center;
							position: relative;
						}
					}
				}
			}
		}
	}

	.scroll-icon-box {
		height: 50px;
		width: 50px;
		position: absolute;
		z-index: 3;
		top: 4%;
		left: 70%;
		@include for-tablet-landscape-down {
			top: 12%;
			left: 85%;
		}
	}
</style>

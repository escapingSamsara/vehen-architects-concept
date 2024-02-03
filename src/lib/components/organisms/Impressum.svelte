<script>
	import OnePlusTwoIsFour from '$lib/icons/1+2=4.svelte';
	import { closeModal, Modals, openModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';
	function handleClick() {
		openModal(() => import('$lib/components/organisms/ContactModal.svelte'));
	}
</script>

<div class="privacy-policy-box">
	<div class="left-policy-container">
		<div class="cookie-faq">
			<h3>Imprint</h3>
			<br />
			<h5>Website Owner</h5>
			<p>
				<small>Jakob Pusterhofer </small>
			</p>
			<p>
				<small> 8020 Graz, Austria </small>
			</p>
			<br />
			<h5>Contact:</h5>
			<p>
				<small>office@jakobpusterhofer.dev</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h5>Applicable legal provisions:</h5>
			<p>
				<small> www.ris.bka.gv.at</small>
			</p>
			<br />
			<h5>Professional title:</h5>
			<p>
				<small>Software Developer </small>
			</p>
			<br />
			<h5>Online Dispute Resolution:</h5>
			<p>
				<small
					>Consumers located in Austria or in another contracting state of the ODR-VO have the
					opportunity to resolve issues related to the paid purchase of goods or services through
					online dispute resolution (according to OS, AStG). The European Commission provides a
					platform for this purpose: https://ec.europa.eu/consumers/odr
				</small>
			</p>
			<br />
			<h5>Copyright:</h5>
			<p>
				<small
					>The contents of this website are subject to various protective rights (e.g., copyright)
					to the extent legally possible. Any use/distribution of provided material that is
					copyright-restricted requires written consent from the website operator.
				</small>
			</p>
		</div>
	</div>
	<div class="right-policy-container">
		<div class="cookie-faq">
			<h5>Disclaimer:</h5>
			<p>
				<small
					>Despite careful content control, the operator of this website assumes no liability for
					the content of external links. The operators of the linked pages are solely responsible
					for their content. If you become aware of outgoing links that refer to a website with
					illegal activity/information, we request appropriate notice to promptly remove them in
					accordance with § 17 Abs. 2 ECG.
					<br />
					The copyrights of third parties are observed with the greatest care by the operator of this
					website. If you nonetheless become aware of a copyright infringement, we request appropriate
					notice. Upon becoming aware of such legal violations, we will promptly remove the affected content.</small
				>
			</p>
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
		min-height: calc(100vh - 120px);
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
		transition: all 0.2s ease;
		cursor: pointer;
		color: var(--color--primary);
	}
	.left-policy-container {
		display: flex;
		flex-direction: column;
	}
	.right-policy-container {
		padding-top: 58px;
		display: flex;
		flex-direction: column;

		@include for-tablet-portrait-down {
			padding-top: 0;
		}
	}

	.impressum-contact-me-btn {
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

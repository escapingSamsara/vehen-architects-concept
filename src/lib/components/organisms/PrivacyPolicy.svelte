<script>
</script>

<div class="privacy-policy-box">
	<div class="left-policy-container">
		<div class="cookie-faq">
			<h3>Privacy Policy</h3>
			<p>
				<small>
					This Privacy Policy describes the policies of jakobpusterhofer.dev , 8020 Graz, Austria,
					email: jpusterhofer@gmail.com, on the collection, use and disclosure of your information
					that we collect when you use our website ( jakobpusterhofer.dev ). (the “Service”). By
					accessing or using the Service, you are consenting to the collection, use and disclosure
					of your information in accordance with this Privacy Policy. If you do not consent to the
					same, please do not access or use the Service.
				</small>
			</p>
			<p>
				<small>
					we may modify this Privacy Policy at any time without any prior notice to you and will post
					the revised Privacy Policy on the Service. The revised Policy will be effective 180 days
					from when the revised Policy is posted in the Service and your continued access or use of
					the Service after such time will constitute your acceptance of the revised Privacy Policy.
					we therefore recommend that you periodically review this page.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h4>How we Share Your Information:</h4>
			<p>
				<small>
					we will not transfer your personal information to any third party without seeking your
					consent, except for Analytics. we require such third party’s to use the personal
					information we transfer to them only for the purpose for which it was transferred and not
					to retain it for longer than is required for fulfilling the said purpose. we may also
					disclose your personal information for the following: (1) to comply with applicable law,
					regulation, court order or other legal process; (2) to enforce your agreements with us,
					including this Privacy Policy; or (3) to respond to claims that your use of the Service
					violates any third-party rights. If the Service or our company is merged or acquired with
					another company, your information will be one of the assets that is transferred to the new
					owner.
				</small>
			</p>
			<p>
				<small />
			</p>
		</div>
		<div class="cookie-faq">
			<h4>How we Use Your Information:</h4>
			<p>
				<small
					>we will use the information that we collect about you for the following purposes:
				</small>
			</p>
			<ul>
				<li><small>Administration info</small></li>
				<li><small>Site protection & support</small></li>
				<li><small>Google Analytics (opt-in, only after your consent)</small></li>
			</ul>
			<p>
				<small
					>If we want to use your information for any other purpose, we will ask you for consent and
					will use your information only on receiving your consent and then, only for the purpose(s)
					for which grant consent unless we are required to do otherwise by law.</small
				>
			</p>
		</div>
	</div>
	<div class="right-policy-container">
		<div class="cookie-faq">
			<h4>Your Rights:</h4>
			<p>
				<small>
					Depending on the law that applies, you may have a right to access and rectify or erase
					your personal data or receive a copy of your personal data, restrict or object to the
					active processing of your data, ask me to share (port) your personal information to
					another entity, withdraw any consent you provided to me to process your data, a right to
					lodge a complaint with a statutory authority and such other rights as may be relevant
					under applicable laws. To exercise these rights, you can write to me at
					jpusterhofer@gmail.com. we will respond to your request in accordance with applicable law.
					Do note that if you do not allow me to collect or process the required personal
					information or withdraw the consent to process the same for the required purposes, you may
					not be able to access or use the services for which your information was sought.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h4>Cookies & Security:</h4>
			<p>
				<small>
					To learn more about how we use these and your choices in relation to these tracking
					technologies, please refer to our <a
						rel="noopener noreferrer"
						href="https://jakobpusterhofer.dev/cookie-policy">Cookie Policy</a
					>. The security of your information is important to me and we will use reasonable security
					measures to prevent the loss, misuse or unauthorized alteration of your information under
					our control. However, given the inherent risks, we cannot guarantee absolute security and
					consequently, we cannot ensure or warrant the security of any information.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h4>Third Party Links & Use Of Your Information:</h4>
			<p>
				<small>
					Our Service may contain links to other websites that are not operated by us. This Privacy
					Policy does not address the privacy policy and other practices of any third parties,
					including any third party operating any website or service that may be accessible via a
					link on the Service. we strongly advise you to review the privacy policy of every site you
					visit. we have no control over and assume no responsibility for the content, privacy
					policies or practices of any third party sites or services.
				</small>
			</p>
		</div>
		<div class="cookie-faq">
			<h4>Grievance / Data Protection Officer:</h4>
			<p>
				<small>
					If you have any queries or concerns about the processing of your information that is
					available with us, you may contact me. we will address your concerns in accordance with
					applicable law.
				</small>
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

<style lang="scss">
	@import '$lib/scss/_mixins.scss';
	.privacy-policy-box {
		display: grid;
		padding-top: 20px;
		height: 100%;
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
		padding-top: 35px;
		display: flex;
		flex-direction: column;

		@include for-tablet-portrait-down {
			padding-top: 0;
		}
	}
</style>

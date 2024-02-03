<script lang="ts">
	import { closeModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';
	import { PUBLIC_WEB3_ACCESS_KEY } from '$env/static/public';
	export let isOpen: boolean;
	let status: string = '';
	const handleSubmit = async (data) => {
		status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = result.message || 'Success';
		}
	};
	// 	TODO: ADD HCAPTCHA TO FORM
</script>

{#if isOpen}
	<div role="dialog" class="modal" transition:fade|global>
		<div class="contents">
			<form on:submit|preventDefault={handleSubmit}>
				<span> contact me</span>
				<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
				<input type="hidden" name="access_key" value={PUBLIC_WEB3_ACCESS_KEY} />
				<input placeholder="name" type="text" name="name" required />
				<input placeholder="email" type="email" name="email" required />
				<textarea placeholder="your message" name="message" required rows="4" />
				<button type="submit" class="submit-btn">Send</button>
			</form>
			<div>{status}</div>
			<div class="actions">
				<button on:click={closeModal}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						height="20px"
						fill="none"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						color="currentColor"
						><path
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.172 14.828 12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
						/></svg
					></button
				>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.submit-btn {
		background: #00adb5;
		border-radius: var(--border-radius-default);
		padding: 0.3rem 0.6rem;
		color: white;
		font-weight: bold;
		text-transform: lowercase;
		outline: none;
		border: none;
		box-shadow: var(--card-shadow);
		transition: all 0.2s ease-in-out;

		&:hover {
			transition: all 0.2s ease-in-out;
			background: #01ccd2;
		}
	}
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		background: var(--color--page-background);
		backdrop-filter: blur(2px);
		box-shadow: var(--card-shadow);
		min-width: 240px;
		border-radius: 6px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}
	.actions {
		margin-top: 32px;
		display: flex;
		justify-content: flex-end;

		button {
			background: transparent;
			border: none;
			font-size: 1.5rem;
			cursor: pointer;
			transition: all 0.2s ease-in-out;
			color: var(--color-primary);
			transition: all 0.2s ease-in-out;
			&:hover {
				transition: all 0.2s ease-in-out;
				transform: scale(0.98);
				color: #00adb5;
			}
		}
	}

	form {
		display: grid;
		justify-content: center;
		grid-template-columns: 1fr;
		grid-gap: 20px;
		flex-direction: column;

		span {
			margin: 0 auto;
			font-size: 1.25rem;
			font-weight: bold;
		}
		input,
		textarea {
			outline: none;
			border: none;
			padding: 0.6rem 0.6rem;
			font-size: 0.95rem;
			color: var(--color-text-inverse);
			box-shadow: var(--image-shadow);
			border-radius: var(--border-radius-default);
			background: var(--color--card-background);

			&::placeholder {
				font-size: 0.75rem;
			}
		}
		textarea {
			resize: none;
		}
	}
</style>

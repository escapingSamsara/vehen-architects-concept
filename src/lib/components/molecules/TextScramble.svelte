<script lang="ts">
	import { onMount } from 'svelte';

	let phrases = ['dev'];
	class TextScramble {
		constructor(el) {
			this.el = el;
			this.chars = '!<>-_\\/[]{}—=+*^?#________';
			this.update = this.update.bind(this);
		}

		setText(newText) {
			const oldText = this.el.innerText;
			const length = Math.max(oldText.length, newText.length);
			const promise = new Promise((resolve) => (this.resolve = resolve));

			this.queue = [];
			for (let i = 0; i < length; i++) {
				const from = oldText[i] || '';
				const to = newText[i] || '';
				const start = Math.floor(Math.random() * 60);
				const end = Math.floor(Math.random() * 60) + start;
				this.queue.push({ from, to, start, end });
			}

			cancelAnimationFrame(this.frameRequest);
			this.frame = 0;
			this.update();
			return promise;
		}

		update() {
			let dudColor = '#00adb5';
			let dudWeight = '100';
			let output = '';
			let complete = 0;
			for (let i = 0, n = this.queue.length; i < n; i++) {
				let { from, to, start, end, char } = this.queue[i];

				if (this.frame >= end) {
					complete++;
					output += to;
				} else if (this.frame >= start) {
					if (!char || Math.random() < 0.25) {
						char = this.randomChar();
						this.queue[i].char = char;
					}
					output += `<span class='dud' style='color: ${dudColor}; font-weight: ${dudWeight}'>${char}</span>`;
				} else {
					output += from;
				}
			}
			this.el.innerHTML = output;
			if (complete === this.queue.length) {
				this.resolve();
			} else {
				this.frameRequest = requestAnimationFrame(this.update);
				this.frame++;
			}
		}

		randomChar() {
			return this.chars[Math.floor(Math.random() * this.chars.length)];
		}
	}
	let counter = 0;
	let fx;
	function next() {
		fx.setText(phrases[counter]).then(() => {
			setTimeout(next, 2000);
		});
		counter = (counter + 1) % phrases.length;
	}
	onMount(() => {
		const el = document.querySelector('.hero-text');
		fx = new TextScramble(el);
		next();
	});
</script>

<div class="hero-text-box">
	<div class="text-holder">
		<div class="hero-text-animated error-text">
			jakobpusterhofer <span class="span-dot">.</span>
		</div>
		<div class="hero-text hero-text-animated">
			<!--				animated text-->
		</div>
	</div>
</div>

<style lang="scss">
	.span-dot {
		color: var(--color--primary);
	}
	.hero-text-box {
		width: 184px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.text-holder {
		display: flex;
		width: 100%;
	}

	.error-text {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.hero-text {
		display: flex;
		align-items: center;
	}
	.hero-text-animated {
		width: fit-content;
		display: flex;
		flex-direction: row;
		font-weight: 700;
		font-family: var(--font--title);
		letter-spacing: -0.025rem;
		font-size: 1rem;
		.dud {
			color: var(--color--primary) !important;
		}
	}
</style>

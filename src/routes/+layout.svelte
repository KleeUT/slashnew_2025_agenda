<script lang="ts">
	const { children } = $props();
</script>

{@render children()}

<style>
	:global(*) {
		padding: 0;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-optical-sizing: auto;
		font-weight: <weight>;
		font-style: normal;
		font-variation-settings: 'wdth' 100;
	}
	:global(h1) {
		margin: 2rem;
	}
	:global(h2) {
		margin: 1.5rem;
	}
	:global(h3) {
		margin: 1rem;
	}
	:global(html) {
		height: 100vh;
		overflow: auto;
	}
	:global(body) {
		height: 100vh;
		background: #000000;
		background: linear-gradient(
			15deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 50, 50, 1) 50%,
			rgba(0, 0, 0, 1) 100%
		);
		color: white;
		overflow: auto;
	}
</style>

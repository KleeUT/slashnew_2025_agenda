<script lang="ts">
	const { children } = $props();
</script>

<div class="header">
	<a class="home-link" href="https://slashnew.tech">SlashNEW</a>
</div>
{@render children()}

<style>
	:global(*) {
		padding: 0;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		box-sizing: border-box;
	}
	:global(h1) {
		margin-bottom: 2rem;
		text-align: center;
	}
	:global(h2) {
		margin-bottom: 1.5rem;
		text-align: center;
	}
	:global(h3) {
		margin-bottom: 1rem;
		text-align: center;
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
		padding: 2rem;
	}
	a.home-link {
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		width: 100%;
	}
	div.header {
		margin-bottom: 2rem;
		text-align: center;
	}
</style>

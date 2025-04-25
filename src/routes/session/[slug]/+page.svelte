<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	const { data } = $props();
	const { session, returnTo } = data;
</script>

<nav>
	<a href="/{returnTo}" data-sveltekit-reload>⬅️ Back To Agenda</a>
</nav>
<div class="session-details">
	<h1>{session.title}</h1>
	<div class="markdown">
		<SvelteMarkdown source={session.abstract} />
	</div>
	{#each session.speakers as speaker}
		<div class="speaker">
			<h2>{speaker.name}</h2>
			<div class="markdown">
				<SvelteMarkdown source={speaker.bio}></SvelteMarkdown>
			</div>
		</div>
	{/each}
</div>

<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	nav a {
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
		text-align: left;
		width: 100%;
		margin-right: 1rem;
		margin-bottom: 1rem;
	}
	.session-details {
		width: 75%;
		margin: auto;
		text-align: left;
		padding: 1rem;
	}

	:global(.markdown) {
		padding: 1rem;
		line-height: 1.5rem;
	}
	:global(.markdown li) {
		list-style-position: inside;
		padding-left: 0;
	}
	:global(.markdown a) {
		color: white;
	}
	:global(.markdown p) {
		margin-bottom: 0.5rem;
	}
	@media (max-width: 600px) {
		.session-details {
			width: 100%;
			padding: 0;
		}
	}
</style>

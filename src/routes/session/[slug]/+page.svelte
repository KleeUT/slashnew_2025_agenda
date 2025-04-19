<script lang="ts">
	import type { PlannedSession } from '$lib/data/sessions/session';

	const { data } = $props();
	const { session } = data;
</script>

<a href="/" data-sveltekit-reload>Agenda</a>
<h1>{session.title}</h1>
<p>{session.abstract}</p>
<div>
	<h2>Speakers</h2>
	<ul>
		{#each session.speakers as speaker}
			<div>
				<h3>{speaker.name}</h3>
				<p>{speaker.bio}</p>
			</div>
		{/each}
	</ul>
</div>

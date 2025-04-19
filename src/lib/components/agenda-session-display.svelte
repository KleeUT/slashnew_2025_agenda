<script lang="ts">
	import type { PlannedSession } from '$lib/data/sessions/session';

	interface Props {
		talk: PlannedSession;
	}
	const { talk }: Props = $props();
</script>

<a
	data-sveltekit-reload
	href={`/session/${talk.session.slug}`}
	class="session track-{talk.track} type-{talk.type}"
>
	<h3 class="session-title">{talk.session.title}</h3>
	{#if talk.session.speakers.length > 0}
		<p>
			{#each talk.session.speakers as speaker}
				<span class="speaker">
					{speaker.name}
					{#if speaker.jobTitle}
						- {speaker.jobTitle}
					{/if}
				</span>
			{/each}
		</p>
	{/if}
</a>

<style>
	a.session {
		color: white;
		text-decoration: none;
		text-align: center;
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		padding: 1.5rem;
		border-radius: 0.1rem;
	}
	span.speaker {
		display: block;
	}
	.track-all {
		grid-column: 2 / -1;
		background-color: rgb(0, 72, 72);
		border-bottom: 5px solid teal;
	}
	.track-teal {
		background-color: rgb(0, 72, 72);
		border-bottom: 5px solid teal;
	}
	.track-magenta {
		background-color: rgb(121, 0, 121);
		border-bottom: 5px solid magenta;
	}
	.track-blue {
		background-color: rgb(0, 0, 100);
		border-bottom: 5px solid blue;
	}
	.type-break {
		background-color: rgb(100, 100, 100);
		border-bottom: 5px solid grey;
	}
	.type-break h3 {
		margin: 0;
	}
</style>

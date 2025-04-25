<script lang="ts">
	import type { PlannedSession } from '$lib/data/sessions/session';

	interface Props {
		talk: PlannedSession;
		day: string;
	}
	const { talk, day }: Props = $props();
</script>

<a
	data-sveltekit-reload
	href={`/session/${talk.session.slug}?returnTo=${day.toLowerCase()}`}
	class="session track-{talk.track} type-{talk.type}"
>
	<div class="room-name room-name-{talk.track} type-{talk.type}">
		{#if talk.type === 'keynote'}
			keynote
		{:else if talk.type !== 'break'}
			{talk.track}
		{/if}
	</div>
	<div class="session-details">
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
		{:else}
			<div></div>
		{/if}
	</div>
</a>

<style>
	a.session {
		color: white;
		text-decoration: none;
		text-align: center;
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		border-radius: 0.1rem;
	}
	.room-name {
		height: 2rem;
		padding: 0.2rem 0;
		width: 100%;
	}
	.room-name-all.type-break {
		background-color: rgb(80, 80, 80);
		border: 0;
	}
	.room-name-all.type-keynote,
	.room-name-teal {
		background-color: teal;
	}
	.room-name-magenta {
		background-color: magenta;
	}
	.room-name-blue {
		background-color: blue;
	}
	.session-details {
		width: 100%;
		height: 100%;
		padding: 1rem;
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
		background-color: rgb(80, 80, 80);
		border-bottom: 5px solid grey;
	}
	.type-break h3 {
		margin: 0;
	}
	@media (max-width: 600px) {
		.track-all {
			grid-column: unset;
		}
	}
</style>

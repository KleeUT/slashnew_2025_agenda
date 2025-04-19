<script lang="ts">
	import type { AgendaDay } from '../data/agenda';
	import SessionTime from './sessionTime.svelte';
	interface Props {
		day: AgendaDay;
	}

	const { day }: Props = $props();
	const date = day.date.toLocaleDateString([], {
		month: 'long',
		day: '2-digit'
	});
</script>

<h1>
	{date}
</h1>
<div>
	{#each day.Sessions as session}
		<SessionTime startTime={session.startTime} endTime={session.endTime}></SessionTime>
		{#each session.sessions as talk}
			<div class="session">
				<h2>{talk.session.title}</h2>
				<p>{talk.session.speakers.map((s) => s.name).join(', ')}</p>
				[{talk.track}, {talk.type}]
			</div>
		{/each}
	{/each}
</div>

<style>
	div.session {
		outline: 1px solid black;
	}
</style>

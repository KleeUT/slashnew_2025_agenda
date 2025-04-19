<script lang="ts">
	import type { AgendaDay } from '../data/agenda';
	import AgendaSessionDisplay from './agenda-session-display.svelte';
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
	SlashNEW agenda: {date}
</h1>
<div class="agenda-day">
	{#each day.Sessions as session}
		<SessionTime startTime={session.startTime} endTime={session.endTime}></SessionTime>
		{#each session.sessions as talk}
			<AgendaSessionDisplay {talk} />
		{/each}
	{/each}
</div>

<style>
	.agenda-day {
		display: grid;
		grid-template-columns: 100px repeat(3, 1fr);
		gap: 1.5rem 0.75rem;
	}
</style>

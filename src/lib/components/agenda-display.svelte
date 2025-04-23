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
	{day.title} <span class="title_divider">//</span>
	{date}
</h1>
<nav>
	<a href="/day1" data-sveltekit-reload class="day {date === '28 May' ? 'current-day' : ''}"
		>May 28</a
	>
	<a href="/day2" data-sveltekit-reload class="day {date === '29 May' ? 'current-day' : ''}"
		>May 29</a
	>
</nav>
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
	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #333;
		padding: 1rem;
	}
	nav a {
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
		text-align: center;
		width: 100%;
		margin-right: 1rem;
		margin-bottom: 1rem;
	}
	a.day {
		color: aqua;
	}
	a.current-day {
		font-weight: bold;
		color: white;
	}
	@media (max-width: 600px) {
		.agenda-day {
			grid-template-columns: 1fr;
			gap: 0;
		}
	}
	.title_divider {
		color: aqua;
	}
</style>

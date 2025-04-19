<script lang="ts">
	import type { PlannedSession } from '$lib/data/sessions/session';

	interface Props {
		talk: PlannedSession;
	}
	const { talk }: Props = $props();
</script>

<div class="session track-{talk.track} type-{talk.type}">
	<h3 class="session-title">{talk.session.title}</h3>
	<p>{talk.session.speakers.map((s) => s.name).join(', ')}</p>
</div>

<style>
	div.session {
		text-align: center;
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.track-all {
		grid-column: 2 / -1;
		background-color: rgb(0, 72, 72);
	}
	.track-teal {
		background-color: rgb(0, 72, 72);
	}
	.track-magenta {
		background-color: rgb(121, 0, 121);
	}
	.track-blue {
		background-color: rgb(0, 0, 100);
	}
	.type-break {
		background-color: rgb(100, 100, 100);
	}
</style>

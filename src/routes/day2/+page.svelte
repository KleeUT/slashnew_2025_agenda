<script lang="ts">
	import AgendaDisplay from '$lib/components/agenda-display.svelte';
	import { agenda } from '$lib/data/agenda';
	const { data } = $props();
	const { day } = data;
</script>

<AgendaDisplay {day} />

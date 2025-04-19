<script lang="ts">
	import AgendaDisplay from '$lib/components/agenda-display.svelte';
	const { data } = $props();
	const { day } = data;
</script>

<AgendaDisplay {day} />

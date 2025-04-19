<script lang="ts">
	interface SessionTimeProps {
		startTime: Date;
		endTime: Date;
	}
	const { startTime, endTime }: SessionTimeProps = $props();
	const startTimeString = startTime.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit'
	});
	const endTimeString = endTime.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit'
	});
</script>

<p>{startTimeString} - {endTimeString}</p>

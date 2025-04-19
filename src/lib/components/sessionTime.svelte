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

<div class="session-time">
	<h2>{startTimeString}<span class="new-line"> - </span>{endTimeString}</h2>
</div>

<style>
	h2 {
		text-align: right;
		margin: 1rem;
	}
	.session-time {
		background-color: #333;
		margin-right: -1rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	span.new-line {
		display: block;
	}
</style>

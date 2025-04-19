export function may28at(hour: number, minute: number): Date {
	return new Date(
		`2025-05-28T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00.000+10:00`
	);
}

export function may29at(hour: number, minute: number): Date {
	return new Date(
		`2025-05-29T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00.000+10:00`
	);
}

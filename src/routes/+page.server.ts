import type { PageServerLoad } from './$types';
import { agenda } from '$lib/data/agenda';
export const load: PageServerLoad = async () => {
	const today = new Date();
	const day = today.getTime() < agenda.day2.date.getTime() ? agenda.day1 : agenda.day2;
	return {
		day
	};
};

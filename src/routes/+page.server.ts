import type { PageServerLoad } from './$types';
import { agenda } from '$lib/data/agenda';
export const load: PageServerLoad = async () => {
	const day = agenda.day1;
	return {
		day
	};
};

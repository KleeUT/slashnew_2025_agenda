import * as sessions from '$lib/data/sessions';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, url }) => {
	const returnToParam = decodeURIComponent(url.searchParams.get('returnTo') || '');
	const returnTo = returnToParam === 'day 1' ? 'day1' : returnToParam === 'day 2' ? 'day2' : '';
	const session = Object.values(sessions).find((session) => {
		if (session.slug === params.slug) {
			return true;
		}
	});
	if (!session) {
		console.error(`Session with slug ${params.slug} not found`);
		redirect(302, '/');
	}
	return {
		session,
		returnTo
	};
};

import type { Session } from './session';

export const welcome: Session = {
	slug: 'welcome',
	title: 'Welcome to the Conference',
	abstract:
		'Join us for the opening session of the conference, where we will introduce the schedule, speakers, and what to expect from the conferencce.',
	speakers: [
		{
			name: 'Conference Organisers',
			bio: `The conference organisers will introduce the schedule, speakers, and what to expect from the conference.`
		}
	]
};

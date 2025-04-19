import type { Speaker } from './speaker';

export type Session = {
	slug: string;
	title: string;
	abstract: string;
	speakers: Array<Speaker>;
};
export type PlannedSession = {
	track: 'teal' | 'magenta' | 'blue' | 'all';
	type: 'talk' | 'break' | 'keynote';
	session: Session;
};

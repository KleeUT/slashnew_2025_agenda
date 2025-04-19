import { may28at, may29at } from '$lib/date-utils';
import type { PlannedSession } from './sessions/session';
import * as sessions from './sessions';

export type AgendaSession = {
	startTime: Date;
	endTime: Date;
	sessions: Array<PlannedSession>;
};
export type AgendaDay = {
	date: Date;
	Sessions: Array<AgendaSession>;
};
export type Agenda = {
	day1: AgendaDay;
	day2: AgendaDay;
};

export const agenda: Agenda = {
	day1: {
		date: may28at(0, 1),
		Sessions: [
			{
				startTime: may28at(9, 20),
				endTime: may28at(10, 20),
				sessions: [
					{
						type: 'keynote',
						track: 'all',
						session: sessions.carolynBreeze
					}
				]
			},
			{
				startTime: may28at(10, 20),
				endTime: may28at(10, 50),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.morningTea
					}
				]
			},
			{
				startTime: may28at(10, 50),
				endTime: may28at(11, 35),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.aaronPowell
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.saraGray
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.claireQuigley
					}
				]
			},
			{
				startTime: may28at(11, 35),
				endTime: may28at(11, 40),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.changeover
					}
				]
			},
			{
				startTime: may28at(11, 40),
				endTime: may28at(12, 25),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.craigWilliams
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.jacobMoran
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.brendanMarsh
					}
				]
			},
			{
				startTime: may28at(12, 25),
				endTime: may28at(13, 25),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.lunch
					}
				]
			},
			{
				startTime: may28at(13, 25),
				endTime: may28at(14, 10),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.andrewGoodwin
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.jamesMacDonald
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.timKelso
					}
				]
			},
			{
				startTime: may28at(14, 10),
				endTime: may28at(14, 15),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.changeover
					}
				]
			},
			{
				startTime: may28at(14, 15),
				endTime: may28at(15, 0),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.islamGhanim
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.nellySattari
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.ashleaRendel
					}
				]
			},
			{
				startTime: may28at(15, 0),
				endTime: may28at(15, 30),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.afternoonTea
					}
				]
			},
			{
				startTime: may28at(15, 30),
				endTime: may28at(16, 15),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.philNash
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.mattShepherd
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.pirateCoffee
					}
				]
			},
			{
				startTime: may28at(16, 15),
				endTime: may28at(16, 20),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.changeover
					}
				]
			},
			{
				startTime: may28at(16, 20),
				endTime: may28at(17, 25),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.krisHoward
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.stephenCraig
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.michelleDuke
					}
				]
			},
			{
				startTime: may28at(17, 25),
				endTime: may28at(17, 55),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.drinks
					}
				]
			},
			{
				startTime: may28at(17, 55),
				endTime: may28at(18, 45),
				sessions: [
					{
						type: 'keynote',
						track: 'all',
						session: sessions.conferenceFeud
					}
				]
			}
		]
	},
	day2: {
		date: may29at(0, 1),
		Sessions: []
	}
};

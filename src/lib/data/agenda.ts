import * as sessions from './sessions';
import { may28at, may29at } from '$lib/date-utils';
import type { PlannedSession } from './sessions/session';

export type AgendaSession = {
	startTime: Date;
	endTime?: Date;
	sessions: Array<PlannedSession>;
};
export type AgendaDay = {
	title: string;
	date: Date;
	Sessions: Array<AgendaSession>;
};
export type Agenda = {
	day1: AgendaDay;
	day2: AgendaDay;
};

export const agenda: Agenda = {
	day1: {
		title: 'Day 1',
		date: may28at(0, 1),
		Sessions: [
			{
				startTime: may28at(8, 0),
				endTime: may28at(8, 50),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.registration
					}
				]
			},
			{
				startTime: may28at(8, 50),
				endTime: may28at(9, 20),
				sessions: [
					{
						type: 'keynote',
						track: 'all',
						session: sessions.welcome
					}
				]
			},
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
						session: sessions.timKelso
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.jamesMacDonald
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
			},
			{
				startTime: may28at(18, 45),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.endOfDay1
					}
				]
			}
		]
	},
	day2: {
		title: 'Day 2',
		date: may29at(0, 1),
		Sessions: [
			{
				startTime: may29at(8, 30),
				endTime: may29at(9, 0),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.registration
					}
				]
			},
			{
				startTime: may29at(9, 0),
				endTime: may29at(9, 10),
				sessions: [
					{
						type: 'keynote',
						track: 'all',
						session: sessions.welcome
					}
				]
			},
			{
				startTime: may29at(9, 10),
				endTime: may29at(10, 10),
				sessions: [
					{
						type: 'keynote',
						track: 'all',
						session: sessions.michelleSanford
					}
				]
			},
			{
				startTime: may29at(10, 10),
				endTime: may29at(10, 40),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.morningTea
					}
				]
			},
			{
				startTime: may29at(10, 40),
				endTime: may29at(11, 25),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.tomHoward
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.katMcCrab
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.ulyssesMaclaren
					}
				]
			},
			{
				startTime: may29at(11, 25),
				endTime: may29at(11, 30),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.changeover
					}
				]
			},
			{
				startTime: may29at(11, 30),
				endTime: may29at(12, 15),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.johnBrøndum
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.leighGibson
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.cordeliaAndBen
					}
				]
			},
			{
				startTime: may29at(12, 15),
				endTime: may29at(13, 15),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.lunch
					}
				]
			},
			{
				startTime: may29at(13, 15),
				endTime: may29at(14, 0),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.shwetaChenigaram
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.adamCassar
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.leanoraHorne
					}
				]
			},
			{
				startTime: may29at(14, 0),
				endTime: may29at(14, 5),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.changeover
					}
				]
			},
			{
				startTime: may29at(14, 5),
				endTime: may29at(14, 50),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.julianBurr
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.jayRovacsek
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.pirateCoffee
					}
				]
			},
			{
				startTime: may29at(14, 50),
				endTime: may29at(15, 20),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.afternoonTea
					}
				]
			},
			{
				startTime: may29at(15, 20),
				endTime: may29at(16, 5),
				sessions: [
					{
						type: 'talk',
						track: 'teal',
						session: sessions.shivaPedram
					},
					{
						type: 'talk',
						track: 'magenta',
						session: sessions.sarahKirkby
					},
					{
						type: 'talk',
						track: 'blue',
						session: sessions.navinKeswani
					}
				]
			},
			{
				startTime: may29at(16, 5),
				endTime: may29at(16, 25),
				sessions: [
					{
						type: 'keynote',
						track: 'all',
						session: sessions.closingRemarks
					}
				]
			},
			{
				startTime: may29at(16, 25),
				sessions: [
					{
						type: 'break',
						track: 'all',
						session: sessions.endOfDa2
					}
				]
			}
		]
	}
};

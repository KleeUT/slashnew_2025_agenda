import type { Session } from '../../session';

export const aaronPowell: Session = {
	slug: 'aaron-powell',
	title: 'Tackling the developer inner loop',
	abstract: `
There are so many factors when it comes to the developer inner loop of distributed applications. How do we do service discovery? How do we implement consistent logging? What are we doing about resilience? How do we have a "clone repo, run app" experience without a week of machine setup when you need to setup databases, caches, queues, and all that stuff?

These are problems to tackle whether you're building with a monolith architecture, a distributed app or anything in between.

Let's take a dive into the world of the developer inner loop to see how we can optimise this experience, and ensure we get developers up and running, without sacrificing our pathway to deployment.
  `,
	speakers: [
		{
			name: 'Aaron Powell',
			bio: `
Aaron is a Developer Advocate at Microsoft with nearly 20 years of experience in web and .NET development. Passionate about open source, he actively contributes to projects like the .NET Aspire Community Toolkit. In that time, Aaron has watched the evolution of web technologies—from the browser wars to modern JavaScript frameworks—while tinkering with creative ideas like implementing numbers in .NET, creating IoC in JavaScript, and coding tic-tac-toe using git commits. When he’s not at his keyboard, Aaron can be found on running Strava, chasing his next PR, or ‘improving’ his smart home, much to his wifes reluctance.
`,
			image: 'aaron-powell.jpg',
			jobTitle: 'Cloud Advocate at Microsoft'
		}
	]
};

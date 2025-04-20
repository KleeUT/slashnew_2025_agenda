import type { Session } from '../session';

export const philNash: Session = {
	slug: 'phil-nash',
	title: 'Let’s build an AI agent',
	abstract: `
2025 is the year of agents, but what does that mean? Rather than spend time going over the theory, let's walk through the process of building an agent live.

You'll see how large language models, functions, and open source tools fit together to bring to life an agent over the course of the talk. We'll build out an agent that starts simple and graduates to a multi-agent model, with different components managing and performing tasks.

You'll leave with a good idea of what you need to know to start building your own powerful agents.
  `,
	speakers: [
		{
			name: 'Phil Nash',
			bio: `
Phil is a developer relations engineer for DataStax and Google Developer Expert living in Melbourne, Australia. He’s been working in developer relations for a decade, speaking at conferences since 2012, and writing JavaScript since before jQuery. Away from the keyboard, Phil enjoys travel, live music, and hanging out with his mini sausage dog, Ruby.
      `,
			image: 'phil-nash.jpg',
			jobTitle: 'Developer Relations Engineer at DataStax'
		}
	]
};

import type { Session } from '../../session';

export const jayRovacsek: Session = {
	slug: 'jay-rovacsek',
	title: 'Rethinking the Building Blocks of Technology',
	abstract: `Over 40 years have passed since Ken Thompson asked "To what extent should one trust a statement that a program is free of Trojan
horses?", yet still a large segment of the technological landscape is unfortunately in a position of trusting trust

What are reproducible builds? Why do they matter? Does my $TECHNOLOGY have a pathway towards providing consumers reproducible outputs?

During the presentation, we will discuss these questions, unpack what current state of various technologies might be and provide guidance to the audience on how they may also contribute to a more resilient and trustworthy world

Warning: side effects of reproducibility may include stronger supply chains, capability to build and produce provable provenance of an output and an over-eagerness to tell anyone who will listen about it
  `,
	speakers: [
		{
			name: 'Jay Rovacsek',
			bio: `
Jay is a tech enthusiast from Newcastle; their professional day-to-day focuses heavily on a guidance and governance of security technologies at nib Group while their alter-ego by night is an home-lab addict that insists on not just repeatability but reproducibility (https://reproducible-builds.org/) as a facet of auditability and validation.
Jay also assists in running the Newcastle Cybersecurity Meetup with any left-over time
`,
			image: 'jay-rovacsek.jpg',
			jobTitle: 'IT Threat Management Lead at nib'
		}
	]
};

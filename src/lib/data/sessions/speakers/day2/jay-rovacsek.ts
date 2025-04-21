import type { Session } from '../../session';

export const jayRovacsek: Session = {
	slug: 'jay-rovacsek',
	title: 'Supercharging System Builds Reproducibly (not just repeatably)',
	abstract: `
This talk intends to showcase the capability that exists within the nix ecosystem in enabling traditional infrastructure as code patterns such as Ansible, Docker and more to be merged into a single approach that also resolves outstanding issues with the aforementioned technology.
During the talk, an intent to apply a live demonstration of building a system with nix would be included (with fallback offline copies), taking the audience though the steps of uplifting existing system while explaining the operational benefits (testing, REPL, automated diagramming), security benefits (RBAC, POLP, minimalism) and more
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

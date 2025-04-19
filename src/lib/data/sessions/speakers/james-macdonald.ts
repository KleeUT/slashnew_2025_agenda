import type { Session } from '../session';

export const jamesMacDonald: Session = {
	slug: 'james-macdonald',
	title: 'Placeholder Title',
	abstract: `
  # Place holder
  `,
	speakers: [
		{
			name: 'James MacDonald',
			bio: `
      # heading
      * bullet 1
      * bullet 2
      `,
			image: 'james-macdonald.jpg',
			jobTitle: 'Managing Director at NTP'
		},
		{
			name: 'Andrew Cresp',
			bio: `
      # heading
      * bullet 1
      * bullet 2
      `,
			image: 'andrew-cresp.jpg',
			jobTitle: 'CIO at NGM Group'
		},
		{
			name: 'Sam Davies',
			bio: `
      # heading
      * bullet 1
      * bullet 2
      `,
			image: 'sam-davies.jpg',
			jobTitle: 'Core Networks, Cloud and Infrastructure COE Lead'
		}
	]
};

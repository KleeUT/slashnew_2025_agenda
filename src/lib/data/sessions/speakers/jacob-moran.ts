import type { Session } from '../session';

export const jacobMoran: Session = {
	slug: 'jacob-moran',
	title: "Decentralising Data at Scale: Lessons from Building ANZ Plus's Data Mesh on GCP",
	abstract: `
ANZ Plus is one of Australia's fastest-growing digital banking platforms, with more than 1,000 customers on average joining each day in 2024. This rapid customer growth, and the $16 billion they entrust ANZ Plus to manage, means a lot of data.

In 2021, ANZ Plus's data team embarked on building Australia's biggest Data Mesh using GCP (Google Cloud Platform).

But how, while your stakeholders are building a banking offering from the ground up, do you ensure rigorous data quality, consistent standards, and effective access across an ever-expanding data mesh?

In this talk, I will outline our technical journey from a centralised data team supporting a data warehouse to a truly decentralised data mesh where engineering teams are actively invested in treating data as a product. I'll touch on our critical tech stack, the services we provide, and how our idea of who our users are has changed.

Come and find out how we built a self-serve data mesh with the speed of a startup but with the safety expected of a bank.
  `,
	speakers: [
		{
			name: 'Jacob Moran',
			bio: `
Jacob Moran is the Product Owner for ANZ Plus's Data Mesh team, where he works daily with several teams building and supporting Australia's biggest data mesh. A proud Novocastrian, Jacob started his career in website analytics at nib before spending the last decade working in the data teams of start-ups, government, and corporations in Sydney and Melbourne.

Away from data, Jacob likes to pretend his hobbies include golf, music, and history, but with a young family, time for these pursuits is becoming increasingly rare.
      `,
			image: 'jacob-moran.jpg',
			jobTitle: 'Product Owner: Data Mesh & Data Ops at ANZ'
		}
	]
};

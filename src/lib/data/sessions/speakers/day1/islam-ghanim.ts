import type { Session } from '../../session';

export const islamGhanim: Session = {
	slug: 'islam-ghanim',
	title: 'Improve SaaS applications availability using Cell-based Architecture',
	abstract: `
Guaranteed system availability through Service Level Agreements (SLA) is one of the key drivers of increased investment in SaaS applications. In multi-tenant applications, resources are shared between clients with unpredictable usage patterns and accordingly it is essential to establish a degree of fault isolation across your tenants. In this session, you will learn how to utilise Cell-based architecture to implement fault isolation boundaries for SaaS applications to maximise client availability. The session will walk you through design considerations such cell sizing, tenant rebalancing, analytics and observability .
  `,
	speakers: [
		{
			name: 'Islam Ghanim',
			bio: `
I am a Principal Technical Account Manager at AWS, supporting software companies in ANZ. I'm passionate about system reliability and love sharing knowledge. You might've seen me on stage at AWS re:Invent in 2023 and 2024, or at the Public Sector Symposium 2024, where I talked about keeping cloud systems resilient and efficient. I've also written a couple of blogs and created workshops on operational excellence and reliability.

When I'm not geeking out over cloud tech, I'm a dad to three awesome kids. Big Liverpool fan here! Let's chat about tech, sports, or anything in between!
      `,
			image: 'islam-ghanim.jpg',
			jobTitle: 'Principal Technical Account Manager at AWS'
		}
	]
};

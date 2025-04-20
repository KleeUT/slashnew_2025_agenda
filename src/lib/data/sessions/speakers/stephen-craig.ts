import type { Session } from '../session';

export const stephenCraig: Session = {
	slug: 'stephen-craig',
	title: 'How we are building a National Energy Analysis Centre from the ground up',
	abstract: `
Australia’s energy system is undergoing rapid changes with the introduction of large-scale renewables and storage, coal-fired power stations closing, growing penetrations of rooftop solar, electric vehicles (EVs) and household and community batteries and more. We currently lack the tools we need to find the smoothest, most sustainable and most equitable path to transition.

Australia’s national science agency, CSIRO has an ambitious plan to build the National Energy Analysis Centre (NEAC) to accelerate and de-risk the energy transformation with a focus on equity, economic opportunity and innovation.

NEAC will include a powerful analytics platform, coupled with a Living Lab of thousands of homes. It will enable:
• researchers to gain actionable insights from energy use and behavioural data at any scale.
• innovators test prototype energy devices, apps etc.
• policymakers to test the impact of proposed policy changes, such as restructuring electricity tariffs or incentivising gas substitution.

Building the architecture for this online platform requires the selection and integration of dozens of static and dynamic datasets, including smart meter data, sensor data and human response data from thousands of real homes. We are taking a human-centred design approach and also focusing on data security and privacy.

Dr Stephen Craig, NEAC Director, will outline the need and uses for NEAC, then Tony Wybrow, NEAC Solution Architect, will discuss the technical challenges for the Living Lab, design process and progress toward go-live.
  `,
	speakers: [
		{
			name: 'Stephen Craig',
			bio: `
Dr Stephen Craig is the Smart Energy Lead at CSIRO, Australia’s national science agency.
Stephen has more than 25 years of experience in applied research, strategy development and commercial innovation in systems engineering, digital technologies, and communications. Prior to joining CSIRO, Stephen led the national centre of excellence for Digital Engineering at Boeing Defence Australia, and he was Head of Strategy and Business Development at a spatial data analytics start-up.
Stephen received his PhD in climate system modelling from Stockholm University. He spent many years in Sweden in leadership roles in mobile communication systems research, development and optimisation at Ericsson before returning to Australia in 2015.

Tony Wybrow
Tony Wybrow is the Principal of Innovate Design Build, a company he founded in 2025 to help research institutions, startups, and industry partners turn ideas into reality.
Previously, Tony served as Lead Solution Architect at CSIRO, Australia’s national science agency, where he led CSIRO’s architecture team, collaborated with researchers, and developed a strategic technical vision for the organisation’s future.
His career spans government, academia, and industry, giving him a deep understanding of the challenges faced by institutions and businesses looking to bridge the gap between research and implementation.
      `,
			image: 'stephen-craig.jpg',
			jobTitle: 'Director, National Energy Analysis CCenter (NEAC) at CSIRO'
		}
	]
};

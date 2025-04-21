import type { Session } from '../../session';

export const craigWilliams: Session = {
	slug: 'craig-williams',
	title: 'Building Cutting-Edge Military Simulators with LS Core 2.0',
	abstract: `
The Australian Army is investing in a new generation of high-fidelity simulators to enhance training and operational readiness. At the core of this transformation is Land Simulation Core 2.0 (LS Core 2.0), the common software suite developed by Applied Virtual Simulation (AVS), that underpins the Australian Standard Generic Training and Simulation Architecture (AS GTSA) and enables the creation of advanced, interoperable simulators.

This talk will explore how AVS is driving the future of military simulation by:
1. Developing next-generation simulators by using a standards-based architecture and software to provide realistic training experiences for modern military platforms.
2. Showcasing key projects, including:
- M1A2 ITT - A simulator demonstrating the early adoption of cutting-edge simulation architecture.
- L400-3 IFV-T - A next-generation simulator currently under development by AVS, leveraging LS Core 2.0 to deliver unparalleled training capabilities.
3. Tackling complex challenges in military simulation, from realism and scalability to integration with existing training and operational systems.

As the CTO of AVS, I will share insights into how we build world-class simulation technology and the role of LS Core 2.0 in shaping the next era of military training. This session is designed for software engineers, system architects, and technology leaders who are interested in how modern simulation software is revolutionizing defense training.

No prior knowledge of military simulation is required—just an interest in cutting-edge technology and real-world applications of advanced simulation systems.
  `,
	speakers: [
		{
			name: 'Craig Williams',
			bio: `
Craig Williams is the Chief Technology Officer at Applied Virtual Simulation (AVS), where he leads the development and product management of cutting-edge military simulation technology for the Australian Defence Force. A technology expert with more than 15 years of experience in the Defence simulation community, Craig has worked as a software designer and developer, managed software and hardware development teams, and overseen the successful delivery of complex technical projects and products. With deep expertise in software engineering, simulation systems, and Defence technology, he has played a pivotal role in architecting, designing and delivering the Land Simulation Core 2.0 (LS Core 2.0) Common Simulation Software (CSS)—a foundational suite that powers the next generation of simulators. Under his leadership, AVS has developed advanced training solutions, including the Protected Mobility Tactical Trainer (PMTT) and the Remote Weapon Station Desktop Trainer (RWSDT). He is currently spearheading the development of the software system for the Land 400 Phase 3 Infantry Fighting Vehicle Trainer (L400-3 IFV-T). Passionate about bridging the gap between defense needs and modern technology, Craig brings deep technical expertise in software architecture, simulation frameworks, and the challenges of military training to ensure that Defence personnel have access to realistic, scalable, and interoperable simulation environments. As a speaker, he provides unique insights into how simulation software is transforming Defence training, offering practical lessons for software engineers, system architects, and technology leaders interested in complex system development and large-scale simulation frameworks. 
      `,
			image: 'craig-williams.jpg',
			jobTitle: 'CTO at Applied Virtual Simulation'
		}
	]
};

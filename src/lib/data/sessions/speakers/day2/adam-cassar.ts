import type { Session } from '../../session';

export const adamCassar: Session = {
	slug: 'adam-cassar',
	title: 'When Home Networks Become Weapons',
	abstract: `
Residential proxy networks (RESIPs) represent a growing threat to cybersecurity, enabling attackers to route malicious traffic through legitimate residential IP addresses. This presentation examines how these networks operate, their impact on traditional security controls, and strategies for detecting and preventing their abuse.

Key Topics:

- Anatomy of residential proxy networks: ethical providers vs. malware-based networks
- How residential IPs are acquired through SDKs, malware, and ISP partnerships
- Case studies of major RESIP networks including 911.re and Volt Typhoon
- Real-world examples of fraud campaigns leveraging residential proxies
- Legal implications and recent court cases involving RESIP abuse

Technical Deep Dive:

- Analysis of RESIP traffic patterns and behaviors
- Methods for detecting residential proxy usage
- Impact of CGNAT on detection capabilities

Detection Strategies:

- Protocol-level fingerprinting techniques
- Timing-based analysis methods
- Behavioral indicators of proxy usage
- Combining multiple detection signals
- Implementation considerations at scale
  `,
	speakers: [
		{
			name: 'Adam Cassar',
			bio: `
With over two decades of experience in web security and infrastructure, I've had a front-row seat to the evolution of cyber threats. As co-founder of Peakhour.IO, I've been particularly fascinated by how attackers are leveraging residential proxy networks (RESIPs) to bypass traditional security controls and execute account takeovers. This led me to develop innovative network fingerprinting techniques that go beyond conventional IP-based security, helping Australian businesses detect and block sophisticated attacks that appear to come from legitimate residential networks.

My passion lies in finding fresh approaches to security challenges. Through research and hands-on experience dealing with real-world attacks, I've developed new methods for identifying malicious traffic, even when it's hiding behind seemingly legitimate residential IPs. I regularly share these insights at security conferences across Australia, helping organisations understand how to protect themselves against the rising threat of RESIP-based account takeovers.

At Peakhour.IO, we've built Australia's leading full-site delivery service that specialises in advanced threat detection, combining innovative fingerprinting techniques with behavioral analysis to distinguish between legitimate users and attackers, even when they're using residential proxy networks
`,
			image: 'adam-cassar.jpg',
			jobTitle: 'Co-Founder of Peakhour.io'
		}
	]
};

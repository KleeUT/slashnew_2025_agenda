import type { Session } from '../../session';

export const tomHoward: Session = {
	slug: 'tom-howard',
	title: "We've outgrown CRUD. What comes next?",
	abstract: `
In this talk, I outline why we've outgrown CRUD-based application architecture and the signs of this that many experienced developers will recognise, such as when we need to do partial UI updates for both in-band changes (e.g. when a to-do list item is marked complete, then the total # of open items should decrement) and even more so for out-of-band changes (e.g. when there's a withdrawal on my account, the transaction list and the balance should be updated), which typically results in:
- complex UI update logic that duplicates UI rendering logic
- partial refresh defects, where the UI is rendered correctly on initial load but incorrectly on partial refresh
- stale or inconsistent data (e.g. when a to-do list item is marked complete, the total # of open items isn't updated)

I then examine event-sourcing as an alternative. Unfortunately, while traditional event-sourcing has many benefits, it does little to solve the partial UI update problem while introducing significant complexity.

I then introduce event-sourcing with client-side projections and show how it's similar to traditional event-sourcing, where it's different and how it solves the partial UI update problem without complex or duplicated UI rendering logic, avoiding partial refresh defects and stale or inconsistent data. I then provide a live, interactive demonstration of the approach in action.
  `,
	speakers: [
		{
			name: 'Tom Howard',
			bio: `
As a seasoned engineering leader and consultant with over 25 years of experience, I bring a wealth of knowledge in IT architecture and software engineering. My expertise lies in advising large organizations and providing technical guidance to medium-sized organizations looking to re-engineer their systems and procedures. I have a proven track record of managing technical engineering teams, delivering value to stakeholders, and leveraging my deep understanding of technology, business strategies, and product management to provide insightful leadership.

In my recent roles at Greater Bank, Pacific National and Westpac, I have demonstrated my ability to drive significant digital transformation projects, implement modern software delivery processes, and improve system security and efficiency. I have successfully navigated complex challenges, providing strategic foresight and mitigating risks to keep projects moving forward.

I am passionate about reducing unnecessary costs to business processes and have consistently demonstrated this through my work. I am seeking opportunities to act as an advisor to executive boards, providing recommendations for service improvements and project development. My goal is to add value to technical teams and help organizations navigate the complexities of digital transformation.
`,
			image: 'tom-howard.jpg',
			jobTitle: 'Co-Founder of Well Financial Technology'
		}
	]
};

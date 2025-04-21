import type { Session } from '../../session';

export const andrewGoodwin: Session = {
	slug: 'andrew-goodwin',
	title: 'Digital Forensics in the Intensive Care Unit',
	abstract: `
Clinical data can be messy. This statement is especially true for physiological waveform data such collected in a children's intensive care unit. The process of care can disrupt data collection, children can squirm, cough, and remove sensors, patients size and physiology can vary dramatically across age groups, and the medical equipment itself introduces artifacts and noise in the signals. The timeseries data collected from these machines is digital detritus; in its raw form it is not suitable for immediate use as input into machine learning models. Additionally, a model trained at one hospital may not generalise to another hospital's data as a result of different medical devices and clinical practice being employed.

This is where digital forensic techniques can help. The goal of my work is to use statistical techniques to separate the information in these signals into three categories; system related noise and artifacts, information about the state of the patient, and noises and artifacts in the signals associated with clinical care practice at the bedside. These three categories of information (once separated) are all useful in their own right. Digital artifacts associated with clinical care, such as the characteristic shape introduced into an arterial pressure sensor waveform while collecting a blood sample, can be identified using ML techniques and used to provide our models with valuable context that is not otherwise recorded in the electronic health record. Signal characteristics stemming from the medical device properties, such as sample frequency, proprietary pre-processing techniques, and timing errors, can be identified and removed so that models are more likely to generalise between hospitals. The remaining information describing the physiological state of the patient can then be used as input into our clinical models in a ML-ready form.

This talk will describe the process of collecting, cleaning, and utilising high frequency clinical data in an intensive care unit. Many of the techniques employed in this process have been used in other industries, for example to detect numerical outliers or to detect fraudulent entries into accounting systems. Adaptation of these statistical techniques to a very large clinical database has allowed researchers to develop and deploy robust machine learning models that improve patient care in the ICU. One example of this is a foundational model that has been developed to monitor 500Hz electrocardiogram signals to detect and classify cardiac arrhythmias in (near) real time. The conceptualisation, development, training, testing, and deployment of this model will be discussed in detail in the presentation, along with numerous other examples of clinical decision support tools that utilise these signals in the ICU.
  `,
	speakers: [
		{
			name: 'Andrew Goodwin',
			bio: `
Andrew is an experienced engineer with a track record of developing innovative and novel tech solutions. Andrew completed a degree in environmental engineering at the University of Newcastle in 1999 and worked locally as consultant developing and operating flood, noise and dust models to the mining industry for more than a decade. In this role he developed early versions of the software used for spatial analysis at Anditi, a Newcastle based company that develops high performance analytical solutions for geospatial projects.

Andrew moved to Toronto, Canada in 2011 where he developed a clinical data collection and storage system for the Intensive Care Unit at The Hospital for Sick Children (SickKids). This system, called AtriumDB, has been collecting physiological waveforms continuously from the 42-bed unit since early 2016, resulting in a database of over 2 million patient-hours of high frequency physiological signals from over 20,00 critically ill children. These signals collected using this system are being used for multiple clinical research projects spanning several different countries. AtriumDB was released as an open-source in 2023 and is now in use at several other children's hospitals in Canada, Israel, the USA, and at the Children's Hospital at Westmead in NSW. in 2023 Andrew completed a PhD in Biomedical Engineering through the university of Sydney where his research focused on modelling data flow through clinical systems. Andrew now works from his home in Newcastle to assist hospitals internationally who wish to incorporate high frequency physiological signals into their clinical decision support systems.
      `,
			image: 'andrew-goodwin.jpg',
			jobTitle: 'Research Collaborator at The Hospital For Sick Children'
		}
	]
};

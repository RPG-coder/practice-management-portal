<h1 align=center>Practice Management Portal (Charting)</h1>
<h4 align=center>CS673-Software Designs &amp; Production Methodology</h4>
<h4 align=center>Instructed by Prof. Prabhat Vaish</h4>

## Quick Links
- [Scrum Team: Team 6](#scrum-team-team-6)
- [Product Vision: The Goals](#product-vision-the-goals)
  - [Far vision:](#far-vision)
  - [Near vision:](#near-vision)
- [Stakeholders: Who is this for?...](#stakeholders-who-is-this-for)
- [User persona: Understanding the users, their experience and their requirements w.r.t the product](#user-persona-understanding-the-users-their-experience-and-their-requirements-wrt-the-product)
- [Product Backlogs: What to expect soon?...](#product-backlogs-what-to-expect-soon)
- [Relative Size Estimates](#relative-size-estimates)


## Scrum Team: Team 6
<p align=justify>Our team is working on the Practice management Portal, in specific the charting's aspect, which is a one place viewing of the patients details. The details can comprise of who the patient are?, Details about the medical and physical details underlying that particular patient? and getting a picture of which doctors have the individual patient visited, currently attending or visiting soon, in short the appointment records. This is the responsibility of Scrum team 6, whose members comprise of:</p>

<table align=center>
  <thead>
    <tr><th>Names</th><th>Roles</th></tr>
  </thead>
  <tbody>
    <tr><td>Himani Patel</td><td>Business Analyst</td></tr>
    <tr><td>Raj Patel</td><td>UI Developer</td></tr>
    <tr><td>Akshay Mutha</td><td>Microservices Developer</td></tr>
    <tr><td>Rahul Gautham Putcha</td><td>Data Architect</td></tr>
    <tr><td>Abhishek Bagora</td><td>Quality & DevOps Engineer</td></tr>
  </tbody>
</table>

## Product Vision: The Goals
<p align=justify>This section outlines the clear state/goal of developing the product, Practice Management Portal for Charting. In particular, this part focuses on who our customers are?, what's their need? and why are we doing this (goal)?</p>

### Far vision:
<p align=justify>FOR the patient care WHO needs all vital information about their patient in one consise view, THE Practice Management Portal for Charting IS A Digital Health and Practice mangagement application THAT allows the user to understand about the patient for making the best and quickest healthcare decisions. UNLIKE any legacy systems used to showcasing the patient details, OUR PRODUCT emphasizes on giving a valuable experience in understanding a patient's records even better and simpler.</p>

### Near vision:
<p align=justify>FOR the patient care WHO needs a simple interface for portraying their patient details, THE Charting section IS A prototype for a Patient Information Display THAT provides a simple layout for viewing the patient's current vitals and scheduled appointments. UNLIKE any legacy Patient Information Displaying system, OUR PRODUCT intuitively divides the verbose patient's details into clean and easily distinguishable format.</p>

## Stakeholders: Who is this for?...
<p align=justify>The following are the stakeholders who are interested in the product, Practice Management portal for Charting, and are not part of our Scrum Team.</p>

<table align=center>
  <thead>
    <tr><th>Internal</th></tr>
  </thead>
  <tbody>
    <tr><td>Practice Management (HR)</td></tr>
    <tr><td>Doctors</td></tr>
    <tr><td>Nurse</td></tr>
  </tbody>
</table>

<!-- CHECK IF: External stakeholders such as Patient, Insurance, Lab Technicians/Scientist and Pharmacy come into the factors for this system. -->

<p align=justify>* This product is used for the patient's care and it is mostly built for entities(stakeholders) supporting the patients, like Doctors, Nurses and Practice management team. This also means there is a high need to protect patient's confidential information which may prohibit access to any external stakeholders. Hence, all the consideration for the Internal stakeholders must be satisfied for dealing with patient's care.</p>

## User persona: Understanding the users, their experience and their requirements w.r.t the product
<p align=justify>This section gives a character potrait of a user that is using the product, Patient Management portal for charting.</p>

- **Doctors:** <span align=justify>Doctors are the primary care for all patients. With them attending a number of patients and maintaining a strong relationship with them, while attending their case, a doctor may find it troubling to keep record of their patient on files and papers. They also need to make the process of retrival easier. And lastly, they need a concise and neat picture of who and what the patient is?, what the severity of the patient case?, how many time have the patient visited them prior to current meet or date.</span>

- **Nurses:** <span align=justify>Nurses are the secondary or supporting care for all patients. They are the substitute when a doctor is not able to attend a patient's case due to the meeting of an another severe case. During an emergency when a doctor is not available, a nurse may need to understand the details about their patient. Especially the patient vital. On checking, they are able to give a proper emergency medication depending on the condition and illness patient is suffering.</span>

- **Practice management:** <span align=justify>he Practice Manager is responsible for everything else that occurs during a patient encounter. From the organizing and optimizing of patient flow, office workflows, to procedures and tasks. The mission of the practice manager is to allow the doctor to remain focused on treating patients, minus the burden of running the office. The primary concern of a medical practice manager is that the physician gets paid properly for services rendered. The responsibilities of a practice manager stretch across administrative, legal, financial, technological and more.</span>

## Product Backlogs: What to expect soon?...
- The progress of this project is tracked via Pivotal Tracker. For more details please visit, [PivotalTracker link](https://www.pivotaltracker.com/projects/2533209)
- All product backlogs are based on SMART.
- **SMART** - Specific Measured Achievable Relevant Time-Constraint
- Below are the sample product backlogs that my team is looking forward to complete in near vision:

<table>
  <thead>
    <tr><th>Title</th><th>User story opening sentance</th><th>Additional details</th><th>Estimated in story points</th></tr>
  </thead>
  
  <tbody>
    <tr><td> Who is the Patient? </td><td> As a doctor or nurse or a practice manager, I want to know who the patient is as a top priority when I start to view their details so that I can make sure I am focusing on the right patient record. </td><td> When a patient comes to visit a patient care assistant, the assistant need a way to identify the record of that patient. Details like the patient name, birth date and their age comes as top priority display. This information can also be used by the patient care in friendly greeting their patients by their name and communicating their patient comfortably, especially if the patient is a growing child or a senior citizen. </td><td>1 story points</td></tr>
    <tr><td>Simple access on parts of patient medical records</td><td>As a doctor or a nurse, I want to find a particular patient's record at a fast response within few clicks so that I can respect the value of my patient's time.</td><td>During a patient visit, there may be times when a doctor needs to access certain part of their patient data. Time is critical for anyone. With the idea of time is money, a patient who is waited long may be put on a patience test. Which could lead to a bad patient feedback! and bad customer (patient) retention!. In order for a doctors to retain their patients, they are in need of a system with a fast response and providing a user friendly access to their patient records.</td><td>3 story points</td></tr>
    <tr><td>Conciseness in displaying patient data</td><td>As a doctor, I want to organize and understand my patient's medical record with a clean format so that I can locate important patient details and trace patterns to share any progress or providing essential medical advice after examining their health concerns.</td><td>Patients coming over with their concerns and exchanging information about the same, doctors are looking for a way to document their thoughts on the patient they encounter and access their details upon next visits (or follow-ups). If a doctors is not organized about their patients, things can escalate pretty bad leading them to take time to concentrate on finding details they want about a particular patient.</td><td>2 story points</td></tr>
    <tr><td>Patient's visiting details</td><td>As a doctor or a practice manager, I want to get the history of my patient's visit with their concerns summerized in few words so that I can keep track of them visiting or prepare my thoughts on their medical condition prior to their next visit.</td><td>Patient who have great relation with their doctors, schedule their appointment more often. This means patient is having great time adjusting to their doctors and vice versa. This brings patients to make a visiting pattern. At a long run as the number of patient increase, doctors may find themselves hard to keep successive tracking of their patients visit. Hence, a doctors may need visit alerts about their patients, with a short description on concerns identified upon their encounter and the older-dated visits for gathering any necessary documents collected during their previous visits.</td><td>3 story points</td></tr>
    <tr><td>Insurance details</td><td>As a practice manager, I want a way to get a copy of patient's insurance details so that I can verify that their doctor are sure of their payment after the visit session completes.</td><td>Most times practice manager are concerned with the payment aspect of their doctors service. Patient may pay out of pocket or via an insurance agency (with copay or not). Leaving the out of pocket aspect aside, payment concerned with insurance are required to be validated before any medical service is provided by the doctor. The aim of practice manager is to avoid any insurance frauds, providing lesser credit to a doctor's service. In other cases, a practice manager may also find their patients troubled with their medical coverage support with their insurance. Question like whether a doctor is within a network may hinder building of a strong relationship with their patients.</td><td>2 story points</td></tr>
    <tr><td>Progress Note documentations</td><td>As a doctor, I want means to record few progress notes with either a form fillup and submission or by typing free text and submission so that I can document the patient details upon their visit.</td><td>Progress notes are basically indicators for doctors to keep track of their patient from visit to visit. A progress notes can give a measurement on how the patient is performing healthwise after a prior and before a next visit. As described in **Add a new Visit**,  This feature is a set to be organized across visit to visit.</td><td>2 story points</td></tr>
    <tr><td>Lab and Medications</td><td>As a doctor, I want my patients share the labs and medication details to my patients.</td><td>In order to improve the health of the patient, doctors recommend prescription and blood-testings in lab to get better understanding about their patient. This will also be indicator to the patients before they follow up the doctor they are attending. As described in **Add a new Visit**,  This feature is a set to be organized across visit to visit.</td><td>3 story points</td></tr>
    <tr><td>Add new Visits</td><td>As a practice manager, I want to be able to start a new visit session whenever a doctor is met with one of their patient so that all details that are associated with that patient's visit gets organized within that visit.</td><td>For a doctor who is handling one of their patient, the doctor is in need of a way to organize their patient's progress and necessary documents based on each visits they encounter. The documents may include, message, lab reports, medications instructed, and documentation (or progress note) instructions which are needed to be preformed by the patient before their next visit.</td><td>3 story points</td></tr>
    <tr><td>Generate new Encounters</td><td>As a practice manager or a doctor, I want to initiate billing requests after a particular patient completes their visit so that the billing team can get to know about a patient who is yet to make a payment for the service provided to them by the doctor upon their visit.</td><td>Doctors on treatment completion would like to direct their patient to the billing department by means of initiating a billing requests. This is to indicate the doctor's proof of service to their patients, which are also shared with the billing department for estimating the patient's bill. The billing department is shared with all details, namely the medications, lab reports, confidential info shared via progress note documentaitons, and messages exchanged, performed upon that visit.</td><td>2 story points</td></tr>
    
    
    
    
    
  </tbody>
</table>

## Relative Size Estimates
The team has agreed to work the product with the relative size estimates, described as follows:
- 1 Story point: 10 person hours
- 2 Story points: 15 person hours
- 3 Story point: 20 person hours

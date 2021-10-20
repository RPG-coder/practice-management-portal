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
- [PivotalTracker link](https://www.pivotaltracker.com/projects/2533209)

<table>
  <thead>
    <tr><th>Title</th><th>User story opening sentance</th><th>Additional details</th><th>Estimated in story points</th></tr>
  </thead>
  <tbody>
    <tr><td>Who is the Patient?</td><td>As a doctor or nurse or a practice manager, I want to know who the patient as top priority so that I can greet my patient as soon as I know their visit.</td><td>Hundred's of patient come to pay their visits. It is a real need for doctors to greet their patient especially to build a strong connection and make the communication by their glancing their basic details like name, birthdate to understand their age; which may be helpful especially if the patient is a senior citizen in order to treating them with care or a growing child.</td><td>1 story points</td></tr>
    <tr><td>Simple access on patient medical records</td><td>As a doctor or a nurse, I want to find a particular patient's records at a fast response within few clicks so that I donot let unnecessary amount of my patient's time go in waste.</td><td>Doctors or nurses are dealing with hundreds or thousands of patients may find it difficult finding their patient details on paper or legacy system with lesser attractive interface. The primary aim is to provide what they want (maintainability), when they want to (availability), as fast as possible (responsive). This may include patient’s current vitals, recent and scheduled appointments, documents, lab results, problem list, current medications, active allergies, immunization chart or any recent activity.</td><td>3 story points</td></tr>
    <tr><td>Conciseness in displaying patient data</td><td>As a doctor, I want to understand the details of my patient's medical concerns with a clean format so that I can easily trace patterns of important details and share the progress or further steps on progress regarding their health.</td><td>With patient coming with their concerns and revisiting (follow-up) after prior visits, doctors have a responsibility to know A to Z about their patient health condition with no ambiguity in the data. Therefore the medical records must indicate up to the mark info on what the patient is concerns and how often they schedule their meet with ease in locating the details.</td><td>2 story points</td></tr>
    <tr><td>Patient's visiting details</td><td>As a doctor or a practice manager, I want to get the history of my patient's visit so that I can keep track of them and prepare myself at understanding their medical condition prior to their visit.</td><td>Patient who have great relation with their doctors, schedule their  appointment more often. This make the patient adjust to their doctors and vice versa. As a long term as the number of patients increase, it becomes difficult for the doctors to keep checks on their patients. Making them less organized especially when they interact with their patient. Making the visits organized, makes a doctors job easier.</td><td>3 story points</td></tr>
    <tr><td>Insurance details</td><td>As a practice manager, I want be efficient at handling insurance challenges.</td><td>Most times a practice manager find their patients troubled with the medical coverage support with their insurance. Question like whether the doctors is in network may hinder the building a strong relationship with patient. Also, practice managers need to know where the source of pay is coming from to get physician paid for the service. </td><td>2 story points</td></tr>
    <tr><td>Add New Visits</td><td>As a practice manager, I want be adept at handling insurance challenges.</td><td>Most times a practice manager find their patients troubled with the medical coverage support with their insurance. Question like whether the doctors is in network may hinder the building a strong relationship with patient. Also, practice managers need to know where the source of pay is coming from to get physician paid for the service. </td><td>3 story points</td></tr>
    <tr><td>Accept New Patients</td><td>As a practice manager or a doctor, I want be add and organize new patients from anywhere.</td><td>Doctors and Practice Managers may get a new patient at any moment. Although this may be the task of a Frontdesk or reception, this is a feature needed to enhance flexibility of using the application.</td><td>2 story points</td></tr>
    <tr><td>Generate New Encounters</td><td>As a practice manager or a doctor, I want to initiate to start a billing request for a particular patient visit upon completion.</td><td>Doctors on treating patient over visiting would like to forward their billing requests to the billing department.</td><td>2 story points</td></tr>
    <tr><td>Progress Notes</td><td>As a doctor, I want my patients to access full progress notes of recent visits with a single click.</td><td>Progress notes are basically indicators to know make the patient push to make their health better. And also a measure for their performance</td><td>3 story points</td></tr>
    <tr><td>Lab and Medications</td><td>As a doctor, I want my patients share the labs and medication details to my patients.</td><td>In order to improve the health of the patient, doctors recommend prescription and blood-testings in lab to get better understanding about their patient. This will also be indicator to the patients before they follow up the doctor they are attending.</td><td>3 story points</td></tr>
  </tbody>
</table>

## Relative Size Estimates
The team has agreed to work the product with the relative size estimates, described as follows:
- 1 Story point: 10 person hours
- 2 Story points: 15 person hours
- 3 Story point: 20 person hours

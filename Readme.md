<h1 align=center>Practice Management Portal</h1>
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
<p align=justify>This team is working on the Practice management Portal, which is a one place viewing of the patients details. The details can comprise of who the patient are?, Details about the medical and physical details underlying that particular patient? and getting a picture of which doctors have the individual patient visited, currently attending or visiting soon, in short the appointment records. This is the responsibility of Scrum team 6, whose members comprise of:</p>

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
<p align=justify>FOR the patient care WHO needs all vital information about their patient in one consise view, THE Practice Management Portal for Charting IS A Digital Health and Practice mangagement application THAT allows a user to understand about the patient for making the best and quickest healthcare decisions along with managing the medical practice dealings. UNLIKE any legacy systems used for showcasing the patient details and practice management, OUR PRODUCT emphasizes on giving a valuable experience in putting forward the patient's record details and assist all internal healthcare organization users in their working even better.</p>

### Near vision:
<p align=justify>FOR the patient care WHO needs a simple interface for portraying their patient details, THE Management Portal IS A prototype for a Patient Information Display THAT provides a simple layout for viewing the patient's current vitals and scheduled appointments. UNLIKE any legacy Patient Information Displaying system, OUR PRODUCT intuitively divides the verbose patient's details into clean and easily distinguishable format.</p>

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

- **Doctors:** <span align=justify>Doctors are the primary care for all patients. They keep attending a number of patients and maintaining a strong relationship with them. While attending their case, a doctor may find it troubling to keep record of their patient on files and papers. They may also require to have the process of document retrival easier and responsive. And lastly, they need a concise and neat picture of who and what the patient is?, what the severity of the patient case?, how many time have the patient visited them prior to current meet or date.</span>

- **Nurses:** <span align=justify>Nurses are the secondary or supporting care for all patients. They are the substitute when a doctor is not able to attend a patient's case due to the meeting of an another severe case. During an emergency when a doctor is not available, a nurse may need to understand the details about their patient. Especially the patient vital and lab reports or medications they should provide. Upon checking, they would be able to deliver a proper emergency medication depending on the condition and illness patient is suffering.</span>

- **Practice management:** <span align=justify>The Practice Managers are responsible for everything else that occurs during a patient encounter. From the organizing and optimizing of patient flow, office workflows, to procedures and tasks. The mission of the practice manager is to allow the doctor to remain focused on treating patients, minus the burden of running the office. The primary concern of a medical practice manager is that the physician gets paid properly for services rendered. The responsibilities of a practice manager stretch across administrative, legal, financial, technological and more.</span>

## Product Backlogs: What to expect soon?...
- The progress of this project is tracked via Pivotal Tracker. For more details please visit, [PivotalTracker link](https://www.pivotaltracker.com/projects/2533209)
- All product backlogs are based on SMART.
- **SMART** - Specific Measured Achievable Relevant Time-Constraint
- Below are the sample product backlogs that my team is looking forward to complete as part of the near vision:

<table>
  <thead>
    <tr><th>Title</th><th>User story opening sentance</th><th>Additional details</th><th>Estimated in story points</th></tr>
  </thead>
  
  <tbody>
    <tr><td> Who is the Patient? </td><td> As a patient care personnel, I want to know who the patient is as a top priority when I start to view their record details so that I can make sure I am focusing on the right patient's record. </td><td> When a patient comes to visit or comes as a concern for any patient care assistant, the assistant needs a way to identify the record of that patient after search. Details like the patient name, birth date and their age comes handy. This information can be used by a doctor or nurse in friendly greeting to their patients by name and communicating with the patient comfortably, especially if the patient is a growing child or a senior citizen. Or, for a practice manager dealings on patient's financial or insurance records as an examples. </td><td>1 story points</td></tr>
    <tr><td>Insurance details</td><td>As a practice manager, I want to find the insurance details when I look into the patient records so that I can verify that their doctors are sure of their payment after the visit session completes.</td><td>Most times practice managers are concerned about payment aspects of their doctor's service. Patient may pay out of pocket or via an insurance agencies (with a copay option or not). Leaving the out of pocket aspect aside, payments concerned with insurances are required to be validated before any medical service is provided by the doctor. The aim of practice manager is to avoid any insurance frauds, avoiding attacks to diminish the efforts of a doctor's service to their patients. In other cases, a practice manager may also find their patients troubled with their medical coverage support with their insurance. Question like whether a doctor is within a network may hinder on building a strong relationship with their patients.</td><td>2 story points</td></tr>
    <tr><td>Patient's Demographics</td><td>As a patient care personnel, I want to see my viewing patient's demographic details so that I can understand my their background or medical history for assisting myself when I am dealing with them.</td><td>Patient demographics are generally the first bit of information gathered from the patient and contain everything from the patient's date of birth to which insurance carriers they participate with. For the application we are separating insurance from the demographics for maintainability. Any Patient care personnel can use demographics details to deal/assist with their patients. For example, a nurse can find the patient blood group type to know their patient blood group during their lab works.</td><td>2 story points</td></tr>
    <tr><td>Patient's visiting details</td><td>As a doctor or a practice manager, I want to find the history of visits and appointments along with the reason of attendance summarized in few words when I view a patient record so that I can keep track of their visit or prepare thoughts on their medical condition prior to their next visit.</td><td>Patient who have a great relation with their doctors, schedule their appointments more often. This means that patients are having great time adjusting to their doctors and vice versa. This introduces a visiting pattern routine. At a long run as the number of patient increase, doctors may find themselves hard to keep successive tracking of their patient's visit. Hence, a doctors may check on a patient's visits, with a short description on their concerns identified upon their encounter. Likewise, the documents and interaction activity for all older-dated visits are collected, organized and displayed with respect to that dated visit. Similarly, Practice managers use patient's visits as a way to build strong relations with patients by providing extra benefits and care options.</td><td>3 story points</td></tr>
    <tr><td> Who are my Doctors? </td><td> As a practice manager, I want to get a list of doctors I am managing and the viewing patient's is visiting along with their details and activities when I am inside my dashboard so that so that I can focus on the performance of my doctors and problems arised with their patients. </td><td> A Healthcare organization may have many doctors and a single practice manager many not able to focus on the every doctors and their activities. They require documented way to view their doctor's activities and manage any work that come on the healthcare business aspect inline with that doctor. For every practice manager managing a specific set of doctors and by viewing their doctors and the activities they perform, a practice manager may focus on recording performance and problems of that doctor along with strengthening their patients network.</td><td>2 story points</td></tr>
    <tr><td>Free text documentation</td><td>As a doctor, I want to add progress notes for a viewing patient by typing in their patient's progress details so that I can share their progress on lab work and medical conditions in the duration between their visits</td><td>Progress notes are basically indicators for doctors to keep track of their patient from visit to visit. A progress note can give a measurement on how the patient is performing health-wise after a visit and before a next visit. They also serve as a remainder to doctors on knowing the patient from a large database of patients to whom that doctor may provide their service.</td><td>1 story points</td></tr>
    <tr><td>Point & Click documentation</td><td>As a doctor, I want to add progress notes for a viewing patient by filling up a form containing common MCQs (multiple choice question) about patient's progress details so that I can share their progress on lab work and medical conditions between their visits</td><td>Progress notes are basically indicators for doctors to keep track of their patients from visit to visit. A progress note can give a measurement on how the patient is performing health-wise after a visit and before a next visit. They also serve as a remainder to doctors on knowing the patient from a large database of patients to whom that doctor may provide their service.</td><td>2 story points</td></tr>
    <tr><td>Sharing Lab Works to Patients</td><td>As a doctor, I want a way to create a new lab work tasks for a viewing patients to do so that my patient can view their lab works that they must do to provide me more details on their medical conditions</td><td>Lab reports are primary ways for attending patients to share their medical conditions to a doctor by working on it between visits. In order to get overall idea about the patient's medical conditions or to see improvement in a patient's condition, a doctor recommends patients to conduct certain work tasks at labs. For example a patient may need to perform blood-testing's at labs or getting certain vaccinations done. Then, get their medical condition reports generated, as an evidence upon which a doctors may testify the existence of necessary disease symptoms.</td><td>2 story points</td></tr>
    <tr><td>Sharing a Medication list for a Patients to take</td><td>As a doctor, I want a way to create a list of medication for a viewing patients to take so that my patient can view their necessary medication I recommend from their pharmacy department</td><td>Medications are used to cure, halt, prevent or ease disease symptoms. They also help in the diagnosis of illnesses. Doctor prescribe medicines after examining the patient's conditions which the patient my find in their preferred pharmacy. Patient and Pharmacy department may feel difficulty or ambiguity in understanding the medications that a doctor may recommend verbally or written. Having the medical prescriptions electronically provides ease in structuring and prevents any of the handwritten or verbal ambiguity.</td><td>2 story points</td></tr>
    <tr><td>View Message Interactions</td><td>As a doctors, I want to look up at the communication messages exchanged with my viewing patients so that I can reference it to know how I can better assist my patients with their medical problems.</td><td>Messages are means for patient and doctors to clarify quick doubts. Messages are also used for sending updates on reports from both ends. Another reason for using message is for doctors to keep referencing old messages with their patients inorder to make their advices more effectively delivered to any patient they serve in the future.</td><td>3 story points</td></tr>
    <tr><td>Start a new visit session</td><td>As a doctor, I want to start a new visit session whenever I meet one of my patient so that all details that are associated with that patient's visit gets organized within that visit thereafter.</td><td>For a doctor who is handling a patient, they may need a way to organize their patient's progress and necessary documents based on each visits they encounter. These documents may include, message, lab reports, medications instructed, documentation (or progress note) and special instructions which a patient may need to perform before their next visit.</td><td>3 story points</td></tr>
    <tr><td>Voiceovers as documentation</td><td>As a doctor, I want to add progress notes for a viewing patient by recording my voice with automatically generating a transcript about my conversation about patient's progress details so that I can share their progress on lab work and medical conditions between their visits</td><td>Progress notes are basically indicators for doctors to keep track of their patient from visit to visit. A progress notes can give a measurement on how the patient is performing health-wise after a visit and before a next visit.</td><td>3 story points</td></tr>
    <tr><td>Generate a new encounters</td><td>As a practice manager or a doctor, I want to initiate billing requests soon after a particular patient completes their visit so that the billing team gets prompted about a patient who need to make payment for a service provided to them by the doctor.</td><td>Doctors upon treatment completion of a patient would like to direct the patient to the billing department by means of initiating a billing requests. This is also an indication for a practice manager to know a doctor have provided their proof on their service to their patients. The billing department may also use the proof of service for estimating the patient's bill by the doctors service charges, lab works and medical prescriptions conducted during their visit session.</td><td>2 story points</td></tr>
    <tr><td>Conciseness in displaying patient data</td><td>As a doctor, I want to organize my patient's medical record with a clean format so that I can locate important patient details and trace patterns in their data for sharing essential medical advice after examining their health concerns.</td><td>This is a Readability concern from a doctor. For patients coming over with their concerns and exchanging information about the same, a doctor looks for a way to document the patients they encounter and access their details upon next visits (or follow-ups). If a doctors is not organized about their patients, things can escalate pretty bad leading them to take time at concentrating to find the details they want about a particular patient in the patient's records.</td><td>3 story points</td></tr>
    <tr><td>Simple and promptly access on parts of patient medical records</td><td>As a doctor or a nurse, I want to find a particular patient's record at a fast response within few clicks so that I can focus on dealing with my patient's during their valuable time spent with me.</td><td>This is a Performance and Accessibility concern, During a patient visit, there may come times when a doctor needs to access certain part of their patient data. Time is critical for anyone. With the idea of time is money, a patient who is waited long may be put on a patience test. Which could lead to a bad patient feedback! and bad customer (patient) retentions and relations!. In order for a doctors to retain their patients, they are in need of a system with a fast response and providing a user friendly access to their patient records. This way doctors may find focusing themselve on other important details corresponding to their patient's visit.</td><td>3 story points</td></tr>
  </tbody>
</table>

## Relative Size Estimates
The team has agreed to work the product with the relative size estimates, described as follows:
- 1 Story point: 10 person hours
- 2 Story points: 15 person hours
- 3 Story point: 20 person hours


<hr />

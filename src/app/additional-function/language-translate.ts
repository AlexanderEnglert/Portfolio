import { TRANSLATIONS_DE } from '../additional-function/translation-de';
export type Language = 'en' | 'de';
export const TRANSLATIONS: Record<Language, { [key: string]: any }> = {
    en: {
      header: {
        aboutMe: 'About me',
        skills: 'Skills',
        projects: 'Projects',
      },
      mainTopIntroduce: {
        job: 'Frontend Developer',
        firstButton: 'Check my work',
        secondButton: 'Contact me',
      },
      mainTopSliderText: {
        firstSpan: 'Available for remote work',
        secondSpan: 'Frontend Developer',
        thirdSpan: 'Based in Illerzell',
        fourthSpan: 'Open to work',
      },
      aboutMe: {
        aboutMeSmallHeadline: 'Who I Am',
        aboutMeHeadline: 'About me',
        aboutMeMainText: `Hi, I'm a German-speaking Frontend Developer based in Illerzell. Motivated by the limitless opportunities within IT, 
                        I am excited about crafting visually captivating and intuitive websites and applications.`,
        aboutMeLocationPart: `I am flexible and adaptable when it comes to my working environment. Whether in the Ulm region, remotely or at another location. 
                            I am also willing to relocate for an exciting professional challenge, for example to Munich or another city.`,
        aboutMeMindPart: `I am open minded and always looking for personal challenges to constantly improve my knowledge and skills.`,
        aboutMeCheckPart: `In my profession, programming isn't just about writing code: it's a creative form of problem-solving. I take pride 
                            in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, 
                            I help you achieve your goals and bring your visions to life.` 
      },
      skillSet: {
        skillSetSmallHeadline: 'Technologies',
        skillSetHeadline: 'Skill Set',
        skillSetMainText: `My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. 
                        I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.`, 
        skillSetSecondHeadlineFirst: `You need`,
        skillSetSecondHeadlineSecond: `another skill?`,
        skillSetAnotherSkillText: `Get in touch with me. I am keen to deepen my expertise in the technologies I am already familiar with and to expand my skills by learning new backend technologies.`,
        skillSetButton: `Let's Talk`
      },
      projects:{
        projectsHeadline: 'Featured Projects',
        projectsMainText: 'Explore a selection of my work here - interact with projects to see my skills in action.'
      },
      projectSlider:{
        projectSliderSmallHeadline: 'What is this project about?',
        projectSliderTextJoin: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        projectSliderTextElPollo: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy chicken.',
        projectSliderTextDaBubble: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with it's intuitive interface, real-time messaging, and robust channel organization.",
        projectSliderNextButton: 'Next project'
      },
      colleaguessSlider:{
        colleaguessHeadline: 'What my colleagues say about me',
        colleaguesTextFirst: 'I programmed the Join project together with Alexander. It was a lot of fun working on the project with him. He always had very good ideas on how to solve problems and also showed me other ways of approaching problems. This made our teamwork efficient and results orientated.',
        colleaguesTextSecond: '',
        colleaguesTextThird: ''
      },
      contactMe:{
        contactMeSmallHeadline: 'Contact me',
        contactMeHeadline: "Let's work together",
        contactMeQuestion: 'Got a problem to solve?',
        contactMeMainText: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
        contactMeTextQuestion: 'Need a Frontend developer?',
        contactMeTextStatement: "Let's talk!"
      },
      contactMeEmail:{
        contactMeEmailName: "What's your name?",
        contactMeEmailNamePlaceholder: 'Your name goes here',
        contactMeEmailNamePlaceholderAlternative: 'Oops! is seems your name is missing',
        contactMeEmailAdress: "What's your email?",
        contactMeEmailFail:'Please enter a valid email format.',
        contactMeEmailPlaceholder: 'youremail@email.com',
        contactMeEmailPlaceholderAlternative: 'Hoppla! your email is required',
        contactMeEmailField: 'How can I help you?',
        contactMeEmailFieldPlaceholder: 'Please enter your text here',
        contactMeEmailFieldPlaceholderAlternative: 'What do you need to develop?',
        contactMeEmailPrivacyFirst: "I've read the",
        contactMeEmailPrivacyLink: ' privacy policy',
        contactMeEmailPrivacySecond: "and agree to the processing of my data as outlined.",
        contactMeEmailButton: 'Say Hello',
        contactMeEmailSend: 'Email send !'
      },
      footer:{
        footerJobTitle: "Web Developer",
        footerCountry: "Germany",
        footerLegalNotice: "Legal Notice"
      },
      privacyDefinitions:{
        privacyMainHeader:"Privacy Policy",
        privacyHeadline: "1. Definitions",
        privacyAHeadline:"a) Personal data",
        privacyAText:`Personal data means any information relating to an identified or identifiable natural person (“data subject”). An identifiable
                      natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an
                      identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic,
                      mental, economic, cultural or social identity of that natural person.`,
        privacyBHeadline:"b) Data subject",
        privacyBText:`Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.`,
        privacyCHeadline:"c) Processing",
        privacyCText: `Processing is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by
                      automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval,
                      consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.`,
        privacyDHeadline:"d) Restriction of processing",
        privacyDText: "Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future.",
        privacyEHeadline:"e) Profiling",
        privacyEText: `Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal
                      aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at
                      work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements.`,
        privacyFHeadline:"f) Pseudonymisation",
        privacyFText: `Pseudonymisation is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific
                      data subject without the use of additional information, provided that such additional information is kept separately and is subject
                      to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.`,
        privacyGHeadline:"g) Controller or controller responsible for the processing",
        privacyGText: `Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body
                      which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and
                      means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.`,
        privacyHHeadline:"h) Processor",
        privacyHText: `Processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller.`,
        privacyIHeadline:"i) Recipient",
        privacyIText: `Recipient is a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a
                      third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance
                      with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in
                      compliance with the applicable data protection rules according to the purposes of the processing.`,
        privacyJHeadline:"j) Third party",
        privacyJText: `Third party is a natural or legal person, public authority, agency or body other than the data subject, controller, processor and
                      persons who, under the direct authority of the controller or processor, are authorised to process personal data.`,
        privacyKHeadline:"k) Consent",
        privacyKText: `Consent of the data subject is any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he
                      or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.`
      },
      privacyName:{
        privacyHeadline: "2. Name and Address of the controller",
        privacyHeadlineText: `Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:`,
        privacyPrivat: "privat person",
        privacyCountry: "Germany",
        privacyPhone: "Phone: 01747846871",
        privacyWebsite: "Website: https://alexander-englert.de",
      },
      privacyData:{
        privacyHeadline: "3. Collection of general data and information",
        privacyFirstText:`The website of the privat person collects a series of general data and information when a data subject or automated system calls up the
                            website. This general data and information are stored in the server log files. Collected may be (1) the browser types and versions used, (2) the
                            operating system used by the accessing system, (3) the website from which an accessing system reaches our website (so-called referrers), (4)
          	                the sub-websites, (5) the date and time of access to the Internet site, (6) an Internet protocol address (IP address), (7) the Internet service
                            provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.`,
        privacySecondText: `When using these general data and information, the privat person does not draw any conclusions about the data subject. Rather, this
                            information is needed to (1) deliver the content of our website correctly, (2) optimize the content of our website as well as its
                            advertisement, (3) ensure the long-term viability of our information technology systems and website technology, and (4) provide law
                            enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. Therefore, the privat person
                            analyzes anonymously collected data and information statistically, with the aim of increasing the data protection and data security of our
                            enterprise, and to ensure an optimal level of protection for the personal data we process. The anonymous data of the server log files are
                            stored separately from all personal data provided by a data subject.`
      },
      privacyContact:{
        privacyHeadline: "4. Contact possibility via the website",
        privacyText: `The website of the privat person contains information that enables a quick electronic contact to our enterprise, as well as direct
                      communication with us, which also includes a general address of the so-called electronic mail (e-mail address). If a data subject contacts
                      the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored. Such personal
                      data transmitted on a voluntary basis by a data subject to the data controller are stored for the purpose of processing or contacting the
                      data subject. There is no transfer of this personal data to third parties.`
      },
      privacyPersonalData:{
        privacyHeadline: "5. Routine erasure and blocking of personal data",
        privacyFirstText: `The data controller shall process and store the personal data of the data subject only for the period necessary to achieve the purpose of
                          storage, or as far as this is granted by the European legislator or other legislators in laws or regulations to which the controller is subject to.`,
        privacySecondText: `If the storage purpose is not applicable, or if a storage period prescribed by the European legislator or another competent legislator
                            expires, the personal data are routinely blocked or erased in accordance with legal requirements.`            
      },
      privacyDataSubject:{
        privacyMainHeadline: "6. Rights of the data subject",
        privacyAHeadline: "a) Right of confirmation",
        privacyAText: `Each data subject shall have the right granted by the European legislator to obtain from the controller the confirmation as to
                      whether or not personal data concerning him or her are being processed. If a data subject wishes to avail himself of this right
                      of confirmation, he or she may, at any time, contact any employee of the controller.`,
        privacyBHeadline: "b) Right of access",        
        privacyBText: `Each data subject shall have the right granted by the European legislator to obtain from the controller free information about his
                      or her personal data stored at any time and a copy of this information. Furthermore, the European directives and regulations
                      grant the data subject access to the following information:`,
        privacyBLiFirst: "the purposes of the processing;",
        privacyBLiSecond: "the categories of personal data concerned;",
        privacyBLiThird: `the recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;`,
        privacyBLiFourth: `where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;`,
        privacyBLiFifth: `the existence of the right to request from the controller rectification or erasure of personal data, or restriction of
                          processing of personal data concerning the data subject, or to object to such processing;`,
        privacyBLiSixth: `the existence of the right to lodge a complaint with a supervisory authority;`,
        privacyBLiSeventh: `where the personal data are not collected from the data subject, any available information as to their source;`,
        privacyBLiEight: `the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) of the GDPR and, at least in
                          those cases, meaningful information about the logic involved, as well as the significance and envisaged consequences of such processing for the data subject.`,
        privacyBPFirst: `Furthermore, the data subject shall have a right to obtain information as to whether personal data are transferred to a third
                        country or to an international organisation. Where this is the case, the data subject shall have the right to be informed of the appropriate safeguards relating to the transfer.`,
        privacyBPSecond: `If a data subject wishes to avail himself of this right of access, he or she may, at any time, contact any employee of the controller.`,
        privacyCHeadline: "c) Right to rectification",  
        privacyCTextFirst: `Each data subject shall have the right granted by the European legislator to obtain from the controller without undue delay the
                            rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject
                            shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.`,
        privacyCTextSecond: `If a data subject wishes to exercise this right to rectification, he or she may, at any time, contact any employee of the controller.`,
        privacyDHeadline: "d) Right to erasure (Right to be forgotten)", 
        privacyDTextFirst: `Each data subject shall have the right granted by the European legislator to obtain from the controller the erasure of personal
                            data concerning him or her without undue delay, and the controller shall have the obligation to erase personal data without undue delay
                            where one of the following grounds applies, as long as the processing is not necessary:`,
        privacyDLiFirst: `The personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed.`,
        privacyDLiSecond: `The data subject withdraws consent to which the processing is based according to point (a) of Article 6(1) of the GDPR, or point
                          (a) of Article 9(2) of the GDPR, and where there is no other legal ground for the processing.`,
        privacyDLiThird: `The data subject objects to the processing pursuant to Article 21(1) of the GDPR and there are no overriding legitimate grounds
                          for the processing, or the data subject objects to the processing pursuant to Article 21(2) of the GDPR.`,
        privacyDLiFourth: `The personal data have been unlawfully processed.`,  
        privacyDLiFifth: `The personal data must be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject.`,
        privacyDLiSixth: `The personal data have been collected in relation to the offer of information society services referred to in Article 8(1) of the GDPR.`,
        privacyDPFirst: `If one of the aforementioned reasons applies, and a data subject wishes to request the erasure of personal data stored by the privat
                        person, he or she may, at any time, contact any employee of the controller. An employee of privat person shall promptly ensure that the erasure request is complied with immediately.`,
        privacyDPSecond: `Where the controller has made personal data public and is obliged pursuant to Article 17(1) to erase the personal data, the
                          controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical
                          measures, to inform other controllers processing the personal data that the data subject has requested erasure by such controllers of
                          any links to, or copy or replication of, those personal data, as far as processing is not required. An employees of the privat person will arrange the necessary measures in individual cases.`,
        privacyEHeadline: "e) Right of restriction of processing", 
        privacyEText: `Each data subject shall have the right granted by the European legislator to obtain from the controller restriction of processing where one of the following applies:`,    
        privacyELiFirst: `The accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data.`,  
        privacyELiSecond:`The processing is unlawful and the data subject opposes the erasure of the personal data and requests instead the restriction of their use instead.`,
        privacyELiThird:`The controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims.`,
        privacyELiFourth:` The data subject has objected to processing pursuant to Article 21(1) of the GDPR pending the verification whether the legitimate grounds of the controller override those of the data subject.`,
        privacyEPFirst: `If one of the aforementioned conditions is met, and a data subject wishes to request the restriction of the processing of personal data
                        stored by the privat person, he or she may at any time contact any employee of the controller. The employee of the privat person will arrange the restriction of the processing.`, 
        privacyFHeadline: "f) Right to data portability",
        privacyFPFirst: `Each data subject shall have the right granted by the European legislator, to receive the personal data concerning him or her,
                        which was provided to a controller, in a structured, commonly used and machine-readable format. He or she shall have the right to
                        transmit those data to another controller without hindrance from the controller to which the personal data have been provided, as long as
                        the processing is based on consent pursuant to point (a) of Article 6(1) of the GDPR or point (a) of Article 9(2) of the GDPR, or on a
                        contract pursuant to point (b) of Article 6(1) of the GDPR, and the processing is carried out by automated means, as long as the
                        processing is not necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.`,
        privacyFPSecond: `Furthermore, in exercising his or her right to data portability pursuant to Article 20(1) of the GDPR, the data subject shall have
                          the right to have personal data transmitted directly from one controller to another, where technically feasible and when doing so
                          does not adversely affect the rights and freedoms of others.`,
        privacyFPThird: `In order to assert the right to data portability, the data subject may at any time contact any employee of the privat person.`,
        privacyGHeadline: "g) Right to object",
        privacyGPFirst: `Each data subject shall have the right granted by the European legislator to object, on grounds relating to his or her particular
                        situation, at any time, to processing of personal data concerning him or her, which is based on point (e) or (f) of Article 6(1) of
                        the GDPR. This also applies to profiling based on these provisions.`,
        privacyGPSecond: `The privat person shall no longer process the personal data in the event of the objection, unless we can demonstrate compelling
                          legitimate grounds for the processing which override the interests, rights and freedoms of the data subject, or for the establishment, exercise or defence of legal claims.`,
        privacyGPThird: `If the privat person processes personal data for direct marketing purposes, the data subject shall have the right to object at any
                        time to processing of personal data concerning him or her for such marketing. This applies to profiling to the extent that it is
                        related to such direct marketing. If the data subject objects to the privat person to the processing for direct marketing purposes, the
                        privat person will no longer process the personal data for these purposes.`,
        privacyGPFourth: `In addition, the data subject has the right, on grounds relating to his or her particular situation, to object to processing of personal
                          data concerning him or her by the privat person for scientific or historical research purposes, or for statistical purposes pursuant
                          to Article 89(1) of the GDPR, unless the processing is necessary for the performance of a task carried out for reasons of public interest.`,
        privacyGPFifth: `In order to exercise the right to object, the data subject may contact any employee of the privat person. In addition, the data
                        subject is free in the context of the use of information society services, and notwithstanding Directive 2002/58/EC, to use his or
                        her right to object by automated means using technical specifications.`,
        privacyHHeadline: "h) Automated individual decision-making, including profiling",
        privacyHPFirst: `Each data subject shall have the right granted by the European legislator not to be subject to a decision based solely on automated
                	      processing, including profiling, which produces legal effects concerning him or her, or similarly significantly affects him or
                        her, as long as the decision (1) is not is necessary for entering into, or the performance of, a contract between the data subject and
                        a data controller, or (2) is not authorised by Union or Member State law to which the controller is subject and which also lays down
                        suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, or (3) is not based on the data subject's explicit consent.`,
        privacyHPSecond: `If the decision (1) is necessary for entering into, or the performance of, a contract between the data subject and a data
                          controller, or (2) it is based on the data subject's explicit consent, the privat person shall implement suitable measures to
                          safeguard the data subject's rights and freedoms and legitimate interests, at least the right to obtain human intervention on the
                          part of the controller, to express his or her point of view and contest the decision.`,
        privacyHPThird: `If the data subject wishes to exercise the rights concerning automated individual decision-making, he or she may, at any time, contact any employee of the privat person.`,
        privacyIHeadline: "i) Right to withdraw data protection consent",
        privacyIPFirst: `Each data subject shall have the right granted by the European legislator to withdraw his or her consent to processing of his or her personal data at any time.`,
        privacyIPSecond: `  If the data subject wishes to exercise the right to withdraw the consent, he or she may, at any time, contact any employee of the privat person.`,
      },
      privacyDataProtection:{
        privacyHeadline: "7. Data protection provisions about the application and use of LinkedIn",
        privacyFirstText: `The controller has integrated components of the LinkedIn Corporation on this website. LinkedIn is a web-based social network that enables users
                          with existing business contacts to connect and to make new business contacts. Over 400 million registered people in more than 200 countries
                          use LinkedIn. Thus, LinkedIn is currently the largest platform for business contacts and one of the most visited websites in the world.`,
        privacySecondText: `The operating company of LinkedIn is LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, UNITED STATES. For privacy matters
                            outside of the UNITED STATES LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, is responsible.`,
        privacyThirdText: `With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which a LinkedIn component
                          (LinkedIn plug-in) was integrated, the Internet browser on the information technology system of the data subject is automatically
                          prompted to the download of a display of the corresponding LinkedIn component of LinkedIn. Further information about the LinkedIn plug-in
                          may be accessed under https://developer.linkedin.com/plugins. During the course of this technical procedure, LinkedIn gains knowledge of what
                          specific sub-page of our website was visited by the data subject.`,
        privacyFourthText: `If the data subject is logged in at the same time on LinkedIn, LinkedIn detects with every call-up to our website by the data subject—and for
                            the entire duration of their stay on our Internet site—which specific sub-page of our Internet page was visited by the data subject. This
                            information is collected through the LinkedIn component and associated with the respective LinkedIn account of the data subject. If the data
                            subject clicks on one of the LinkedIn buttons integrated on our website, then LinkedIn assigns this information to the personal LinkedIn user
                            account of the data subject and stores the personal data.`,
        privacyFifthText: `LinkedIn receives information via the LinkedIn component that the data subject has visited our website, provided that the data subject is
                          logged in at LinkedIn at the time of the call-up to our website. This occurs regardless of whether the person clicks on the LinkedIn button or
                          not. If such a transmission of information to LinkedIn is not desirable for the data subject, then he or she may prevent this by logging off
                          from their LinkedIn account before a call-up to our website is made.`,
        privacySixthText: `LinkedIn provides under https://www.linkedin.com/psettings/guest-controls the possibility to unsubscribe from e-mail messages, SMS messages and targeted ads, as well
                          as the ability to manage ad settings. LinkedIn also uses affiliates such as Eire, Google Analytics, BlueKai, DoubleClick, Nielsen, Comscore,
                          Eloqua, and Lotame. The setting of such cookies may be denied under https://www.linkedin.com/legal/cookie-policy. The applicable privacy
                          policy for LinkedIn is available under https://www.linkedin.com/legal/privacy-policy. The LinkedIn Cookie Policy is available under https://www.linkedin.com/legal/cookie-policy.`,
      },
      privacyLegal:{
        privacyHeadline: "8. Legal basis for the processing",
        privacyFirstText: `Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent for a specific processing
                          purpose. If the processing of personal data is necessary for the performance of a contract to which the data subject is party, as is the
                          case, for example, when processing operations are necessary for the supply of goods or to provide any other service, the processing is based
                          on Article 6(1) lit. b GDPR. The same applies to such processing operations which are necessary for carrying out pre-contractual
                          measures, for example in the case of inquiries concerning our products or services. Is our company subject to a legal obligation by which
                          processing of personal data is required, such as for the fulfillment of tax obligations, the processing is based on Art. 6(1) lit. c GDPR. In
                          rare cases, the processing of personal data may be necessary to protect the vital interests of the data subject or of another natural person.
                          This would be the case, for example, if a visitor were injured in our company and his name, age, health insurance data or other vital
                          information would have to be passed on to a doctor, hospital or other third party. Then the processing would be based on Art. 6(1) lit. d
                          GDPR. Finally, processing operations could be based on Article 6(1) lit. f GDPR. This legal basis is used for processing operations which are not
                          covered by any of the abovementioned legal grounds, if processing is necessary for the purposes of the legitimate interests pursued by our
                          company or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject
                          which require protection of personal data. Such processing operation are particularly permissible because they have been specifically
                          mentioned by the European legislator. He considered that a legitimate interest could be assumed if the data subject is a client of the controller (Recital 47 Sentence 2 GDPR).`,
      },
      privacyLegitimate:{
        privacyHeadline: " 9. The legitimate interests pursued by the controller or by a third party",
        privacyFirstText: `Where the processing of personal data is based on Article 6(1) lit. f GDPR our legitimate interest is to carry out our business in favor of
                          the well-being of all our employees and the shareholders.`
      },
      privacyDataStored:{
        privacyHeadline: "10. Period for which the personal data will be stored",
        privacyFirstText: `The criteria used to determine the period of storage of personal data is the respective statutory retention period. After expiration of that
                          period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfillment of the contract or the initiation of a contract.`
      },
      privacySuchData:{
        privacyHeadline: `11. Provision of personal data as statutory or contractual requirement; Requirement necessary to enter into a contract; Obligation of the data
                          subject to provide the personal data; possible consequences of failure to provide such data`,
        privacyFirstText: `We clarify that the provision of personal data is partly required by law (e.g. tax regulations) or can also result from contractual provisions
                          (e.g. information on the contractual partner). Sometimes it may be necessary to conclude a contract that the data subject provides us with
                          personal data, which must subsequently be processed by us. The data subject is, for example, obliged to provide us with personal data when
                          our company signs a contract with him or her. The non-provision of the personal data would have the consequence that the contract with the data
                          subject could not be concluded. Before personal data is provided by the data subject, the data subject must contact any employee. The employee
                          clarifies to the data subject whether the provision of the personal data is required by law or contract or is necessary for the conclusion of the
                          contract, whether there is an obligation to provide the personal data and the consequences of non-provision of the personal data.`
      },
      privacyAutomatedDecision:{
        privacyHeadline: "12. Existence of automated decision-making",
        privacyFirstText: `As a responsible company, we do not use automatic decision-making or profiling.`,
      },
      privacyInfoLink:{
        firstText: "Developed by the specialists for",
        firstLink: "LegalTech",
        secondText: "at Willing & Able that also developed the system for",
        secondLink: "dpo training",
        thirdText: ". The legal texts contained in our privacy policy generator have been provided and published by",
        fourthText: "from the German Association for Data Protection and",
        fifthText: "from WBS law."
      },
      imprint:{
        imprintHeadline: "Imprint",
        contactHeadline: "Contact",
        phoneText: "Phone"
      },
      skillSetTech:{
        skillSetText: "I have a special interest in learning"
      }
    },
    de: TRANSLATIONS_DE
  };
  
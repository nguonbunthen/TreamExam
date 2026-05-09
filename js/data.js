// ==========================================================================
// ឃ្លាំងសំណួរសម្រាប់ក្រសួងអប់រំ យុវជន និងកីឡា
// ==========================================================================

// --- ផ្នែកទី១៖ វិញ្ញាសា វប្បធម៌ទូទៅ ---
const eduCultureQuestions = [
  /*
  {
    text: "សំណួររបស់អ្នកនៅទីនេះ?",
    options: ["ជម្រើស ក", "ជម្រើស ខ", "ជម្រើស គ", "ជម្រើស ឃ"],
    tags: ["culture", "set-1"],
    answer: 0, // 0=ក, 1=ខ, 2=គ, 3=ឃ
  },
  */
];

// --- ផ្នែកទី២៖ វិញ្ញាសា ភាសាបរទេស ---
const eduLanguageQuestions = [
  {
    text: "By the time the principal arrived the students _______ the classroom.",
    options: [
      "had already cleaned",
      "have already cleaned",
      "already cleaned",
      "are cleaning",
    ],
    tags: ["language", "english", "set-1"],
    answer: 0,
  },
  {
    text: "If I _______ you I would apply for the scholarship to study abroad.",
    options: ["am", "was", "were", "have been"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "The new library _______ by the Minister of Education next week.",
    options: ["will open", "is opening", "will be opened", "opened"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "Neither the teacher nor the students _______ happy with the new schedule.",
    options: ["is", "are", "has", "was"],
    tags: ["language", "english", "set-1"],
    answer: 1,
  },
  {
    text: "We are really looking forward _______ you at the seminar tomorrow.",
    options: ["to see", "seeing", "to seeing", "see"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "The woman _______ daughter won the spelling bee contest is an English teacher.",
    options: ["who", "whom", "whose", "which"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "The teacher asked the student _______ he was late for class.",
    options: ["that why", "why", "the reason", "because"],
    tags: ["language", "english", "set-1"],
    answer: 1,
  },
  {
    text: "You had better _______ an umbrella. It looks like it's going to rain.",
    options: ["take", "taking", "to take", "taken"],
    tags: ["language", "english", "set-1"],
    answer: 0,
  },
  {
    text: "_______ the heavy rain all the teachers came to the meeting on time.",
    options: ["Although", "Despite", "In spite", "Even though"],
    tags: ["language", "english", "set-1"],
    answer: 1,
  },
  {
    text: "Hardly _______ the classroom when the bell rang.",
    options: ["I had entered", "had I entered", "I entered", "did I entered"],
    tags: ["language", "english", "set-1"],
    answer: 1,
  },
  {
    text: "My grandfather _______ walk to school when he was a young boy.",
    options: ["is used to", "gets used to", "used to", "uses to"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "It is high time you _______ taking your studies more seriously.",
    options: ["start", "started", "to start", "starting"],
    tags: ["language", "english", "set-1"],
    answer: 1,
  },
  {
    text: "I will call you as soon as I _______ the test results.",
    options: ["will get", "got", "get", "getting"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "The headmaster had the computer technician _______ the network in the lab.",
    options: ["to fix", "fixed", "fixing", "fix"],
    tags: ["language", "english", "set-1"],
    answer: 3,
  },
  {
    text: "Not only _______ well but she also sings beautifully.",
    options: ["does she teach", "she teaches", "she does teach", "teaches she"],
    tags: ["language", "english", "set-1"],
    answer: 0,
  },
  {
    text: "You don't know the answer to this physics problem _______?",
    options: ["do you", "don't you", "are you", "aren't you"],
    tags: ["language", "english", "set-1"],
    answer: 0,
  },
  {
    text: "The more you read _______ you will become.",
    options: ["the smartest", "smarter", "the smarter", "more smart"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "Many students are interested _______ learning about artificial intelligence.",
    options: ["on", "in", "at", "about"],
    tags: ["language", "english", "set-1"],
    answer: 1,
  },
  {
    text: "She gave me _______ very useful advice about classroom management.",
    options: ["a", "an", "some", "the"],
    tags: ["language", "english", "set-1"],
    answer: 2,
  },
  {
    text: "Would you mind _______ the door? It's a bit noisy outside.",
    options: ["close", "to close", "closed", "closing"],
    tags: ["language", "english", "set-1"],
    answer: 3,
  },
  {
    text: "The government plans to implement a new educational policy next year. (Synonym)",
    options: ["cancel", "delay", "execute", "ignore"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "Mathematics and Khmer literature are compulsory subjects in high school. (Synonym)",
    options: ["optional", "mandatory", "difficult", "boring"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Teachers need to evaluate their students' progress regularly. (Synonym)",
    options: ["assess", "guess", "ignore", "confuse"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "He is a very diligent student who always does his homework. (Synonym)",
    options: ["lazy", "hardworking", "careless", "talkative"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Who is going to _______ the children while their parents are at work?",
    options: ["look for", "look after", "look up", "look at"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "The sports day was _______ because of the bad weather.",
    options: ["put on", "put off", "put out", "put up"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Have you _______ your mind about which university to attend?",
    options: ["made up", "done up", "kept up", "taken up"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "The instructions given by the principal were very explicit. (Antonym)",
    options: ["clear", "specific", "vague", "long"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "Despite the challenges she remains optimistic about her students' future. (Antonym)",
    options: ["positive", "pessimistic", "confident", "cheerful"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "A _______ teacher always starts and ends the class on time.",
    options: ["punctual", "flexible", "tolerant", "strict"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "The school _______ includes all the subjects and topics taught to students.",
    options: ["timetable", "curriculum", "facility", "regulation"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "_______ is the method and practice of teaching especially as an academic subject.",
    options: ["Psychology", "Philosophy", "Pedagogy", "Sociology"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "Please make sure you _______ attention to the teacher during the experiment.",
    options: ["make", "pay", "do", "give"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Don't worry if you _______ a mistake; we are here to learn.",
    options: ["do", "make", "take", "have"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Hard work and dedication are the keys to _______.",
    options: ["succeed", "successful", "successfully", "success"],
    tags: ["language", "english", "set-2"],
    answer: 3,
  },
  {
    text: "Student: I'm sorry for being late teacher. - Teacher: _______ but please try to be on time next time.",
    options: [
      "You're welcome",
      "That's all right",
      "I don't care",
      "See you later",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Student: _______ - Teacher: Yes you may. Be quick.",
    options: [
      "Can you help me?",
      "May I go out please?",
      "Do you understand?",
      "What is the time?",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Teacher A: I have a terrible headache. - Teacher B: You _______ take some rest and drink warm water.",
    options: ["should", "would", "might", "dare"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "Colleague: These books are too heavy for me. - You: _______",
    options: [
      "Let me help you carry them.",
      "You should go to the gym.",
      "That is your problem.",
      "Good luck with that.",
    ],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "Principal: I think we should integrate more technology into our lessons. - Teacher: _______. It will make learning more engaging.",
    options: [
      "I completely disagree",
      "I couldn't agree more",
      "That's a bad idea",
      "I'm not sure about that",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Teacher A: We should give students more homework on weekends. - Teacher B: _______. They need time to rest.",
    options: [
      "You are absolutely right",
      "I agree with you",
      "I'm afraid I have to disagree",
      "Sounds good to me",
    ],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "Visitor: Excuse me could you tell me where the science lab is? - Student: _______",
    options: [
      "No I don't know you.",
      "It's on the second floor.",
      "Why are you asking me?",
      "I like science.",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "Student: Thank you very much for explaining the lesson again. - Teacher: _______",
    options: ["Never mind.", "You're welcome.", "Same to you.", "Yes please."],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "New Colleague: How do you do? I'm the new math teacher. - You: _______",
    options: [
      "I am doing well.",
      "How do you do? Nice to meet you.",
      "I am fine thank you.",
      "What are you doing?",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "Teacher: I just passed my Master's degree defense! - Friend: _______",
    options: [
      "Good luck!",
      "Congratulations!",
      "Thank you!",
      "Happy birthday!",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "Teacher in class: Please open your books _______ page 45.",
    options: ["in", "on", "at", "to"],
    tags: ["language", "english", "set-3"],
    answer: 3,
  },
  {
    text: "Teacher in class: _______! The test has already started.",
    options: ["Speak up", "Be quiet please", "Listen to music", "Look outside"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "Teacher: _______ about the new grading system? - Student: I think it is fairer.",
    options: [
      "What do you think",
      "How do you like",
      "Why do you know",
      "Do you agree",
    ],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "Teacher A: Would you like to join us for lunch? - Teacher B: _______ but I have to finish marking papers.",
    options: ["Yes I would", "I'd love to", "No I wouldn't", "Not at all"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "Phone call: Hello could I speak to Mr. Sok please? - Receiver: _______ I will put you through.",
    options: [
      "Who are you?",
      "Hold on please.",
      "He is not here.",
      "Call back later.",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "While the physics teacher _______ on the whiteboard, the principal walked into the room.",
    options: ["wrote", "was writing", "is writing", "has written"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Students are responsible _______ their own learning outside the classroom.",
    options: ["to", "with", "for", "about"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "If the students study hard, they _______ the final exam easily.",
    options: ["pass", "passed", "would pass", "will pass"],
    tags: ["language", "english", "set-2"],
    answer: 3,
  },
  {
    text: "The school laboratory _______ every evening by the cleaning staff.",
    options: ["is cleaned", "cleans", "cleaned", "is cleaning"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "You _______ use your mobile phone during the national examination.",
    options: ["shouldn't have", "don't have to", "must not", "might not"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "I suggest _______ a group discussion to solve this complex math problem.",
    options: ["to organize", "organize", "organized", "organizing"],
    tags: ["language", "english", "set-2"],
    answer: 3,
  },
  {
    text: "The high school _______ I teach is located in the center of the city.",
    options: ["which", "when", "where", "who"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "_______ Earth revolves around _______ Sun.",
    options: ["A / a", "The / the", "An / the", "No article / no article"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "_______ it was raining heavily, the students still came to class on time.",
    options: ["Because", "Therefore", "Although", "Despite"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "I _______ as a science teacher for more than five years.",
    options: ["have worked", "worked", "am working", "work"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "This physics problem is _______ than the one we did yesterday.",
    options: [
      "difficult",
      "more difficult",
      "most difficult",
      "the more difficult",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "The teacher made the students _______ the exercise again because of too many mistakes.",
    options: ["to do", "done", "doing", "do"],
    tags: ["language", "english", "set-2"],
    answer: 3,
  },
  {
    text: "Let's start the lesson now, _______?",
    options: ["will we", "don't we", "shall we", "aren't we"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "The principal asked me _______ I enjoyed teaching at this school.",
    options: ["that", "if", "what", "which"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "There are _______ students in the library today because it is a public holiday.",
    options: ["few", "a little", "much", "any"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "Everyone in the classroom _______ required to submit the assignment by Friday.",
    options: ["are", "is", "have", "were"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "The bookshelf is _______ high for the young students to reach.",
    options: ["enough", "very", "much", "too"],
    tags: ["language", "english", "set-2"],
    answer: 3,
  },
  {
    text: "As a teacher, I _______ waking up early to prepare my lesson plans.",
    options: ["used to", "am used to", "use to", "gets used to"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "The academic year in Cambodia usually starts _______ November.",
    options: ["in", "on", "at", "from"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "You can either do your homework now _______ do it after dinner.",
    options: ["nor", "and", "or", "but"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "The teacher's explanation was very lucid, so all students understood it quickly. (Choose the synonym)",
    options: ["confusing", "long", "clear", "boring"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "Wearing a uniform is mandatory for all students in public schools. (Choose the antonym)",
    options: ["required", "optional", "strict", "essential"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "The weekly staff meeting was _______ because the director was sick.",
    options: ["called off", "called up", "called in", "called out"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "Quality education is crucial for the _______ of our country.",
    options: ["develop", "developed", "developing", "development"],
    tags: ["language", "english", "set-2"],
    answer: 3,
  },
  {
    text: "To assess students' learning progress means to _______ them.",
    options: ["ignore", "evaluate", "punish", "reward"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "The teacher gave the students an _______ to finish by next Monday.",
    options: ["assignment", "assign", "assigning", "assigned"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "She is a very competent teacher who knows her subject perfectly. (Choose the synonym)",
    options: ["lazy", "capable", "careless", "inexperienced"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Students should _______ notes during the lecture to remember key points.",
    options: ["make", "give", "do", "take"],
    tags: ["language", "english", "set-2"],
    answer: 3,
  },
  {
    text: "Please _______ your test papers before you leave the classroom.",
    options: ["hand out", "hand in", "give up", "take off"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "Good teachers usually have a lot of _______ when dealing with slow learners.",
    options: ["patient", "patiently", "patience", "patients"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "The _______ of the high school will give a welcome speech tomorrow morning.",
    options: ["principal", "principle", "prince", "princess"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "It is important for students to _______ attention when the teacher is demonstrating an experiment.",
    options: ["pay", "keep", "make", "catch"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "Don't give _______! You can definitely solve this challenging math problem.",
    options: ["in", "out", "up", "away"],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: "The new teaching method is very beneficial for students. (Choose the antonym)",
    options: ["helpful", "harmful", "useful", "effective"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: "We need to buy some new _______ for the whiteboards; the old ones are drying out.",
    options: ["chalks", "markers", "erasers", "rulers"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: 'Student: "I didn\'t hear you clearly. Could you repeat that, please?" - Teacher: "_______"',
    options: [
      "No, I am busy.",
      "Sure, I said open your books to page 10.",
      "Why didn't you listen?",
      "You are deaf.",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: 'Teacher A: "How was your weekend?" - Teacher B: "_______"',
    options: [
      "I will go to the market.",
      "It was great, thanks. I relaxed at home.",
      "Same to you.",
      "You're welcome.",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: 'Teacher: "_______?" - Student: "It\'s P-H-Y-S-I-C-S."',
    options: [
      "What is this word",
      "Can you read this word",
      "How do you spell that word",
      "What does this mean",
    ],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: 'Teacher: "Good morning, class. _______?" - Students: "We are fine, thank you. And you?"',
    options: [
      "What are you doing",
      "Where are you going",
      "How are you today",
      "Who are you",
    ],
    tags: ["language", "english", "set-2"],
    answer: 2,
  },
  {
    text: 'Teacher: "Who is _______ today?" - Student: "Dara and Sokha are not here."',
    options: ["present", "absent", "late", "going"],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: 'Student: "_______ I erase the whiteboard for you, teacher?" - Teacher: "Yes, please. Thank you."',
    options: ["May", "Do", "Are", "Have"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: 'Student: "I got a bad score on my physics test. I\'m so disappointed." - Teacher: "_______! Just study harder for the next one."',
    options: [
      "Congratulations",
      "Don't give up",
      "Well done",
      "That's a good idea",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: 'Teacher A: "Teaching is a very rewarding profession." - Teacher B: "_______! Seeing students succeed is the best feeling."',
    options: [
      "I completely agree",
      "I don't think so",
      "You are wrong",
      "Not at all",
    ],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: 'Colleague: "Have a nice weekend!" - You: "Thanks! _______"',
    options: ["Yes, I do.", "You too!", "Me neither.", "I agree."],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: 'Student: "I\'m sorry, I forgot to bring my textbook today." - Teacher: "_______, but please try to remember it next time."',
    options: ["That's alright", "Get out", "You're welcome", "Good luck"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: 'Teacher A: "What do you think of the new science curriculum?" - Teacher B: "_______, it\'s very practical and engaging for students."',
    options: ["In my opinion", "I don't know", "As long as", "However"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: 'Teacher A: "_______, could I ask a quick question about the schedule?" - Principal: "Of course, go ahead."',
    options: [
      "Sorry for late",
      "Excuse me for interrupting",
      "Listen to me",
      "Hello there",
    ],
    tags: ["language", "english", "set-2"],
    answer: 1,
  },
  {
    text: 'Teacher A: "The students look very tired after the exam." - Teacher B: "_______ give them a 10-minute break?"',
    options: ["Why don't we", "Let's not", "How about", "Do we"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: 'Teacher A: "Thanks for covering my class while I was at the meeting yesterday." - Teacher B: "_______. Anytime!"',
    options: ["No problem", "I am sorry", "Here you are", "Exactly"],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: 'Teacher: "That\'s all for today\'s lesson. _______!" - Students: "Goodbye, teacher."',
    options: [
      "See you tomorrow",
      "Good night",
      "Nice to meet you",
      "Welcome back",
    ],
    tags: ["language", "english", "set-2"],
    answer: 0,
  },
  {
    text: "The new science laboratory _______ by the Ministry of Education next month.",
    options: ["will equip", "will be equipped", "is equipping", "equips"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "If she _______ about the scholarship, she would have applied for it.",
    options: ["knew", "knows", "had known", "has known"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "The student _______ notebook I borrowed is very smart.",
    options: ["who", "whom", "whose", "which"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "I _______ for this pedagogical exam since January.",
    options: ["have been preparing", "prepared", "prepare", "am preparing"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "The principal avoided _______ directly to the press about the incident.",
    options: ["to speak", "speaking", "speak", "spoke"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "Congratulations _______ passing your final teaching practicum!",
    options: ["in", "at", "on", "for"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "Let's review the physics formula again, _______?",
    options: ["shall we", "will we", "don't we", "aren't we"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "The headmaster told the students _______ their mobile phones during the exam.",
    options: ["not use", "to not use", "not using", "not to use"],
    tags: ["language", "english", "set-3"],
    answer: 3,
  },
  {
    text: "_______ the difficulty of the physics test, most of the students passed.",
    options: ["Although", "Despite", "Even though", "Because"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "This is the _______ interesting educational book I have ever read.",
    options: ["more", "most", "much", "very"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "A number of students _______ absent today due to the heavy rain.",
    options: ["is", "are", "has been", "was"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "You _______ smoke inside the school campus. It's strictly prohibited.",
    options: ["needn't", "don't have to", "must not", "shouldn't have"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "I wish I _______ speak English more fluently to teach bilingual classes.",
    options: ["can", "will", "could", "am able to"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "The box of textbooks is _______ heavy for the little boy to carry.",
    options: ["too", "enough", "very", "much"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "Neither the teacher nor the students _______ satisfied with the new timetable.",
    options: ["is", "are", "has", "was"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "The physics teacher had the students _______ an essay about Isaac Newton.",
    options: ["to write", "writing", "wrote", "write"],
    tags: ["language", "english", "set-3"],
    answer: 3,
  },
  {
    text: "It was _______ a difficult test that many students failed.",
    options: ["so", "very", "too", "such"],
    tags: ["language", "english", "set-3"],
    answer: 3,
  },
  {
    text: "I _______ live in the countryside when I was a primary school student.",
    options: ["used to", "am used to", "get used to", "was used to"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "The earlier you start revising your lessons, _______ you will perform in the exam.",
    options: ["the best", "the better", "better", "good"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "We will start the meeting as soon as the principal _______.",
    options: ["will arrive", "arrived", "arrives", "arriving"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "The way a teacher organizes and controls the classroom is called classroom _______.",
    options: ["behavior", "management", "arrangement", "strictness"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "It is crucial to read the exam instructions carefully. (Choose the synonym)",
    options: ["optional", "unnecessary", "important", "difficult"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "A good teacher should always be punctual. (Choose the antonym)",
    options: ["late", "early", "strict", "friendly"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "You should always _______ your homework before coming to class.",
    options: ["make", "have", "take", "do"],
    tags: ["language", "english", "set-3"],
    answer: 3,
  },
  {
    text: "Active learning helps students _______ information better than just listening.",
    options: ["ignore", "absorb", "reject", "forget"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "Teachers must evaluate their students' understanding regularly. (Choose the synonym)",
    options: ["assess", "guess", "confuse", "support"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "I can't _______ this math problem; it's too complicated.",
    options: ["figure out", "look after", "put off", "take off"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "The subjects comprising a course of study in a school or college are called the _______.",
    options: ["syllabus", "timetable", "curriculum", "extracurricular"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "The successful _______ of the school project will take at least two months.",
    options: ["complete", "completed", "completely", "completion"],
    tags: ["language", "english", "set-3"],
    answer: 3,
  },
  {
    text: "A student who asks many questions and wants to learn more is very _______.",
    options: ["lazy", "indifferent", "curious", "stubborn"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "She studied very hard and passed the exam with flying _______.",
    options: ["colors", "grades", "marks", "points"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: "I'm sorry, I took your dictionary by _______. I thought it was mine.",
    options: ["accident", "mistake", "chance", "purpose"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "A room or building equipped for scientific experiments or research is a _______.",
    options: ["library", "gymnasium", "cafeteria", "laboratory"],
    tags: ["language", "english", "set-3"],
    answer: 3,
  },
  {
    text: "The person who is in charge of a school is the _______.",
    options: ["inspector", "janitor", "principal", "counselor"],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: "Please _______ attention to the whiteboard while I explain this formula.",
    options: ["pay", "make", "take", "give"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: 'Student: "Can I borrow your red pen, please?" - Teacher: "_______"',
    options: [
      "No, I don't like you.",
      "Sure, here you are.",
      "Yes, I can.",
      "You're welcome.",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: 'Teacher: "Do you have any questions about this lesson?" - Student: "_______"',
    options: [
      "No, sir. Everything is clear.",
      "Yes, I do understand.",
      "It doesn't matter.",
      "Thank you very much.",
    ],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: 'Colleague A: "I\'ve just been promoted to Head of the Science Department!" - Colleague B: "_______"',
    options: [
      "Good luck!",
      "I am sorry to hear that.",
      "Congratulations!",
      "How do you do?",
    ],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: 'Teacher: "_______" - Student: "It\'s exactly 10 o\'clock."',
    options: [
      "How much time do you have?",
      "What is the time?",
      "When is the class?",
      "Do you have a watch?",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: 'Student: "I\'m so sorry I stepped on your foot, teacher." - Teacher: "_______"',
    options: [
      "You are bad.",
      "That's alright. Don't worry.",
      "Yes, please.",
      "I don't agree.",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: 'Colleague: "I have a terrible sore throat today." - You: "_______"',
    options: [
      "You should drink some warm water and rest your voice.",
      "You must speak louder.",
      "Congratulations on your sore throat.",
      "I am fine, thank you.",
    ],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: 'Principal: "_______ about the new textbook we are using this year?" - Teacher: "I think it is very comprehensive and easy for students to follow."',
    options: [
      "What do you think",
      "Do you agree",
      "How do you do",
      "Why do you know",
    ],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: 'Teacher A: "I think we should use more visual aids in our teaching." - Teacher B: "_______. It definitely helps students learn faster."',
    options: [
      "I am afraid I disagree",
      "That's a terrible idea",
      "I couldn't agree more",
      "You shouldn't do that",
    ],
    tags: ["language", "english", "set-3"],
    answer: 2,
  },
  {
    text: 'Teacher A: "Let\'s give them a surprise test today." - Teacher B: "_______. They haven\'t had time to review the previous chapter."',
    options: [
      "That sounds great",
      "I'm afraid I don't agree",
      "You are absolutely right",
      "I entirely agree",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: 'Teacher: "Good morning class. Let\'s _______." - Students: "Yes, teacher. We are ready."',
    options: ["get started", "go home", "make noise", "sleep now"],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: 'Teacher: "Is everyone _______ today?" - Monitor: "Yes, teacher. Nobody is absent."',
    options: ["late", "present", "lazy", "writing"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: 'Student: "I can\'t solve this equation. It\'s too hard for me." - Teacher: "_______! Let\'s look at the formula together one more time."',
    options: [
      "Keep trying, you can do it",
      "You should give up",
      "You are not smart",
      "Just copy from your friend",
    ],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: 'Teacher: "Please _______ your hand if you know the answer."',
    options: ["rise", "raise", "lift", "point"],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: 'Teacher: "The bell has rung. That\'s all for today. You may _______."',
    options: [
      "pack up your things",
      "open your books",
      "start writing",
      "ask me questions",
    ],
    tags: ["language", "english", "set-3"],
    answer: 0,
  },
  {
    text: 'Student: "Happy Teacher\'s Day! Thank you for everything you do for us." - Teacher: "_______"',
    options: [
      "Same to you.",
      "Thank you so much. That's very sweet of you.",
      "Never mind.",
      "I am sorry.",
    ],
    tags: ["language", "english", "set-3"],
    answer: 1,
  },
  {
    text: "By next month, Mr. Sok _______ teaching at this high school for exactly ten years.",
    options: ["will have been", "has been", "will be", "is"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: "If the student _______ the instructions carefully, he wouldn't have made that mistake.",
    options: ["reads", "read", "had read", "has read"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "The new pedagogical framework, _______ was introduced last year, is very effective.",
    options: ["that", "which", "who", "whose"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "I would rather you _______ your homework right now instead of playing games.",
    options: ["do", "did", "doing", "to do"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "The principal asked the teacher what time the meeting _______.",
    options: ["starts", "started", "has started", "will start"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "Students are highly encouraged _______ actively in group discussions.",
    options: ["participate", "to participate", "participating", "participated"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "Not only _______ an excellent physics teacher, but she is also a great counselor.",
    options: ["she is", "is she", "does she", "she does"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "After a few months, the new students finally got used to _______ up early for class.",
    options: ["wake", "woke", "waking", "woken"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "Our classroom needs _______ before the school inspector arrives.",
    options: ["clean", "to clean", "cleaned", "cleaning"],
    tags: ["language", "english", "set-4"],
    answer: 3,
  },
  {
    text: "Neither the students nor the teacher _______ aware of the sudden schedule change.",
    options: ["is", "are", "were", "was"],
    tags: ["language", "english", "set-4"],
    answer: 3,
  },
  {
    text: "You will not pass the final examination _______ you study harder.",
    options: ["if", "unless", "provided that", "as long as"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "She had her laptop _______ by the school's IT technician yesterday.",
    options: ["repair", "to repair", "repairing", "repaired"],
    tags: ["language", "english", "set-4"],
    answer: 3,
  },
  {
    text: "The _______ you practice speaking English, the more fluent you will become.",
    options: ["much", "more", "most", "many"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "_______ of the students in the class were able to solve the complex equation.",
    options: ["Most", "Almost", "The most", "Mostly"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: "We have been waiting for the principal's announcement _______ 8 o'clock this morning.",
    options: ["for", "since", "in", "at"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "Did you remember _______ the laboratory door when you left?",
    options: ["lock", "to lock", "locking", "locked"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "The teacher made the whole class _______ the essay again.",
    options: ["rewrite", "to rewrite", "rewriting", "rewrote"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: "It's high time the educational system _______ updated to meet modern standards.",
    options: ["is", "has been", "was", "will be"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "I wish I _______ the answer to this physics question right now.",
    options: ["know", "knew", "have known", "had known"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "We will begin the experiment as soon as everyone _______ the safety guidelines.",
    options: ["will understand", "understands", "understood", "understanding"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "Reading comprehension is a vital skill for all language learners. (Choose the synonym)",
    options: ["useless", "optional", "crucial", "boring"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "The students were asked to comprehend the main idea of the passage. (Choose the synonym)",
    options: ["understand", "ignore", "write", "memorize"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: "The school director decided to _______ the meeting until next Friday due to the storm.",
    options: ["call off", "put off", "take off", "go off"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "A student tried to _______ an excuse for being late, but the teacher knew he was lying.",
    options: ["make up", "do up", "keep up", "turn up"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: "The government is launching a campaign to eradicate _______ in rural areas.",
    options: ["literacy", "illiteracy", "literature", "literally"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "Someone who teaches at a university or college is typically called a _______.",
    options: ["principal", "pupil", "lecturer", "headmaster"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "The school library provides free _______ to a vast collection of digital books.",
    options: ["excess", "access", "assess", "accept"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "Because of her outstanding academic performance, she was awarded a _______.",
    options: ["tuition", "uniform", "punishment", "scholarship"],
    tags: ["language", "english", "set-4"],
    answer: 3,
  },
  {
    text: "Some students find it difficult to _______ on their studies when it's noisy.",
    options: ["concentrate", "memorize", "distract", "observe"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: "A short, informal test given to students to check their understanding is called a _______.",
    options: ["thesis", "dissertation", "quiz", "graduation"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "The teacher told the students to _______ the blanks with the correct prepositions.",
    options: ["fill out", "fill up", "fill in", "fill down"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "Teaching requires not only deep subject knowledge but also great _______.",
    options: ["patient", "patience", "patiently", "patients"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "His behavior in class was totally unacceptable. (Choose the antonym)",
    options: ["inappropriate", "proper", "rude", "terrible"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "The process of giving students a score or grade based on their performance is called _______.",
    options: ["assignment", "assessment", "attendance", "absence"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: "Please review the _______ carefully before the final examination begins.",
    options: ["instructions", "instructors", "instruments", "institutions"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: 'Teacher A: "_______ about the new dress code for teachers?" - Teacher B: "I think it\'s very professional."',
    options: [
      "What do you think",
      "How do you do",
      "Are you sure",
      "Do you know",
    ],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: 'Teacher: "These boxes of textbooks are too heavy." - Student: "_______ carry them to the library for you, sir?"',
    options: ["Must I", "Shall I", "Would you", "Do I"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: 'Student: "I apologize for handing in my assignment late." - Teacher: "_______. But don\'t let it happen again."',
    options: [
      "You are welcome",
      "I don't think so",
      "That's alright",
      "Same to you",
    ],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: 'Guest Speaker: "How do you do? I\'m the new educational consultant." - You: "_______ Nice to meet you."',
    options: [
      "I am doing well.",
      "How do you do?",
      "What are you doing?",
      "I am fine, thanks.",
    ],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: 'Teacher A: "I believe incorporating technology into lessons makes learning more fun." - Teacher B: "_______! My students love interactive quizzes."',
    options: [
      "I couldn't agree more",
      "I am afraid I disagree",
      "That's entirely false",
      "You shouldn't say that",
    ],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: 'Student: "_______ I open the window, please? It\'s very hot in here." - Teacher: "Yes, go ahead."',
    options: ["Must", "Should", "May", "Would"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: 'Teacher A: "I have a terrible headache today." - Teacher B: "You _______ go to the clinic and get some rest."',
    options: ["ought", "should", "would", "dare"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: 'Teacher in class: "Please stop talking and _______ attention to the lesson!"',
    options: ["take", "make", "pay", "bring"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: 'Teacher in class: "Alright everyone, please _______ your books to page 56."',
    options: ["turn", "open in", "look", "switch"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: 'Teacher: "I just received my Master\'s degree in Physics!" - Colleague: "_______! That is wonderful news."',
    options: ["Good luck", "Thank you", "Congratulations", "Have a good trip"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: 'Colleague: "Have a great weekend and get some rest!" - You: "Thanks, _______!"',
    options: ["you too", "me too", "I agree", "yes please"],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: 'Student: "_______, may I ask a question regarding the formula?" - Teacher: "Of course, what is your question?"',
    options: ["Sorry for late", "Excuse me", "Look at me", "Hey teacher"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: 'Teacher: "I\'ve explained the concept twice. Do you _______ what I mean now?" - Student: "Yes, it is much clearer now."',
    options: ["look", "see", "watch", "hear"],
    tags: ["language", "english", "set-4"],
    answer: 1,
  },
  {
    text: 'Student: "I keep failing my mock exams. I feel so stressed." - Teacher: "_______! Keep practicing and you will eventually succeed."',
    options: [
      "Don't give up",
      "You should quit",
      "Stop studying",
      "I don't care",
    ],
    tags: ["language", "english", "set-4"],
    answer: 0,
  },
  {
    text: 'Student: "I didn\'t catch the last part of the instruction." - Teacher: "Would you like me to _______ it?"',
    options: ["review", "recall", "repeat", "remind"],
    tags: ["language", "english", "set-4"],
    answer: 2,
  },
  {
    text: "By the end of this academic year, I _______ at this school for five years.",
    options: [
      "will teach",
      "am teaching",
      "will have been teaching",
      "have taught",
    ],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: "If I _______ that the principal was visiting our class, I would have prepared a better lesson plan.",
    options: ["know", "knew", "have known", "had known"],
    tags: ["language", "english", "set-5"],
    answer: 3,
  },
  {
    text: "While the final exam papers _______, the power suddenly went out.",
    options: ["were grading", "graded", "were being graded", "are grading"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: "I deeply regret _______ you that the weekend training workshop has been canceled.",
    options: ["to inform", "informing", "informed", "inform"],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: "The biology teacher, _______ husband is a doctor, is taking a leave of absence next week.",
    options: ["who", "whom", "whose", "that"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: "The school board strongly recommended that the new curriculum _______ implemented immediately.",
    options: ["is", "be", "was", "to be"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "Nobody complained about the difficulty of the physics test, _______?",
    options: ["didn't they", "did they", "did he", "didn't nobody"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "Scarcely _______ the classroom when the students started asking questions.",
    options: [
      "the teacher had entered",
      "entered the teacher",
      "did the teacher enter",
      "had the teacher entered",
    ],
    tags: ["language", "english", "set-5"],
    answer: 3,
  },
  {
    text: "The exam was _______ difficult that over half the class failed.",
    options: ["such", "so", "too", "very"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "The headmaster had the janitor _______ all the windows in the laboratory.",
    options: ["clean", "to clean", "cleaning", "cleaned"],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: "We are not used to _______ classes so late in the afternoon.",
    options: ["have", "having", "had", "to have"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "_______ you mind if I borrowed your dictionary for a moment?",
    options: ["Do", "Would", "Should", "Could"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "I look forward to _______ from the Ministry of Education regarding my deployment.",
    options: ["hear", "hearing", "be hearing", "heard"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "Mr. Sokha is a very honest man. He is _______ honest teacher.",
    options: ["a", "an", "the", "no article"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "The _______ you explain the concept, the _______ the students will understand it.",
    options: [
      "clear / easy",
      "clearer / easily",
      "more clear / easier",
      "clearer / easier",
    ],
    tags: ["language", "english", "set-5"],
    answer: 3,
  },
  {
    text: "Attending the weekly staff meeting is compulsory for all teachers. (Choose the synonym)",
    options: ["voluntary", "optional", "mandatory", "unnecessary"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: "He is one of the most diligent students in my physics class. (Choose the antonym)",
    options: ["hardworking", "intelligent", "lazy", "active"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: "Activities done by students outside the normal academic curriculum are called _______ activities.",
    options: ["extracurricular", "intercultural", "superficial", "informal"],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: "A student who leaves school before graduating is called a school _______.",
    options: ["drop in", "drop out", "drop off", "drop down"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "The teacher asked the students to _______ their notebooks and copy the formula.",
    options: ["take off", "take in", "take out", "take after"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: "Teachers need to constantly _______ their knowledge to keep up with new scientific discoveries.",
    options: ["downgrade", "upgrade", "prevent", "ignore"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "Please _______ in mind that the final exam will cover everything we've learned this semester.",
    options: ["keep", "take", "bring", "make"],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: "To ensure fairness, the teacher graded the exams without knowing the students' names. She was very _______.",
    options: ["biased", "objective", "subjective", "emotional"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "The process of learning by memorizing rather than understanding is called _______ learning.",
    options: ["active", "rote", "deep", "practical"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "A good lesson plan should have clear and measurable _______.",
    options: ["objections", "obstacles", "objectives", "obligations"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: "She was having trouble keeping _______ with the rest of the class after being sick for a week.",
    options: ["up", "on", "out", "away"],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: "I need to _______ over my notes one more time before the test begins.",
    options: ["look", "see", "watch", "make"],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: "Many public schools in rural areas have a _______ of science teachers.",
    options: ["plenty", "shortage", "majority", "wealth"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "To evaluate a student's performance means to _______ it.",
    options: ["appreciate", "assess", "ignore", "celebrate"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: "If you don't know the meaning of this scientific term, you should look it _______ in the dictionary.",
    options: ["over", "after", "up", "down"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: 'Teacher: "I would like you to finish this assignment by tomorrow." - Student: "_______, teacher. I will bring it tomorrow morning."',
    options: ["Not at all", "Yes, sure", "You're welcome", "It doesn't matter"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Student: "May I go to the restroom, please?" - Teacher: "_______ But don\'t be too long."',
    options: [
      "No, you mustn't.",
      "Yes, you may.",
      "I don't care.",
      "You should stay.",
    ],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Colleague: "Could you please help me set up the projector?" - You: "_______ Let me just finish grading this paper."',
    options: [
      "I am busy forever.",
      "Of course. Give me a minute.",
      "Why should I?",
      "Do it yourself.",
    ],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Student: "I\'m sorry, I didn\'t catch that. Could you _______, please?" - Teacher: "Certainly. I said the deadline is next Friday."',
    options: [
      "say it again",
      "listen to me",
      "speak softly",
      "look at the board",
    ],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: 'Teacher A: "I think students learn best when they do practical experiments." - Teacher B: "_______! Theory alone is never enough."',
    options: [
      "I completely disagree",
      "That's a bad idea",
      "I couldn't agree more",
      "I am not sure",
    ],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: 'Teacher A: "Let\'s cancel the science fair this year." - Teacher B: "_______ Students really look forward to it."',
    options: [
      "That's a great idea!",
      "I'm afraid I don't agree.",
      "You are absolutely right.",
      "I completely agree with you.",
    ],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Principal: "Thank you for organizing the extra classes for the weak students." - Teacher: "_______ It\'s my responsibility."',
    options: ["Don't mention it.", "Yes, I know.", "You're wrong.", "I agree."],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: 'Teacher in class: "Alright everyone, please _______ your hands if you know the answer."',
    options: ["rise", "raise", "lift", "put"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Teacher in class: "Please put your pens down. Time is _______!"',
    options: ["out", "up", "off", "over"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Teacher: "Are there any questions before we move on to the next chapter?" - Student: "_______"',
    options: [
      "Yes, I have one question about the last formula.",
      "No, I am a student.",
      "Yes, it is a book.",
      "Good morning.",
    ],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: 'Teacher A: "You look extremely tired today." - Teacher B: "I am. I was up all night _______ exam papers."',
    options: ["reading", "looking", "marking", "watching"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: 'Teacher: "Who is absent today?" - Class Monitor: "_______, teacher. Everyone is here."',
    options: ["Somebody", "Nobody", "Anybody", "Everybody"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Teacher A: "How about _______ a short break? We\'ve been working for three hours." - Teacher B: "Good idea. Let\'s get some coffee."',
    options: ["take", "to take", "taking", "took"],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: 'Colleague: "I passed my teaching evaluation with an \'A\' grade!" - You: "_______! Your hard work really paid off."',
    options: [
      "Good luck",
      "Have a nice trip",
      "Congratulations",
      "Happy New Year",
    ],
    tags: ["language", "english", "set-5"],
    answer: 2,
  },
  {
    text: 'Teacher in class: "Work in _______ and discuss the questions on page 12."',
    options: ["pieces", "pairs", "parts", "packets"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Student: "I forgot my ruler. Can I use yours?" - Classmate: "_______ Here it is."',
    options: [
      "No way.",
      "Sure, go ahead.",
      "I don't know.",
      "Ask the teacher.",
    ],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Teacher: "That brings us to the end of today\'s lesson. _______!" - Students: "Thank you, teacher. Have a great weekend too!"',
    options: [
      "Welcome to class",
      "Have a great weekend",
      "Good night",
      "Please sit down",
    ],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Principal: "Excuse me for interrupting, but could I speak to you for a moment?" - Teacher: "_______ Let me just give the students a task to do."',
    options: ["Not right now.", "Of course.", "Go away.", "Why not?"],
    tags: ["language", "english", "set-5"],
    answer: 1,
  },
  {
    text: 'Teacher A: "Do you prefer teaching online or in a physical classroom?" - Teacher B: "_______ I find it much easier to interact with students face-to-face."',
    options: [
      "I prefer the physical classroom.",
      "I like neither of them.",
      "Both are terrible.",
      "I don't teach.",
    ],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: 'Teacher: "Teacher, how do you pronounce this word?" - Teacher: "It\'s pronounced as /fɪzɪks/. Now, you _______."',
    options: ["have a try", "give up", "sit down", "write it"],
    tags: ["language", "english", "set-5"],
    answer: 0,
  },
  {
    text: "By the time the students arrive, the teacher _______ writing the lesson on the board.",
    options: ["will finish", "has finished", "will have finished", "finishes"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "If she had studied harder for the physics test, she _______ it easily.",
    options: ["would pass", "will pass", "passed", "would have passed"],
    tags: ["language", "english", "set-6"],
    answer: 3,
  },
  {
    text: "The new library, _______ was built last year, has a huge collection of science books.",
    options: ["that", "which", "where", "who"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "The results of the national exam _______ by the Ministry of Education next month.",
    options: [
      "will announce",
      "are announcing",
      "will be announced",
      "have announced",
    ],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "Many students avoid _______ questions in class because they are shy.",
    options: ["ask", "to ask", "asking", "asked"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "Mr. Vuthy is very good _______ explaining complex mathematical concepts.",
    options: ["at", "in", "on", "with"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: "The number of students enrolling in STEM majors _______ increasing steadily.",
    options: ["are", "is", "have", "were"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "It is essential that every student _______ a uniform during school hours.",
    options: ["wears", "wear", "wearing", "wore"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "_______ it was raining heavily, the school did not cancel the outdoor sports event.",
    options: ["Because", "Despite", "Even though", "Therefore"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "You _______ submit the assignment today; tomorrow is fine too.",
    options: ["mustn't", "shouldn't", "don't have to", "cannot"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "When I was a university student, I _______ study in the library until midnight.",
    options: ["am used to", "used to", "use to", "was used to"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "The science teacher had the students _______ an experiment on chemical reactions.",
    options: ["do", "to do", "doing", "done"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: "Could you tell me _______?",
    options: [
      "where is the principal's office",
      "where the principal's office is",
      "the principal's office is where",
      "is where the principal's office",
    ],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "Let's start the group discussion now, _______?",
    options: ["will we", "won't we", "shall we", "don't we"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "This year's physics exam was _______ harder than the one we had last year.",
    options: ["more", "very", "much", "many"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "I wish I _______ more time to prepare my lesson plan for tomorrow.",
    options: ["have", "had", "will have", "have had"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "I will hand out the test papers as soon as the bell _______.",
    options: ["rings", "will ring", "rang", "is ringing"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: "It was _______ an interesting lecture that nobody fell asleep.",
    options: ["so", "very", "too", "such"],
    tags: ["language", "english", "set-6"],
    answer: 3,
  },
  {
    text: "Neither the teacher nor the students _______ happy about the power outage.",
    options: ["was", "were", "is", "has been"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "Not only _______ late, but he also forgot to bring his textbook.",
    options: ["he was", "was he", "did he be", "he is"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "Understanding the fundamental principles of physics is very important. (Choose the synonym)",
    options: ["advanced", "basic", "difficult", "unnecessary"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "Physical education is an optional subject in some high schools. (Choose the antonym)",
    options: ["voluntary", "free", "compulsory", "interesting"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "It took the students a long time to _______ the solution to the math problem.",
    options: ["look after", "figure out", "turn off", "put on"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "A good teacher knows how to provide _______ to encourage students to learn.",
    options: ["motivate", "motivated", "motivating", "motivation"],
    tags: ["language", "english", "set-6"],
    answer: 3,
  },
  {
    text: "_______ is the study of the methods and activities of teaching.",
    options: ["Psychology", "Pedagogy", "Sociology", "Philosophy"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "We are really looking _______ to the upcoming school holidays.",
    options: ["up", "out", "forward", "after"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "Teachers use quizzes and tests to assess students' knowledge. (Choose the synonym)",
    options: ["evaluate", "ignore", "confuse", "guess"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: "The _______ includes all the subjects that are taught in a school.",
    options: ["timetable", "extracurricular", "curriculum", "catalog"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "To learn a poem or formula by _______ means to memorize it perfectly.",
    options: ["brain", "mind", "head", "heart"],
    tags: ["language", "english", "set-6"],
    answer: 3,
  },
  {
    text: "If a student is not present in class, he or she is marked as _______.",
    options: ["late", "present", "absent", "active"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "Despite the challenges, she remains highly optimistic about her students' success. (Choose the antonym)",
    options: ["positive", "confident", "pessimistic", "hopeful"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "Adult _______ programs aim to teach older people how to read and write.",
    options: ["literacy", "literature", "literal", "logically"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: "The school has an adequate supply of laboratory equipment for the students. (Choose the synonym)",
    options: ["insufficient", "sufficient", "broken", "expensive"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "Please _______ your assignments to the teacher before leaving the room.",
    options: ["hand out", "hand in", "take off", "give up"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: "Sports, clubs, and debate teams are examples of _______ activities.",
    options: ["mandatory", "academic", "extracurricular", "useless"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: 'Teacher A: "Could you please help me carry these microscopes to the lab?" - Teacher B: "_______ Let me grab that box for you."',
    options: [
      "No, I am busy.",
      "Sure, no problem.",
      "Why should I?",
      "I don't know how.",
    ],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: 'Student: "I\'m sorry for being late. The traffic was terrible." - Teacher: "_______. Please take your seat quietly."',
    options: [
      "That's alright",
      "I don't believe you",
      "You are welcome",
      "Good luck",
    ],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: 'Principal: "_______ the new discipline policy we implemented last week?" - Teacher: "I think it is working very well. The students are much quieter."',
    options: [
      "Do you know",
      "What do you think of",
      "How do you do",
      "Are you sure about",
    ],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: 'Teacher A: "I feel that our school needs more computers in the library." - Teacher B: "_______. Students really need them for research."',
    options: [
      "I completely disagree",
      "That's a bad idea",
      "I couldn't agree more",
      "You are wrong",
    ],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: 'Teacher in class: "Alright class, please _______ page 25 in your textbooks."',
    options: ["turn to", "open in", "look on", "read for"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: 'Student: "Teacher, could you _______ that last point, please? I didn\'t quite catch it." - Teacher: "Of course. I said that force equals mass times acceleration."',
    options: ["repeat", "ignore", "write", "delete"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: 'Colleague: "I have so many papers to grade tonight." - You: "Let me help you with some of them." - Colleague: "_______ That\'s very kind of you."',
    options: [
      "No way.",
      "Thank you so much.",
      "I am sorry.",
      "Congratulations.",
    ],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: 'Teacher: "I finally passed my pedagogical certification exam!" - Friend: "_______! Let\'s go celebrate."',
    options: ["Good luck", "Congratulations", "Happy birthday", "Bless you"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: 'Student: "_______ I leave the class five minutes early today? I have a doctor\'s appointment." - Teacher: "Yes, you may. Don\'t forget to take the homework assignment."',
    options: ["Must", "Should", "May", "Will"],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: 'Teacher: "_______! The exam has already started. Keep your eyes on your own paper."',
    options: ["Speak louder", "Quiet, please", "Stand up", "Look outside"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: 'New Colleague: "Hi, how\'s it going?" - You: "_______, thanks. And you?"',
    options: ["Great", "How do you do", "I am a teacher", "Yes, please"],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: 'Student: "Do you mean we have to memorize all these formulas for the test?" - Teacher: "_______. They will not be provided on the exam paper."',
    options: ["Not at all", "Exactly", "I doubt it", "Never mind"],
    tags: ["language", "english", "set-6"],
    answer: 1,
  },
  {
    text: 'Teacher: "The bell has rung. That\'s all for today. _______."',
    options: [
      "See you tomorrow",
      "Welcome to class",
      "Open your books",
      "Take notes",
    ],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: 'Student: "This physics problem is impossible to solve. I can\'t do it." - Teacher: "_______! Let\'s break it down into smaller steps together."',
    options: [
      "Don't give up",
      "You are right",
      "Just skip it",
      "Stop complaining",
    ],
    tags: ["language", "english", "set-6"],
    answer: 0,
  },
  {
    text: 'Phone call: "Hello, could I speak to the principal, please?" - School Secretary: "_______ I will see if he is available."',
    options: [
      "Who are you?",
      "Call back tomorrow.",
      "Hold on a moment, please.",
      "He doesn't want to talk.",
    ],
    tags: ["language", "english", "set-6"],
    answer: 2,
  },
  {
    text: "By next December, Mr. Dara _______ at this provincial high school for exactly ten years.",
    options: [
      "will teach",
      "has taught",
      "will have been teaching",
      "is teaching",
    ],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "If the students _______ the instructions properly, they wouldn't have ruined the experiment.",
    options: ["follow", "followed", "have followed", "had followed"],
    tags: ["language", "english", "set-7"],
    answer: 3,
  },
  {
    text: "The school library, _______ was renovated last summer, now has a modern computer lab.",
    options: ["that", "which", "where", "whose"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "The results of the national teaching exam _______ on the official website next Monday.",
    options: [
      "will publish",
      "are publishing",
      "will be published",
      "have published",
    ],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "Many young teachers are highly interested _______ incorporating AI into their lesson plans.",
    options: ["on learning", "in learning", "at learning", "to learn"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "The principal strongly suggested that the new physics teacher _______ the training workshop.",
    options: ["attends", "attend", "attended", "attending"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "The headmaster rarely comes to the staff meeting late, _______?",
    options: ["doesn't he", "does he", "isn't he", "is he"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "Hardly _______ the classroom when the bell rang for recess.",
    options: [
      "the teacher had left",
      "did the teacher left",
      "the teacher left",
      "had the teacher left",
    ],
    tags: ["language", "english", "set-7"],
    answer: 3,
  },
  {
    text: "The teacher had the students _______ a 500-word essay about global warming.",
    options: ["write", "to write", "writing", "wrote"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: "This year's physics curriculum is _______ more challenging than the previous one.",
    options: ["very", "many", "much", "so"],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "_______ the heavy rain and flooding, the school remained open for the exam.",
    options: ["Although", "Despite", "Even though", "Because of"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "A large number of students _______ participating in the annual science fair.",
    options: ["is", "are", "was", "has been"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "He was absent from class yesterday. He _______ sick.",
    options: ["must be", "should be", "must have been", "could be"],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "I wish I _______ a better understanding of quantum physics to explain it to my students.",
    options: ["have", "had", "will have", "have had"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "We will start the grading process as soon as the last student _______ the test paper.",
    options: ["hands in", "will hand in", "handed in", "is handing in"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: "She studies extremely hard every night _______ pass the pedagogical exam.",
    options: ["for", "in order to", "so that", "because"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "As a teacher, I _______ up early every morning to prepare my materials.",
    options: [
      "used to waking",
      "use to wake",
      "am used to waking",
      "got used to wake",
    ],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "Neither the principal nor the teachers _______ informed about the sudden inspection.",
    options: ["was", "were", "is", "has been"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "It was _______ a difficult mathematical equation that no one could solve it.",
    options: ["so", "very", "too", "such"],
    tags: ["language", "english", "set-7"],
    answer: 3,
  },
  {
    text: "The final exam will take place _______ Monday morning at 8:00 AM.",
    options: ["in", "on", "at", "from"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "Active participation is crucial for a successful group discussion. (Choose the synonym)",
    options: ["optional", "unnecessary", "essential", "harmful"],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "Attending the weekly flag-raising ceremony is mandatory. (Choose the antonym)",
    options: ["compulsory", "optional", "required", "strict"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "The principal promised to _______ the complaints about the cafeteria food.",
    options: ["look after", "look into", "look up", "look out"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "A document that outlines the topics to be covered in a specific course is called a _______.",
    options: ["timetable", "directory", "syllabus", "dictionary"],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "The method and practice of teaching is academically referred to as _______.",
    options: ["Psychology", "Pedagogy", "Philosophy", "Philanthropy"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "Don't forget to _______ your assignment before leaving the classroom.",
    options: ["turn off", "turn in", "turn down", "turn around"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "Teachers must regularly evaluate their students' reading comprehension. (Choose the synonym)",
    options: ["assess", "ignore", "punish", "reward"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: "Students, please _______ close attention to the formula on the board.",
    options: ["pay", "keep", "make", "take"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: "The debate club and the basketball team are examples of _______ activities.",
    options: ["compulsory", "academic", "extracurricular", "irrelevant"],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "He is one of the most diligent students in my class. (Choose the synonym)",
    options: ["lazy", "hardworking", "intelligent", "talkative"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "If a student leaves school before finishing their studies, they are called a school _______.",
    options: ["drop in", "drop out", "drop off", "drop down"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "The ability to read and write is known as _______.",
    options: ["literacy", "illiteracy", "literature", "calculation"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: "The review material provided by the teacher was very comprehensive. (Choose the synonym)",
    options: ["confusing", "limited", "thorough", "narrow"],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: "Don't be afraid to _______ a mistake; that's how we learn.",
    options: ["do", "make", "take", "have"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: "A good teacher should always be punctual. (Choose the antonym)",
    options: ["late", "early", "on time", "strict"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: 'Colleague: "These exam papers are so heavy." - You: "Let me help you carry them to the staff room." - Colleague: "_______"',
    options: [
      "No, I don't need you.",
      "Thank you so much. That's very kind.",
      "I agree with you.",
      "You are welcome.",
    ],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Teacher A: "I think students need more practical experiments rather than just theory." - Teacher B: "_______! Practice helps them understand better."',
    options: [
      "I completely disagree",
      "That's a bad idea",
      "I couldn't agree more",
      "I don't know",
    ],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: 'Student: "_______ go out to wash my face, please?" - Teacher: "Yes, you may. Be quick."',
    options: ["Do I", "May I", "Will I", "Must I"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Student: "I sincerely apologize for missing the test yesterday. I was very sick." - Teacher: "_______. You can take the make-up test on Friday."',
    options: [
      "That's alright",
      "I don't care",
      "You are welcome",
      "Congratulations",
    ],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: 'Student: "I\'m sorry, I didn\'t hear the last part. _______?" - Teacher: "Sure, I said the deadline is next Monday."',
    options: [
      "Could you repeat that, please",
      "Why didn't you speak loudly",
      "Are you okay",
      "What do you mean",
    ],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: 'Teacher A: "My throat hurts from talking too much today." - Teacher B: "_______ drink some warm tea with honey."',
    options: ["You must", "You should", "You would", "You can't"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Teacher: "Good morning, class! Everyone is here, so let\'s _______."',
    options: ["get started", "go home", "make noise", "sleep"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: 'Principal: "_______ the new textbook we introduced this semester?" - Teacher: "I find it very useful and easy for students to follow."',
    options: [
      "Do you know",
      "What do you think of",
      "How are you with",
      "Are you sure about",
    ],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Colleague: "I just received my master\'s degree in Educational Leadership!" - You: "_______! I am so happy for you."',
    options: ["Good luck", "Thank you", "Congratulations", "Excuse me"],
    tags: ["language", "english", "set-7"],
    answer: 2,
  },
  {
    text: 'Teacher: "Please put your pens down and hand in your papers. _______!"',
    options: ["Time is out", "Time is up", "Time is off", "Time is over"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Teacher: "So, if we apply this formula, we get the final velocity. Do you _______ what I mean?" - Student: "Yes, teacher. It\'s clear now."',
    options: ["look", "see", "watch", "hear"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Student: "I failed the physics test again. I think I should just drop this class." - Teacher: "_______! Let\'s review the lessons together after school."',
    options: ["Don't give up", "Good idea", "You are right", "I agree"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: 'New Colleague: "Hello, I am the new chemistry teacher. How do you do?" - You: "_______ Nice to meet you."',
    options: [
      "I am doing my job.",
      "How do you do?",
      "I am fine, thank you.",
      "What are you doing?",
    ],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Teacher in class: "If you know the answer, please _______ your hand instead of shouting."',
    options: ["rise", "raise", "lift", "point"],
    tags: ["language", "english", "set-7"],
    answer: 1,
  },
  {
    text: 'Colleague: "Have a great weekend! Get some rest." - You: "Thanks, _______!"',
    options: ["You too", "Me too", "Same here you", "Yes, I do"],
    tags: ["language", "english", "set-7"],
    answer: 0,
  },
  {
    text: "By the end of this semester, the physics students _______ all the required laboratory experiments.",
    options: [
      "will complete",
      "have completed",
      "will have completed",
      "are completing",
    ],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "If the teacher _______ more time, she would have explained the theory more deeply.",
    options: ["has", "had", "has had", "had had"],
    tags: ["language", "english", "set-8"],
    answer: 3,
  },
  {
    text: "The old projector, _______ we bought five years ago, finally stopped working today.",
    options: ["that", "which", "who", "whose"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "All assignments _______ to the teacher's desk before the bell rings.",
    options: [
      "must submit",
      "must be submitted",
      "must submitting",
      "submitted",
    ],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "We are looking forward _______ the new science laboratory next week.",
    options: ["to visit", "to visiting", "visit", "visiting"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "As a homeroom teacher, you are responsible _______ the well-being of your students.",
    options: ["to", "for", "with", "on"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "The number of students applying for the pedagogical training _______ increased this year.",
    options: ["has", "have", "is", "are"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: "It is crucial that the headmaster _______ the staff meeting on time.",
    options: ["starts", "start", "started", "starting"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "_______ the difficult exam questions, most of the students managed to pass.",
    options: ["Although", "Even though", "Despite", "Because"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "You _______ studied harder for the physics exam instead of playing video games.",
    options: ["must have", "should have", "can have", "will have"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "When Mr. Sok was younger, he _______ teach English at a primary school.",
    options: ["is used to", "gets used to", "used to", "was used to"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "The principal got the students _______ the schoolyard before the holiday.",
    options: ["clean", "to clean", "cleaning", "cleaned"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "Excuse me, could you tell me _______?",
    options: [
      "where is the library",
      "where the library is",
      "the library is where",
      "is where the library",
    ],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "Let's review the formulas for tomorrow's test, _______?",
    options: ["do we", "won't we", "shall we", "are we"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "Her performance in the teaching practicum was _______ better than we expected.",
    options: ["much", "more", "very", "many"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: "I wish I _______ the answer to that student's question yesterday.",
    options: ["know", "knew", "had known", "have known"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "The students will stand up and greet the teacher as soon as she _______ the room.",
    options: ["enter", "entered", "will enter", "enters"],
    tags: ["language", "english", "set-8"],
    answer: 3,
  },
  {
    text: "It was _______ a boring lecture that half of the class fell asleep.",
    options: ["so", "very", "too", "such"],
    tags: ["language", "english", "set-8"],
    answer: 3,
  },
  {
    text: "Neither the students nor the teacher _______ aware of the holiday tomorrow.",
    options: ["is", "are", "have been", "were"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: "Hardly _______ the classroom when the students started chatting loudly.",
    options: ["I had left", "had I left", "I left", "did I left"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "Effective communication is vital for any teacher. (Choose the synonym)",
    options: ["unimportant", "optional", "essential", "harmful"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "Wearing a uniform to school is compulsory. (Choose the antonym)",
    options: ["mandatory", "voluntary", "strict", "required"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "Before you hand in your exam paper, you should _______ it one more time.",
    options: ["go over", "go away", "go out", "go down"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: "Activities like sports and debate clubs are considered _______ activities.",
    options: ["academic", "extracurricular", "useless", "mandatory"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "Copying someone else's work and pretending it is yours is called _______.",
    options: ["pedagogy", "plagiarism", "philosophy", "preparation"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "Could you please _______ these worksheets to the students in the back row?",
    options: ["hand in", "hand out", "take off", "give up"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "The school inspector will come to evaluate the teachers' performance. (Choose the synonym)",
    options: ["ignore", "assess", "reward", "confuse"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "The teaching staff of a university or college is often referred to as the _______.",
    options: ["students", "alumni", "faculty", "janitors"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "In primary school, we had to learn many poems by _______.",
    options: ["brain", "mind", "head", "heart"],
    tags: ["language", "english", "set-8"],
    answer: 3,
  },
  {
    text: "A student who regularly stays away from school without permission is playing _______.",
    options: ["games", "truant", "sports", "music"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "Despite the difficult circumstances, she remains optimistic about the future. (Choose the antonym)",
    options: ["positive", "hopeful", "pessimistic", "confident"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: "Because of his excellent grades, he was awarded a _______ to study abroad.",
    options: ["penalty", "scholarship", "punishment", "certificate"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "The classroom does not have an adequate amount of chairs for all students. (Choose the synonym)",
    options: ["insufficient", "enough", "small", "expensive"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "It's hard for him to keep _______ with the class because he missed two weeks of school.",
    options: ["up", "out", "away", "down"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: "The academic year is usually divided into two _______ in Cambodia.",
    options: ["semesters", "schedules", "curriculums", "breaks"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Teacher A: "I have my hands full with these books." - Teacher B: "_______ Let me open the door for you."',
    options: [
      "Too bad for you.",
      "Let me help you.",
      "I am busy.",
      "You should go to the gym.",
    ],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: 'Student: "I\'m sorry for being absent yesterday. I had a fever." - Teacher: "_______. Make sure you copy the notes from your classmates."',
    options: [
      "That's alright. I hope you feel better.",
      "I don't believe you.",
      "Congratulations!",
      "Get out of my class.",
    ],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Principal: "_______ the new teaching methodology workshop?" - Teacher: "It was incredibly helpful and inspiring."',
    options: [
      "How did you find",
      "Where did you go",
      "Are you sure about",
      "Do you know",
    ],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Teacher A: "Students need more time to read in the library." - Teacher B: "_______! Reading is the foundation of learning."',
    options: [
      "I completely disagree",
      "That's a bad idea",
      "I couldn't agree more",
      "You are wrong",
    ],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: 'Teacher in class: "Alright everyone, please _______ to the next chapter on page 42."',
    options: ["turn", "open in", "look for", "close"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Student: "Teacher, could you _______ the instruction again? It was a bit too fast." - Teacher: "Of course. I said you need to write a summary."',
    options: ["repeat", "ignore", "delete", "translate"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Colleague: "The printer is jammed again. I don\'t know how to fix it." - You: "Let me take a look. _______"',
    options: [
      "It's not my problem.",
      "I can fix it for you.",
      "You should buy a new one.",
      "I agree with you.",
    ],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: 'Teacher: "I\'ve just been appointed as the new Head of Department!" - Friend: "_______! You truly deserve it."',
    options: ["Good luck", "Thank you", "Congratulations", "Bless you"],
    tags: ["language", "english", "set-8"],
    answer: 2,
  },
  {
    text: 'Student: "_______ I be excused for a moment? I need to use the restroom." - Teacher: "Yes, go ahead. But return quickly."',
    options: ["May", "Will", "Must", "Should"],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Teacher: "The exam is ongoing. Please keep your voices _______."',
    options: ["up", "down", "out", "loud"],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: 'New Teacher: "Hello, my name is Sophea. I\'ll be teaching biology here." - You: "_______, Sophea. Welcome to our school."',
    options: [
      "How do you do",
      "What are you doing",
      "Goodbye",
      "See you later",
    ],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Student: "Do we have to answer all the questions or just choose five?" - Teacher: "You only need to choose five. _______?"',
    options: [
      "Is that clear",
      "What is your name",
      "Do you know me",
      "Are you sure",
    ],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Teacher: "That\'s the bell. We\'ll stop here for today. _______." - Students: "Thank you, teacher."',
    options: [
      "Class is dismissed",
      "Class is starting",
      "Open your books",
      "Listen carefully",
    ],
    tags: ["language", "english", "set-8"],
    answer: 0,
  },
  {
    text: 'Student: "I don\'t think I\'ll ever understand this physics formula." - Teacher: "_______! It takes time. Let\'s try another example."',
    options: [
      "Give up",
      "Don't be discouraged",
      "You are right",
      "I don't care",
    ],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: 'Phone call: "Hello, is the principal available?" - School Secretary: "I\'m sorry, he is in a meeting right now. Can I _______?"',
    options: [
      "hang up the phone",
      "take a message",
      "call you tomorrow",
      "know your age",
    ],
    tags: ["language", "english", "set-8"],
    answer: 1,
  },
  {
    text: "By the time the principal arrives, the students _______ the classroom.",
    options: ["will already clean", "will have already cleaned", "already cleaned", "are already cleaning"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "If the teacher _______ earlier, she could have explained the lesson more clearly.",
    options: ["comes", "came", "had come", "has come"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "The new physics teacher, _______ car is parked outside, is very strict.",
    options: ["who", "whom", "whose", "that"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "I would rather you _______ your assignment on time next week.",
    options: ["submit", "submitted", "submitting", "to submit"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "The school board demanded that the student _______ to the principal's office immediately.",
    options: ["goes", "go", "went", "going"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "You shouldn't have _______ to your classmate in such a rude manner.",
    options: ["speak", "speaking", "spoke", "spoken"],
    tags: ["language", "english", "set-9"],
    answer: 3
  },
  {
    text: "Mr. Dara is completely dedicated _______ his students' academic success.",
    options: ["to", "for", "with", "on"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "Neither the boys nor the girl _______ allowed to enter the laboratory without permission.",
    options: ["are", "is", "have been", "were"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "As a new teacher, I am not used to _______ up so early every morning.",
    options: ["wake", "woke", "waking", "woken"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "The headmaster had the broken windows in the library _______ yesterday.",
    options: ["fix", "to fix", "fixing", "fixed"],
    tags: ["language", "english", "set-9"],
    answer: 3
  },
  {
    text: "Hardly _______ the room when the students started asking questions.",
    options: ["had the teacher entered", "the teacher had entered", "did the teacher enter", "entered the teacher"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "It was _______ a difficult physics problem that nobody in the class could solve it.",
    options: ["so", "very", "too", "such"],
    tags: ["language", "english", "set-9"],
    answer: 3
  },
  {
    text: "The _______ you prepare for the pedagogical exam, the _______ your results will be.",
    options: ["hard / good", "harder / better", "hardest / best", "more hard / more better"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Despite _______ exhausted, the teacher stayed late to help the weak students.",
    options: ["he was", "be", "being", "of being"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "A visitor asked me where _______.",
    options: ["was the principal's office", "the principal's office was", "is the principal's office", "the principal's office is"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "I wish I _______ the answer to that student's question right now.",
    options: ["know", "knew", "had known", "will know"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Let's take a 10-minute break before continuing the experiment, _______?",
    options: ["will we", "won't we", "shall we", "don't we"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "A large number of students _______ planning to participate in the science fair.",
    options: ["is", "are", "has", "was"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Do you mind _______ the window? It's getting quite hot in here.",
    options: ["close", "to close", "closed", "closing"],
    tags: ["language", "english", "set-9"],
    answer: 3
  },
  {
    text: "After the experiment, the laboratory definitely needs _______.",
    options: ["clean", "to clean", "cleaning", "cleaned"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "Classroom management is an essential skill for all teachers. (Choose the synonym)",
    options: ["optional", "unnecessary", "crucial", "difficult"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "The school rules strictly prohibit students from using smartphones during exams. (Choose the antonym)",
    options: ["forbid", "ban", "allow", "prevent"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "Due to the heavy rain, the outdoor sports event was _______.",
    options: ["put on", "put off", "put out", "put up"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "_______ is defined as the method and practice of teaching.",
    options: ["Pedagogy", "Psychology", "Philosophy", "Physiology"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "The school _______ includes mathematics, physics, chemistry, and literature.",
    options: ["timetable", "curriculum", "regulation", "facility"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Copying information from the internet without giving credit is known as _______.",
    options: ["brainstorming", "plagiarism", "creativity", "evaluation"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "A fair teacher must remain _______ when grading students' exam papers.",
    options: ["biased", "objective", "subjective", "emotional"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "The students couldn't _______ how to solve the final math problem.",
    options: ["look into", "make up", "figure out", "take over"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "A _______ person always arrives at school exactly on time.",
    options: ["lazy", "strict", "punctual", "friendly"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "If a student decides to quit school before graduating, he or she is considered a _______.",
    options: ["drop in", "drop out", "drop off", "drop down"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "The teacher gave a very comprehensive review before the national exam. (Choose the synonym)",
    options: ["thorough", "limited", "confusing", "short"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "He was late for class again, so he tried to _______ a story about a flat tire.",
    options: ["do up", "make up", "take up", "keep up"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "The principal promised to _______ the issue of bullying in the schoolyard.",
    options: ["look after", "look into", "look up", "look out"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "It is hard for her to keep _______ with the rest of the class after being sick.",
    options: ["up", "on", "out", "off"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "You must learn this physics formula by _______ for tomorrow's test.",
    options: ["head", "mind", "brain", "heart"],
    tags: ["language", "english", "set-9"],
    answer: 3
  },
  {
    text: "Teacher: \"Time is up! Please _______.\"",
    options: ["open your books", "stop writing and hand in your papers", "talk to your friends", "go outside to play"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Student: \"_______ I go to the restroom, please?\" - Teacher: \"Yes, you may. But don't take too long.\"",
    options: ["Must", "Should", "May", "Will"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "Colleague: \"I heard you passed your Master's degree defense. Congratulations!\" - You: \"_______ It was a lot of hard work.\"",
    options: ["Same to you!", "Thank you so much!", "I don't care.", "You are welcome."],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Student: \"I'm sorry, I didn't catch the last instruction.\" - Teacher: \"Would you like me to _______ it?\"",
    options: ["ignore", "delete", "repeat", "translate"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "Teacher A: \"I believe we should use more interactive games in teaching.\" - Teacher B: \"_______! It keeps the students engaged and motivated.\"",
    options: ["I completely disagree", "That's a terrible idea", "I couldn't agree more", "You shouldn't do that"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "Principal: \"_______ the new grading system we implemented this month?\" - Teacher: \"I find it very fair and accurate for assessing students.\"",
    options: ["Do you know", "What do you think of", "How do you do", "Are you sure about"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Student: \"I sincerely apologize for being late today.\" - Teacher: \"_______. Please take your seat quietly so you don't disturb the others.\"",
    options: ["That's alright", "Get out of here", "I don't believe you", "Congratulations"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "Teacher: \"We have finished Chapter 4. Are there any questions?\" - Students: \"_______ Everything is completely clear.\"",
    options: ["Yes, please.", "No, teacher.", "We have many questions.", "What is the time?"],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Colleague: \"You look busy. Let me help you carry those exam papers.\" - You: \"_______\"",
    options: ["No, I hate you.", "That's very kind of you. Thanks!", "Why are you helping me?", "I agree with you."],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Teacher: \"Alright class, please _______ to page 75 in your textbook.\"",
    options: ["turn", "open in", "read", "close"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "Teacher: \"If you know the answer to this equation, please _______ your hand.\"",
    options: ["rise", "lift", "point", "raise"],
    tags: ["language", "english", "set-9"],
    answer: 3
  },
  {
    text: "Student: \"I failed my physics test again. I am so stressed.\" - Teacher: \"_______! Let's sit down and review the mistakes together.\"",
    options: ["Don't be discouraged", "Give up now", "You are very lazy", "Just sleep"],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "Phone Call: \"Hello, could I speak to Mr. Sokha, the science teacher?\" - Secretary: \"_______ I will check if he is in the staff room.\"",
    options: ["Who are you?", "Hold on, please.", "Call back later.", "He doesn't want to talk."],
    tags: ["language", "english", "set-9"],
    answer: 1
  },
  {
    text: "Colleague: \"Have a great weekend and get some rest!\" - You: \"Thanks! _______\"",
    options: ["You too!", "Me too!", "Yes, I do.", "Same here you."],
    tags: ["language", "english", "set-9"],
    answer: 0
  },
  {
    text: "Teacher: \"The bell has rung. That's all for today. _______!\" - Students: \"Goodbye, teacher. See you tomorrow.\"",
    options: ["Class is starting", "Open your books", "Class is dismissed", "Listen to me"],
    tags: ["language", "english", "set-9"],
    answer: 2
  },
  {
    text: "By the end of this month, the construction of the new school library _______.",
    options: ["will have finished", "will have been finished", "will be finishing", "has finished"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "If the students _______ the instructions carefully, they wouldn't have made so many mistakes.",
    options: ["read", "reads", "had read", "have read"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "The principal, _______ office is on the ground floor, is a very kind man.",
    options: ["who", "whom", "whose", "that"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "All mobile phones _______ off before entering the examination room.",
    options: ["must turn", "must be turned", "must turning", "must to turn"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "We are really looking forward _______ the new teaching materials next semester.",
    options: ["to receive", "to receiving", "receiving", "received"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "The new science teacher is very responsible _______ preparing the laboratory experiments.",
    options: ["to", "with", "on", "for"],
    tags: ["language", "english", "set-10"],
    answer: 3
  },
  {
    text: "The head of the department strongly recommended that Mr. Sok _______ for the scholarship.",
    options: ["applied", "applies", "apply", "applying"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Let's wrap up today's lesson and go home, _______?",
    options: ["will we", "won't we", "shall we", "don't we"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Never before _______ such a beautifully written essay from a grade 10 student.",
    options: ["I have read", "have I read", "I read", "did I read"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "When she first moved to the province to teach, she wasn't used _______ up at 5 AM.",
    options: ["to wake", "to waking", "wake", "woke"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "_______ the difficult circumstances, the rural school managed to produce top students.",
    options: ["Although", "Because", "Despite", "Even though"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "The teacher had the students _______ their assignments before Friday.",
    options: ["submit", "to submit", "submitting", "submitted"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "Excuse me, do you know _______?",
    options: ["where is the cafeteria", "where the cafeteria is", "the cafeteria is where", "is where the cafeteria"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "The _______ you practice speaking English, the _______ fluent you will become.",
    options: ["much / more", "more / much", "more / more", "most / most"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "I failed the teaching methodology exam. I wish I _______ harder.",
    options: ["studied", "study", "had studied", "have studied"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Dara was absent from class for three days. He _______ been sick.",
    options: ["should have", "must have", "can have", "will have"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "She is taking an online course _______ her digital teaching skills.",
    options: ["to improve", "for improve", "improving", "improved"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "It was _______ an inspiring lecture that all the students gave a standing ovation.",
    options: ["so", "very", "too", "such"],
    tags: ["language", "english", "set-10"],
    answer: 3
  },
  {
    text: "A number of teachers _______ attending the workshop in the capital city today.",
    options: ["is", "are", "has", "was"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "After the chemistry experiment, the laboratory floor needs _______.",
    options: ["mop", "to mop", "mopping", "mopped"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Reading comprehension is a crucial skill for students to develop early on. (Choose the synonym)",
    options: ["optional", "essential", "difficult", "unnecessary"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Physical education is mandatory in all public high schools. (Choose the antonym)",
    options: ["compulsory", "required", "optional", "strict"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "The school committee promised to _______ the complaints about the strict discipline rules.",
    options: ["look after", "look out", "look up", "look into"],
    tags: ["language", "english", "set-10"],
    answer: 3
  },
  {
    text: "The academic study of how to teach is commonly known as _______.",
    options: ["Philosophy", "Psychology", "Pedagogy", "Philanthropy"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Copying text from Wikipedia without referencing it is a clear example of _______.",
    options: ["brainstorming", "plagiarism", "evaluation", "creativity"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Joining the debate club is an excellent _______ activity for students.",
    options: ["irrelevant", "extracurricular", "mandatory", "useless"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Teacher, could you please _______ these test papers to the students in the front row?",
    options: ["hand in", "hand out", "turn down", "give up"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Exams and quizzes are tools used by teachers to assess student learning. (Choose the synonym)",
    options: ["ignore", "confuse", "evaluate", "punish"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "A student who repeatedly skips classes without a valid excuse is said to be playing _______.",
    options: ["games", "sports", "truant", "music"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Thanks to his outstanding academic record, he received a full _______ to university.",
    options: ["penalty", "punishment", "certificate", "scholarship"],
    tags: ["language", "english", "set-10"],
    answer: 3
  },
  {
    text: "The math problem was so difficult that none of the students could _______ it out.",
    options: ["look", "make", "take", "figure"],
    tags: ["language", "english", "set-10"],
    answer: 3
  },
  {
    text: "A highly professional teacher is always _______; they never arrive late to class.",
    options: ["punctual", "strict", "lazy", "arrogant"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "The principal gave a very comprehensive report on the school's performance. (Choose the synonym)",
    options: ["limited", "thorough", "confusing", "brief"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "The document containing the course outline and policies distributed at the start of a semester is the _______.",
    options: ["syllabus", "dictionary", "timetable", "register"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "Many students _______ of school in rural areas to help their families work.",
    options: ["drop in", "drop out", "drop off", "drop down"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Student: \"_______ I ask a question regarding the final assignment, please?\" - Teacher: \"Of course. What would you like to know?\"",
    options: ["Must", "Will", "May", "Should"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Student: \"I sincerely apologize for turning in my essay late. I was hospitalized.\" - Teacher: \"_______. Just make sure to catch up on the reading.\"",
    options: ["That's alright", "Get out of my class", "I don't care", "You are welcome"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "Colleague: \"I have to move these heavy desks to the new classroom.\" - You: \"_______ I have some free time now.\"",
    options: ["Too bad for you.", "Let me give you a hand.", "Why should I care?", "Do it yourself."],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Principal: \"_______ the new interactive whiteboards?\" - Teacher: \"They are amazing! The students are much more engaged.\"",
    options: ["Do you know", "How do you do", "What do you think of", "Are you sure about"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Teacher A: \"I believe teachers should be paid more for their hard work.\" - Teacher B: \"_______! It is a very demanding profession.\"",
    options: ["I completely disagree", "That's a bad idea", "I couldn't agree more", "You shouldn't say that"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Student: \"I'm sorry, the background noise was too loud. _______?\" - Teacher: \"Sure, I said the test is postponed to next week.\"",
    options: ["Could you repeat that, please", "Why are you so quiet", "Are you okay", "What is your name"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "Teacher A: \"My voice is completely gone from teaching all day.\" - Teacher B: \"You _______ drink some warm lemon water and rest your vocal cords.\"",
    options: ["dare", "ought", "should", "wouldn't"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Colleague: \"I just got the 'Teacher of the Year' award!\" - You: \"_______! Your dedication truly deserves it.\"",
    options: ["Good luck", "Thank you", "Congratulations", "Bless you"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Teacher: \"Please stop writing and close your booklets. _______!\"",
    options: ["Time is up", "Time is out", "Time is over", "Time is off"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "Teacher: \"Do you _______ why we use this formula for velocity now?\" - Student: \"Yes, your explanation made it very clear.\"",
    options: ["look", "see", "watch", "hear"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Student: \"I failed the math test again. I am so discouraged.\" - Teacher: \"_______! Let's sit down and figure out where you went wrong.\"",
    options: ["Give up now", "Don't lose hope", "You are right", "I agree with you"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "New Inspector: \"How do you do? I'm here to observe your class today.\" - You: \"_______ Welcome to our school.\"",
    options: ["I am doing well.", "What are you doing?", "How do you do?", "I am fine, thanks."],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
  {
    text: "Teacher in class: \"Alright everyone, please _______ to the vocabulary section on page 112.\"",
    options: ["turn", "open in", "look up", "close"],
    tags: ["language", "english", "set-10"],
    answer: 0
  },
  {
    text: "Phone call: \"Hello, is the Head of the Science Department available?\" - Secretary: \"He is currently teaching. Would you like to _______?\"",
    options: ["hang up", "leave a message", "call you later", "stop calling"],
    tags: ["language", "english", "set-10"],
    answer: 1
  },
  {
    text: "Teacher: \"That's the bell! Don't forget your homework. _______!\" - Students: \"Thank you, teacher. See you tomorrow!\"",
    options: ["Welcome back", "Open your books", "Class is dismissed", "Listen to me"],
    tags: ["language", "english", "set-10"],
    answer: 2
  },
];

// --- ផ្នែកទី៣៖ វិញ្ញាសា គ្រូមត្តេយ្យ និងបឋម ---
const eduPrimaryQuestions = [
  /*
  {
    text: "សំណួររបស់អ្នកនៅទីនេះ?",
    options: ["ជម្រើស ក", "ជម្រើស ខ", "ជម្រើស គ", "ជម្រើស ឃ"],
    tags: ["primary", "set-1"],
    answer: 0,
  },
  */
];

// --- ផ្នែកទី៤៖ វិញ្ញាសា គ្រូអនុវិទ្យាល័យ និងវិទ្យាល័យ ---
const eduSecondaryHighSchoolQuestions = [
  /*
  {
    text: "សំណួររបស់អ្នកនៅទីនេះ?",
    options: ["ជម្រើស ក", "ជម្រើស ខ", "ជម្រើស គ", "ជម្រើស ឃ"],
    tags: ["secondary", "highschool", "set-1"],
    answer: 0,
  },
  */
];

// ==========================================================================
// ទិន្នន័យក្រសួងរួម (Categories Data)
// ==========================================================================
const examData = [
  {
    id: "education",
    title: "ក្រសួងអប់រំ យុវជន និងកីឡា",
    shortTitle: "អប់រំ",
    image: "assets/images/education.png",
    color: "#3467d6",
    description:
      "កម្រងវិញ្ញាសាជ្រើសរើសពិសេសសម្រាប់ត្រៀមប្រឡងក្របខណ្ឌមន្ត្រីរាជការ ក្នុងវិស័យអប់រំ យុវជន និងកីឡា។",
    questions: [
      // ផ្គុំសំណួរពីគ្រប់ផ្នែកចូលគ្នាដោយស្វ័យប្រវត្តិ
      ...eduCultureQuestions,
      ...eduLanguageQuestions,
      ...eduPrimaryQuestions,
      ...eduSecondaryHighSchoolQuestions,
    ],
  },
  {
    id: "health",
    title: "ក្រសួងសុខាភិបាល",
    shortTitle: "សុខាភិបាល",
    image: "assets/images/health.png",
    color: "#039bb8",
    description: "សំណួរគំរូអំពីសុខភាពសាធារណៈ និងសេវាសុខាភិបាល។",
    questions: [
      /*
      {
        text: "សំណួររបស់អ្នកនៅទីនេះ?",
        options: [
          "ជម្រើស ក",
          "ជម្រើស ខ",
          "ជម្រើស គ",
          "ជម្រើស ឃ",
        ],
        answer: 0,
      },
      */
    ],
  },
  {
    id: "interior",
    title: "ក្រសួងមហាផ្ទៃ",
    shortTitle: "មហាផ្ទៃ",
    image: "assets/images/police.svg",
    color: "#d88718",
    description: "សំណួរគំរូអំពីរដ្ឋបាល សន្តិសុខ និងសណ្តាប់ធ្នាប់សាធារណៈ។",
    questions: [
      /*
      {
        text: "សំណួររបស់អ្នកនៅទីនេះ?",
        options: [
          "ជម្រើស ក",
          "ជម្រើស ខ",
          "ជម្រើស គ",
          "ជម្រើស ឃ",
        ],
        answer: 0,
      },
      */
    ],
  },
  {
    id: "civil",
    title: "ក្រសួងមុខងារសាធារណៈ",
    shortTitle: "មុខងារសាធារណៈ",
    image: "assets/images/MSC.png",
    color: "#25845a",
    description: "សំណួរគំរូអំពីមន្ត្រីរាជការ ក្រមសីលធម៌ និងសេវាសាធារណៈ។",
    questions: [
      /*
      {
        text: "សំណួររបស់អ្នកនៅទីនេះ?",
        options: [
          "ជម្រើស ក",
          "ជម្រើស ខ",
          "ជម្រើស គ",
          "ជម្រើស ឃ",
        ],
        answer: 0,
      },
      */
    ],
  },
  {
    id: "agriculture",
    title: "ក្រសួងកសិកម្ម រុក្ខាប្រមាញ់ និងនេសាទ",
    shortTitle: "កសិកម្ម",
    image: "assets/images/MAFF.png",
    color: "#b88311",
    description: "សំណួរគំរូអំពីកសិកម្ម ធនធានធម្មជាតិ និងនេសាទ។",
    questions: [
      /*
      {
        text: "សំណួររបស់អ្នកនៅទីនេះ?",
        options: [
          "ជម្រើស ក",
          "ជម្រើស ខ",
          "ជម្រើស គ",
          "ជម្រើស ឃ",
        ],
        answer: 0,
      },
      */
    ],
  },
];

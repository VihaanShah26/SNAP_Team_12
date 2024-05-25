import { typeOptions } from './CommonComponents/Question';

export default [
  {
    question: 'How would you best describe your relationship with this contact?',
    type: typeOptions.radio,
    options: ['Family', 'Close friend', 'Partner', 'Mentor', 'Coworker', 'Acquaintace'],
  },
  {
    question: 'How do you spend your time with this contact?',
    type: typeOptions.radio,
    options: [
      'Mentorship/Advice',
      'Work/Class/School',
      'Going Out',
      'Staying In',
      'Exploring Hobbies',
    ],
  },
  {
    question: 'What interests or hobbies does this contact currently have?',
    type: typeOptions.checkbox,
    options: [
      'Sports/Fitness/Wellness',
      'Eating',
      'Cooking',
      'Traveling',
      'Reading',
      'Music',
      'Movies/TV shows',
      'Gaming',
      'Crafting (pottery, painting, etc)',
    ],
  },
  {
    question: 'I value this relationship because it helps me...',
    type: typeOptions.radio,
    options: [
      'Be more social',
      'Try new things',
      'Pursue my hobbies',
      'Set and acheive goals',
      'Talk through advice',
      'Feel energized',
      'Explore my emotions',
    ],
  },
  {
    question: 'How often do you communicate with this contact via text, call, email?',
    type: typeOptions.radio,
    options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
  },
  {
    question: 'In what context did you two meet?',
    type: typeOptions.radio,
    options: [
      'Family',
      'College/School/Class',
      'Work',
      'Event',
      'Organizations',
      'Affinity groups',
      'Hobbies',
    ],
  },
  {
    question: 'What major city is this contact closest to?',
    type: typeOptions.radio,
    options: ['Chicago', 'san Fransciso', 'New York', 'Los Angeles', 'Seattle', 'Boston'],
  },
  {
    question: "What are this contact's three closest ties/friends?",
    type: typeOptions.dropdown,
    optionsIsFromAPI: true,
    options: [],
  },
];

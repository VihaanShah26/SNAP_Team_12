import { typeOptions } from './CommonComponents/Question';
import { databaseFields } from './Constants/DatabaseIterface';

export default [
  {
    question: 'Please enter your name',
    required: true,
    type: typeOptions.dropdown,
    databaseColumn: databaseFields.username,
  },
  {
    question: 'Please enter name of the contact',
    required: true,
    type: typeOptions.dropdown,
    databaseColumn: databaseFields.contact_name,
  },
  {
    question: 'How would you best describe your relationship with this contact?',
    type: typeOptions.radio,
    options: ['Family', 'Close friend', 'Partner', 'Mentor', 'Coworker', 'Acquaintace'],
    databaseColumn: databaseFields.relationship,
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
    databaseColumn: databaseFields.spend_time,
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
    databaseColumn: databaseFields.current_interests,
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
    databaseColumn: databaseFields.helps_me,
  },
  {
    question: 'How often do you communicate with this contact via text, call, email?',
    type: typeOptions.radio,
    options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
    databaseColumn: databaseFields.communication_frequency,
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
    databaseColumn: databaseFields.meet,
  },
  {
    question: 'What major city is this contact closest to?',
    type: typeOptions.radio,
    options: ['Chicago', 'san Fransciso', 'New York', 'Los Angeles', 'Seattle', 'Boston'],
    databaseColumn: databaseFields.closest_city,
  },
  {
    question: "What are this contact's three closest ties/friends?",
    type: typeOptions.dropdown,
    optionsIsFromAPI: true,
    options: [],
    databaseColumn: databaseFields.friends,
    multiselect: true,
  },
];

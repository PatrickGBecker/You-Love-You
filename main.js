//Global Variables
var affirmations = [
  'I forgive myself and set myself free.', 'I believe I can be all that I want to be.', 'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.', 'I choose to be kind to myself and love myself unconditionally.', 'My possibilities are endless.',
  'I am worthy of my dreams.', 'I am enough.', 'I deserve to be healthy and feel good.', 'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.', 'I honor my body by trusting the signals that it sends me.', 'I manifest perfect health by making smart choices.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it', 'Surah al-Imran (Everything in existence is in the process of returning to its Source. God is our origin and Destination)',
  'Keep your eye on the doughnut, not on the hole', 'A net is a bunch of holes tied together with string', 'We must not be broken but broken OPEN', 'Give evil nothing to oppose and it will lose all power',
  'Do not believe everything that you think', 'You cannot stop the waves but you can learn how to surf', 'God without and god within - Bless this day, before and again - Make us all blood, make us all kin - God without and god within',
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.', 'Do not let yesterday take up too much of today.', 'Every day is a second chance.', 'Tell the truth and love everyone.',
  'I am free from sadness.', 'I am enough.', 'In the beginning it is you, in the middle it is you and in the end it is you.', 'I love myself.', 'I am present now.', 'Inhale the future, exhale the past.', 'This too shall pass.',
  'Yesterday is not today.', 'The only constant is change.', 'Onward and upward.', 'I am the sky, the rest is weather.'
];

//Query Selectors
var receiveLoveButton = document.querySelector('.receive-message');
var buddhaImage = document.querySelector('.buddha-img');
var messageResult = document.querySelector('.full-message');
var choiceAffirmation = document.querySelector('#affirmation');
var choiceMantra = document.querySelector('#mantra');
var emptinessButton = document.querySelector('.clear-message');

//Event Listeners
receiveLoveButton.addEventListener('click', seeMessage);
emptinessButton.addEventListener('click', clearMessage);

//Functions
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function fadeIn(element) {
  element.classList.add('fade-in-image');
};

function choiceSelection() {
  if (choiceAffirmation.checked) {
    messageResult.innerText = `${getRandomElement(affirmations)}`;
  } else if (choiceMantra.checked) {
    messageResult.innerText = `${getRandomElement(mantras)}`;
  }
};

function seeMessage() {
  if (choiceAffirmation.checked || choiceMantra.checked) {
    choiceSelection();
    hide(buddhaImage);
    show(messageResult);
    show(emptinessButton);
  } else {
    alert("Choices are necessary in Life");
  }
};

function clearMessage() {
  hide(messageResult);
  show(buddhaImage);
  hide(emptinessButton);
  choiceAffirmation.checked = false;
  choiceMantra.checked = false;
};

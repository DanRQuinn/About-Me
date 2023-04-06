'use strict';

let userPoints = 0;

let userName = prompt('What is your name?');
console.log(userName);


while (userName === "") {
  alert('How will I know what to call you? Try again!');
  userName = prompt('What is your name?');
  if (userName.length > 1) {
    break;
  }
}

alert('Hello ' + userName + '! Welcome to Dans site! Lets start with a game!');

// DANS MUSIC
function musicQ() {
  let dansMusic = prompt('Does Dan Make Music? Yes or No?').toLowerCase();

  if (dansMusic === 'yes') {
    // console.log('Correct! He is in a band called The Boards! Check them out @theboardsmusic.com');
    alert('Correct! He is in a band called The Boards! Check them out @theboardsmusic.com');
    userPoints++;
    console.log(userPoints);
  } else if (dansMusic === 'no') {
    // console.log('Wrong! You should probably check out his band @theboardsmusic.com');
    alert('Wrong! You should probably check out his band @theboardsmusic.com');
  } else {
    // console.log('Please use Yes or No answers!');
    alert('Please use Yes or No answers!');
  }
}

musicQ();

// DANS DOG

function dogQ() {
  let dansDog = prompt('Does Dan Have 1 dog? Yes or No?').toLowerCase();

  // console.log(dansDog);

  if (dansDog === 'no') {
    // console.log('Correct! He has two dogs, Beau and Tux!');
    alert('Correct! He has two dogs, Beau and Tux!');
    userPoints++;
  } else if (dansDog === 'yes') {
    // console.log('Wrong! Everyone knows Tux but Beau still exists!');
    alert('Wrong! Everyone knows Tux but Beau still exists!');
  } else {
    // console.log();('Please use Yes or No answers!');
    alert('Please use Yes or No answers!');
  }
}

dogQ();

// // DANS SPORT

function sportQ() {
  let dansSport = prompt('Is football Dans favorite sport? Yes or No?').toLowerCase();

  console.log(dansSport);

  if (dansSport === 'no') {
    // console.log('Correct! Dan has and always will love hockey!');
    alert('Correct! Dan has and always will love hockey!');
    userPoints++;
  } else if (dansSport === 'yes') {
    // console.log('Wrong! There are better sports...like hockey.');
    alert('Wrong! There are better sports...like hockey.');
  } else {
    // console.log('Please use Yes or No answers!');
    alert('Please use Yes or No answers!');
  }
}

sportQ();

// // DANS SPOUSE

function spouseQ() {
  let dansSpouse = prompt('Is Dan married? Yes or No?').toLowerCase();

  console.log(dansSpouse);

  if (dansSpouse === 'no') {
    // console.log('Correct! Hes happily engaged waiting to set a date!');
    alert('Correct! Hes happily engaged waiting to set a date!');
    userPoints++;
  } else if (dansSpouse === 'yes') {
    // console.log('Wrong! He is only engaged.');
    alert('Wrong! He is only engaged.');
  } else {
    // console.log('Please use Yes or No answers!');
    alert('Please use Yes or No answers!');
  }
}

spouseQ();
// // // DANS FOOD

function foodQ() {
  let dansFood = prompt('Is Dans favorite food filipino food? Yes or No?').toLowerCase();

  console.log(dansFood);

  if (dansFood === 'yes') {
    // console.log('Correct! It is the best in the world!');
    alert('Correct! It is the best in the world!');
    userPoints++;
  } else if (dansFood === 'no') {
    // console.log('Wrong! Even though he will eat almost anything...');
    alert('Wrong! Even though he will eat almost anything...');
  } else {
    // console.log('Please use Yes or No answers!');
    alert('Please use Yes or No answers!');
  }
}

foodQ();

// // DANS AGE
// // TOO HIGH TOO LOW loops
// let guess = 4;

// while (guess >= 1) {
//   guess--;
//   console.log(guess);
//   let dansAge = parseInt(prompt('What is Dans age?'));
//   console.log(dansAge, 29);
//   console.log(typeof dansAge);
//   if (dansAge >= 30) {
//     alert('There is no way I am that old! Try again!');
//   } if (dansAge <= 28) {
//     alert('Too low! Try again!');
//   } if (dansAge === 29) {
//     alert('Correct! I am 29!');
//     userPoints++;
//     break;
//   } if (guess === 1 && dansAge !== 29) {
//     alert('You are out of guesses, the correct answer is 29!');
//     break;
//   }
// }



// // MULIPLE CORRECT ANSWERS
// // ARRAYS
// let attempts = 6;

// let mouseAlbums = ['We Were Dead Before the Ship Even Sank', 'Good News for People Who Love Bad News', 'The Lonesome Crowded West'];

// let correct = false;

// while (attempts >= 1 && !correct) {
//   attempts--;
//   let mouseAnswer = prompt('What is one of my favorite Modest Mouse albums?');
//   for (let i = 0; i < mouseAlbums.length; i++) {
//     if (mouseAnswer === mouseAlbums[i]) {
//       alert('Correct! I love that album!');
//       userPoints++;
//       correct = true;
//       break;
//     }
//   }
//   if (attempts === 1) {
//     alert('You are out of guesses!');
//     break;
//   }
//   if (!correct) {
//     alert('Incorrect try again!');
//   }
// }

// // THANKS AND FAREWELL

// alert('You\'re score was ' + userPoints + '/7!');

// alert('Thanks ' + userName + '! I hope the quiz wasn\'t too hard!');

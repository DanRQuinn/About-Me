'use strict';

let userName = prompt('What is your name?');

alert('Hello ' + userName + '! Welcome to Dans site!');

let dansMusic = prompt('Does Dan Make Music? Yes or No?').toLowerCase();

if (dansMusic === 'yes'){
  // console.log('Correct! He is in a band called The Boards! Check them out @theboardsmusic.com');
  alert('Correct! He is in a band called The Boards! Check them out @theboardsmusic.com');
} else if (dansMusic === 'no'){
  // console.log('Wrong! You should probably check out his band @theboardsmusic.com');
  alert('Wrong! You should probably check out his band @theboardsmusic.com');
} else {
  // console.log('Please use Yes or No answers!');
  alert('Please use Yes or No answers!');}


let dansDog = prompt('Does Dan Have 1 dog? Yes or No?').toLowerCase();

// console.log(dansDog);

if (dansDog === 'no'){
  // console.log('Correct! He has two dogs, Beau and Tux!');
  alert('Correct! He has two dogs, Beau and Tux!');
} else if (dansDog === 'yes'){
  // console.log('Wrong! Everyone knows Tux but Beau still exists!');
  alert('Wrong! Everyone knows Tux but Beau still exists!');
} else {
  // console.log();('Please use Yes or No answers!');
  alert('Please use Yes or No answers!');
}

let dansSport = prompt('Is football Dans favorite sport? Yes or No?').toLowerCase();

console.log(dansSport);

if (dansSport === 'no'){
  // console.log('Correct! Dan has and always will love hockey!');
  alert('Correct! Dan has and always will love hockey!');
} else if (dansSport === 'yes'){
  // console.log('Wrong! There are better sports...like hockey.');
  alert('Wrong! There are better sports...like hockey.');
} else {
  // console.log('Please use Yes or No answers!');
  alert('Please use Yes or No answers!');
}

let dansSpouse = prompt('Is Dan married? Yes or No?').toLowerCase();

console.log(dansSpouse);

if (dansSpouse === 'no'){
  // console.log('Correct! Hes happily engaged waiting to set a date!');
  alert('Correct! Hes happily engaged waiting to set a date!');
} else if (dansSpouse === 'yes'){
  // console.log('Wrong! He is only engaged.');
  alert('Wrong! He is only engaged.');
} else {
  // console.log('Please use Yes or No answers!');
  alert('Please use Yes or No answers!');
}

let dansFood = prompt('Is Dans favorite food filipino food? Yes or No?').toLowerCase();

console.log(dansFood);

if (dansFood === 'yes'){
  // console.log('Correct! It is the best in the world!');
  alert('Correct! It is the best in the world!');
} else if (dansFood === 'no'){
  // console.log('Wrong! Even though he will eat almost anything...');
  alert('Wrong! Even though he will eat almost anything...');
} else {
  // console.log('Please use Yes or No answers!');
  alert('Please use Yes or No answers!');
}

alert('Thanks ' + userName + '! I hope the quiz wasn\'t too hard!');

'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  //trim and set work to lowercase
  word = word.toLowerCase().trim();
  //console.log("trim and lowercase = " + word);
  
  //variables/array to be used
  let howBig = word.length;
  let vowelPosition = 100;
  let vowelArray = [ "a", "e", "i", "o", "u"];

  //loop array to find lowest vowel position
  for(let i = 0; i <= vowelArray.length -1; i++){
    let index = word.indexOf(vowelArray[i]);
    if(index >= 0 && index < vowelPosition){
      vowelPosition = index;
    }
  }

//console.log("vowel position=" + vowelPosition);

//if vowel is first of word postition 0 just add yay & return
if(vowelPosition == 0){ 
  let startVowel = "yay"
  return (word + startVowel);
}

  //if vowel is not first seperate word and reform then return
  let firstPartOfWord = word.substring(vowelPosition, howBig);
  let secondPartOfWord = word.substring(0,vowelPosition);
  let lastPartOfWord = "ay";

  return firstPartOfWord + secondPartOfWord + lastPartOfWord;


}



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}



// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
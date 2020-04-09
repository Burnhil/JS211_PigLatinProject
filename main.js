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

  word = word.toLowerCase().trim();
  //console.log("trim and lowercase = " + word);
  
  let howBig = word.length;
  let vowelPosition = 0;
  let vowelA = word.includes("a");
  let vowelE = word.includes("e");
  let vowelI = word.includes("i");
  let vowelO = word.includes("o");
  let vowelU = word.includes("u"); 

  let vowelArray = [];

  if(vowelA){
    vowelPosition = word.search("a");
    vowelArray[0] = vowelPosition;
    //console.log("vowel position=" + vowelPosition);
    //console.log("array 0 =" + vowelArray[0]);
  }
  if(vowelE){
    vowelPosition = word.search("e");
    vowelArray[1] = vowelPosition;
    //console.log("vowel position=" + vowelPosition);
    //console.log("array 1 =" + vowelArray[1]);
  }
  if(vowelI){
    vowelPosition = word.search("i");
    vowelArray[2] = vowelPosition;
    //console.log("vowel position=" + vowelPosition);
    //console.log("array 2 =" + vowelArray[2]);
  }else if(vowelO){
    vowelPosition = word.search("o");
    vowelArray[3] = vowelPosition;
    //console.log("vowel position=" + vowelPosition);
    //console.log("array 3 =" + vowelArray[3]);
  }
  if(vowelU){
    vowelPosition = word.search("u");
    vowelArray[4] = vowelPosition;
    //console.log("vowel position=" + vowelPosition);
    //console.log("array 4 =" + vowelArray[4]);
  }

//console.log("vowel position=" + vowelPosition);
if(vowelPosition == 0){ 
  let startVowel = "yay"
  return (word + startVowel);
}

  for(let i=0; i<5; i++){
    if(vowelArray[i] > 0){
      if(vowelArray[i] < vowelPosition){
        vowelPosition = vowelArray[i];
      }
    }
  }

  
  
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
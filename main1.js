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

const userWord = () =>{
    let doConvert = document.getElementById("userInput").value;
    console.log(doConvert);
    let finalConvert = pigLatin(doConvert);
    console.log(finalConvert);
    document.getElementById("convertedWord").innerHTML = finalConvert;

}


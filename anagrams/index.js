// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrgams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   
}



module.exports = anagrams;
























// function anagrams(stringA, stringB) {
//     let mapA = buildMap(stringA);
//     let mapB = buildMap(stringB);

//     if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//         return false;
//     }

//     for(let char in mapA) {
//       if (mapA[char] !== mapB[char]) {
//           return false
//       }
      
//     }
//     return true;

// }

// function buildMap(string){
//     let map = {};

//     for(let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//           map[char] = map[char] + 1 || 1
//     }
//     return map;
    
// }




// function anagrams(stringA, stringB) {
// return clean(stringA) === clean(stringB)

// }

// function clean(string){
//     return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

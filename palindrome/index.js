// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    
}

module.exports = palindrome;















// function palindrome(str) {
//     let revStr = str.split('').reverse().join('')

//     if (str === revStr) {
//         return true
//     }else {
//         return false
//     }
// }

// function palindrome(str) {
//     let left = -1;
//     let right = str.length;
   
//     while(++left <= --right) {
//       if(str[left] !== str[right]) return false;
//     }
   
//     return true;
//   }


// return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
// })
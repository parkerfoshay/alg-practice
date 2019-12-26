// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    
}

module.exports = vowels;
























// function vowels(str) {
//     return str.toLowerCase().split('').filter(function(letter){
//         let check = ['a', 'e', 'i', 'o', 'u']
//             return check.includes(letter)
//     }).length
// }



// function vowels(str) {
//     let counter = 0;
//     const check = ['a', 'e', 'i', 'o', 'u']

//     for(let char of str.toLowerCase()){
//         if(check.includes(char)){
//             counter++;
//         }
//     }
//     return counter
// }


// function vowels(str) {
//     const match = str.match(/[aeiou]/gi)
//     return match ? match.length : 0
// }




// function vowels(str) {
    

//     let re = str.replace(/[b-df-hj-np-tv-z]/g, '').split('');

//     console.log(re);
    
//      return re.length
// }

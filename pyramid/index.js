// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    
}

module.exports = pyramid;

















// function pyramid(n, row = 0, level = '') {
//     if(n === row){
//         return;
//     }

//     if(level.length === 2 * n -1){
//         console.log(level);
//         return pyramid(n, row + 1)
//     }

//     const midpoint = Math.floor((n * 2 - 1) / 2);
//     let add;

//     if(midpoint - row <= level.length && midpoint + row >= level.length){
//         add = '#';
//     }else{
//         add = ' ';
    
//     }
//     pyramid(n, row, level + add)
// }






// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2)

//     for(let row = 0; row < n; row++){
//         let level = '';

//         for(let columns = 0; columns < 2 * n - 1; columns++){
//             if(midpoint - row <= columns && midpoint + row >= columns){
//                 level += '#'
//             }else{
//                 level += ' '
//             }
//         }
//         console.log(level);
        
//     }
// }
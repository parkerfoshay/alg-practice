// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
   
}

module.exports = matrix;













































// function matrix(n) {
//     const results = [];

//     for(let i = 0; i < n; i++){
//         results.push([]);
//     }

//     let counter = 1;
//     let startColumns = 0;
//     let endColumns = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;

//     while(startColumns <= endColumns && startRow <= endRow){
//         // top row
//         for(let i = startColumns; i <= endColumns; i++){
//             results[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;

//         // right columns
//         for(let i = startRow; i <= endRow; i++){
//             results[i][endColumns] = counter;
//             counter++;
//         }
//         endColumns--;

//         // Bottom row
//         for(let i = endColumns; i >= startColumns; i--){
//             results[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;

//         // start columns

//         for(let i = endRow; i >= startRow; i--){
//             results[i][startColumns] = counter;
//             counter++;
//         }
//         startColumns++;
//     }

//     return results;
// }
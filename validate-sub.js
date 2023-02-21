/* first iterate through the array
check if number in sequence is in array
if number is not in sequence return false
if number is in sequence check next number
check the index of the first number compared to the second number 
if the index comes before the index of the second number return true and check next number
if not return false


*/

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let idx = 0
    for (let i = 0; i < array.length; i++){
            if (array[i] === sequence[idx]){
                idx++;
        }
    }
  }
  
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
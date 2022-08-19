//Approach
/*
-Iterate from arr[1] to arr[N] over the array. 
-Compare the current element (key) to its predecessor. 
-If the key element is smaller than its predecessor, compare it to the elements before. 
-Move the greater elements one position up to make space for the swapped element.
*/

let array = [5, 12, 6, 25, 16, 27];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      /* Move elements of arr[0..i-1], that are  
        greater than currenty, to one position ahead  
        of their current position */
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

insertionSort(array)
console.log(array)

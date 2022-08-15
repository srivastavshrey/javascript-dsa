//Approach
/*
-Initialize minimum value(minIdx) to location 0
-Traverse the array to find the minimum element in the array
-While traversing if any element smaller than min_idx is found then swap both the values.
-Then, increment min_idx to point to next element
-Repeat until array is sorted
*/

let array =[ 54,24,55,10,7,9]

//fucntion for swapping elements
const swap = (arr, p1, p2) => {
    let temp = arr[p1]
    arr[p1]=arr[p2]
    arr[p2]=temp
}

const selectionSort = (arr)=>{

    for(let i = 0; i < arr.length ;i++){
    // Finding the smallest number in the subarray
       let minIdx=i;
        for (let j = i+1; j < arr.length; j++) {
           if(arr[j]<arr[minIdx]) 
           minIdx = j
        }
        // Swapping the elements
        swap(arr,minIdx,i)
    }
    return arr
}



selectionSort(array)
console.log(array)


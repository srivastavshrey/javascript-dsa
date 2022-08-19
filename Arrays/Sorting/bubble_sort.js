//Approach
/*
-Compare n[i] & n[i+1]
-If n[i]>n[i+1] swap them
-Repeat until array is sorted
*/

let array =[ 23,29,55,13,75,99]

//fucntion for swapping elements
const swap = (arr, p1, p2) => {
    let temp = arr[p1]
    arr[p1]=arr[p2]
    arr[p2]=temp
}

const bubbleSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}

console.log(bubbleSort(array))
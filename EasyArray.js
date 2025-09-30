let LargestElement = (arr) => {
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > largest) largest = arr[i];
    }

    return largest
}

console.log(LargestElement([9,6,4,2,2,6,7,3,1]))

let SecondLargestElement = (arr) => {
    let largest = -Infinity;
    let SLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > largest) {
        SLargest = largest
        largest = arr[i];
       }else if (arr[i] > SLargest) {
        SLargest = arr[i]
       }
    }

    return {largest, SLargest}
}

console.log(SecondLargestElement([9,6,4,2,2,6,7,3,1]))
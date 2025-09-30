let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5]
let sortedArr = [ 1, 2, 3, 4, 5 ];

let removeDuplicateArr = (arr) => {
    const s = [];
    
    for(let i = 0; i < arr.length; i++){
        if(!s.includes(arr[i])) {
            s.push(arr[i])
        }
    }
    
    return s
}

console.log(removeDuplicateArr(arr))

let CountSubArr = (arr) => {
    let SubArray = [];
    
    for(let i = 0; i < arr.length; i++){
        let temp = []
        for( let j = i; j < arr.length; j++){
          temp.push(arr[j]);
          SubArray.push([...temp])
        }
    }
    
    return SubArray
}

console.log(CountSubArr(removeDuplicateArr(arr)))

let reverseArr = (arr) => {
    let result = []
    for(let i = arr.length - 1; i>=0; i--){
        result.push(arr[i])
    }
    
    return result
}

console.log(reverseArr(sortedArr))



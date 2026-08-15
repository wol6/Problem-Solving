
let head = [0,1,2,3]

function reverseList(arr){
    let result = []

    for(let i=arr.length-1;i>=0;i--){
        // console.log(arr[i])
        result.push(arr[i])
    }
    return result
}
console.log(reverseList(head))
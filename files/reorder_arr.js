let arr = [0, 1, 2, 3, 4, 5, 6]


function reOrder(arr) {
let n = arr.length-1
console.log(arr)
for(let i=1;i<arr.length;i+=2){
    let temp = arr[n]
    // console.log(n--)
    arr[n] = arr[i]
    arr[i] = temp
    n--
}
return arr
}
console.log(reOrder(arr))
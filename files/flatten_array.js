// const newArr = []

function flattenArray(arr,newArr=[]) {
  
    for (let item of arr) {
        if (Array.isArray(item)) {
            flattenArray(item,newArr)
        } else {
            newArr.push(item)
        }
    }
    return newArr
}

const arr = [[1], 2, [[3]], 4, [5]]

console.log(flattenArray(arr))
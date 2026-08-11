
function findDuplicate(check,arr) {
    let dupArr = []
    let newArr = []
    for (let item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }else{
            dupArr.push(item)
        }
    }
    if(check=='fd') return dupArr
    if(check=='rd') return newArr
    return dupArr
}
const arr = [1, 2, 3, 4, 5, 6, 2, 1, 4, 5]
console.log('original array :',arr)
console.log('find dup',findDuplicate('fd',arr))
console.log('remove dup',findDuplicate('rd',arr))
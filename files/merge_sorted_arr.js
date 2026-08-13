
let list1 = [1,2,4], list2 = [1,3,5]

function sortedList(list1,list2){

    // return [...list1,...list2].sort()
    const result = [...list1,...list2]
// console.log(result)
    for(let i=0;i<result.length;i++){
        for(let j=0;j<result.length;j++){
            if(result[i]<result[j]){
                let temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }
    return result

}

console.log(sortedList(list1,list2))
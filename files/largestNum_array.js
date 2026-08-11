const arr = [10,3,5,7,9,11]
let largestNum = arr[0]
let _2largestNum

for(let num of arr){
    if(num>largestNum){
        _2largestNum=largestNum
        largestNum = num
    }else if(num>_2largestNum && num!==largestNum){
        _2largestNum=num
    }
}

console.log('Largest no:',largestNum,_2largestNum)

let smallestNum = arr[0]
let _2smallestNum 

for(let num of arr){
    if(num<smallestNum){
        _2smallestNum = smallestNum
        smallestNum = num
    }else if(num<_2smallestNum && num !==smallestNum){
        _2smallestNum = num
    }
}

console.log('Smallest no:',smallestNum,_2smallestNum)
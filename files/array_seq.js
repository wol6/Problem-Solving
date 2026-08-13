
// [ [1,3],[2,6],[9,12] ]
// op:[ [1,6],[9-12] ]

function main(arr) {
    let newArr = [arr[0]]

    for (let i = 1; i < arr.length; i++) {

        let last = newArr[newArr.length-1]
        let current = arr[i]

        if(current[0]<=last[1]){
            last[1] = Math.max(current[1],last[1])
        }else{
            newArr.push(current)
        }

    }
    console.log(newArr)
}

main([[1, 3], [2, 6], [9, 12]])
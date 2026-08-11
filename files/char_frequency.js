let str = 'Mathematics'

function charFreq(str, result = {}) {
    str = str.toLowerCase()
    console.log(str)
    for (let s of str) {
        // result[s] = (result[s] || 0) + 1
        if(result[s]){
            result[s]+=1
        }else{
            result[s] = 1
        }
    }

    return result
}
console.log(charFreq(str))
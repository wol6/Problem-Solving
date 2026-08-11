
function checkAnagram(str1,str2){
    if(str1.length!==str2.length) return 'not an anagram'

    let newStr1 = str1.split('').sort().join('')
    let newStr2 = str2.split('').sort().join('')
    
    if(newStr1!==newStr2) return 'not an anagram'

    return `is an anagram`
}

console.log(checkAnagram('spar','rasp'))

//using frequency counter

function checkAnagramFreq(str1,str2){
    if(str1.length!==str2.length) return 'f not an anagram'

    let charObj = {}

    for(let s of str1){
        if(!charObj[s]){
            charObj[s] = 1
        }else{
            charObj[s]+=1
        }
    }
    
    for(let s of str2){
        if(!charObj[s]){
            return 'fs not an anagram'
        }
        charObj[s]--
    }

return 'f is an anagram'
}
console.log(checkAnagramFreq('below','elbow'))

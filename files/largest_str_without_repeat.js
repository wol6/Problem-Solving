

function checkStr(str) {
    let newStr = ""
    let maxlen = 0
    for (let i = 0; i < str.length; i++) {
        let index = newStr.indexOf(str[i]) !== -1
        if (index) {
            //remove first match
            newStr = newStr.slice(index + 1)
        }
        newStr += str[i]
        maxlen = Math.max(maxlen, newStr.length)

    }
    return maxlen
}

console.log(checkStr('abcabcbb'))
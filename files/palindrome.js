import { reverseString } from "./reverseString.js"

function checkPalindrome(str) {
    const reversedStr = reverseString(str)

    if (str == reversedStr) {
        console.log(str, 'Yes its palindrome')
    } else {
        console.log(str, 'Not a palindrome')
    }
}

checkPalindrome('malayalam')
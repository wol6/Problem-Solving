//sum of two before  0,1,1,2,3,5,8

function fibonaci(n) {
    let a = 0
    let b = 1
    let arr = [a,b]
    for (let i = 2; i <= n; i++) {
        let c = a + b
        arr.push(c)
        a = b
        b = c
    }
    return arr

}
console.log(...fibonaci(6))
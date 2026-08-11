
function counter() {
    let count = 0

    function inc() {
        count++
        return count
    }
    return inc
}

const inc = counter()

console.log(inc())
console.log(inc())
console.log(inc())


function debounce(sec) {
    let timer

    return function (search) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            console.log(search)
        }, sec)
    }
}

let search = debounce(1000)
search('al')
search('alic')
search('alice')

function throttle() {
    let flag = true

    return function (event) {
        if (flag) {
            flag = false
            console.log(event, 'called func')
            setTimeout(() => {
                flag = true
            }, 2000)
        }
    }
}
const fn = throttle()
fn('click 1')
fn('click 2')
fn('click 3')
setTimeout(()=>fn('click 4'),2400)
fn('click 5')

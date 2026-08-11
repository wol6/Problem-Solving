const obj = {
    name: "John",
    address: {
        city: "New York",
        country: {
            code: "US",
            zip: 10001
        }
    }
}

const newObj = {}

function flattenObj(obj, childKey = '',result={}) {
    for (let [key, value] of Object.entries(obj)) {
        let newKey = childKey ? `${childKey}.${key}` : key

        if (typeof value == 'object') {
            flattenObj(value, newKey,result)
        } else {
            // newObj[newKey] = value
            result[newKey] = value
        }
    }
    return result
}
const flattened = flattenObj(obj)
console.log(flattened)

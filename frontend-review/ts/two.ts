function isString(x: string | number): x is string {
    return typeof x === 'string';
}
 
let k = 9 

console.log(isString(k))
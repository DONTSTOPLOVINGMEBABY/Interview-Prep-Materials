type greeterArgument = (message : string) => void

function greeter( fn: greeterArgument){
    fn('Hello World')
}

function printMessage ( message: string ) : void {
    console.log(message)
}

greeter(printMessage)


// callable function with properties 

type DesirableFunction = {
    description: string; 
    (message: string) : boolean; 
}

function doSomething1 ( fn: DesirableFunction ) : void {
    console.log(fn.name)
}

function goesWithDoSomething1 ( msg: string ): boolean {
    return msg === 'Henry'
}

goesWithDoSomething1.description = 'Henry'

doSomething1(goesWithDoSomething1)


// Construct signatures 

type SomeObject = any 

type SomeConstructor = {
    new (msg : string): SomeObject
}

function returnsNewInstance (fn: SomeConstructor) {
    return new fn('hello world')
}

class MyObject implements SomeObject {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }
}

const instance = returnsNewInstance(MyObject);

console.log(instance.msg); 


// Generics

function whatIsHappening <T> (arr: T[]) : T | undefined {
    return arr[0]
}

function plain (arr: any[]) {
    return arr[0]
}


const array = [1, 2, 3, false]

const rType = whatIsHappening(array)
const rType2 = plain(array)


function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));


// extends is imposing a constraint on our generic such that it must have a field 
// called number defined that is of type number

function longest<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

function combine<Type1, Type2>(arr1: Type1[], arr2: Type2[]): (Type1 | Type2)[] {
    return arr1.concat(arr2 as any) as (Type1 | Type2)[];
}

function combineOriginal<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = ["hello", "darkness", "my", "old", "friend"]
const arr4 = combine(arr1, arr2)
const arr5 = combine(arr1, arr3)
console.log(arr4, arr5)
const arr6 = combineOriginal(arr1, arr2)
const arr7 = combineOriginal<string | number>(arr1, arr3)

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}

const resultsFilter1 = filter1([100, 200, 300, 400, 500], (n) => n > 300)
const resultsFilter2 = filter2([100, 200, 300, 400, 500], (n) => n > 300)


/* Function Overloading */

function overloadedFunction (a: number) : string 
function overloadedFunction (a: string) : number 

function overloadedFunction (a: number | string) : string | number {
    if (typeof a === "number"){
        return "A string!"
    }
    else {
        return 1001
    }
}

const aString = overloadedFunction(1)
const aNumber = overloadedFunction("hi")

/* Rest arguments */

const arr8 = [1, 2, 3]
const arr9 = [4, 5, 6]
// typescript is expecting an arg of type number not number[] since 
// arr8 is inferred to have an array whose elements are of type number 
// The as const assertion in TypeScript is used to indicate that a variable 
// is a constant whose type should be taken literally, preventing TypeScript from widening its type. 
arr8.push(...arr9)



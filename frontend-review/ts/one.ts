
/* 
    Interfaces vs Types 
*/

// Interfaces can be extended whereas types cannot after their initial declaration 

interface Person1 {
    name: string, 
    age: number
}

interface NewYorker extends Person1 {
    annoyingAccent: boolean
}

type Person0 = {
    name: string,
    age: number
}

// can't do this
// type Person00 extends Person0 

/* 
    Interfaces vs Types 
*/



/* 

    Literal Types 

*/

const cantChange = 'Hello'
 
function hiThere (alignment: 'Hi' | 'There' | 'Friend'): -1 | 0 | 1 {
    if (alignment === 'Hi') { return -1 }
    else if (alignment === 'There') { return 0 }
    else { return 1 }
}

hiThere('Hi')
// cant do this
// hiThere('No!')

/* ENUMS */


enum Hank {
    'hi', 
    'there', 
    'friend', 
}

enum StringEnum {
    Henry = 'hi', 
    Nice = 'To-See-Ya'
}

console.log(Hank)
console.log(StringEnum)

function PrintString (message : string) : void {
    console.log(message)
}

PrintString(StringEnum.Henry)

/* ENUMS */
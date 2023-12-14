interface Fish { gills: boolean, name: string }
interface Bird { wings: boolean, name: string }


const fish1 : Fish = { gills: true, name: 'gill' }
const fish2 : Fish = { gills: true, name: 'gilbert' }
const fish3 : Fish = { gills: true, name: 'gilligan' }

const bird1 : Bird = { wings: true, name: 'winter' }
const bird2 : Bird = { wings: true, name: 'coat' }
const bird3 : Bird = { wings: true, name: 'cozy' }


const animals : (Fish | Bird)[] = [ fish1, fish2, fish3, bird1, bird2, bird3 ]

/* 

isFish is a function that takes a parameter called animal of either type Bird or Fish. 

The function checks if the gills property is available on animal, which asserts that animal is of type fish. 

animal is Fish asserts that the function returns true if the argument given to isFish (animal) is of type Fish 

*/

function isFish ( animal: Bird | Fish ) : animal is Fish {
    return "gills" in (animal as Fish)
}

function isBird ( animal: Bird | Fish ) : animal is Bird {
    return (animal as Bird).wings === true
}


const birds = animals.filter( animal => isBird(animal) )
const fishes = animals.filter( animal => isFish(animal) )

console.log(fishes)
console.log("\n\n")


birds.forEach((bird) => {
    console.log(bird.name)
})

fishes.forEach((fish) => {
    console.log(fish.name)
})
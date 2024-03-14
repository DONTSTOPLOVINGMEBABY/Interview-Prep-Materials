function calcDroneMinEnergy(route) {
    let smallest = Infinity
    if (route.length === 1) { return 0 }
    let beginning = route[0][2]
    let max = -Infinity
    for (let entry of route) {
        let altitude = entry[2]
        if (altitude > max) {
            max = altitude
        }
    }

    return max - beginning
}


let route = [[0, 2, 10],
[3, 5, 0],
[9, 20, 6],
[10, 12, 15],
[10, 10, 8]]

calcDroneMinEnergy(route)
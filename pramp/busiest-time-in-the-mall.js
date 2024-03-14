function findBusiestPeriod(data) {
    let peakPeople = -1, peakTime = 0, currPeople = 0

    for (let i = 0; i < data.length; i++) {
        let [timeStamp, numPeople, comeGo] = data[i]

        if (comeGo === 0) { numPeople *= -1 }
        currPeople += numPeople

        if ((i === data.length - 1 || timeStamp !== data[i + 1][0]) && currPeople > peakPeople) {
            peakPeople = currPeople
            peakTime = timeStamp
        }
    }
    return peakTime
}


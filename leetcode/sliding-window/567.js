/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let frequencies = {}
    let ptr1 = 0
    // O(s1.length)
    for (let i = 0; i < s1.length; i++) {
        if (frequencies[s1[i]]) { frequencies[s1[i]] += 1 }
        else { frequencies[s1[i]] = 1 }
    }
    let frequencies2 = JSON.parse(JSON.stringify(frequencies))
    while (ptr1 < s2.length) {
        let ptr2 = ptr1
        while (frequencies2.hasOwnProperty(s2[ptr2]) && ptr2 < s2.length) {
            frequencies2[s2[ptr2]] -= 1
            let allZeros = true
            for (let key of Object.keys(frequencies2)) {
                if (frequencies2[key] < 0 || frequencies2[key] > 0) {
                    allZeros = false
                    break
                }
            }
            if (allZeros) { return true }
            ptr2 += 1
        }
        ptr1 += 1
        frequencies2 = JSON.parse(JSON.stringify(frequencies))
    }
    return false
};

/*

ptr1 = 0 
ptr2 = 0 


s1 = "ab", s2 = "eidbaooo"

original_characters = {
    "a" : 1, 
    "b" : 1 
}

characters = {
    "a" : 1, 
    "b" : 1 
}

const deepCopy = JSON.parse(JSON.stringify(originalObject));

*/
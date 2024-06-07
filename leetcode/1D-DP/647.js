/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let numPalindromes = 0
    for (let i = 0; i < s.length; i++) {
        numPalindromes += 1
        let left = i - 1, right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            numPalindromes += 1
            left -= 1
            right += 1
        }

        left = i, right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            numPalindromes += 1
            left -= 1
            right += 1
        }
    }

    return numPalindromes
};

/* 
"abc"

a, b, c

"aaa"

a, a, a, aa, aa, aaa

*/
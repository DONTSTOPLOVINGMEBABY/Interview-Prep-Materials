/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) { return s }
    let res = '', resLen = 0
    for (let i = 0; i < s.length; i++) {
        let left = i - 1, right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > resLen) {
                res = s.slice(left, right + 1)
                resLen = right - left + 1
            }
            left -= 1
            right += 1
        }

        left = i, right = i + 1
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > resLen) {
                res = s.slice(left, right + 1)
                resLen = right - left + 1
            }
            left -= 1
            right += 1
        }
    }
    return res
};

let s = "ac"
longestPalindrome(s)

/* 
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0

        for i in range(len(s)):
            # odd length
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l : r + 1]
                    resLen = r - l + 1
                l -= 1
                r += 1

            # even length
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l : r + 1]
                    resLen = r - l + 1
                l -= 1
                r += 1

        return res

*/
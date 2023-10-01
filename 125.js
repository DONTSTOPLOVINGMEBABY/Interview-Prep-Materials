/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if (s.trim().length === 0){ return true }
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    while (s.length > 1){
        let first = s[0]
        let last = s[s.length - 1]
        console.log(first, last)
        if (first === last){
            s = s.substring(1, s.length - 1)
            continue
        }
        return false 
    }
    return true 
};

/*
125. Valid Palindrome
Easy
8.2K
7.8K
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 


*/
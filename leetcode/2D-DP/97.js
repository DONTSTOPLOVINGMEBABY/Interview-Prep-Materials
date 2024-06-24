/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) { return false }
    let dp = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill(false))
    dp[s1.length][s2.length] = true
    for (let i = s1.length; i >= 0; i--) {
        for (let j = s2.length; j >= 0; j--) {
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true
                continue
            }
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true
            }
        }
    }
    return dp[0][0]
};


/*                                
s1 = "a"
s2 = "b"
s3 = "ab"

        0   1

        b   
0   a   f   f

1       f   t




                                  0123456789
s2 = "aabcc", s1 = "dbbca", s3 = "aadbbcbcac"

         0   1   2   3   4   5                  

         a   a   b   c   c   
0    d   t   t   x   x   x   x

1    b   x   x   x   x   x   x

2    b   x   x   x   x   x   x

3    c   x   x   x   x   x   x

4    a   x   x   x   x   t   f
    
5        f   f   f   f   t   t

s3[i + j] = c, s2[j] = c 
i = 5, j = 4, i + j = 9  

If we are going to use character a (4) from s2, then we want to know that we were able to make character 9 
in the string, and that the substring order is maintained. 

We initialize the last value to true because this basically represents that we have made it to the end of our interleaved string, which means that we have been able to construct the target string given the two input strings s1 and s2 


(4, 5)
9?  --> possible character we can use is a 

(4, 4) --> possible character we can use is c, a
8?


-------------------------------------------------
Last row

(4, 5) --> possible character we can use is c, can we use this character to make the string located at position
9? 

(3, 5) --> possible character we can use is c 
8?

(2, 5) --> possible character we can use is b
7?

(1, 5) --> possible character we can use is a 
6?

(0, 5) --> possible character we can use is a 
5?
*/
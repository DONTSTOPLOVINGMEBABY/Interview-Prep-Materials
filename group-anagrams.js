const strs = ["eat","tea","tan","ate","nat","bat"]

// since they are all anagrams, or we expect its possible for them to be
// then i think it safe to assume they are all the same length
// m = number of words in strs and n = numer of letter per word


// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//     let hmap = {}
//     for (let string of strs) {
//         let count = Array(26).fill(0)
//         for (let char of string){
//             count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1 
//         }
//         if (hmap[count]) { hmap[count] = [...hmap[count], string] }
//         else { hmap[count] = [ string ] }
//     }
//     let return_arr = []
//     for (let item in hmap){
//         return_arr.push(hmap[item])
//     }
//     return return_arr
// };


var groupAnagrams = function(strs) {
    let result = new Map()
     strs.forEach(str=>{
         let sorted = str.split("").sort().join("");
         if(result.has(sorted)){
             result.set(sorted, [...result.get(sorted),str])
         }
         else{
             result.set(sorted, [str])
         }
     });
     return Array.from(result.values());
 };


groupAnagrams(strs)
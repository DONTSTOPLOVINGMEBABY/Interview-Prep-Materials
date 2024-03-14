/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const preMap = {}
    for (let i = 0; i < numCourses; i++) {
        preMap[i] = []
    }
    for (let [crs, pre] of prerequisites) {
        preMap[crs].push(pre)
    }
    const visiting = new Set()

    function dfs(crs) {
        if (visiting.has(crs)) { return false }
        if (preMap[crs].length === 0) { return true }
        visiting.add(crs)
        /* This seems like an important pattern where you loop through every subitem and call dfs on the subitem
           by wrapping the return value of the function in an if statement and then returning again  
        */
        for (let pre of preMap[crs]) {
            if (!dfs(pre)) { return false }
        }
        visiting.delete(crs)
        // This allows us to update our graph so that future lookups are faster 
        preMap[crs] = []
        return true
    }
    /* Another pattern of strictly calling it for every input */
    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) { return false }
    }
    return true
};


const preReq = [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]]
const wontWork = [[0, 1], [1, 2], [2, 0]]

console.log(canFinish(5, preReq))
// console.log(canFinish(3, wontWork))

/* 
construct an adjacency list for every given node with their prerequisites 

perform bfs on each node until it either reaches a leaf or until it hits a cycle

Keep track of the visited for each node, if the visited set has a prereq in it, then
we are in a cycle and return false

if we make it through every given node, then we are not in a cycle 



*/
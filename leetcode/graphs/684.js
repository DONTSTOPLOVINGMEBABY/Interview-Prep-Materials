/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let par = [], rank = []
    for (let i = 0; i <= edges.length; i++) {
        par.push(i)
        rank.push(1)
    }

    // this function will find the parent of n
    function find(n) {
        let p = par[n]
        while (p != par[p]) {
            par[p] = par[par[p]]
            p = par[p]
        }
        return p
    }

    // this function will union two nodes together, such that they point at the same parent 
    function union(n1, n2) {
        let p1 = find(n1), p2 = find(n2)
        if (p1 === p2) {
            return false
        }
        if (rank[p1] > rank[p2]) {
            console.log([n1, n2], `${p1} now parent of ${p2}. ${p1} rank: ${rank[p1]}, ${p2} rank: ${rank[p2]}`)
            par[p2] = p1
            rank[p1] += rank[p2]
        }
        else {
            console.log([n1, n2], `${p2} now parent of ${p1}. ${p1} rank: ${rank[p1]}, ${p2} rank: ${rank[p2]}`)
            par[p1] = p2
            rank[p2] += rank[p1]
        }
        return true
    }

    for (let [node1, node2] of edges) {
        if (!union(node1, node2)) {
            return [node1, node2]
        }
    }
};

const firstSet = [[1, 2], [1, 3], [2, 3]]
// output should be [2, 3]

const secondSet = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
// output should be [1, 4] 

const thirdSet = [[7, 8], [2, 6], [2, 8], [1, 4], [9, 10], [1, 7], [3, 9], [6, 9], [3, 5], [3, 10]]
// This one will fail without path compression 
// Output should be [3, 10]

// console.log(findRedundantConnection(firstSet))
// console.log(findRedundantConnection(secondSet))
console.log(findRedundantConnection(thirdSet))
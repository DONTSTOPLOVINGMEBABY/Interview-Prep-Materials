/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let parents = [], rank = []
    for (let i = 0; i < edges.length; i++) {
        parents.push(i + 1)
        rank.push(1)
    }
    console.log(parents, rank)
    for (let [node1, node2] of edges) {
        if (parents[node2 - 1] !== node2) {
            return [node1, node2]
        }
        parents[node2 - 1] = node1
    }
};

const edges = [[1, 2], [1, 3], [2, 3]], edges2 = [[1, 4], [3, 4], [1, 3], [1, 2], [4, 5]]
console.log(findRedundantConnection(edges))


/* 

We go through [node1, node2] of edges and first try and set node2 to be a child of node1. 
We do this by going into the parent array to first find the entry for node2. If the entry for
node2 is not node2 (aka they don't have the same value and node2 is not a parent of itself), 
then we set node2 to be a child of node1 in the parent array and increment node1's numChildren 
by 1. 



parent array = [ 1, 1, 1 ]

numChildren = [ 2, 0, 0 ]

[
    [1,2],
    [1,3],
    [2,3]
]

parent array = []


*/

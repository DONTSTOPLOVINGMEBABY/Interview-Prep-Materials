/* 
Solved using union find
*/

function validTree(n, edges) {
    // every node needs to be in the tree and there can't be any cycles in the 
    // graph 
    const par = [], rank = [], roots = new Set()
    for (let i = 0; i < n; i++) {
        par.push(i)
        rank.push(1)
        roots.add(i)
    }

    // finds the ultimate parent of another node 
    function find(node) {
        let p = par[node]
        while (p != par[p]) {
            par[node] = par[par[p]]
            p = par[par[p]]
        }
        return p
    }

    function union(node1, node2) {
        let parent1 = find(node1), parent2 = find(node2)

        if (parent1 === parent2) { return false }

        if (rank[parent1] > rank[parent2]) {
            roots.delete(parent2)
            par[parent2] = parent1
            rank[parent1] += rank[parent2]
        }
        else {
            roots.delete(parent1)
            par[parent1] = parent2
            rank[parent2] += rank[parent1]
        }
        return true
    }

    for (let [node1, node2] of edges) {
        if (!union(node1, node2)) { return false }
    }

    if (roots.size !== 1) { return false }
    return true

}

/* 
Solved using an adjacency list and dfs
*/
function validTreeAdjList(n, edges) {
    let adjList = {}, visited = new Set()
    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }
    for (let [node1, node2] of edges) {
        adjList[node1].push(node2)
        adjList[node2].push(node1)
    }

    function dfs(node, parent) {
        if (node === parent || parent === null) { return true }
        else if (visited.has(node)) { return false }
        for (let child of adjList[node]) {

            if (!dfs(child, node)) { return false }
        }
        return true
    }

    for (let i = 0; i < n; i++) {
        if (!dfs(i, null)) { return false }
    }
    if (visited.size !== n) { return false }
    return true
}

const n = 5
const edges = [[0, 1], [1, 2], [2, 3], [3, 4]]
validTreeAdjList(n, edges)
// correct output 


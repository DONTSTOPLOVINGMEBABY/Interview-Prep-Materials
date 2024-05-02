function countComponents(n, edges) {
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

        if (rank[parent1] > rank[parent2]) {
            if (parent1 !== parent2) { roots.delete(parent2) }
            par[parent2] = parent1
            rank[parent1] += rank[parent2]
        }
        else {
            if (parent1 !== parent2) { roots.delete(parent1) }
            par[parent1] = parent2
            rank[parent2] += rank[parent1]
        }
    }

    for (let [node1, node2] of edges) {
        union(node1, node2)
    }

    return roots.size
}

const edges = [[0, 1], [1, 2], [3, 4]]
const n = 5
console.log(countComponents(n, edges))
// correct output should be 2 

const edges2 = [[0, 1], [1, 2], [2, 3], [3, 0]]
const n2 = 4
console.log(countComponents(n2, edges2))
// correct output should be 1 
// this is one where we try to connect 

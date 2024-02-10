class Node {
    constructor(val, neighbors) {
        this.val = val
        this.neighbors = neighbors
    }
}


let one = new Node(1, [])
let two = new Node(2, [])
let three = new Node(3, [])
let four = new Node(4, [])

one.neighbors.push(two, four)
two.neighbors.push(one, three)
three.neighbors.push(two, four)
four.neighbors.push(one, three)

// var cloneGraph = function (node) {
//     let stack = [], visited = {}
//     if (!node) { return }
//     let ogNode = new Node(node.val, node.neighbors)
//     stack.push(ogNode)
//     visited[node.val] = node
//     while (stack.length) {
//         let item = stack.pop()
//         for (let neighbor of item.neighbors) {
//             if (visited[neighbor.val]) {
//                 item.neighbors.push(neighbor.val)
//                 continue
//             }
//             let newNode = new Node(neighbor.val, neighbor.neighbors)
//             item.neighbors.push(newNode)
//             stack.push(neighbor)
//             visited[newNode.val] = newNode
//         }
//     }
//     return ogNode
// };

// var cloneGraph = function (node) {
//     if (!node) { return [] }
//     let nodes = {}, stack = []
//     // let ogNode = new Node(node.val, node.neighbors)
//     stack.push(node)
//     while (stack.length) {
//         let item = stack.pop()
//         if (!item) { continue }
//         let storedObject = nodes[item.val]
//         if (!storedObject) {
//             storedObject = new Node(item.val, [])
//             nodes[item.val] = storedObject
//         }
//         item.neighbors.forEach((object, index) => {
//             if (!nodes[object.val]) {
//                 let newNeighborNode = new Node(object.val, [])
//                 storedObject.neighbors.push(newNeighborNode)
//                 nodes[object.val] = newNeighborNode
//             }
//         })
//     }
//     return ogNode
// };

var cloneGraph = function (node, seen = new Map()) {
    const isBaseCase = node === null;
    if (isBaseCase) return null;

    if (seen.has(node)) return seen.get(node);

    return dfs(node, seen);                              /* Time O(V + E) | Space O(N) */
}

const dfs = (node, seen) => {
    const clone = new Node(node.val);

    seen.set(node, clone);                               /*               | Space O(N) */

    for (const neighbor of node.neighbors) {
        const cloneNeighbor = cloneGraph(neighbor, seen);/* Time O(V + E) | Space O(H) */

        clone.neighbors.push(cloneNeighbor);             /*               | Space O(V + E) */
    }

    return clone;
}

console.log(cloneGraph(one))

/*
    if (!node) { return [] }
    console.log(node.val)
    let nodes = {}, firstNodeVal = node.val, stack = []
    stack.push(node)
    while (stack.length){
        let item = stack.pop()
        if (!item) { continue }
        let userCreatedItem = nodes[item.val]
        if (!userCreatedItem){
            userCreatedItem = new Node(item.val, [])
        }
        item.neighbors.forEach((neighbor) => {
            if (nodes[neighbor.val]){
                userCreatedItem.neighbors.push(nodes[neighbor.val])
            }
            else {
                let createNode = new Node(item.val, [])
                userCreatedItem.neighbors.push(createNode)
            }
        })
    }
    return nodes[firstNodeVal]

*/


// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
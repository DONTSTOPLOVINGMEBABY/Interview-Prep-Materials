/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let adjList = {}
    const visited = new Set()
    let list = [], listVisited = new Set()
    for (let i = 0; i < numCourses; i++) { adjList[i] = [] }
    for (let [course, preReq] of prerequisites) {
        adjList[course].push(preReq)
    }

    function search(courseNum) {
        if (adjList[courseNum].length === 0) {
            if (!listVisited.has(courseNum)) {
                list.push(courseNum)
                listVisited.add(courseNum)
            }
            return true
        }
        if (visited.has(courseNum)) { return false }

        visited.add(courseNum)

        for (let course of adjList[courseNum]) {
            if (!search(course)) { return false }
        }

        visited.delete(courseNum)
        adjList[courseNum] = []
        if (!listVisited.has(courseNum)) { list.push(courseNum); listVisited.add(courseNum) }
        return true
    }

    for (let course = 0; course < numCourses; course++) {
        if (!search(course)) { return [] }
    }
    return list
};


const numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
console.log(findOrder(numCourses, prerequisites))

/*

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].


# 207 - Course Schedule I 
var canFinish = function (numCourses, prerequisites) {
    let adjList = {}
    const visited = new Set()
    for (let i = 0; i < numCourses; i++) { adjList[i] = [] }
    for (let [course, preReq] of prerequisites) {
        adjList[course].push(preReq)
    }

    function search(courseNum) {
        if (adjList[courseNum].length === 0) { return true }
        if (visited.has(courseNum)) { return false }

        visited.add(courseNum)

        for (let course of adjList[courseNum]) {
            if (!search(course)) { return false }
        }

        visited.delete(courseNum)
        adjList[courseNum] = []
        return true
    }

    for (let course = 0; course < numCourses; course++) {
        if (!search(course)) { return false }
    }
    return true
};
*/
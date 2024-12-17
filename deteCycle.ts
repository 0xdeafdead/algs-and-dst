const graph: Map<string, string[]> = new Map();
graph.set('A', ['B', 'C']);
graph.set('B', ['D', 'E']);
graph.set('C', ['F',]);
graph.set('D', []);
graph.set('E', []);
graph.set('F', ['A']);


function isValid(initialNode: string, explored: string[]) {
    console.log('initialNode', initialNode)
    console.log('explored', explored)
    const nextRoutes = graph.get(initialNode);
    console.log('nextRoutes', nextRoutes)
    const incl = explored.includes(initialNode)
    console.log('incl', incl)
    if (explored.length > 0 && incl) return false;
    if (nextRoutes && nextRoutes.length > 0) {
        explored.push(initialNode);
        // nextRoutes.forEach((route) => {
        //     return isValid(route, explored)
        // })
        for (let index = 0; index < nextRoutes.length; index++) {
            const element = nextRoutes[index];
            if (!isValid(element, explored)) {
                return false
            }
        }
    }
    return true;
}


if (!isValid('E', [])) {
    console.log("Is invalid")
}

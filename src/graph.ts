export type Graph = {
    nodes: Node[];
};
export type Node = {
    id: number;
    connectedTo: Node[];
};

/**
 * Generates a graph object from the provided list of undirected connections.
 * @param connections 
 */
export function generateGraph(connections: [nodeA: number, nodeB: number][]): Graph {
    const nodes: Record<number, Node> = {};
    const getOrAddNode = (id: number) => nodes[id] ??= {
        id,
        connectedTo: [],
    };

    connections.forEach(connection => {
        const [nodeIdA, nodeIdB] = connection;
        const nodeA = getOrAddNode(nodeIdA);
        const nodeB = getOrAddNode(nodeIdB);

        nodeA.connectedTo.push(nodeB);
        nodeB.connectedTo.push(nodeA);
    });

    // return nodes sorted by id (asc)
    const sortedNodes = Object.values(nodes).sort((a,b) => a.id - b.id);
    return {
        nodes: sortedNodes,
    };
}
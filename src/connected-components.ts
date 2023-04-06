import type { Graph, Node } from "./graph";

export type ConnectedComponentsInfo = {
    components: number;
    nodes: number;
};

export function getConnectedComponents(graph: Graph): ConnectedComponentsInfo {
    let numberOfVisitedNodes = 0;
    const visitedNodes = new Set<Node>();
    let nodeStack: Node[] = [graph.nodes[0]];

    while(nodeStack.length > 0) {
        let node = nodeStack.pop()!;
        visitedNodes.add(node);
        numberOfVisitedNodes++;

        const addNodes = node.connectedTo.filter(n => !visitedNodes.has(n));
        nodeStack.push(...addNodes);
    }

    return {
        components: 1,
        nodes: numberOfVisitedNodes,
    };
}
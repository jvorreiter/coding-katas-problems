/*
TODO: Description of the problem (use "social network size" here)

*/

import type { Graph, Node } from "../_shared/graph";

export type ConnectedComponentsInfo = {
    components: number;
    nodes: number;
};

export function getConnectedComponents(graph: Graph): ConnectedComponentsInfo {
    let numberOfVisitedNodes = 0;
    const visitedNodes = new Set<Node>();
    let nodeStack: Node[] = [graph.nodes[0]];

    while(nodeStack.length > 0) {
        // take unvisited node from the stack and mark it as visited
        let node = nodeStack.pop()!;
        visitedNodes.add(node);
        numberOfVisitedNodes++;

        // then add all not-visited neighbor nodes to the stack
        const addNodes = node.connectedTo.filter(n => !visitedNodes.has(n));
        nodeStack.push(...addNodes);
    }

    return {
        components: 1,
        nodes: numberOfVisitedNodes,
    };
}
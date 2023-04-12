/* 
 * Context:
 * A graph is a set of nodes that are connected with each other.
 * Here, the graph represents a social network, where 
 * - a node represents a user of the social network, and
 * - a connection between two nodes represents a friendship between two users
 *    - connections are not directed, so a node A ist connected to B and vice versa
 * 
 * Also, a "connected component" is the (sub)set of nodes, which are connected 
 * directly or indirectly (called "transitive connection", e.g. "a friend of a friend of a friend"). 
 * 
 * Task:
 * The function below is supposed to take a graph and output the number of connected components 
 * and the number of nodes per connected component.
 * However, the employee writing that function just left the company and just said "it works, i tested it".
 * Find and fix all bugs in that function using test-driven development.
 */

import type { Graph, Node } from "../_shared/graph";

export type ConnectedComponentsInfo = {
    /** number of connected components */
    components: number;
    /** numbers of nodes per connected component */
    nodes: number[];
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
        nodes: [numberOfVisitedNodes],
    };
}
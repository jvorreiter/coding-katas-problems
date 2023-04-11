/*
TODO: description of the problem (cactus problem, context here "supply chains in the company")
-> Cycles dependencies cost time and money, so we want to detect them
-> there can be multiple cycles, but there will never be two cycles that share more than one person
*/

import { Graph, Node } from "../_shared/graph";
import { isValidSupplyChain } from "./utils/isValidSupplyChain";

export function getSupplyChainCost(graph: Graph): number {
    if (!isValidSupplyChain(graph)) {
        throw new Error('invalid supply chain graph');
    }

    const getCycleCost = (node: Node, lastNode?: Node, visitedNodes: Node[] = []): number => {
        visitedNodes.push(node);

        for (const neighbor of node.connectedTo) {
            // prevent infinite cycles with neighbors
            if (neighbor.id == lastNode?.id) {
                continue;
            }

            if(visitedNodes.includes(neighbor)) {
                return visitedNodes.length ** 2;
            }

            const cost = getCycleCost(neighbor, node, [...visitedNodes]);
            if(cost > 0) {
                return cost;
            }
        }

        return 0;
    };
    const startNode = graph.nodes[0];
    const cycleCost = getCycleCost(startNode);

    return cycleCost + graph.nodes.length;
}
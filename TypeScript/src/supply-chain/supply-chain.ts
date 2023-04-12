/* 
 * Context:
 * In the company "Kata" there are employees that provide others with information.
 * But sometimes there are cycles in the information supply chain, which causes delays, and thus has 
 * cost implications. The people at "Kata" want to optimize their workflow, but first they will need to 
 * identify cycles in their workflow chain and calculate a cost score for their current workflows.
 * 
 * To model their current workflow, they use a "graph", a structure made of "nodes" (employees) and 
 * "connections" (information exchange), 
 * Also connections in that model don't have directions, so if employee A provides employee B with information,
 * then A is connected to B and vice versa.
 * 
 * The cost of a supply chain is a sum of two things:
 * - every involved employee in the chain increases the cost by 1
 * - every cycle in the chain increases the cost by the squared size of the cycle
 * 
 * For example, if employee A provides B with information, B provides C with information, 
 * and C gives information to A, then there is a cycle of size 3, which costs 3² = 9. 
 * 
 * IMPORTANT!
 * The company already indentified that there may be multiple supply chain cycles, 
 * but there will be never be two cycles that involve at least two shared employees.
 * So this is a valid supply chain with cycles (A-B-C and C-D-E are cycles that share only a single employee C)
 * A---B   E
 *   \ | / |
 *     C---D
 * But this is not a valid supply chain (A-B-C and A-C-D share at least two employees)
 * A---B
 * | \ |
 * D---C
 *
 * 
 * Examples:
 * This supply chain has a cost of 3 (3 nodes, no cycle)
 * A---B---C
 * 
 * This supply chain has a cost of 13 (4 nodes, a supply chain of cost 3²)
 * A---B
 *   \ |
 *     C---D
 * 
 * 
 * Task: 
 * The function below is supposed to take a supply chain graph and output the total cost
 * of the supply chain using the rules above.
 * However, the employee writing that function just left the company and just said "it works, i tested it".
 * Find and fix all bugs in that function using test-driven development.
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
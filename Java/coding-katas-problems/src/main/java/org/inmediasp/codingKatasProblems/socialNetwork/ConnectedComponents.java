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
package org.inmediasp.codingKatasProblems.socialNetwork;

import org.inmediasp.codingKatasProblems._shared.Graph;
import org.inmediasp.codingKatasProblems._shared.Node;

import java.util.HashSet;
import java.util.Stack;

public class ConnectedComponents {
    public ConnectedComponentsInfo getConnectedComponents(Graph graph) {
        var numberOfVisitedNodes = 0;
        var visitedNodes = new HashSet<Node>();
        var nodeStack = new Stack<Node>();
        nodeStack.push(graph.getNodes().get(0));

        while (!nodeStack.empty()) {
            // take unvisited node from the stack and mark it as visited
            var node = nodeStack.pop();
            visitedNodes.add(node);
            numberOfVisitedNodes++;

            // then add all not-visited neighbor nodes to the stack
            var addNodes = node.getConnectedTo().stream().filter(n -> !visitedNodes.contains(n)).toList();
            addNodes.forEach(n -> nodeStack.push(n));
        }

        return new ConnectedComponentsInfo(1, new int[]{numberOfVisitedNodes});
    }
}
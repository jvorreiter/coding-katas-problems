package org.inmediasp.codingKatasProblems._shared;

import java.util.Comparator;
import java.util.HashMap;

public class GraphGenerator {
    public Graph generateGraph(int[][] connections) {
        var nodes = new HashMap<Integer, Node>();

        for (int[] connection : connections) {
            if(connection.length != 2) {
                throw new IllegalArgumentException("Invalid connection, make sure all connections are pairs of two integers");
            }

            var idA = connection[0];
            var nodeA = nodes.computeIfAbsent(idA, id -> new Node(id));

            var idB = connection[1];
            var nodeB = nodes.computeIfAbsent(idB, id -> new Node(id));

            nodeA.connectTo(nodeB);
            nodeB.connectTo(nodeA);
        }

        var sortedNodes = nodes.values().stream().sorted(Comparator.comparingInt(Node::getId)).toList();
        return new Graph(sortedNodes);
    }
}

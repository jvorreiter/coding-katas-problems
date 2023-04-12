package org.inmediasp.codingKatasProblems._shared;

import java.util.ArrayList;
import java.util.List;

public class Node {
    private final int id;
    private final List<Node> connectedTo = new ArrayList<>();

    public Node(int id) {
        this.id = id;
    }

    public void connectTo(Node node) {
        if(this != node) {
            connectedTo.add(node);
        }
    }

    public int getId() {
        return id;
    }

    public List<Node> getConnectedTo() {
        return connectedTo;
    }
}

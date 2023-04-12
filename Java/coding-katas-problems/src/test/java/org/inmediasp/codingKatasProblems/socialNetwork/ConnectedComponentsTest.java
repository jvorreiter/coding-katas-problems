package org.inmediasp.codingKatasProblems.socialNetwork;

import org.inmediasp.codingKatasProblems._shared.GraphGenerator;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class ConnectedComponentsTest {
    @Test
    public void testFindConnectedComponents() {// arrange/given
        /* generates a graph like so:
         *      1
         *      |
         * 4----0----2
         *      |
         *      3
         */
        var graph = new GraphGenerator().generateGraph(new int[][]{
                {0, 1},
                {0, 2},
                {0, 3},
                {0, 4},
        });

        // act/when
        var connectedComponents = new ConnectedComponents().getConnectedComponents(graph);

        // assert/then
        assertEquals(1, connectedComponents.components());
        assertEquals(1, connectedComponents.nodes().length);
        assertEquals(5, connectedComponents.nodes()[0]);
    }
}

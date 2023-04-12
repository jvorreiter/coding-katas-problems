package org.inmediasp.codingKatasProblems.supplyChain;

import org.inmediasp.codingKatasProblems._shared.Graph;
import org.inmediasp.codingKatasProblems._shared.GraphGenerator;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class SupplyChainCostCalculatorTest {

    @Test
    public void testLinearCost() {
        // arrange/given
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
        var cost = new SupplyChainCostCalculator().getSupplyChainCost(graph);

        // assert/then
        assertEquals(5, cost);
    }

    @Test
    public void testQuadraticCostForCycles() {
        // arrange/given
        /* generates a graph like so:
         * 0---1
         * |   |
         * 3---2
         */
        var graph = new GraphGenerator().generateGraph(new int[][]{
                {0, 1},
                {1, 2},
                {2, 3},
                {3, 0},
        });

        // act/when
        var cost = new SupplyChainCostCalculator().getSupplyChainCost(graph);

        // assert/then
        assertEquals(4 + 4 * 4, cost);
    }
}

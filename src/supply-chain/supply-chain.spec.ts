import { generateGraph } from "../_shared/graph";
import { getSupplyChainCost } from "./supply-chain";

describe('supply chain', () => {
    it('should have linear cost', () => {
        // arrange/given
        /* generates a graph like so:
         *      1
         *      |
         * 4----0----2
         *      |
         *      3 
         */
        const graph = generateGraph([
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
        ]);

        // act/when
        const cost = getSupplyChainCost(graph);

        // assert/then
        expect(cost).toEqual(5);
    });
    it('should have quadratic cost for cycles', () => {
        // arrange/given
        /* generates a graph like so:
         * 0---1
         * |   |
         * 3---2
         */
        const graph = generateGraph([
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
        ]);

        // act/when
        const cost = getSupplyChainCost(graph);

        // assert/then
        expect(cost).toEqual(4 + 4 ** 2);
    });
});
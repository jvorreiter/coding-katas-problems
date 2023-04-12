import { getConnectedComponents } from "./connected-components";
import { generateGraph } from "../_shared/graph";

describe('connected components', () => {
    it('should find all connected components correctly', () => {
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
        const connectedComponents = getConnectedComponents(graph);

        // assert/then
        expect(connectedComponents.nodes).toEqual(5);
        expect(connectedComponents.components).toEqual(1);
    });
});
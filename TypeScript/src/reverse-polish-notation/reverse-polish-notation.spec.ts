import { reversePolishNotation } from "./reverse-polish-notation";
import type { BinaryOperatorToken, NumberToken } from "./types/Token";
import { tokenize } from "./utils/tokenize";

describe('reverse polish notation', () => {
    it('should generate correct add token order', () => {
        const tokens = tokenize('1+2');

        const rpnTokens = reversePolishNotation(tokens);
        expect(rpnTokens).toHaveLength(3);

        expect(rpnTokens[0].type).toBe('number');
        expect(rpnTokens[1].type).toBe('number');

        expect(rpnTokens[2].type).toBe('binary-operator');
        expect((rpnTokens[2] as BinaryOperatorToken).operator).toBe('plus');
    });
    it('should generate correct subtract token order', () => {
        const tokens = tokenize('1-2');

        const rpnTokens = reversePolishNotation(tokens);
        expect(rpnTokens).toHaveLength(3);

        expect(rpnTokens[0].type).toBe('number');
        expect(rpnTokens[1].type).toBe('number');

        expect(rpnTokens[2].type).toBe('binary-operator');
        expect((rpnTokens[2] as BinaryOperatorToken).operator).toBe('minus');
    });
    it('should generate correct multiply token order', () => {
        const tokens = tokenize('1*2');

        const rpnTokens = reversePolishNotation(tokens);
        expect(rpnTokens).toHaveLength(3);

        expect(rpnTokens[0].type).toBe('number');
        expect(rpnTokens[1].type).toBe('number');

        expect(rpnTokens[2].type).toBe('binary-operator');
        expect((rpnTokens[2] as BinaryOperatorToken).operator).toBe('multiply');
    });
    it('should generate correct divide token order', () => {
        const tokens = tokenize('1/2');

        const rpnTokens = reversePolishNotation(tokens);
        expect(rpnTokens).toHaveLength(3);

        expect(rpnTokens[0].type).toBe('number');
        expect(rpnTokens[1].type).toBe('number');

        expect(rpnTokens[2].type).toBe('binary-operator');
        expect((rpnTokens[2] as BinaryOperatorToken).operator).toBe('divide');
    });
    it('should correctly remove parentheses', () => {
        const tokens = tokenize('(1)');

        const rpnTokens = reversePolishNotation(tokens);
        expect(rpnTokens).toHaveLength(1);

        expect(rpnTokens[0].type).toBe('number');
        expect((rpnTokens[0] as NumberToken).value).toBe(1);
    });
});
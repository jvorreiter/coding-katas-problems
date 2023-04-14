/* 
 * Task:
 * The code below is supposed to take tokens of a mathematical term 
 * in so called "infix notation" and transform it to "reverse polish notation",
 * a notation that a lot of calculators use.
 * This is done using the relatively simple "Shunting-Yard Algorithm" (see https://de.wikipedia.org/wiki/Shunting-yard-Algorithmus#Im_Detail)
 * Valid tokens are:
 * - a non-negative number (integer or decimal)
 * - a binary operator of 
 *      - `+` (addition)
 *      - `-` (subtraction)
 *      - `*` (multiplication) 
 *      - `/` (division)
 *      - `^` (exponentiation)
 * - a parenthesis of `()`, `[]`, `{}`, or `<>`
 * 
 * However, the code is buggy or incomplete. 
 * Find the bugs/missing implementation using tests,
 * then fix (and optionally refactor) the implementation with the help of the tests you wrote.
 */

import type { Token } from "./types/Token";

/**
 * Reorders the tokens from infix notation to reverse polish notation (RPN) 
 * using the Shunting-Yard-Algorithm.
 * @param tokens A list of tokens
 * @returns a list of tokens in RPN order
 */
export function reversePolishNotation(tokens: Token[]): Token[] {
    const rpnTokens: Token[] = [];
    const stack: Token[] = [];

    for (const token of tokens) {
        switch (token.type) {
            case 'number': {
                rpnTokens.push(token);
                break;
            }

            case 'binary-operator': {
                while (stack.length > 0) {
                    rpnTokens.push(stack.pop()!);
                }

                stack.push(token);
                break;
            }

            case 'parenthesis': {
                if(token.open) {
                    stack.push(token);
                    break;
                }

                const stackTop = stack[stack.length - 1];
                if(stackTop?.type == 'parenthesis' && stackTop.open) {
                    stack.pop();
                }

                // discard closing parenthesis

                break;
            }

            default:
                throw new Error(`Invalid token type "${(token as any).type}"`);
        }
    }

    while(stack.length > 0) {
        rpnTokens.push(stack.pop()!);
    }

    return rpnTokens;
}
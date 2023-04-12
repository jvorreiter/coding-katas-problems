/* 
 * Task:
 * The code below is supposed to take tokens of a mathematical term 
 * in so called "infix notation" and transform it to "reverse polish notation",
 * a notation that a lot of calculators use.
 * This is done using the "Shunting-Yard Algorithm".
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
package org.inmediasp.codingKatasProblems.reversePolishNotation;

import org.inmediasp.codingKatasProblems.reversePolishNotation.tokens.BinaryOperatorToken;
import org.inmediasp.codingKatasProblems.reversePolishNotation.tokens.NumberToken;
import org.inmediasp.codingKatasProblems.reversePolishNotation.tokens.ParenthesisToken;
import org.inmediasp.codingKatasProblems.reversePolishNotation.tokens.Token;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;


public class RpnTransformer {
    /**
     * Reorders the tokens from infix notation to reverse polish notation (RPN)
     * using the Shunting-Yard-Algorithm.
     * @param tokens A list of tokens
     * @return a list of tokens in RPN order
     */
    public List<Token> transform(List<Token> tokens) {
        var rpnTokens = new ArrayList<Token>();
        var stack = new Stack<Token>();

        for (var token : tokens) {
            if (token instanceof NumberToken) {
                rpnTokens.add(token);
            } else if (token instanceof BinaryOperatorToken) {
                while (!stack.empty()) {
                    rpnTokens.add(stack.pop());
                }

                stack.push(token);
            } else if (token instanceof ParenthesisToken) {
                var parens = (ParenthesisToken) token;
                if (parens.isOpen()) {
                    stack.push(parens);
                    continue;
                }

                var topToken = stack.peek();
                if (topToken instanceof ParenthesisToken && ((ParenthesisToken) topToken).isOpen()) {
                    stack.pop();
                }
                // discard closing parenthesis
            } else {
                throw new IllegalStateException("Invalid token instance");
            }
        }

        while (!stack.empty()) {
            rpnTokens.add(stack.pop());
        }

        return rpnTokens;
    }
}

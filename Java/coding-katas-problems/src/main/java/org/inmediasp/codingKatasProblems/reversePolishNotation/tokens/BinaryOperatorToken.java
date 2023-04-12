package org.inmediasp.codingKatasProblems.reversePolishNotation.tokens;

public class BinaryOperatorToken extends Token {
    private final BinaryOperator operator;

    public BinaryOperatorToken(BinaryOperator operator) {
        this.operator = operator;
    }

    public BinaryOperator getOperator() {
        return operator;
    }
}

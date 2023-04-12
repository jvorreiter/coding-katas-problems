package org.inmediasp.codingKatasProblems.reversePolishNotation.tokens;

public class ParenthesisToken extends Token {
    private final boolean isOpen;

    public ParenthesisToken(boolean isOpen) {
        this.isOpen = isOpen;
    }

    public boolean isOpen() {
        return isOpen;
    }
}

package org.inmediasp.codingKatasProblems.reversePolishNotation;

import org.inmediasp.codingKatasProblems.reversePolishNotation.tokens.BinaryOperator;
import org.inmediasp.codingKatasProblems.reversePolishNotation.tokens.BinaryOperatorToken;
import org.inmediasp.codingKatasProblems.reversePolishNotation.tokens.NumberToken;
import org.inmediasp.codingKatasProblems.reversePolishNotation.utils.Tokenizer;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class RpnTransformerTest {
    @Test
    public void testAddTokenOrder() {
        var tokenizer = new Tokenizer();
        var tokens = tokenizer.tokenize("1+2");

        var rpnTransformer = new RpnTransformer();
        var rpnTokens = rpnTransformer.transform(tokens);

        assertEquals(3, rpnTokens.size());

        assertInstanceOf(NumberToken.class, rpnTokens.get(0));
        assertInstanceOf(NumberToken.class, rpnTokens.get(1));

        assertInstanceOf(BinaryOperatorToken.class, rpnTokens.get(2));
        assertEquals(BinaryOperator.plus, ((BinaryOperatorToken) rpnTokens.get(2)).getOperator());
    }

    @Test
    public void testSubtractTokenOrder() {
        var tokenizer = new Tokenizer();
        var tokens = tokenizer.tokenize("1-2");

        var rpnTransformer = new RpnTransformer();
        var rpnTokens = rpnTransformer.transform(tokens);

        assertEquals(3, rpnTokens.size());

        assertInstanceOf(NumberToken.class, rpnTokens.get(0));
        assertInstanceOf(NumberToken.class, rpnTokens.get(1));

        assertInstanceOf(BinaryOperatorToken.class, rpnTokens.get(2));
        assertEquals(BinaryOperator.minus, ((BinaryOperatorToken) rpnTokens.get(2)).getOperator());
    }

    @Test
    public void testMultiplyTokenOrder() {
        var tokenizer = new Tokenizer();
        var tokens = tokenizer.tokenize("1*2");

        var rpnTransformer = new RpnTransformer();
        var rpnTokens = rpnTransformer.transform(tokens);

        assertEquals(3, rpnTokens.size());

        assertInstanceOf(NumberToken.class, rpnTokens.get(0));
        assertInstanceOf(NumberToken.class, rpnTokens.get(1));

        assertInstanceOf(BinaryOperatorToken.class, rpnTokens.get(2));
        assertEquals(BinaryOperator.multiply, ((BinaryOperatorToken) rpnTokens.get(2)).getOperator());
    }

    @Test
    public void testDivideTokenOrder() {
        var tokenizer = new Tokenizer();
        var tokens = tokenizer.tokenize("1/2");

        var rpnTransformer = new RpnTransformer();
        var rpnTokens = rpnTransformer.transform(tokens);

        assertEquals(3, rpnTokens.size());

        assertInstanceOf(NumberToken.class, rpnTokens.get(0));
        assertInstanceOf(NumberToken.class, rpnTokens.get(1));

        assertInstanceOf(BinaryOperatorToken.class, rpnTokens.get(2));
        assertEquals(BinaryOperator.divide, ((BinaryOperatorToken) rpnTokens.get(2)).getOperator());
    }

    @Test
    public void testExponentiateTokenOrder() {
        var tokenizer = new Tokenizer();
        var tokens = tokenizer.tokenize("1^2");

        var rpnTransformer = new RpnTransformer();
        var rpnTokens = rpnTransformer.transform(tokens);

        assertEquals(3, rpnTokens.size());

        assertInstanceOf(NumberToken.class, rpnTokens.get(0));
        assertInstanceOf(NumberToken.class, rpnTokens.get(1));

        assertInstanceOf(BinaryOperatorToken.class, rpnTokens.get(2));
        assertEquals(BinaryOperator.exponentiate, ((BinaryOperatorToken) rpnTokens.get(2)).getOperator());
    }

    @Test
    public void testRemoveParentheses() {
        var tokenizer = new Tokenizer();
        var tokens = tokenizer.tokenize("(1)");

        var rpnTransformer = new RpnTransformer();
        var rpnTokens = rpnTransformer.transform(tokens);

        assertEquals(1, rpnTokens.size());

        assertInstanceOf(NumberToken.class, rpnTokens.get(0));
        assertEquals(1, ((NumberToken) rpnTokens.get(0)).getValue());
    }
}

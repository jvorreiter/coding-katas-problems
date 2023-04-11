export type NumberToken = {
    type: 'number';
    value: number;
};
export type BinaryOperatorToken = {
    type: 'binary-operator';
    operator: 'plus' | 'minus' | 'multiply' | 'divide' | 'exponentiate';
};
export type ParenthesisToken = {
    type: 'parenthesis';
    open: boolean;
};

export type Token =
    | NumberToken
    | BinaryOperatorToken
    | ParenthesisToken
    ;
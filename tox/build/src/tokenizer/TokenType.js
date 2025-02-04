"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenType;
(function (TokenType) {
    // Single-character tokens.
    TokenType["LEFT_PAREN"] = "LEFT_PAREN";
    TokenType["RIGHT_PAREN"] = "RIGHT_BRACE";
    TokenType["LEFT_BRACE"] = "LEFT_BRACE";
    TokenType["RIGHT_BRACE"] = "RIGHT_BRACE";
    TokenType["COMMA"] = "COMMA";
    TokenType["DOT"] = "DOT";
    TokenType["MINUS"] = "MINUS";
    TokenType["PLUS"] = "PLUS";
    TokenType["SEMICOLON"] = "SEMICOLON";
    TokenType["SLASH"] = "SLASH";
    TokenType["STAR"] = "STAR";
    // One or two character tokens.
    TokenType["BANG"] = "BANG";
    TokenType["BANG_EQUAL"] = "BANG_EQUAL";
    TokenType["EQUAL"] = "EQUAL";
    TokenType["EQUAL_EQUAL"] = "EQUAL_EQUAL";
    TokenType["GREATER"] = "GREATER";
    TokenType["GREATER_EQUAL"] = "GREATER_EQUAL";
    TokenType["LESS"] = "LESS";
    TokenType["LESS_EQUAL"] = "LESS_EQUAL";
    // Literals.
    TokenType["IDENTIFIER"] = "IDENTIFIER";
    TokenType["STRING"] = "STRING";
    TokenType["NUMBER"] = "NUMBER";
    // Keywords.
    TokenType["AND"] = "AND";
    TokenType["CLASS"] = "CLASS";
    TokenType["ELSE"] = "ELSE";
    TokenType["FALSE"] = "FALSE";
    TokenType["FUN"] = "FUN";
    TokenType["FOR"] = "FOR";
    TokenType["IF"] = "IF";
    TokenType["NIL"] = "NIL";
    TokenType["OR"] = "OR";
    TokenType["PRINT"] = "PRINT";
    TokenType["RETURN"] = "RETURN";
    TokenType["SUPER"] = "SUPER";
    TokenType["THIS"] = "THIS";
    TokenType["TRUE"] = "TRUE";
    TokenType["VAR"] = "VAR";
    TokenType["WHILE"] = "WHILE";
    TokenType["EOF"] = "EOF";
})(TokenType || (TokenType = {}));
exports.default = TokenType;

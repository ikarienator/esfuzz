// Generated by CoffeeScript 2.0.0-beta5
void function () {
  var cache$, Expression, listOf, listOfAtLeast, oneOf, Statement, SwitchCase, SwitchCaseDefault;
  Statement = require('../classes/Statement');
  Expression = require('../classes/Expression');
  cache$ = require('../combinators');
  oneOf = cache$.oneOf;
  listOf = cache$.listOf;
  listOfAtLeast = cache$.listOfAtLeast;
  SwitchCase = function () {
    return {
      type: 'SwitchCase',
      test: oneOf(Expression),
      consequent: listOfAtLeast(Statement, 1)
    };
  };
  SwitchCaseDefault = function () {
    return {
      type: 'SwitchCase',
      test: null,
      consequent: listOfAtLeast(Statement, 1)
    };
  };
  module.exports = function () {
    return {
      type: 'SwitchStatement',
      discriminant: oneOf(Expression),
      cases: listOf([SwitchCase]).concat(oneOf([
        SwitchCaseDefault,
        function () {
          return [];
        }
      ])),
      lexical: false
    };
  };
}.call(this);
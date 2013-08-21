BlockStatement = require '../nodes/BlockStatement'
Identifier = require '../nodes/Identifier'
{listOf, maybe, notReserved} = require '../combinators'

module.exports = ->
  type: 'FunctionExpression'
  id: maybe -> notReserved Identifier
  params: listOf [(-> notReserved Identifier)], 10
  defaults: []
  rest: null
  body: BlockStatement()
  generator: false
  expression: false

Node = require '../node'
Statement = require '../classes/Statement'
{construct, listOfAtLeast} = require '../combinators'

class Program extends Node
  type: @name
  body: []
  constructor: (depth) ->
    --depth
    if depth > 0
      @body = (listOfAtLeast 1, [Statement]) depth

module.exports = construct Program

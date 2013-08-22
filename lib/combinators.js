// Generated by CoffeeScript 2.0.0-beta5
void function () {
  var listOf, oneOf, randomElement, RESERVED;
  RESERVED = require('./reserved');
  randomElement = require('./helpers').randomElement;
  exports.listOf = listOf = function (possibleGenerators) {
    return function (accum$) {
      while (Math.random() < .4) {
        accum$.push(oneOf(possibleGenerators));
      }
      return accum$;
    }.call(this, []);
  };
  exports.listOfAtLeast = function (possibleGenerators, min) {
    return function (accum$) {
      var _;
      for (var i$ = 0, length$ = function () {
            var accum$1;
            var accum$1;
            accum$1 = [];
            for (var i$1 = 1; 1 <= min ? i$1 <= min : i$1 >= min; 1 <= min ? ++i$1 : --i$1)
              accum$1.push(i$1);
            return accum$1;
          }.apply(this, arguments).length; i$ < length$; ++i$) {
        _ = function () {
          var accum$1;
          var accum$1;
          accum$1 = [];
          for (var i$1 = 1; 1 <= min ? i$1 <= min : i$1 >= min; 1 <= min ? ++i$1 : --i$1)
            accum$1.push(i$1);
          return accum$1;
        }.apply(this, arguments)[i$];
        accum$.push(oneOf(possibleGenerators));
      }
      return accum$;
    }.call(this, []).concat(listOf(possibleGenerators));
  };
  exports.oneOf = oneOf = function (possibleGenerators) {
    return randomElement(possibleGenerators)();
  };
  exports.maybe = function (generator) {
    if (randomElement([
        true,
        false
      ])) {
      return generator();
    } else {
      return null;
    }
  };
  exports.notReserved = function (generator) {
    var id;
    id = generator();
    id.name = in$(id.name, RESERVED) ? '' + id.name + '_' : id.name;
    return id;
  };
  function in$(member, list) {
    for (var i = 0, length = list.length; i < length; ++i)
      if (i in list && list[i] === member)
        return true;
    return false;
  }
}.call(this);
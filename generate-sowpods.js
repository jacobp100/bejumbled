const _ = require('lodash');
const sowpods = require('pf-sowpods');
const letterBag = require('./letterBag');


const valid = _(sowpods)
  .filter(word => word.length <= 7)
  .filter(word => word.length > 1) // all one letter words allowed
  .filter(word => {
    const letterCounts = _(word)
      .toArray()
      .groupBy()
      .mapValues('length')
      .value();
    return _.every(letterCounts, (count, letter) => (
      letterBag[letter] >= count
    ));
  })
  .value();

console.log(JSON.stringify(valid));

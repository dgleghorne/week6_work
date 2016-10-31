'use strict'

function EvenOrOdd(numberArray){
  return numberArray.map(function (number){
    if(number%2 === 0){
      return 'even'
    }
    return 'odd'
  })
}

module.exports.EvenOrOdd = EvenOrOdd

'use strict'

function sum(array){
  return array.reduce(function(sum, inc){
    return sum + inc
  })
}

function product(array){
  return array.reduce(function(prod, mult){
    return prod * mult
  })
}


module.exports.sum = sum
module.exports.product = product

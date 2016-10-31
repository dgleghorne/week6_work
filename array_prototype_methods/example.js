'use strict'

var inputData = ['short', 'short', 'longer', 'longest']

var longerWords = inputData.filter(function (word){
  return word.length > 5
})
module.exports.longerWords = longerWords

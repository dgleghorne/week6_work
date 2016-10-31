'use strict'

function wordCounts(sentence){
  var object = {}
  var array = sentence.split(" ")
  return array.reduce(function(phrase, word, index){

    if(object[word]=== undefined){
          object[word] = 1
    }
    else{
      object[word]++
    }
    return object
  }, 0)
}


module.exports.wordCounts = wordCounts

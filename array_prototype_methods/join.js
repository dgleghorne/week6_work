'use strict'

function join(arrayStrings, delimiter){

  if(delimiter === undefined){delimiter = ' '}

  return arrayStrings.reduce(function(phrase, string){
    return phrase + delimiter + string
  })
}



module.exports.join = join

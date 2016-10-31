'use strict'

function pluck(objectArray, property){

  return objectArray.map(function(item){
    return item[property]
  })
}

module.exports.pluck = pluck

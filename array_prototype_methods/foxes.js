'use strict'

var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox']

function slowFoxes(inputString){
var filtered =  foxTypes.filter(function(fox){
    return fox !== inputString
  })
  return filtered
}

module.exports.slowFoxes = slowFoxes

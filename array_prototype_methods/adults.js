'use strict'

var peopleList = [{firstName : 'John', lastName: 'Smith', age: 32}, {firstName : 'Jane', lastName: 'Doe', age: 18} ,{firstName : 'Kevin', lastName: 'Malone', age: 16},]

function adults(){
   var filtered = peopleList.filter(function(person){
     return person.age >= 18
   })
   return filtered
}

module.exports.adults = adults

'use strict'

function Rover(range){
  this.range = range
  var commandCount = 0
  var compass = ['N','E','S','W']

  function leftCompass(compass){
    return compass.map(function (point){
      if(point === 'N'){return 3}
      if(point === 'E'){return 0}
      if(point === 'S'){return 1}
      if(point === 'W'){return 2}
    })
  }

  function rightCompass(compass){
    return compass.map(function (point){
      if(point === 'N'){return 1}
      if(point === 'E'){return 2}
      if(point === 'S'){return 3}
      if(point === 'W'){return 0}
    })
  }

  this.receive = function (input){

    var inputArray = input.split(" ")
    var ex = parseInt(inputArray[0], 10)
    var why = parseInt(inputArray[1], 10)
    var oh = inputArray[2]

    if(commandCount === 0){
        this.range = {x: ex, y: why}
    }

    if(commandCount === 1){
      this.startPosition = {x: ex, y: why}
      this.initialOrientation = oh
    }


  if(commandCount === 2){
    var pos = [this.initialOrientation]
    var moveArray = input.split("")
    this.latestOrientation = orient(moveArray)

    function orient(array){
      return array.reduce(function(prev, index){
        if(index === 'L'){
          var newPos = leftCompass(pos)
          return compass[newPos]
        }
        if(index === 'R'){
          var newPos = rightCompass(pos)
          return compass[newPos]
        }
      })
    }




    // if(moveArray[0]=== 'L'){
    //   var newPos = leftCompass(pos)
    //   this.latestOrientation = compass[newPos]
    // }
    // if(moveArray[0]=== 'R'){
    //   var newPos = rightCompass(pos)
    //   this.latestOrientation = compass[newPos]
    // }
  }
  commandCount++
  }
}




module.exports.Rover = Rover

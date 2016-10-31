'use strict'

const expect = require('chai').expect
const Rover = require('../rover').Rover

describe('Given a mars rover', () =>{
  describe('when it receives an initial command', () =>{
    it('then it will interpret these as co-ordinates and set them as the limits of the plateau', () =>{
      var myRover = new Rover()
      myRover.receive('5 5')
      expect(myRover.range).to.eql({x:5, y:5})
    })
  })
  describe('when it receives a second command', () =>{
    it('then it will interpret these as starting co-ordinates and orientation', () =>{
      var myRover2 = new Rover()
      myRover2.receive('5 5')
      myRover2.receive('1 2 N')
      expect(myRover2.startPosition).to.eql({x:1, y:2})
      expect(myRover2.initialOrientation).to.eql('N')
    })
  })
  describe('when it receives a third command', () =>{
    it('then it will interpret these as directions', () =>{
      var myRover3 = new Rover()
      myRover3.receive('5 5')
      myRover3.receive('1 2 N')
      myRover3.receive('LL')
      expect(myRover3.startPosition).to.eql({x:1, y:2})
      expect(myRover3.initialOrientation).to.eql('N')
      expect(myRover3.latestOrientation).to.eql('S')

      var myRover3 = new Rover()
      myRover3.receive('5 5')
      myRover3.receive('1 2 N')
      myRover3.receive('R')
      expect(myRover3.startPosition).to.eql({x:1, y:2})
      expect(myRover3.initialOrientation).to.eql('N')
      expect(myRover3.latestOrientation).to.eql('E')
    })
  })
})

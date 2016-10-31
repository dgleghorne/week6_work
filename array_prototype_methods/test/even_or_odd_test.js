'use strict'

const expect = require('chai').expect
const EvenOrOdd = require('../even_or_odd').EvenOrOdd

var myNumbers = [1,2,3,4]
var theseNumbers = [0, 1, 1, 123]

describe('EvenOrOdd function', ()=>{
  it('returns an array of strings giving either even or odd for each number', ()=>{
    expect(EvenOrOdd(myNumbers)).to.eql(['odd', 'even', 'odd', 'even'])
    expect(EvenOrOdd(theseNumbers)).to.eql(['even', 'odd', 'odd', 'odd'])
  })
})

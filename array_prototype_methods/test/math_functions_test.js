'use strict'

const expect = require('chai').expect
const sum = require('../math_functions').sum
const product = require('../math_functions').product

var arrayOne = [1, 2, 3, 4]
var arrayTwo = [-1, 2, 3, 4]
var arrayIII = [5, 6]

describe('sum function', ()=>{
  it('returns the sum of an array of numbers', ()=>{
    expect(sum(arrayOne)).to.equal(10)
    expect(sum(arrayTwo)).to.equal(8)
  })
})

describe('product function', ()=>{
  it('returns the product of an array of numbers', ()=>{
    expect(product(arrayOne)).to.equal(24)
    expect(product(arrayIII)).to.equal(30)
  })
})

'use strict'

const expect = require('chai').expect
const pluck = require('../pluck').pluck

var myObjects = [{colour: 'red', size: "small"}, {colour: 'blue', size: "medium"}, {colour: 'green', size: "large"} ]

describe('pluck function', ()=>{
  it('returns an array of the specified properties of each object', ()=>{
    expect(pluck(myObjects, 'colour')).to.eql(['red', 'blue', 'green'])
    expect(pluck(myObjects, 'size')).to.eql(['small', 'medium', 'large'])
  })
})

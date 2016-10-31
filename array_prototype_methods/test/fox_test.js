'use strict'

const expect = require('chai').expect
const slowFoxes = require('../foxes').slowFoxes


describe('slowFoxes function', ()=>{
  it('returns all the foxes that are not in the inputString', () =>{
    expect(slowFoxes('Swift Fox')).to.eql(['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox'])
    expect(slowFoxes('Kit Fox')).to.eql(['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Swift Fox'])
  })
})

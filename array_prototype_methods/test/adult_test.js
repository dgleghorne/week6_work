'use strict'

const expect = require('chai').expect
const adults = require('../adults').adults


describe('adults function', ()=>{
  it('returns all the people who are at least 18', () =>{
    expect(adults()).to.eql([{firstName : 'John', lastName: 'Smith', age: 32}, {firstName : 'Jane', lastName: 'Doe', age: 18}]
)
  })
})

'use strict'

const expect = require('chai').expect
const longerWords = require('../example').longerWords


describe('Example test', () => {
  it('should return all words longer that 5 characters', ()=>{
    expect(longerWords).to.eql(['longer', 'longest'])
  })
})

'use strict'

const expect = require('chai').expect
const reverseStrings = require('../reverse_strings').reverseStrings

var message = ['Hi', 'how', 'are', 'you?'];

describe('Reverse Strings function', ()=>{
  it('returns the reverse of each string', ()=>{
    expect(reverseStrings(message)).to.eql(['iH', 'woh', 'era', '?uoy'])
  })
})

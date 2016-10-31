'use strict'

const expect = require('chai').expect
const join = require('../join').join

var stringList = ['Hello', 'how', 'are', 'you']

describe('join function', () => {
  it('returns as a string an array of strings separated by an optional delimiter', () => {
    expect(join(stringList)).to.eql('Hello how are you')
    expect(join(stringList, ',')).to.eql('Hello,how,are,you')
  })
})

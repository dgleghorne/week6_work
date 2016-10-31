'use strict'

const expect = require('chai').expect
const wordCounts = require('../wordCounts').wordCounts

var sentence = 'Good morning Vietnam It is sunny in Vietnam this morning'

describe('wordCounts function', () => {
  it('returns an object that has each word from the sentence as a property and the number of times in appears as a value', () => {
    expect(wordCounts(sentence)).to.eql({Good: 1, morning: 2, Vietnam: 2, It: 1, is: 1, this: 1, sunny: 1, in: 1})
  })
})

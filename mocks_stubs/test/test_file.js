'use strict'

const sinon = require('sinon')
const expect = require('chai').expect

describe('Stubs', () => {
  it('should use stub', () =>{
    const stub = sinon.stub().returns(42)

    const result = stub('hello')

    expect(result).to.equal(42)
  })
})

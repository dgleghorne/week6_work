'use strict'

const expect = require('chai').expect

describe('Context 4: apply & call', () => {

  describe('when calling a function with Function.prototype.apply, `this` can be set for the execution of the function', () => {

    it('apply allows for functions to be called, providing arguments as an array', () => {
      expect(Math.max(1,2,3,4,5)).to.equal(5)
      expect(Math.max.apply(null, [1,2,3,4,5])).to.equal(5)
    })

  it('apply allows for flexible libraries based on object interfaces', () => {
    function changeName(newName) {
      this.name = newName;
    }

    class Person {
      constructor(name, age) {
        this.name = name
        this.age = age
      }
    }

    class Pet {
      constructor(name, age) {
        this.name = name
        this.age = age
      }
    }

    const person = new Person("Human Being", 12)
    const pet = new Pet("Perfect Pet", 7)

    changeName.apply(person, ["Alien"])
    changeName.apply(pet, ["Great White Shark"])

    expect(person.name).to.equal("Alien")
    expect(person.age).to.equal(12)
    expect(pet.name).to.equal("Great White Shark")
    expect(pet.age).to.equal(7)
  })
})
})

describe('when calling a function with Function.prototype.call, `this` can be set for the execution of the function', () => {

  it('call allows for functions to be called, providing arguments as an argument list', () => {
    expect(Math.max(1,2,3,4,5)).to.equal(5)
    expect(Math.max.call(null, 1,2,3,4,5)).to.equal(5)
  })
  describe('Function.prototype.call', () => {
          describe('Treating the function as a method of first argument', () => {
            function changeName(newName) {
              this.name = newName;
            }

            class Person {
              constructor(name, age) {
                this.name = name
                this.age = age
              }
            }

            class Pet {
              constructor(name, age) {
                this.name = name
                this.age = age
              }
            }

            it('allows for flexible libraries based on object interfaces', () => {
              const person = new Person("Human Being", 12)
              const pet = new Pet("Perfect Pet", 7)

              changeName.call(person, "Alien")
              changeName.call(pet, "Bad Pet")

              expect(person.name).to.equal("Alien")
              expect(person.age).to.equal(12)
              expect(pet.name).to.equal("Bad Pet")
              expect(pet.age).to.equal(7)
            })
          })
        })

})

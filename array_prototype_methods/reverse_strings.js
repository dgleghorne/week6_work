'use strict'

function reverseStrings(strings) {
  return strings.map(function (string) {
    return string.split('').reverse().join('');
  });
}

module.exports.reverseStrings = reverseStrings

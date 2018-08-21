const chai = require('chai');
const { strCal } = require('../app.js');

const { expect } = chai;

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}

function empty(){
  expect(strCal('')).to.be.equal(0)
}

function oneNum(){
  expect(strCal('1')).to.be.equal(1)
}

function twoNum(){
  expect(strCal('1,2')).to.be.equal(3)
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);

  it('should be 0', empty);
  it('should be 1', oneNum);
  it('should be 3', twoNum);
}


// Start Describe
describe('Example', exampleBehaviors);




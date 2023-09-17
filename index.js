function addingEventListener() {
}
const { expect } = require('chai');

describe('index.js', function() {
  it('binds an event listener in addingEventListener()', function() {

    const input = document.getElementById('input');
    
    const clickEventListener = input.onclick; 
    
    expect(clickEventListener).to.equal(clickAlert);
  });
});


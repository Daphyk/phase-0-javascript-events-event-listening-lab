const { expect } = require('chai');

function clickAlert() {
}
const { addingEventListener } = require('./path-to-your-code');

describe('index.js', function() {
  it('binds an event listener in addingEventListener()', function() {
    const input = document.createElement('input');
    input.id = 'input';
    input.onclick = clickAlert;

    document.body.appendChild(input);
    addingEventListener();

    const clickEventListener = input.onclick;

    expect(clickEventListener).to.equal(clickAlert);
    document.body.removeChild(input);
  });
});


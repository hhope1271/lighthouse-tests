const { expect } = require('chai');
const fooBar = require('./index');

describe('FooBar Module', () => {

  it('should be foo when > 50', () => {
    const result = fooBar(51);
    expect(result).to.equal('foo');
  });

  it('should be bar when <= 50', () => {
    expect(fooBar(40)).to.equal('bar');
  });

  it('should be confused if anything else', () => {
    expect(fooBar('abc')).to.equal('uh?');
  });
});

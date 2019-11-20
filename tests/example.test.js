import addTwo from '../client/add-two.js';

describe('Jest Works', () => {
  it('Can test our silly function', () => {
    expect(addTwo(2, 2)).toEqual(4);
  });
});

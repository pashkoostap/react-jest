import myHelper from '../helper';

describe('#myHelper', () => {
  it('should return 5', () => {
    expect(myHelper({ a: 2, b: 3 })).toEqual(5);
  });
});

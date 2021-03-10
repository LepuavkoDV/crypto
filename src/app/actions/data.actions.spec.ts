import * as fromData from './data.actions';

describe('loadDatas', () => {
  it('should return an action', () => {
    expect(fromData.loadDatas().type).toBe('[Data] Load Datas');
  });
});

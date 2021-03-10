import * as fromData from './data.actions';

describe('loadDatas', () => {
  it('should return an action', () => {
    expect(fromData.loadData().type).toBe('[Data] Load Datas');
  });
});

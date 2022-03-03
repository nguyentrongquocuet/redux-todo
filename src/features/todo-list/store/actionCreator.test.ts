import { toggleStatus } from './actionCreators';

describe('Return action properly', () => {
  test('return action', () => {
    expect(toggleStatus('123')).toStrictEqual({
      payload: '123',
      type: 'todolist/togglestatus',
    });
  });
});

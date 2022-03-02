import { toggleStatus } from '.';

describe('Return action properly', () => {
  test('return action', () => {
    expect(toggleStatus('123')).toStrictEqual({
      payload: '123',
      type: 'todolist/togglestatus',
    })
  });
});

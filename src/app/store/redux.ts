import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from '@redux-devtools/extension';
import { todoListReducer } from '@/features/todo-list/store';

const rootReducer = combineReducers({
  todoList: todoListReducer,
  test: combineReducers({
    test1: (state = 'YESY', action: any) => { console.log('test1', state, action); return 'not a defau'; },
    test2: (state = 'YESY2', action: any) => { console.log('test2', state, action); return state; },
  }),
});

function loggerLeft(context: any) {
  console.log('--call left logger middleware', context);
  const { getState } = context;
  return next => action => {
    console.log('left will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next({ type: 'shit-left' })

    console.log('state after dispatch', getState())

    console.log('return value left', returnValue);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

function loggerRight(context: any) {
  console.log('--call right logger middleware', context);
  const { getState } = context;
  return next => action => {
    console.log('right will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next({type: 'shit-right'})

    console.log('state after dispatch', getState())

    console.log('return value right', returnValue);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return { type: 'modified'}
  }
}

const store = createStore(rootReducer, compose(applyMiddleware(loggerLeft, loggerRight), composeWithDevTools()));

export type TRootState = ReturnType<typeof store.getState>;

export type TRootDispatch = typeof store.dispatch;

export {
  store,
};

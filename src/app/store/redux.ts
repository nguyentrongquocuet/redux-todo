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

function logger(context: any) {
  console.log('--context', context);
  const { getState } = context;
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next({type: 'shit'})

    console.log('state after dispatch', getState())

    console.log(returnValue);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const store = createStore(rootReducer, compose(applyMiddleware(logger), composeWithDevTools()));

export type TRootState = ReturnType<typeof store.getState>;

export type TRootDispatch = typeof store.dispatch;

export {
  store,
};

import React from 'react';
import { initialState } from 'Reducer';
import { TContext } from 'types';

const Context = React.createContext<TContext>({
  state: initialState,
  dispatch: () => null,
});

export { Context };

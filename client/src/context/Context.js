/*import React, { createContext, useReducer, useEffect } from 'react';

export const AppContext = createContext();

const { Provider } = AppContext;

let reducer = (numCalls, newNumCalls) => {
  if (numCalls === null) {
    localStorage.removeItem('numCalls');
    return initialState;
  }
  return { ...numCalls, ...newNumCalls };
};

const localState = localStorage.getItem('numCalls');

const initialState = {
  numCalls: 0,
};

export const AppProvider = (props) => {
  const [numCalls, setNumCalls] = useReducer(
    reducer,
    localState || initialState
  );
  useEffect(() => {
    localStorage.setItem('numCalls', JSON.stringify(numCalls));
  }, [numCalls]);

  return <Provider value={[numCalls, setNumCalls]}>{props.children}</Provider>;
};
*/

import React from 'react';
import { Counter } from './components/Counter';

const App = () => {
  console.log('this commit from testing branch')
  console.log('third test commit')
  console.log('second test commit')
  return <>
  <Counter/>
  </>;
};

export default App;

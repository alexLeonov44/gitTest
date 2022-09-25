import React from 'react';
import { Counter } from './components/Counter';

const App = () => {
  console.log('next commit from master branch')
  console.log('in this commit i created new testing branch')
  console.log('third test commit')
  console.log('second test commit')
  return <>
  <Counter/>
  </>;
};

export default App;

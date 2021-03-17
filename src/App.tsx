import * as React from 'react';

interface AppProps {
  title: string;
  fn(data: string): number;
}

const App = (props: AppProps) => {
  const data = null;

  console.log(someData);

  return <div>{props.data}</div>;
};

export default App;

import * as React from 'react';

interface AppProps {
  title: string;
  fn(data: string): number;
}

const App = (props: AppProps) => {
  return <div>{props.title}</div>;
};

export default App;

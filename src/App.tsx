import * as React from 'react';

interface AppProps {
  title: string;
}

const App = (props: AppProps) => {
  return <div>{props.title}</div>;
};

export default App;

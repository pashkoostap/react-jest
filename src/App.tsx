import * as React from 'react';

interface AppProps {
  title: string;
}

const App = (props: AppProps): JSX.Element => {
  return <div>{props.title}</div>;
};

export default App;

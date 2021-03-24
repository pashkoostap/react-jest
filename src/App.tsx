import * as React from 'react';
import { Counter } from './components';

interface AppProps {
  title: string;
}

const App = (props: AppProps): JSX.Element => {
  return (
    <div>
      {props.title}

      <h6>Counter</h6>
      <Counter value={100} />
    </div>
  );
};

export default App;

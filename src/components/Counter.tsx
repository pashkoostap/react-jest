import * as React from 'react';

interface CounterProps {
  value?: number;
}

const Counter = ({ value = 0 }: CounterProps): JSX.Element => {
  const [counter, setCounter] = React.useState(value);

  return (
    <div>
      <button data-testid="decrement" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span data-testid="counter" className="counter">
        {counter}
      </span>
      <button data-testid="increment" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;

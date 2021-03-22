import * as React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('#App', () => {
  it('should mount an App correctly', () => {
    const title = 'App title';
    const { getByText } = render(<App title={title} />);
    const element = getByText(title);

    expect(element).toBeInTheDocument();
  });
});

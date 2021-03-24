import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';

describe('#App - testing-library/react', () => {
  it('should mount an App correctly', () => {
    const title = 'App title';
    const { getByText } = render(<App title={title} />);
    const element = getByText(title);

    expect(element).toBeInTheDocument();
  });
});

describe('#App - enzyme', () => {
  it('should mount an App correctly', () => {
    const title = 'App title';
    const wrapper = shallow(<App title={title} />);

    expect(wrapper).toBeTruthy();
  });
});

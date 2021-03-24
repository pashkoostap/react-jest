import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Counter from '../Counter';

describe('Counter', () => {
  it('should render an increment button', () => {
    const { getByText } = render(<Counter />);
    const button = getByText('+');

    expect(button).toBeTruthy();
  });

  it('should render a decrement button', () => {
    const rendered = shallow(<Counter />);

    expect(rendered.find('[data-testid="decrement"]').text()).toBe('-');
  });

  it('should render counter label', () => {
    const { getByTestId } = render(<Counter />);
    const counterNode = getByTestId('counter');

    expect(counterNode).toBeTruthy();
  });

  it('should show counter if value is not provided', () => {
    const rendered = shallow(<Counter />);
    const counterNode = rendered.find("[data-testid='counter']");

    expect(counterNode.text()).toEqual('0');
  });

  it('should show provided counter value', () => {
    const value = 100;
    const { getByTestId } = render(<Counter value={value} />);
    const counterNode = getByTestId('counter');

    expect(counterNode.innerHTML).toEqual(`${value}`);
  });

  it('should change counter after clicking to + and - buttons', () => {
    const rendered = shallow(<Counter />);

    rendered.find("[data-testid='increment']").simulate('click');

    expect(rendered.find("[data-testid='counter']").text()).toBe('1');

    rendered.find("[data-testid='decrement']").simulate('click');

    expect(rendered.find("[data-testid='counter']").text()).toBe('0');
  });
});

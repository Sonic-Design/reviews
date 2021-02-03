import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Footer from '../src/components/Footer';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Footer', () => {
  const openModal = jest.fn();

  it('registers clicks and contains correct review count from props', () => {
    act(() => {
      render(<Footer reviewCount={20} openModal={openModal} />, container);
    });

    const button = document.querySelector('#showAll');
    expect(button.innerHTML).toBe('Show all 20 reviews');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(openModal).toHaveBeenCalledTimes(1);

    act(() => {
      for (let i = 0; i < 5; i += 1) {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });
    expect(openModal).toHaveBeenCalledTimes(6);
  });
});

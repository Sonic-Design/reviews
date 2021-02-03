import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ModalClose from '../src/components/ModalClose';

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

describe('ModalClose', () => {
  const handleClose = jest.fn();

  it('registers clicks', () => {
    act(() => {
      render(<ModalClose handleClose={handleClose} viewPortWidth={1280} />, container);
    });

    const button = document.querySelector('#close');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(handleClose).toHaveBeenCalledTimes(1);

    act(() => {
      for (let i = 0; i < 5; i += 1) {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });
    expect(handleClose).toHaveBeenCalledTimes(6);
  });
});

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Modal from '../src/components/Modal';

jest.useFakeTimers();

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

const displayModal = true;
const reviews = {
  ratings: [
    ['Cleanliness', '0.2'],
    ['Accuracy', '5.0'],
    ['Communication', '1.8'],
    ['Location', '1.3'],
    ['Check-In', '3.9'],
    ['Value', '0.8'],
  ],
  reviews: [{
    _id: 1,
    comment: 'Ad quisquam ea vero minima. Voluptas voluptatem voluptas beatae illum dolor dolorum recusandae non omnis. Nobis sequi et eveniet. Et necessitatibus ratione fuga sit ut saepe quas voluptates. Ad excepturi perferendis ea qui qui voluptas architecto impedit vel.',
    date: 'December 2020',
    name: 'Rebecca',
    ownerComment: 'Maiores iste vitae voluptas voluptatem rerum id porro. Fugiat omnis quia quaerat et.',
    ownerCommentDate: 'December 2020',
    ownerName: 'Ephraim',
    ownerProfilePicture: 'https://airbnbfec.s3-us-west-1.amazonaws.com/35.jpeg',
    profilePicture: 'https://airbnbfec.s3-us-west-1.amazonaws.com/34.jpeg',
  }],
  _id: 1,
  averageRating: 2.17,
  reviewCount: 20,
};

describe('Modal', () => {
  const closeModal = jest.fn();

  it('should wait 400ms before calling closeModal on close', () => {
    act(() => {
      render(<Modal
        displayModal={displayModal}
        reviews={reviews}
        closeModal={closeModal}
        viewPortWidth={1280}
      />, container);
    });

    const backdrop = document.querySelector('#backdrop');

    act(() => {
      backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(closeModal).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(closeModal).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});

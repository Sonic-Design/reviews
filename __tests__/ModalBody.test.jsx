import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ModalBody from '../src/components/ModalBody';

Enzyme.configure({ adapter: new Adapter() });

const reviews = {
  ratings: [
    ['Cleanliness', '0.2'],
    ['Accuracy', '5.0'],
    ['Communication', '1.8'],
    ['Location', '1.3'],
    ['Check-in', '3.9'],
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

describe('ModalBody', () => {
  it('should render the component',
    () => expect(shallow(<ModalBody reviews={reviews} />).exists()).toBe(true));
});

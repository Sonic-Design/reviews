import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ModalReview from '../src/components/ModalReview';

Enzyme.configure({ adapter: new Adapter() });

const review = {
  _id: 1,
  comment: 'Ad quisquam ea vero minima. Voluptas voluptatem voluptas beatae illum dolor dolorum recusandae non omnis. Nobis sequi et eveniet. Et necessitatibus ratione fuga sit ut saepe quas voluptates. Ad excepturi perferendis ea qui qui voluptas architecto impedit vel.',
  date: 'December 2020',
  name: 'Rebecca',
  ownerComment: 'Maiores iste vitae voluptas voluptatem rerum id porro. Fugiat omnis quia quaerat et.',
  ownerCommentDate: 'December 2020',
  ownerName: 'Ephraim',
  ownerProfilePicture: 'https://airbnbfec.s3-us-west-1.amazonaws.com/35.jpeg',
  profilePicture: 'https://airbnbfec.s3-us-west-1.amazonaws.com/34.jpeg',
};

describe('ModalReview', () => {
  it('should render the component',
    () => expect(shallow(<ModalReview review={review} />).exists()).toBe(true));
});

import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from '../src/components/Reviews';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render the reviews passed in as a prop', () => {
    expect(render(
      <Reviews
        reviews={[{
          _id: 1,
          comment: 'Ad quisquam ea vero minima. Voluptas voluptatem voluptas beatae illum dolor dolorum recusandae non omnis. Nobis sequi et eveniet. Et necessitatibus ratione fuga sit ut saepe quas voluptates. Ad excepturi perferendis ea qui qui voluptas architecto impedit vel.',
          date: 'December 2020',
          name: 'Rebecca',
          ownerComment: 'Maiores iste vitae voluptas voluptatem rerum id porro. Fugiat omnis quia quaerat et.',
          ownerCommentDate: 'December 2020',
          ownerName: 'Ephraim',
          ownerProfilePicture: 'https://airbnbfec.s3-us-west-1.amazonaws.com/35.jpeg',
          profilePicture: 'https://airbnbfec.s3-us-west-1.amazonaws.com/34.jpeg',
        }]}
        viewPortWidth={1280}
      />,
    ).text()).toEqual('RebeccaDecember 2020Ad quisquam ea vero minima. Voluptas voluptatem voluptas beatae illum dolor dolorum recusandae non omnis. Nobis sequi et eveniet. Et necessitatibus ratione fuga sit ut saepe quas v... read more');
  });
});

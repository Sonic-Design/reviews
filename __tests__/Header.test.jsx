import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Header from '../src/components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render the averageRating and reviewCount passed in as props',
    () => expect(
      render(<Header averageRating={2.15} reviewCount={32} />).text(),
    ).toEqual('2.15 (32 reviews)'));
});

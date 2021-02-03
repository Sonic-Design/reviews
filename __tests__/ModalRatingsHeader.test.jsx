import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ModalRatingsHeader from '../src/components/ModalRatingsHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('ModalRatingsHeader', () => {
  it('should render the averageRating and reviewCount passed in as props', () => {
    expect(
      render(<ModalRatingsHeader averageRating={2.15} reviewCount={32} />).text(),
    ).toEqual('2.15 (32 reviews)');
  });
});

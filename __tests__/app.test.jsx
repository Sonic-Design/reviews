import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../src/app';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render the component',
    () => expect(shallow(<App listingId={20} />).exists()).toBe(true));
});

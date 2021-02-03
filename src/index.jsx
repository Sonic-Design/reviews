import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const listingId = Number(window.location.pathname.match(/\/(\d+)\//)[1]);

ReactDOM.render(<App listingId={listingId} />, document.getElementById('reviews'));

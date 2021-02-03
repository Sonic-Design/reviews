import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Review from './Review';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
`;

const Reviews = ({ reviews, viewPortWidth }) => (
  <Container>
    {viewPortWidth > 730
      ? reviews.slice(0, 6).map((review) => <Review key={review._id} review={review} />)
      : reviews.slice(0, 3).map((review) => <Review key={review._id} review={review} />)}
  </Container>
);

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ownerComment: PropTypes.string,
    profilePicture: PropTypes.string.isRequired,
  })).isRequired,
  viewPortWidth: PropTypes.number.isRequired,
};

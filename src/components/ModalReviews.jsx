import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalReview from './ModalReview';

const ReviewsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 60%;
  justify-content: flex-end;
  align-items: flex-start;
  max-width: 558.578px;
  margin-bottom: 72px;
  margin-left: 90.040px;
  padding-right: 24px;
  @media (max-width: 1128px) {
    width: 100%;
    max-width: 100%;
    margin-top: 8px;
    margin-left: 0px;
  }
  @media (max-width: 730px) {
    margin-top: 8px;
    margin-bottom: 24px;
   }
`;

const NoResults = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin-bottom: 48px;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 1128px) {
    margin-top: -8px;
  }
`;

const ModalReviews = ({ reviews, delayedSearchText }) => {
  const searchResults = delayedSearchText ? reviews.filter(
    (review) => review.comment.toLowerCase().includes(delayedSearchText.toLowerCase())
      || (review.ownerComment
        && review.ownerComment.toLowerCase().includes(delayedSearchText.toLowerCase())),
  )
    : reviews;

  return (
    <ReviewsContainer>
      {searchResults.length ? searchResults.map((review) => (
        <ModalReview key={review._id} review={review} delayedSearchText={delayedSearchText} />
      ))
        : <NoResults>{`There are no results for '${delayedSearchText}'`}</NoResults>}
    </ReviewsContainer>
  );
};

export default ModalReviews;

ModalReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  delayedSearchText: PropTypes.string,
};

ModalReviews.defaultProps = { delayedSearchText: '' };

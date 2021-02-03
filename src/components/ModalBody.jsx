import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import ModalRatingsHeader from './ModalRatingsHeader';
import ModalSearch from './ModalSearch';
import ModalRatings from './ModalRatings';
import ModalReviews from './ModalReviews';

const ScrollContainer = styled.div`
  display: block;
  flex-flow: column wrap;
  flex: 1 1 auto;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  padding: 24px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 986px;
  margin-top: -24px;
  margin-right: 15px;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: -24px;
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 24px;
  background-color: rgb(255, 255, 255);
`;

const BodyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1128px) {
    flex-flow: column wrap;
  }
`;

const ModalBody = ({ reviews }) => {
  const [searchText, setSearchText] = useState('');
  const [delayedSearchText, setDelayedSearchText] = useState('');

  const delayedSearch = useRef(debounce((text) => setDelayedSearchText(text), 200)).current;

  const handleInputChange = (text) => {
    setSearchText(text);
    delayedSearch(text);
  };

  return (
    <ScrollContainer>
      <Container>
        <HeaderContainer>
          <ModalRatingsHeader
            averageRating={reviews.averageRating}
            reviewCount={reviews.reviewCount}
          />
          <ModalSearch searchText={searchText} handleInputChange={handleInputChange} />
        </HeaderContainer>
        <BodyContainer>
          <ModalRatings ratings={reviews.ratings} />
          <ModalReviews reviews={reviews.reviews} delayedSearchText={delayedSearchText} />
        </BodyContainer>
      </Container>
    </ScrollContainer>
  );
};

export default ModalBody;

ModalBody.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
};

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Ratings from './components/Ratings';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Modal from './components/Modal';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  align-items: center;
  margin: 48px 80px;
  color: rgb(34, 34, 34);
  @media (max-width: 1128px) {
    margin: 48px 40px;
  }
  @media (max-width: 730px) {
    margin: 32px 24px;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  max-width: 1128px;
  padding: 48px 0;
  box-sizing: border-box;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  @media (max-width: 730px) {
    padding: 32px 0;
  }
`;

const App = ({ listingId }) => {
  const [isLoading, setLoading] = useState(true);
  const [reviews, setReviews] = useState({});
  const [viewPortWidth, setViewPortWidth] = useState(1280);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    get(`/api/reviews/${listingId}`)
      .then(({ data }) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => { throw new Error(err); });
  }, [listingId]);

  const updateViewPortWidth = () => setViewPortWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateViewPortWidth);
    updateViewPortWidth();

    return () => {
      window.removeEventListener('resize', updateViewPortWidth);
    };
  }, []);

  const openModal = () => setDisplayModal(true);
  const closeModal = () => setDisplayModal(false);

  if (isLoading) {
    return <AppContainer>Loading...</AppContainer>;
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ReviewsContainer>
          <Header averageRating={reviews.averageRating} reviewCount={reviews.reviewCount} />
          <Ratings ratings={reviews.ratings} />
          <Reviews reviews={reviews.reviews} viewPortWidth={viewPortWidth} />
          <Footer reviewCount={reviews.reviewCount} openModal={openModal} />
        </ReviewsContainer>
        {displayModal ? (
          <Modal
            displayModal={displayModal}
            reviews={reviews}
            closeModal={closeModal}
            viewPortWidth={viewPortWidth}
          />
        )
          : null}
      </AppContainer>
    </>
  );
};

export default App;

App.propTypes = {
  listingId: PropTypes.number.isRequired,
};

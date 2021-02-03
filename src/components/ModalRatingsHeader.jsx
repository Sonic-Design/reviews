import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  max-width: 320.328px;
  @media (max-width: 1128px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

const Star = styled.svg`
  display: flex;
  align-items: center;
  fill: rgb(255, 56, 92);
  width: 32.99px;
  padding-right: 8px;
  @media (max-width: 730px) {
    width: 28px;
  }
`;

const RatingHeader = styled.span`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  @media (max-width: 730px) {
    font-size: 26px;
    line-height: 31px;
  }
`;

const ModalRatingsHeader = ({ averageRating, reviewCount }) => (
  <Container>
    <Star
      viewBox="0 0 1000 1000"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
    </Star>
    <RatingHeader>{`${averageRating} (${reviewCount} reviews)`}</RatingHeader>
  </Container>
);

export default ModalRatingsHeader;

ModalRatingsHeader.propTypes = {
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

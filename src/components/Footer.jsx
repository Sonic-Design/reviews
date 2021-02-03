import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShowAllReviewsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 199.578px;
  padding: 13px, 23px;
  border: 1px solid rgb(34, 34, 34);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  &:active {
    background-color: rgb(247, 247, 247);
    transform: scale(0.96) !important;
  }
  @media (max-width: 730px) {
    width: 100%;
  }
`;

const Footer = ({ reviewCount, openModal }) => {
  const handleClick = () => openModal();

  return (
    <ShowAllReviewsButton id="showAll" onClick={handleClick}>
      {`Show all ${reviewCount} reviews`}
    </ShowAllReviewsButton>
  );
};

export default Footer;

Footer.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

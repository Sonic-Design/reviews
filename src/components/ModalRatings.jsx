import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  max-width: 320.328px;
  @media (max-width: 1128px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 24px;
  }
  @media (max-width: 730px) {
    margin-bottom: 24px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  width: 50%;
  margin-right 8px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 1128px) {
    flex: none;
    width: calc(50% - 6px);
    margin-right: 0;
  }
  @media (max-width: 730px) {
   width: 100%;
  }
`;

const Category = styled.div`
  display: flex;
  flex: 1 1 52.25%;
  line-height: 20.02px;
  @media (max-width: 730px) {
    flex: 1 0 54.25%;
   }
`;
const Rating = styled.div`
  display: flex;
  flex: 1 0 43.5%;
  justify-content: flex-end;
  align-items: center;
  padding-left: 4.25%;
  @media (max-width: 730px) {
    flex: 1 0 41.5%;
    padding-left: 12px;
   }
`;

const RatingMeter = styled.div`
  display: flex;
  height: 4px;
  width: 100%;
  border-radius: 2px;
  margin-right: 10px;
  background: rgb(221, 221, 221);
`;

const RatingMeterFill = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.width || 0}%;
  border-radius: 2px;
  background: rgb(34, 34, 34);
`;

const Number = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const ModalRatings = ({ ratings }) => (
  <RatingsContainer>
    {ratings.map((rating) => (
      <RatingContainer key={rating[0]} rating={rating}>
        <Category>{rating[0]}</Category>
        <Rating>
          <RatingMeter><RatingMeterFill width={rating[1] * 20 || 0} /></RatingMeter>
          <Number>{rating[1]}</Number>
        </Rating>
      </RatingContainer>
    ))}
  </RatingsContainer>
);

export default ModalRatings;

ModalRatings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.array).isRequired,
};

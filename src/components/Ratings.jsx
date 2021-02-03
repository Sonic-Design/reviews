import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  margin-bottom: 24px;
  @media (max-width: 730px) {
    display: none;
  }
`;

const Column = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 16px;
`;

const Category = styled.div`
  display: flex;
  flex: 1 1 52.25%;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  @media (max-width: 1128px) {
    flex: 1 1 44.75%;
  }
`;
const Rating = styled.div`
  display: flex;
  flex: 1 1 27.5%;
  justify-content: flex-end;
  align-items: center;
  padding-left: 2.25%;
  margin-right: 18%;
  line-height: 20px;
  @media (max-width: 1128px) {
    flex: 1 1 35%;
  }
`;

const RatingMeter = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 4px;
  margin-right: 10px;
  background: rgb(221, 221, 221);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const RatingMeterFill = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.width || 0}%;
  background: rgb(34, 34, 34);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const Number = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const Ratings = ({ ratings }) => (
  <Container>
    {ratings.map((rating) => (
      <Column key={rating[0]}>
        <Category>{rating[0]}</Category>
        <Rating>
          <RatingMeter><RatingMeterFill width={rating[1] * 20 || 0} /></RatingMeter>
          <Number>{rating[1]}</Number>
        </Rating>
      </Column>
    ))}
  </Container>
);

export default Ratings;

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.array).isRequired,
};

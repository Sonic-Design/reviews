import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 50%;
  margin-bottom: 40px;
  @media (max-width: 1128px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 56px;
  width: 82%;
  margin-right: 18%;
  margin-bottom: 16px;
  @media (max-width: 1128px) {
    width: 100%;
    margin-bottom: 12px;
  }
  @media (max-width: 730px) {
    height: 40px;
  }
`;

const PictureWrapper = styled.a`
  height: 56px;
  width: 56px;
  @media (max-width: 730px) {
    height: 40px;
    width: 40px;
  }
`;

const Picture = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  src: ${(props) => props.src || null}%;
`;

const NameDate = styled.div`
  height: 40px;
  padding-left: 12px;
  line-height: 20px;
  font-weight: 600;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(113, 113, 113);
`;

const Comment = styled.div`
  min-height: min-content;
  width: 82%;
  margin-right: 18%;
  line-height: 24px;
  @media (max-width: 1128px) {
    width: 100%;
  }
`;

const ReadMore = styled.span`
  color: rgb(34, 34, 34);
  cursor: pointer;
  font-weight: 600;
  text-decoration-line: underline;
`;

const Review = ({ review }) => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => setShowAll(true);

  return (
    <Column key={review._id}>
      <Header>
        <PictureWrapper href={review.profilePicture}>
          <Picture height="225px" width="225px" src={review.profilePicture} alt="profile picture" />
        </PictureWrapper>
        <NameDate>
          {review.name}
          <Date>{review.date}</Date>
        </NameDate>
      </Header>
      <Comment>
        {review.comment.length <= 180 || showAll ? review.comment
          : (
            <>
              {review.comment[179] === ' ' ? review.comment.substring(0, 179) : review.comment.substring(0, 180)}
              {'... '}
              <ReadMore onClick={handleClick}>read more</ReadMore>
            </>
          )}
      </Comment>
    </Column>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    profilePicture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    ownerProfilePicture: PropTypes.string,
    ownerName: PropTypes.string,
    ownerCommentDate: PropTypes.string,
    ownerComment: PropTypes.string,
  }).isRequired,
};

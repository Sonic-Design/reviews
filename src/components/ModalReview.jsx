/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Review = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin-bottom: 48px;
  @media (max-width: 1128px) {
    margin-bottom: 32px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 56px;
  width: 100%;
  margin-bottom: 16px;
  @media (max-width: 1128px) {
    margin-bottom: 12px;
  }
  @media (max-width: 730px) {
    height: 40px;
  }
`;

const PictureWrapper = styled.a`
  height: 56px;
  width: 56px;
  cursor: pointer;
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
  margin-left: 12px;
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 600;
`;

const Date = styled.div`
  color: rgb(113, 113, 113);
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
`;

const Comment = styled.div`
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
  word-break: break-word;
`;

const ReadMore = styled.span`
  display: inline;
  height: 24px;
  cursor: pointer;
  color: rgb(34, 34, 34);
  line-height: 24px;
  font-size: 14px;
  font-weight: 600;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  text-decoration-line: underline;
  word-break: break-word;
  word-spacing: 0px;
`;

const Owner = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 526.578px;
  margin-top: 48px;
  margin-left: 32px;
  @media (max-width: 1128px) {
    margin-top: 24px;
    margin-left: 24px;
  }
`;

const OwnerHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 56px;
  width: 100%;
  max-width: 526.578px;
  margin-bottom: 16px;
  @media (max-width: 1128px) {
    margin-bottom: 12px;
  }
  @media (max-width: 730px) {
    height: 40px;
  }
`;

const OwnerComment = styled.div`
  margin-left: 68px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 1128px) {
    margin-left: 52px;
  }
  @media (max-width: 730px) {
    margin-left: 52px;
  }
`;

const ModalReview = ({ review, delayedSearchText }) => {
  const [showComment, setShowComment] = useState(false);
  const [showOwnerComment, setShowOwnerComment] = useState(false);

  const handleCommentClick = () => setShowComment(true);
  const handleOwnerCommentClick = () => setShowOwnerComment(true);

  const message = (text, user) => {
    const whichState = user ? showComment : showOwnerComment;
    const whichHandler = user ? handleCommentClick : handleOwnerCommentClick;
    let render;

    if (delayedSearchText) {
      render = text.length <= 180 || whichState
      || (text.lastIndexOf(delayedSearchText) + text.length - 1) >= 180
        ? (
          <span dangerouslySetInnerHTML={{
            __html: text.replace(
              new RegExp(delayedSearchText, 'gi'), (match) => `<mark>${match}</mark>`,
            ),
          }}
          />
        )
        : (
          <>
            <span dangerouslySetInnerHTML={{
              __html: text.substring(0, 180).replace(
                new RegExp(delayedSearchText, 'gi'), (match) => `<mark>${match}</mark>`,
              ),
            }}
            />
            {'... '}
            <ReadMore onClick={whichHandler}>read more</ReadMore>
          </>
        );
    } else {
      render = text.length <= 180 || whichState
        ? text
        : (
          <>
            {text[179] === ' ' ? text.substring(0, 179) : text.substring(0, 180)}
            {'... '}
            <ReadMore onClick={whichHandler}>read more</ReadMore>
          </>
        );
    }

    return render;
  };

  return (
    <Review>
      <Header>
        <PictureWrapper href={review.profilePicture}>
          <Picture height="225px" width="225px" src={review.profilePicture} alt="profile picture" />
        </PictureWrapper>
        <NameDate>
          {review.name}
          <Date>{review.date}</Date>
        </NameDate>
      </Header>
      <Comment>{message(review.comment, true)}</Comment>
      {review.ownerComment
        ? (
          <Owner>
            <OwnerHeader>
              <PictureWrapper href={review.ownerProfilePicture}>
                <Picture height="225px" width="225px" src={review.ownerProfilePicture} alt="profile picture" />
              </PictureWrapper>
              <NameDate>
                {`Response from ${review.ownerName}`}
                <Date>{review.ownerCommentDate}</Date>
              </NameDate>
            </OwnerHeader>
            <OwnerComment>{message(review.ownerComment, false)}</OwnerComment>
          </Owner>
        )
        : null}
    </Review>
  );
};

export default ModalReview;

ModalReview.propTypes = {
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
  delayedSearchText: PropTypes.string,
};

ModalReview.defaultProps = { delayedSearchText: '' };

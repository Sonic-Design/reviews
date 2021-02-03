import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 72px;
  @media (max-width: 730px) {
    height: 48px;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  &:active {
    background-color: rgb(247, 247, 247);
    transform: scale(0.96) !important;
  }
  @media (max-width: 730px) {
    top: 8px;
  }
`;

const XSVG = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const ChevronSVG = styled.svg`
  height: 16px;
  width: 16px;
  display: block;
  fill: currentcolor;
`;

const ModalClose = ({ handleClose, viewPortWidth }) => {
  const handleClick = () => handleClose();

  return (
    <Container>
      <Button id="close" onClick={handleClick}>
        {viewPortWidth > 730
          ? (
            <XSVG
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m6 6 20 20" />
              <path d="m26 6-20 20" />
            </XSVG>
          )
          : (
            <ChevronSVG>
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                  fillRule="evenodd"
                />
              </svg>
            </ChevronSVG>
          )}
      </Button>
    </Container>
  );
};

export default ModalClose;

ModalClose.propTypes = {
  handleClose: PropTypes.func.isRequired,
  viewPortWidth: PropTypes.number.isRequired,
};

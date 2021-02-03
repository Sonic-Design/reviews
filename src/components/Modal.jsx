import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalClose from './ModalClose';
import ModalBody from './ModalBody';

const Backdrop = styled.div`
  z-index: 4;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 40px;
  background: rgb(34, 34, 34, 0.6);
  display: ${(props) => props.show || 'none'};
  @media (max-width: 730px) {
    padding: 0;
  }
`;

const ModalContainer = styled.div`
  z-index: 5;
  position: relative;
  top: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow-y: hidden;
  height: 100%;
  max-width: 1032px;
  border-radius: 12px 12px 0 12px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.28) 0 8px 28px 0;
  background-color: white;
  transition: top 0.2s ease-in-out;
  @media (max-width: 730px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Modal = ({
  displayModal, reviews, closeModal, viewPortWidth,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const refCopy = ref.current;

    if (refCopy && displayModal) {
      refCopy.style.top = '50%';
      refCopy.style.transform = 'translateY(calc(-50% + 0.5px)';
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [displayModal]);

  const handleClose = () => {
    ref.current.style.top = '200vh';
    ref.current.style.transition = 'top 0.4s ease-in-out';
    setTimeout(closeModal, 400);
  };
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <Backdrop id="backdrop" show={displayModal ? 'block' : 'none'} onClick={handleClose}>
      <ModalContainer id="modal" ref={ref} onClick={handleModalClick}>
        <ModalClose handleClose={handleClose} viewPortWidth={viewPortWidth} />
        <ModalBody reviews={reviews} />
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;

Modal.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  reviews: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
  closeModal: PropTypes.func.isRequired,
  viewPortWidth: PropTypes.number.isRequired,
};

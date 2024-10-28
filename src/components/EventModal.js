import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-in-out;

  @keyframes slideIn {
    from { transform: translateY(-30px); }
    to { transform: translateY(0); }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #aaa;

  &:hover {
    color: #333;
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const EventDescription = styled.p`
  color: #555;
  line-height: 1.6;
`;

const EventModal = ({ event, onClose }) => (
  <Overlay onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <EventImage src={event.image} alt={event.name} />
      <h2>{event.name}</h2>
      <p>{event.date} | {event.location}</p>
      <EventDescription>{event.description}</EventDescription>
    </ModalContent>
  </Overlay>
);

export default EventModal;
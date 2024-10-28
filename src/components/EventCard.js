import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  }
`;

const EventName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 8px;
`;

const EventDate = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const EventLocation = styled.p`
  font-size: 1rem;
  color: #888;
`;

const EventCard = ({ event, onClick }) => (
  <Card onClick={onClick}>
    <EventName>{event.name}</EventName>
    <EventDate>{event.date}</EventDate>
    <EventLocation>{event.location}</EventLocation>
  </Card>
);

export default EventCard;

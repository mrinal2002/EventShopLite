import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import events from './data/events';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f6d365, #fda085);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

const AppContainer = styled.div`
  padding: 40px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  animation: fadeIn 1s ease-in;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 2px solid #f0f2f5;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 30px;
  padding: 8px 15px;
  max-width: 300px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  font-size: 1rem;
  width: 100%;
  color: #333;
  background: transparent;
`;

const EventsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
  overflow-y: auto;
  max-height: 70vh;
`;

// Define a list of pastel colors for cards
const pastelColors = [
  '#ffdfba', '#ffcbf2', '#bde0fe', '#caffbf', '#f1c0e8',
  '#ffd6a5', '#fdffb6', '#bde0fe', '#a0c4ff', '#ffc6ff'
];

const EventCardStyled = styled.div`
  background-color: ${(props) => props.color || '#f9f9f9'};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()) ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>EventSpot Lite</Title>
          <SearchContainer>
            <FaSearch color="#888" style={{ marginRight: '8px' }} />
            <SearchInput
              type="text"
              placeholder="Search by name or location"
              value={search}
              onChange={handleSearchChange}
            />
          </SearchContainer>
        </Header>
        <EventsContainer>
          {filteredEvents.map((event, index) => (
            <EventCardStyled
              key={event.id}
              color={pastelColors[index % pastelColors.length]}
              onClick={() => setSelectedEvent(event)}
            >
              <EventCard event={event} />
            </EventCardStyled>
          ))}
        </EventsContainer>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AppContainer>
    </>
  );
};

export default App;

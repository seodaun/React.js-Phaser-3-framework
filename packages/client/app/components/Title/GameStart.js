import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGameStart = styled.div` 
  button {
    width: 100%;
    max-width: 350px;
    height: 45px;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.2s ease; 
  }
`;

const GameStart = ({ startGame }) => (
  <StyledGameStart>
    {
      <button type="button" onClick={startGame}>
        START GAME
      </button>
    }
  </StyledGameStart>
);

GameStart.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default GameStart;

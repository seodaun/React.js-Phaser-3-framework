import React from 'react';
import styled from 'styled-components';
import { useStore } from 'easy-peasy';
import GameCanvas from '../../../game/GameCanvas';

const StyledGameScreen = styled.div`
`;

const GameScreen = () => (
    <StyledGameScreen>
        <GameCanvas />
    </StyledGameScreen>
);

export default GameScreen;

import React from 'react';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh/lib/Div100vh';
import StartGame from '../../components/Title/GameStart'

const StyledTitle = styled(Div100vh)` 
`;

const Title = () => {
    const { socket } = useStoreState(state => state.socket);
    const { game } = useStoreState(state => state.game);

    const startGame = () => {
        socket.emit('start game');
        game.status = 'game';
    };

    return (
        <StyledTitle>
            <StartGame startGame={startGame} />
        </StyledTitle>
    );
};

export default Title;
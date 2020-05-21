import React, { useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import GameScreen from './GameScreen';
import Controller from './Controller';
import Title from './Title';

const Game = ({ match }) => {
    const { socket } = useStoreState(state => state.socket);
    const { game } = useStoreState(state => state.game);
    const { setGame } = useStoreActions(actions => actions.game);

    useEffect(() => {
        socket.on('start game', (g) => {
            setGame(g);
        });
        return () => {
        };
    }, []);
    return (
        <React.Fragment>
            {game.status === 'title' && <Title />}
            {game.status !== 'title' && (<GameScreen />)}
        </React.Fragment>
    );
};
export default Game;

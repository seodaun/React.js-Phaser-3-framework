export default (io, socket, dataStore) => {
    socket.on('start game', () => {
        const game = dataStore.getGame();
        game.status = 'playing';
        io.emit('start game', game);
        game.startGame();
    });
    socket.on('resume game', () => {
        const game = dataStore.getGame();
        game.resumeGame();
        io.emit('resume game', game.turn);

    });

    socket.on('pause game', () => {
        const game = dataStore.getGame();
        game.pauseGame();
        io.emit('pause game', game.turn);
    });
};

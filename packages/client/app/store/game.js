/* eslint-disable no-param-reassign */
import { action } from 'easy-peasy';

const gameStore = {
    game: {
        status: 'title'
    },
    setGame: action((state, payload) => {
        state.game = payload;
    }),
};

export default gameStore;

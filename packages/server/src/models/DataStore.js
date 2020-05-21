import Game from './Game';

class DataStore {
    constructor() {
        this.game = new Game();
    }
    getGame() {
        return this.game;
    }
}

export default DataStore;

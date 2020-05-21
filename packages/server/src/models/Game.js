
class Game {
    constructor() {
        this.status = 'title';

        this.timer = null;

        this.canMove = true;
        this.countdownTime = 3;
        this.countdown = this.countdownTime;
    }

    pauseGame() {
        if (this.status === 'playing') {
            clearInterval(this.timer);
            this.status = 'paused';
            this.canMove = false;
        }
    }
    resumeGame() {
        if (this.status !== 'playing') {
            this.status = 'playing';
            this.canMove = true;
        }
    }

    startGame() {
        this.status = 'playing';
    }
    endGame() {
        this.status = 'ended';
        this.pauseGame();
    }
}

export default Game;

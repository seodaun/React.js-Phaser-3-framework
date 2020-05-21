import Phaser from 'phaser';

// Scenes
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        width: 320,
        height: 640,
    },
    parent: 'game',
    scene: [BootScene, TitleScene, GameScene],
};

const createGame = () => new Phaser.Game(config);
export default createGame;  
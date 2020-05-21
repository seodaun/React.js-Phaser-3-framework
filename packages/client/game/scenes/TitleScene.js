
import store from '../../app/store';
class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene',
        });
    }
    preload() {
    }
    create() {
    }
    update() {
    }
}
function resize(gameSize, baseSize, displaySize, resolution) {
    var width = gameSize.width;
    var height = gameSize.height;
    this.bg.setSize(width, height);
}
export default TitleScene; 
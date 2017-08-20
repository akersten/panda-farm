import * as Phaser from "phaser-ce"
import IGameConfig = Phaser.IGameConfig;
import {LoadState} from "./client/states/LoadState";
import {BootState} from "./client/states/BootState";
import {MainMenuState} from "./client/states/MainMenuState";
import {FarmState} from "./client/states/FarmState";
import game = PIXI.game;


/**
 * Created by akersten on 8/19/17.
 */


class Soleil {

    game: Phaser.Game;

    constructor() {

        let soleilConfig: IGameConfig = {
            width: 800,
            height: 600,
            renderer: Phaser.AUTO,
            parent: 'app'
        };

        this.game = new Phaser.Game(soleilConfig);

        this.game.state.add('boot', BootState);
        this.game.state.add('load', LoadState);
        this.game.state.add('menu', MainMenuState);
        this.game.state.add('farm', FarmState);

        this.game.state.start('boot');
    }

}

window.onload = () => {
    let game = new Soleil();
};

import State = Phaser.State;

/**
 * Created by akersten on 8/20/17.
 */

export class LoadState extends State {

    preload(): void {
        this.game.stage.backgroundColor = "#660000";

        this.game.load.image('menu_main_logo', 'img/menu/main_logo.png');

        this.game.load.spritesheet('button_default', 'img/buttons/default_buttons.png', 256, 64);
    }

    create(): void {
        this.game.state.start('menu');
    }
    
    update(): void {

    }
}
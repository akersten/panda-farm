import State = Phaser.State;

/**
 * Created by akersten on 8/20/17.
 */

export class BootState extends State {

    preload(): void {
        this.game.stage.backgroundColor = "#666600";
    }

    create(): void {
        this.game.state.start('load');
    }

    update(): void {

    }
}
import State = Phaser.State;
/**
 * Created by akersten on 8/20/17.
 */

export class MainMenuState extends State {

    preload(): void {


    }

    create(): void {
        this.game.world.setBounds(0,0,800,600);
        this.game.stage.backgroundColor = "#6D3D1D";

        let buttonTextStyle = {
            font: 'bold 32px sans-serif',
            fill: '#F6F6F6',
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        };

        let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - this.game.world.height / 4, 'menu_main_logo');

        let buttonStart = this.game.add.button(this.game.world.centerX - 128, this.game.world.centerY - 32, 'button_default', this.buttonStartClick, this, 0, 1, 2);
        let buttonStartText = this.game.add.text(0, 0, "Start Game", buttonTextStyle);
        buttonStartText.setTextBounds(buttonStart.x, buttonStart.y + 4, buttonStart.width, buttonStart.height);



        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.1, 0.1);

        this.game.add.tween(logo.scale).to({x: 1, y: 1}, 2000, Phaser.Easing.Bounce.Out, true);
    }

    update(): void {

    }

    buttonStartClick(context: MainMenuState): void {
        alert("HEY");
    }
}
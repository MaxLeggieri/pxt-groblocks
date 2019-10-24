enum TurtlePenMode {
    //% block="down"
    Down,
    //% block="up"
    Up
}
/**
 * Turtle graphics blocks
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace grobot {
    let _x: number;
    let _y: number;
    //let _direction: number; // 0 right, 1 down, 2 left, 3 top
    //let _brightness: number;
    //let _penMode: TurtlePenMode = TurtlePenMode.Up;
    //let _img: Image;
    let _delay = 250;

    /*function init() {
        if (!_img) {
            led.setBrightness(255);
            led.setDisplayMode(DisplayMode.Greyscale);
            _x = 2;
            _y = 2;
            _direction = 3;
            _brightness = 128;
            _img = images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen();
        }
    }

    function paint() {
        // plot background
        _img.plotImage();
        // plot turtle
        led.plotBrightness(_x, _y, 255);
        // slow down
        basic.pause(_delay);
    }
*/
    /**
     * Moves the turtle for the given amount of pixels
     * @param timer number of steps, eg: 1
     */
    //% blockId=turtleForward block="forward %steps|steps"
    //% weight=99 blockGap=8
    export function clock(timer: number): void {
        serial.writeString()
        }
    }

enum testOneTwo {
    //% block="One"
    One,
    //% block="Two"
    Two
}
/**
 * Turtle graphics blocks
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace groblocks {
    let _x: number;
    let _y: number;
    //let _direction: number; // 0 right, 1 down, 2 left, 3 top
    //let _brightness: number;
    //let _penMode: TurtlePenMode = TurtlePenMode.Up;
    //let _img: Image;
    let _delay = 250;


    /**
     * times hours
     * @param timer number of hours, eg: 1
     */
    //% blockId=turtleForward block="count %timer|hours"
    //% weight=99 blockGap=8
    export function clock(timer: number): void {

        }


    export function testSerial(testString: string):void{
      basic.showString(testString);
  }



}

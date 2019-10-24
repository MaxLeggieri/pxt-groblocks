/*
Sensors		         Actuators
Clock		           Controlled fan
Humidity		       IR Grow
Moisture		       UV Grow
Co2	               5 pumps


Sequence #
*/




enum testEnum {
    //% block="One"
    One,
    //% block="Two"
    Two
}

enum actuList {
  //% block="Heater"
  heater,
  //% block="fan"
  fan,
  //% block="Pump"
  pump,

}
/**
 * Turtle graphics blocks
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace groblocks {
    //let _x: number;
    //let _y: number;
    //let _direction: number; // 0 right, 1 down, 2 left, 3 top
    //let _brightness: number;
    //let _penMode: TurtlePenMode = TurtlePenMode.Up;
    //let _img: Image;
    //let _delay = 250;

    /**
    * prints string on LEDS and on serial port
    * @param testString string
    */
    //% blockId=testSerialPrint block="Test Serial print: %testString"
    //% weight=99 blockGap=8
    export function testSerialPrint(testString: string):void{
      basic.showString(testString);
      serial.serialWrite(teststring);
    }

    /**
     * actuators
     * @param mode enum, actuators eg fan or heater
     */
    //% blockId=testActu block="Choose an actuator %mode"
    //% weight=99 blockGap=8
    export function testActu(mode: actuList):void {

    }


  /**
  * times hours
  */
  //% blockId=testSensor block="Hummidity"
  //% weight=99 blockGap=8
  export function testSensor():void {

  }


}

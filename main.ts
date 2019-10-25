/*
Sensors		         Actuators
Clock		           Controlled fan
Humidity		       IR Grow
Moisture		       UV Grow
Co2	               5 pumps
Sequence #
*/
enum testEnum {
    One,
    Two,
}

enum actuList {
  //% block="Heater"
  heater,
  //% block="fan"
  fan,
  //% block="Pump"
  pump,
}



// groblocks graphics
//% weight=100 color=#0f9c11 icon="\uf188"
namespace groblocks {


    /**
    * prints string on LEDS and on serial port
    * @param testString string
    */
    //% blockId=testSerialPrint block="Test Serial print: %testString"
    //% weight=99 blockGap=8
    export function testSerialPrint(testString: string) : void {
      basic.showString(testString);
      serial.writeString(testString);
    }

    /**
    * Test loaded from comment
    */
    //% blockId=testActu block="Choose an actuator %mode"
    //% weight=99 blockGap=8
    export function testActu(mode: actuList) : void {
      serial.writeString()
    }


  //% blockId=testShadow  block="Shadow test %msg"
  //% text.shadowOptions.toString=true
  export function testShadow(text: string): void {
    serial.writeString(text);
  }





}

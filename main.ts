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


/**
 * Grobot graphics block
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace groblocks {
    //let _x: number;
    //let _y: number;





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
     * actuator
     */
    //% blockId=testActu block="Choose an actuator %mode"
    //% weight=99 blockGap=8
    export function testActu(mode: actuList) : void {
    serial.writeString()
    }



  //% blockId=testShadow  block="Shadow test|log %msg"
  //% text.shadowOptions.toString=true
  export function testShadow(text: string): void {
      serial.writeString(text + "\r\n");
  }
  /**
  * times hours
  */
  //% blockId=testSensor block="Hummidity"
  //% weight=99 blockGap=8
  //export function testSensor() : void {

//  }


}

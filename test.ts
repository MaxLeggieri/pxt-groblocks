

namespace groblocks {


  export class grobot {


    //% blockId="test_grobot_cloak" block="%grobot"
    //% weight=85 blockGap=8
    //% parts="neopixel"
    clock(tidFra: number, tidTil: number):void {
    if (tidFra <= tidTil) {
      tidTil++
      }
    }

  }



}

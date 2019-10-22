/**
 * Groblocks for foodcomputer
 *Set ssid & pw for wifi connect
 */
 /**
  * Provides access to basic micro:bit functionality.
  */
 //% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
 namespace basic {

}

namespace Groblocks {


//% blockId="Forbind til wifi"
  export function wifiConnect(ssid: string, pw: string,){

  }

  export function clock(from: number, to: number):void {


  }

}
//% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue"
        //% weight=85 blockGap=8
        //% parts="neopixel"
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, NeoPixelColors.Yellow);
                this.show();
                return;
                //% blockId="neopixel_set_matrix_color" block="%strip|set matrix color at x %x|y %y|to %rgb=neopixel_colors" 
                //% weight=4
                //% parts="neopixel" advanced=true
                setMatrixColor(x: number, y: number, rgb: number) {
                    if (this._matrixWidth <= 0) return; // not a matrix, ignore
                    x = x >> 0;
                    y = y >> 0;
                    rgb = rgb >> 0;
                    const cols = Math.idiv(this._length, this._matrixWidth);
                    if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
                    let i = x + y * this._matrixWidth;
                    this.setPixelColor(i, rgb);
                }

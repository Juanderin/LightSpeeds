const PLAYER_CONSTANTS = {

    PLAYER_SIZE: 50
};

class Player {
    constructor(canvas, level) {
        this.canvas = canvas;
        // this.color = 'rgb(0,0,0)';
        this.ctx = this.canvas.getContext("2d");
        // this.drawBox()
        this.playerSize = PLAYER_CONSTANTS.PLAYER_SIZE
        this.swatches = level.swatches;
      
        // this.keyStates = {
        //     KeyA: {
        //         lastPressTime: 0,
        //         doubleTapDelay: 250
        //     },

        //     KeyS: {
        //         lastPressTime: 0,
        //         doubleTapDelay: 250 
        //     },

        //     KeyD: {
        //         lastPressTime: 0,
        //         doubleTapDelay: 250 
        //     } 
        // }


        this.keyStates = {
            KeyA: false,
            KeyS: false,
            KeyD: false
        };

        this.keyBind();



        this.colors = {
            r: 0,
            g: 0,
            b: 0
        }

    }

    currentPlayerColor() {
        return `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
    }

    currentPlayerColorHash() {
        this.col = {
            r: this.colors.r,
            g: this.colors.g,
            b: this.colors.b
        };
    }

    // difficultySwitch() {

    //     this.

    // }

    keyBind() {
        document.addEventListener("keydown", (e) => {
            if (["KeyA", "KeyS", "KeyD"].includes(e.code)) {
                const valSign = this.keyStates[e.code] ? -1 : 1;
                this.keyStates[e.code] = !this.keyStates[e.code];

                this.changeColor(e.code, valSign);
            }

        });
    }


    // handleDoubleTap(key) {
    //     switch(key) {
    //         case 'KeyA':
    //             if (this.colors.r === 255 ) {
    //             this.colors.r -= 255
    //             console.log('A double worked')
    //             console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
    //             }
    //             break;
    //         case 'KeyS':
    //             if (this.colors.g === 255 ) {
    //             this.colors.g -= 255
    //             console.log('S double worked')
    //             console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
    //             }
    //             break;
    //         case 'KeyD':
    //             if (this.colors.b === 255 ) {
    //             this.colors.b -= 255
    //             console.log('D double worked')
    //             console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
    //             }
    //             break;
    //     }
    // } 

    changeColor(keyPressed, valSign) {
        this.colors.r += (valSign * (this.swatches[keyPressed].r));
        this.colors.g += (valSign * (this.swatches[keyPressed].g));
        this.colors.b += (valSign * (this.swatches[keyPressed].b));
    }


    drawBox() {

        // this.ctx.lineWidth = 7
        // this.ctx.strokeStyle = 'gray';
        // this.ctx.strokeRect(3, 0, 50, 500);
       
        this.ctx.fillStyle = `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
        this.ctx.fillRect(0, 0, this.playerSize, 500)
     
    }

    bringToFront() {
        this.canvas.appendChild(this.canvas);
    }
}
// some code
export default Player;

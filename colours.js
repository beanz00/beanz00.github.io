const output = document.getElementById('output');
const input = document.getElementById('thecolour');
const isRed = document.getElementById('red');
const isOrange = document.getElementById('orange');
const isYellow = document.getElementById('yellow');
const isGreen = document.getElementById('green');
const isBlue = document.getElementById('blue');
const isPurple = document.getElementById('purple');
var vRed = 0;
var vGreen = 0;
var vBlue = 0;

function bgcheck() {
    if (vRed == 0 && vGreen == 0 && vBlue == 0) {
        output.style.backgroundColor = "#999999";
    } else {
        output.style.backgroundColor = "#000000";
    }
}


function yippeeplay() {
    var audio = document.getElementById('yippeeaud');
    audio.play();
}

function finalcheck() {
    document.getElementById('q4').classList.add('father');
    if (output.style.color == input.style.color) {
        document.body.style.backgroundColor = "#ffffff";
        document.getElementById('yippee').classList.remove('father');
        const confetti = document.createElement('img');
        setTimeout(() => {
        confetti.src = "confetti.gif";
        confetti.classList.add('confettisize');
        document.body.appendChild(confetti);
        }, 200);
        yippeeplay();
        setTimeout(() => {
           confetti.classList.add('father');
           document.getElementById('yippeeaud').pause();
        }, 2000);
    } else {
        jumpscare();
    }
}

bgcheck();

function randomcolour() {
    var rnd = Math.floor(Math.random() * 6);
    if (rnd == 0) {
        input.style.color = "rgb(255, 165, 128)";
    } else if (rnd == 1) {
        input.style.color = "rgb(255, 165, 255)";
    } else if (rnd == 2) {
        input.style.color = "rgb(128, 165, 128)";
    } else if (rnd == 3) {
        input.style.color = "rgb(0, 255, 128)";
    } else if (rnd == 4) {
        input.style.color = "rgb(255, 255, 128)";
    } else if (rnd == 5) {
        input.style.color = "rgb(128, 0, 255)";
    }
}
randomcolour();

function red() {
    if (isRed.checked == true) {
        vRed =+ 255;
    } else {
        vRed =- 255;
    }
    if (vRed > 255) {
        vRed = 255;
    } else if (vRed < 0) {
        vRed = 0;
    }
    output.style.color = `rgb(${vRed}, ${vGreen}, ${vBlue})`;
    bgcheck()
}

function orange() {
    if (isOrange.checked == true) {
        vRed =+ 255;
        vGreen =+ 165;
    } else {
        if (isRed.checked == true) {
            vGreen =- 165;
        } else if (isGreen.checked == true && isRed.checked == true) {
            
        } else if (isGreen.checked == true) {
            vRed =- 255;
        } else {
            vRed =- 255;
            vGreen =- 165;
        }
    }
    if (vRed > 255) {
        vRed = 255;
    } else if (vRed < 0) {
        vRed = 0;
    }
    if (vGreen > 255) {
        vGreen = 255;
    } else if (vGreen < 0) {
        vGreen = 0;
    }
    output.style.color = `rgb(${vRed}, ${vGreen}, ${vBlue})`;
    bgcheck()
}

function yellow() {
    if (isYellow.checked == true) {
        vRed =+ 255;
        vGreen =+ 255;
    } else {
        if (isRed.checked == true) {
            vGreen =- 255;
        } else if (isGreen.checked == true && isRed.checked == true) {
            
        } else if (isGreen.checked == true) {
            vRed =- 255;
        } else {
            vRed =- 255;
            vGreen =- 255;
        }
    }
    if (vRed > 255) {
        vRed = 255;
    } else if (vRed < 0) {
        vRed = 0;
    }
    if (vGreen > 255) {
        vGreen = 255;
    } else if (vGreen < 0) {
        vGreen = 0;
    }
    output.style.color = `rgb(${vRed}, ${vGreen}, ${vBlue})`;
    bgcheck()
}

function green() {
    if (isGreen.checked == true) {
        vGreen =+ 255;
    } else {
        vGreen =- 255;
    }
    if (vGreen > 255) {
        vGreen = 255;
    } else if (vGreen < 0) {
        vGreen = 0;
    }
    output.style.color = `rgb(${vRed}, ${vGreen}, ${vBlue})`;
    bgcheck()
}

function blue() {
    if (isBlue.checked == true) {
        vBlue =+ 255;
    } else {
        vBlue =- 255;
    }
    if (vBlue > 255) {
        vBlue = 255;
    } else if (vBlue < 0) {
        vBlue = 0;
    }
    output.style.color = `rgb(${vRed}, ${vGreen}, ${vBlue})`;
    bgcheck()
}

function purple() {
    if (isPurple.checked == true) {
        vRed =+ 128;
        vBlue =+ 128;
    } else {
        if (isRed.checked == true) {
            vBlue =- 128;
        } else if (isBlue.checked == true && isRed.checked == true) {
            
        } else if (isBlue.checked == true) {
            vRed =- 128;
        } else {
            vRed =- 128;
            vBlue =- 128;
        }
    }
    if (vRed > 255) {
        vRed = 255;
    } else if (vRed < 0) {
        vRed = 0;
    }
    if (vBlue > 255) {
        vBlue = 255;
    } else if (vBlue < 0) {
        vBlue = 0;
    }
    output.style.color = `rgb(${vRed}, ${vGreen}, ${vBlue})`;
    bgcheck()
}

function reset() {
    isRed.checked = false;
    isOrange.checked = false;
    isYellow.checked = false;
    isGreen.checked = false;
    isBlue.checked = false;
    isPurple.checked = false;
    vRed = 0;
    vGreen = 0;
    vBlue = 0;
    output.style.color = `rgb(${vRed}, ${vGreen}, ${vBlue})`;
    if (vRed == 0 && vGreen == 0 && vBlue == 0) {
        output.style.backgroundColor = "#999999";
    } else {
        output.style.backgroundColor = "#000000";
    }
}
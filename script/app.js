function createSketchPad(sketchPadSize) {
    const sketchPad = document.querySelector('#sketch-pad');

    while (sketchPad.lastChild) {                       //Removes existing sketchpad pixels 
        sketchPad.removeChild(sketchPad.lastChild);
    }

    for (let i = 0; i < (sketchPadSize * sketchPadSize); i++) {
        let pixel = document.createElement('div');
        pixel.setAttribute("id", "pixel");
        let pixelSize = 100 / sketchPadSize;
        pixel.style.height = `${pixelSize}%`;
        pixel.style.width = `${pixelSize}%`;
        pixel.classList.add('add-border');
        sketchPad.append(pixel);
    }
    hoverEvent();
}


function hoverEvent() {
    const pixels = document.querySelectorAll('#pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', startSketch);
    });
}

function startSketch(e) {

    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = `${randomColor}`;
}


function getUserSketchPadSize() {
    const changeSizeButton = document.querySelector('#change-size');
    changeSizeButton.addEventListener('click', () => {
        let newSize = validateSketchPadSize();
        createSketchPad(newSize);
    });
}

function validateSketchPadSize() {

    while (true) {
        let size = prompt("Enter a number between 2 - 64");
        if (size < 2 || size > 64) {
            alert("Enter a number between 2 - 64");
        } else {
            return size;
        }
    }
}

function clearSketchPad() {
    const clearPadButton = document.querySelector('#clear-pad');

    clearPadButton.addEventListener('click', () => {
        const pixels = document.querySelectorAll('#pixel');
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = "";
        });
    });
}


//-------------------------------------------------------------------------

createSketchPad(16);        //Inital sketchpad with 16x16 pixels
getUserSketchPadSize();
clearSketchPad();

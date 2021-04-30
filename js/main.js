
//2 marks for using an array

let status = {
    'door1': false,
    'door2': false,
    'door3': false,
    'door4': false,
    'light': false,
    'kitchen': false
};

//2 marks for using click events
$(document).ready(function() {

    $(".bulb").click(function() {
        $("body").toggleClass("active");

    });


    $(".door-switch").click(function() {
        let $this = $(this);

        toggleStatus($this.data('name'), $this);

    });

    $(".door-switch-oven").click(stoveSwitch);


    setInterval(monitor, 200);

});

//5 marks for using if else

function toggleStatus(id, $btn) {

    let $container = $('#' + id);
    if (status[id]) {
        status[id] = false;
        $container.removeClass('open');

        $btn.text($btn.data('labelon'));



    } else {
        $container.addClass('open');
        status[id] = true;

        $btn.text($btn.data('labeloff'));


    }


}

// 8 marks for using innerHTML, addClass, addEvent, removeEvent

var stoveSwitch = function() {
    if (status.kitchen) {
        $('#stove').addClass('active');
        tempHandle.addEventListener("mousedown", handleMouseDown);
        tempHandle.addEventListener("touchstart", handleMouseDown);
    } else {
        $('#stove').removeClass('active');
        document.querySelector('.oven-temp-now').innerHTML = "";
        tempDisplay.innerHTML = "80";
        tempHandle.removeEventListener("mousedown", handleMouseDown);
        tempHandle.addEventListener("touchstart", handleMouseDown);
        document.documentElement.style.setProperty("--temp-rotation", `180deg`);
    }
};

// 5 marks for using for loop
var monitor = function() {

    for (let k in status) {
        let $status = $('#status-' + k);
        $status.text(status[k] ? $status.data('labelon') : $status.data('labeloff'));

    }
};

/*Function about the Stove*/
/* This function is based on third-party function.
 I have added functions like: Enable turn on and off, reset value when off, change color when on, and record the temperature to the specific panel. */

const tempDisplay = $("#temp-display")[0];
const tempHandle = $("#temp-handle")[0];
const dialCenter = $("#dial-center")[0];

const minTemp = 80.0;
const maxTemp = 400.0;
const tempRange = maxTemp - minTemp;

let origin = calculateRotationOrigin();
let rotating = false;

// Find the center of the dial to use as rotation origin.
function calculateRotationOrigin() {
    const { width, height, x, y } = dialCenter.getBoundingClientRect();
    return {
        x: x + width / 2,
        y: y + height / 2
    };
}
// 5 marks Using function with custom parameters
function handleMouseDown(event) {
    rotating = true;
    origin = calculateRotationOrigin();
}
function handleTouchMove(event) {
    if (rotating) {
        event.preventDefault();
        const { touches: { 0: { clientX, clientY } } } = event;
        rotate(clientX, clientY);
    }
}


function handleMouseMove(event) {
    if (rotating) {
        const { clientX, clientY } = event;
        rotate(clientX, clientY);
    }
}

function handleMouseUp(event) {
    rotating = false;
}

// Calculate the new angle based on the x,y of the Mouse/TouchEvent
function rotate(x, y) {
    const angle = Math.atan2(y - origin.y, x - origin.x);
    const angleDegrees = 180 + angle * 180 / Math.PI;
    updateDial(angleDegrees);
}

// Update dial text and CSS custom properties to display the new state
function updateDial(angle) {
    const percentageOfFullRange = ((360 + (angle - 90)) % 360) / 360;
    const newTemp = (minTemp + tempRange * percentageOfFullRange).toFixed(1);
    const hue = percentageOfFullRange < 0.5 ? 200 : 5;
    // const opacity = 0.5 + percentageOfFullRange * 360 / 100;
    const alpha = 40 + 2 * 45 * Math.abs(percentageOfFullRange - 0.5);

    tempDisplay.innerHTML = newTemp;
    document.querySelector('.oven-temp-now').innerHTML = newTemp + "&deg;F";
    console.log(newTemp);
    document.documentElement.style.setProperty("--temp-rotation", `${angle}deg`);
    document.documentElement.style.setProperty("--temp-hue", hue);
    document.documentElement.style.setProperty("--temp-alpha", `${alpha}%`);

    // $('#stove').css('opacity', opacity);
}

//15 markings for Using 10 jQuery methods


document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleTouchMove, { passive: false });

document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("touchend", handleMouseUp);

window.addEventListener("resize", () => {
    origin = calculateRotationOrigin();
});


//Total score for this page is: 42
//Whole score: 42+49+30=121


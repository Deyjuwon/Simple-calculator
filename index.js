const display = document.querySelector("#screen-display");
const buttons = document.querySelectorAll("button");

let buttonLength = buttons.length;

for(i = 0; i < buttonLength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        let buttonInnerHtml = this.innerHTML;
        if (buttonInnerHtml === "=") {
            display.value = eval(display.value);
        } else if (buttonInnerHtml === "DE") {
            display.value = display.value.slice(0, -1);
        } else if (buttonInnerHtml === "AC") {
            display.value = " ";
        } else {
            display.value += buttonInnerHtml;
        }
    })
}

const operatorArr = ["+", "-", "*", "/", "."]

document.addEventListener("keydown", function(event) {
    let present = operatorArr.indexOf(event.key);

    if (event.key === "=") {
        display.value = eval(display.value);
    } else if (event.key === "DE") {
        display.value = display.value.slice(0, -1);
    } else if (event.key === "AC") {
        display.value = " ";
    } else if (present > -1) {
        display.value += event.key;
    } else if (event.key === "Enter") {
        display.value = eval(display.value);
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else {
        const isNumber = isFinite(event.key);
        if (isNumber === true) {
            display.value += event.key;
        } 
    }
})

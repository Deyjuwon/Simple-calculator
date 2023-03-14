let display = document.querySelector("#screen-display");
let buttons = document.querySelectorAll("button");

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

document.addEventListener("keypress", function(event) {
    if (event.key === "=") {
        display.value = eval(display.value);
    } else if (event.key === "DE") {
        display.value = display.value.slice(0, -1);
    } else if (event.key === "AC") {
        display.value = " ";
    } else {
        const isNumber = isFinite(event.key);
        if (isNumber === true) {
            display.value += event.key;
        }
    }
})






























// const display = document.querySelector("#display");

// const buttons = document.querySelectorAll("button");

// buttons.forEach(btn) {
//     btn.addEventlistener("click", () => {
//         if (btn.id === "=") {
//             display.value = eval(display.value);
//         }   else if (btn.id === "ac") {
//             display.value = "";
//         }   else if (btn.id == "de") {
//             display.value = display. value.slice(0, -1);

//         }   else {
//             display.value += btn.id;
//         }
//     });
// })


    

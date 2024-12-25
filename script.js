const root = document.documentElement;
const tomatoColor = getComputedStyle(root).getPropertyValue('--Tomato').trim();

spanValidEmail = document.getElementById("spanValidEmail");
inputEmail = document.getElementById("email");

inputEmail.addEventListener("input", function (event) {
    var email = event.target.value;
    var split1 = email.split("@");
    var split2 = email.split(".");
    if (split1.length == 2 && split2.length == 2) {
        spanValidEmail.style.visibility = "hidden";
        inputEmail.style.backgroundColor = 'white';
        inputEmail.style.color = 'black';
    } else {
        spanValidEmail.style.visibility = "visible";
        inputEmail.style.backgroundColor = tomatoColor;
        inputEmail.style.color = 'white';
    }
});

button = document.getElementById("button");
card = document.querySelector(".card");
popup = document.querySelector(".popup__success");
emailSpan = document.getElementById("emailSpan");

button.addEventListener("click", function () {
    if (spanValidEmail.style.visibility == "hidden" && inputEmail.value != "") {
        card.style.visibility = "hidden";
        popup.style.visibility = "visible";
        emailSpan.textContent  = inputEmail.value;
    }
});

dismissButton = document.getElementById("dismissButton");
dismissButton.addEventListener("click", function () {
    card.style.visibility = "visible";
    popup.style.visibility = "hidden";
    inputEmail.value = "";
    spanValidEmail.style.visibility = "hidden";
    inputEmail.style.backgroundColor = 'white';
    inputEmail.style.color = 'black';
});
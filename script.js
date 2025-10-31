const buttons = document.querySelectorAll(".btn");
const result = document.querySelector("#result");

const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");

let input = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        console.log(value);
        
        if (value === "AC") {
            input = "";
            result.value = "";
          } else if (value === "DEL") {
            input = input.slice(0, -1);
            result.value = input;
          } else if (value === "=") {
            try {
              input = eval(input.replace("÷", "/").replace("×", "*"));
              result.value = input;
            } catch {
              result.value = "Error";
              input = "";
            }
          } else {
            input += value;
            result.value = input;
        }

    });
})


moonIcon.style.display = "none";

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
}

const enableLightMode = () => {
    document.body.classList.remove("dark-mode");
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
}

sunIcon.addEventListener("click", enableDarkMode);
moonIcon.addEventListener("click", enableLightMode);
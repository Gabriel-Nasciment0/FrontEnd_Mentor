let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const question = button.parentElement;

        const answer = question.nextElementSibling;

        answer.classList.toggle("open");

        const img = button.querySelector("img");

        if (answer.classList.contains("open")) {
            img.src = "assets/images/icon-minus.svg";
        } else {
            img.src = "assets/images/icon-plus.svg";
        }
    });
});

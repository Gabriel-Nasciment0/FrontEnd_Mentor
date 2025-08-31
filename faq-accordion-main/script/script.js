let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const question = button.parentElement;
        const answer = question.nextElementSibling;

        answer.classList.toggle("open");
    });
});

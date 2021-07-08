let theme = localStorage.getItem("theme");
const toggle = document.querySelector(".switch-toggle");
const toggle_circle = document.querySelector(
    ".switch-toggle label:nth-child(2):nth-last-child(6) ~ input:checked:nth-child(3) + label ~ a"
);

function update_toggle() {
    theme = localStorage.getItem("theme");

    switch (theme) {
        case "theme_1":
            toggle_circle.style.left = "0%";
            break;
        case "theme_2":
            toggle_circle.style.left = "33.33%";
            break;
        case "theme_3":
            toggle_circle.style.left = "66.66%";
            break;
        default:
            return;
    }
}

window.onload = function () {
    document.body.classList.add(theme);
    update_toggle();
};

toggle.addEventListener("click", (e) => {
    document.body.classList.remove(...document.body.classList);

    localStorage.setItem("theme", e.target.id);
    document.body.classList.add(e.target.id);
    update_toggle();
});

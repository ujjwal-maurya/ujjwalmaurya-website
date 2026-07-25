const navigationButtons = document.querySelectorAll(".nav-button");
const panels = document.querySelectorAll(".panel");

navigationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedPanel = document.getElementById(button.dataset.panel);

        panels.forEach((panel) => {
            panel.hidden = panel !== selectedPanel;
        });

        navigationButtons.forEach((navigationButton) => {
            navigationButton.setAttribute("aria-pressed", navigationButton === button);
        });
    });
});


// THE OBSIDIAN ARCHIVE
// Main interaction script

const enterButton = document.getElementById("enterButton");

const transmission = document.getElementById("transmission");

enterButton.addEventListener("click", function() {

    transmission.hidden = false;

    transmission.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    enterButton.textContent = "ACCESS GRANTED ✓";

    enterButton.disabled = true;

});

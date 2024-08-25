var iconBars = document.getElementById("iconBars");
var navBar = document.getElementById("navBar");

iconBars.addEventListener("click", (eo) => {
    if (navBar.style.display === "none") {
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
});

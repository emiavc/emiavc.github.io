//TOGGLE MOBILE NAV//
function toggleNav() {
    var x = document.getElementById("navLinks");
    var y = document.getElementById("navBars");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.classList.remove("active");
    } else {
        x.style.display = "block";
        y.classList.add("active");
    }
}
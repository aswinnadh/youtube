const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");
var sidebarFix = document.getElementById('sidebar-fix');
var display=0;
if (localStorage.getItem("darkMode")=== "enabled"){
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("fa-moon", "fa-sun");
} else {
    themeButton.classList.replace("fa-sun", "fa-moon");
}
//theme toggle
themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled": "disabled");
    themeButton.classList.toggle("fa-sun", isDarkMode);
    themeButton.classList.toggle("fa-moon", !isDarkMode);
});
//toggle sibe bar visibility for menu button
menuButton.forEach(button => {
    button.addEventListener("click",()=>{
       document.body.classList.toggle("sidebar-hidden");
    });
});
//toggle visibility when click on overlay
screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});
if(window.innerWidth >=768) {
    document.body.classList.remove("sidebar-hidden");
}

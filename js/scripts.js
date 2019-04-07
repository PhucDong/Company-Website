// create an array of nav links
var navList = document.getElementById("nav-list");
// var arrayNavLinks = document.getElementsByClassName("nav-link");
// var arrayNavLinks = navList.getElementsByTagName("a");
var navLink = document.querySelector(".nav-link")

// console.log(arrayNavLinks);

var pathName = window.location.pathname;
console.log(pathName);
// var pageName = pathName.slice(1, pathName.length - 1);

// for (var i = 0; i < arrayNavLinks.length; i++) {
navLink.addEventListener("click", function () {
    var pathName = window.location.pathname;
    var pageName = pathName.slice(1, pathName.length - 1);
    // if (navLink.getAttribute("href") === do) {
    //     navLink.classList.add("active-link");
    // }
})

// }




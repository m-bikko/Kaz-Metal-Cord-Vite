let responsiveHamburger = document.getElementById("responsive-nav-upper")
function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("responsive-nav-under").classList.toggle("hide")
    if(!document.getElementById("responsive-nav-under").classList.contains("hide")){
        document.getElementById("responsive-nav-upper").style.backgroundColor = "#6D2CC1";
        document.getElementById("responsive-nav-upper-search").src = "./photos/search_white.png"
        document.getElementById("responsive-nav-upper-search").style.width = "30px"
        document.getElementById("responsive-nav-upper-search").style.height = "30px"
        document.getElementById("bar1").style.backgroundColor = "white";
        document.getElementById("bar2").style.backgroundColor = "white";
        document.getElementById("bar3").style.backgroundColor = "white";
        document.getElementById("responsive-nav-upper-logo").src = "./photos/img_white.png"

    }else{
        document.getElementById("responsive-nav-upper").style.backgroundColor = "#ffffff";
        document.getElementById("responsive-nav-upper-logo").style.fill = "#ffffff"
        document.getElementById("responsive-nav-upper-search").src = "./photos/search.png"
        document.getElementById("responsive-nav-upper-search").style.width = "60px"
        document.getElementById("responsive-nav-upper-search").style.height = "60px"
        document.getElementById("bar1").style.backgroundColor = "#333";
        document.getElementById("bar2").style.backgroundColor = "#333";
        document.getElementById("bar3").style.backgroundColor = "#333";
        document.getElementById("responsive-nav-upper-logo").src = "./photos/img.png"
    }
}

let responsiveDropDownContent = document.getElementById("responsive-nav-drop");
let responsiveDropDownContentShown = false;
function dropContent(){
    if(!document.getElementById("responsive-nav-drop").classList.contains("hide")){
        document.getElementById("responsive-nav-drop").classList.add("hide");
        document.getElementById("responsive-dropbtn-img").style.rotate = "0deg"
    } else{
        document.getElementById("responsive-nav-drop").classList.remove("hide");
        document.getElementById("responsive-dropbtn-img").style.rotate = "180deg"
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropbtn-dropped");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
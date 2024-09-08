function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function myFunctions(i) {
    i.classList.toggle("change");

    let x = document.getElementById("mylink");
    if (x.className === 'menu') {
        x.className += ' menu-active'
    }   else {
            x.className = "menu";
    }
}
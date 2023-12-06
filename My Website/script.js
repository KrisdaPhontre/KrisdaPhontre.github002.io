function openNav() {
    document.getElementById("myNav").style.display = "block";
}
  
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

function myFunction(am) {
    am.classList.toggle('change')
}

let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0 ; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle('active');

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null}
        else {
                panel.style.maxHeight = panel.scrollHeight + "px";
        }

    })
}

    function myFunction() {
        let x = document.getElementById("mylink");
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }
    }


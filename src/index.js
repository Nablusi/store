window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import "@fortawesome/fontawesome-free/js/all.min.js";


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


let card = document.querySelectorAll(".card-main");

for(let i=0;i<card.length;i++){
    card[i].onmouseover = function(){
        card[i].classList.add("active");
        console.log("hovered")
    }
    card[i].onmouseout = function(){
        card[i].classList.remove("active");
        console.log("removed hoverd")
    }
}

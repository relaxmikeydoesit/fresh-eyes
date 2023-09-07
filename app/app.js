import { changePageContent  } from "../model/model.js";
import { showTourContent } from "../model/model.js";

function tourListeners(){
    $(".trip-buttons button").on("click", function (e){
        let tourID = e.currentTarget.id;
        showTourContent(tourID);
    });
}


function initListeners(){
    $("nav #links a ").on("click", function (e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
    
    });
}

$(document).ready(function(){
    initListeners();  
    changePageContent("home");
    tourListeners();
});
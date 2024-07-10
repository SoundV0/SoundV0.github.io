function cambiarEstiloBlackWhite(){
    var seccion1 = document.getElementById("seccion-1");
    if(seccion1.style.backgroundColor == "black"){
        seccion1.style.background = "white";
        seccion1.style.color = "black";
    }
    else{
        seccion1.style.background = "black";
        seccion1.style.color = "white";
    
    }
}
function cambiarColorLineas(){
    var hr = document.getElementsByName("hr");
    if(seccion1.style.backgroundColor == "black"){
        hr.style.color = "white";
    }
    else{
        hr.style.color = "black";
    
    }
}

document.addEventListener('DOMContentLoaded', function () {
    alert("Cookies\nEsta pagina no colecta ninguna forma de informacion sobre el usuario.");
});



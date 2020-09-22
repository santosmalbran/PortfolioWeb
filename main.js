function progress(){
    let progreso = document.getElementById("progreso");
    let width = 1;
    let id = setInterval(frame, 60);
    
    function frame(){
        if (width => 100){
            clearInterval(id);
        }else{
            width++;
            progreso.style.width +  width + "%";
        }
    }
}


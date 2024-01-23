function infoCookie(){
    document.getElementById("txt2").value = localStorage.getItem("txt1");

    let items = localStorage.getItem('elementos');

    for (let i = 0; i < items; i++) {
        //show items
        document.getElementById("infoElementos").innerHTML += items[i] + "<br>";
       if (items[i]!=="0") {
           document.getElementById("infoElementos").innerHTML += items[i] + "<br>";
       }
    }


}


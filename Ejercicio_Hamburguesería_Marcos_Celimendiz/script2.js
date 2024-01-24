function infoCookie() {
    document.getElementById("txt2").value = localStorage.getItem("txt1");

    
    let array = JSON.parse(localStorage.getItem("valores"));

    let total=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].cantidad > 0) {
            total+=array[i].cantidad*array[i].precio;
            document.getElementById("infoElementos").innerHTML += array[i].nombre + " Cantidad " + array[i].cantidad+ " Precio "+array[i].precio+"<br>";
        }

    }

    document.getElementById("numeroPedido").innerHTML="Su número de pedido es "+localStorage.getItem("numPedido");
    document.getElementById("precioTotal").innerHTML="Total pedido: "+total
}


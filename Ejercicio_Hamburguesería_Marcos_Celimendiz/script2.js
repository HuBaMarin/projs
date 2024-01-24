function infoCookie() {
    document.getElementById("txt2").value = localStorage.getItem("txt1");

    
    let array = JSON.parse(localStorage.getItem("valores"));

    let total=0;
    let tabla = document.createElement('table');
    let th = document.createElement('th');
    th.innerHTML = "Nombre";
    tabla.appendChild(th);
    let th2 = document.createElement('th');
    th2.innerHTML = "Cant.";
    tabla.appendChild(th2);
    let th3 = document.createElement('th');
    th3.innerHTML = "Precio";
    tabla.appendChild(th3);
    for (let i = 0; i < array.length; i++) {
        if (array[i].cantidad > 0) {
            total+=array[i].cantidad*array[i].precio;

            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = array[i].nombre;
            tr.appendChild(td);
            let td2 = document.createElement('td');
            td2.innerHTML = array[i].cantidad;
            tr.appendChild(td2);
            let td3 = document.createElement('td');
            td3.innerHTML = array[i].precio;
            tr.appendChild(td3);

            tabla.appendChild(tr);
        }

    }
    document.getElementById("infoElementos").appendChild(tabla);
    document.getElementById("numeroPedido").innerHTML="Su número de pedido es "+localStorage.getItem("numPedido");
    document.getElementById("precioTotal").innerHTML="Total pedido: "+total+"€";
}


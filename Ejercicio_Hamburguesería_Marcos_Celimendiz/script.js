class Producto {
  constructor(tipo, precio) {
      this.tipo = tipo;
      this.precio = precio;
  }
}

class Hamburguesa extends Producto {
  constructor(tipo, precio) {
      super(tipo, precio);
  }
}

class Patatas extends Producto {
  constructor(tipo, precio) {
      super(tipo, precio);
  }
}

class Vaso extends Producto {
  constructor(tipo, precio) {
      super(tipo, precio);
  }
}

class Nuggets extends Producto {
  constructor(tipo, precio) {
      super(tipo, precio);
  }
}

class Postre extends Producto {
  constructor(tipo, precio) {
      super(tipo, precio);
  }
}

const hamburguesa100g = new Hamburguesa("Hamburguesa-100g", 5);
const hamburguesa200g = new Hamburguesa("Hamburguesa 200g", 10);
const hamburguesa300g = new Hamburguesa("Hamburguesa 300g", 15);

const patatasPeq = new Patatas("Patatas Pequeñas", 2);
const patatasMed = new Patatas("Patatas Medianas", 3);
const patatasGra = new Patatas("Patatas Grandes", 4);

const vaso1 = new Vaso("Vaso 0,5L", 1);
const vaso2 = new Vaso("Vaso 0,75L", 2);
const vaso3 = new Vaso("Vaso 1L", 3);

const nugget1 = new Nuggets("6 Nuggets", 6);
const nugget2 = new Nuggets("12 Nuggets", 10);
const nugget3 = new Nuggets("24 Nuggets", 15);

const postre1 = new Postre("McFlurry 1", 2);
const postre2= new Postre("McFlurry 2", 3);
const postre3= new Postre("McFlurry 3", 4);


function calcularPrecio(){
  let elementos = {
    burguer100g: document.getElementById("cantidadBurguer100g").value,
    burguer200g: document.getElementById("cantidadBurguer200g").value,
    burguer300g: document.getElementById("cantidadBurguer300g").value,
    patPeque: document.getElementById("cantidadPatPeque").value,
    patMed: document.getElementById("cantidadPatMed").value,
    patGran: document.getElementById("cantidadPatGran").value,
    vaso05: document.getElementById("cantidadVaso05").value,
    vaso075: document.getElementById("cantidadVaso075").value,
    vaso1: document.getElementById("cantidadVaso1").value,
    nug1: document.getElementById("cantidadNug1").value,
    nug2: document.getElementById("cantidadNug2").value,
    nug3: document.getElementById("cantidadNug3").value,
    mc1: document.getElementById("cantidadMc1").value,
    mc2: document.getElementById("cantidadMc2").value,
    mc3: document.getElementById("cantidadMc3").value

  }

  localStorage.setItem("elementos", JSON.stringify(elementos));



  //Calcula el precio total
  const precioTotal = parseInt(totalBurguer100g) + parseInt(totalBurguer200g) + parseInt(totalBurguer300g) +
      parseInt(totalPatPeque) + parseInt(totalPatMed) + parseInt(totalPatGran) + parseInt(totalVaso05) + parseInt(totalVaso075) + parseInt(totalVaso1)
      + parseInt(totalNug1) + parseInt(totalNug2) + parseInt(totalNug3) + parseInt(totalMc1) + parseInt(totalMc2) + parseInt(totalMc3);



  //Borra todos los inputs
  var inputs = document.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "number") {
      inputs[i].value = "0";
    }
  }
}

function pagarTicket(){

  let resultadoDiv = document.getElementById("miTicket");
  let precioFinal = document.getElementById("precioF");

  if(resultadoDiv.innerHTML !== "" && precioFinal !== ""){
    //Borra el pedido
    let resultadoDiv = document.getElementById("miTicket");
    resultadoDiv.innerHTML = "";

    //Borra el precio final
    let precioFinal = document.getElementById("precioF");
    precioFinal.innerHTML = "";

    //Genera RECOGER TICKET
    let numT = document.getElementById("titulo");
    numT.innerHTML = "PAGO ACEPTADO ";

    //Número aleatorio del pedido
    let numTicket = document.getElementById("numRandom");
    numTicket.innerHTML = Math.floor(Math.random() * 100) + 1;
  }
}

function empezarPedido(){
  let numT = document.getElementById("titulo");
  let numTicket = document.getElementById("numRandom");

  if(numT.innerHTML !== "" && numTicket.innerHTML !== ""){
    //Borra el pedido
    let resultadoDiv = document.getElementById("miTicket");
    resultadoDiv.innerHTML = "";

    //Borra el precio final
    let precioFinal = document.getElementById("precioF");
    precioFinal.innerHTML = "";

    //Genera RECOGER TICKET
    let numT = document.getElementById("titulo");
    numT.innerHTML = "";

    //Número aleatorio del pedido
    let numTicket = document.getElementById("numRandom");
    numTicket.innerHTML = "";
  }  
}

function cancelarPedido(){
  let resultadoDiv = document.getElementById("miTicket");
  let precioFinal = document.getElementById("precioF");

  if(resultadoDiv.innerHTML !== "" && precioFinal !== ""){
    //Borra el pedido
    let resultadoDiv = document.getElementById("miTicket");
    resultadoDiv.innerHTML = "";

    //Borra el precio final
    let precioFinal = document.getElementById("precioF");
    precioFinal.innerHTML = "";
  } 
}

setInterval(function() {
  let mostrarFecha = document.getElementById("mostrarFecha");
  let fecha = new Date();
  const month = fecha.toLocaleString('default', { month: 'long' });
  mostrarFecha.innerHTML=fecha.getDate()+" de "+month+" de "+fecha.getFullYear()+"\n"+fecha.getHours() + ":"
      + fecha.getMinutes() + ":" + fecha.getSeconds();
}, 1000);

function informacionHamburguesa(){
  alert("Lechuga, tomate, queso, cebolla, pan");
}
function informacionPatatas(){
  alert("Patatas");
}
function informacionVasos(){
  alert("Azucar, agua carbonatada, cafeína");
}
function informacionNuggets(){
  alert("Pollo");
}
function informacionMcFlurry(){
    alert("Trozos de oreo, chocolate,azúcar, leche");
}
function cookieTxt1(){
  let cookieTxt = document.getElementById("txt1");
  localStorage.setItem("txt1", cookieTxt.value);
}
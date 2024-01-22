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
  let ticket = [];

  //Coge las cantidades, las multiplica por el precio y si lo has seleccionado lo añade al ticket
  const cantidadBurguer100g = parseInt(document.getElementById('cantidadBurguer100g').value) || 0;
  const totalBurguer100g = cantidadBurguer100g * hamburguesa100g.precio;
  if(totalBurguer100g > 0){
    ticket.push(cantidadBurguer100g+ " " +hamburguesa100g.tipo+" = "+totalBurguer100g);
  }

  const cantidadBurguer200g = parseInt(document.getElementById('cantidadBurguer200g').value) || 0;
  const totalBurguer200g = cantidadBurguer200g * hamburguesa200g.precio;
  if(totalBurguer200g > 0){
    ticket.push(cantidadBurguer200g+ " " +hamburguesa200g.tipo+" = "+totalBurguer200g);
  }

  const cantidadBurguer300g = parseInt(document.getElementById('cantidadBurguer300g').value) || 0;
  const totalBurguer300g = cantidadBurguer300g * hamburguesa300g.precio;
  if(totalBurguer300g > 0){
    ticket.push(cantidadBurguer300g+ " " +hamburguesa300g.tipo+" = "+totalBurguer300g);
  }

  const cantidadPatPeque = parseInt(document.getElementById('cantidadPatPeque').value) || 0;
  const totalPatPeque = cantidadPatPeque * patatasPeq.precio;
  if(totalPatPeque > 0){
    ticket.push(cantidadPatPeque+ " " +patatasPeq.tipo+" = "+totalPatPeque);
  }

  const cantidadPatMed = parseInt(document.getElementById('cantidadPatMed').value) || 0;
  const totalPatMed = cantidadPatMed * patatasMed.precio;
  if(totalPatMed > 0){
    ticket.push(cantidadPatMed+ " " +patatasMed.tipo+" = "+totalPatMed);
  }

  const cantidadPatGran = parseInt(document.getElementById('cantidadPatGran').value) || 0;
  const totalPatGran = cantidadPatGran * patatasGra.precio;
  if(totalPatGran > 0){
    ticket.push(cantidadPatGran+ " " +patatasGra.tipo+" = "+totalPatGran);
  }

  const cantidadVaso05 = parseInt(document.getElementById('cantidadVaso05').value) || 0;
  const totalVaso05 = cantidadVaso05 * vaso1.precio;
  if(totalVaso05 > 0){
    ticket.push(cantidadVaso05+ " " +vaso1.tipo+" = "+totalVaso05);
  }


  const cantidadVaso075 = parseInt(document.getElementById('cantidadVaso075').value) || 0;
  const totalVaso075 = cantidadVaso075 * vaso2.precio;
  if(totalVaso075 > 0){
    ticket.push(cantidadVaso075+ " " +vaso2.tipo+" = "+totalVaso075);
  }

  const cantidadVaso1 = parseInt(document.getElementById('cantidadVaso1').value) || 0;
  const totalVaso1 = cantidadVaso1 * vaso3.precio;
  if(totalVaso1 > 0){
    ticket.push(cantidadVaso1+ " " +vaso3.tipo+" = "+totalVaso1);
  }

  const cantidadNug1 = parseInt(document.getElementById('cantidadNug1').value) || 0;
  const totalNug1 = cantidadNug1 * nugget1.precio;
  if(totalNug1 > 0){
    ticket.push(cantidadNug1+ " " +nugget1.tipo+" = "+totalNug1);
  }

  const cantidadNug2 = parseInt(document.getElementById('cantidadNug2').value) || 0;
  const totalNug2 = cantidadNug2 * nugget2.precio;
  if(totalNug2 > 0){
    ticket.push(cantidadNug2+ " " +nugget2.tipo+" = "+totalNug2);
  }

  const cantidadNug3 = parseInt(document.getElementById('cantidadNug3').value) || 0;
  const totalNug3 = cantidadNug3 * nugget3.precio;
  if(totalNug3 > 0){
    ticket.push(cantidadNug3+ " " +nugget3.tipo+" = "+totalNug3);
  }

  const cantidadMc1 = parseInt(document.getElementById('cantidadMc1').value) || 0;
  const totalMc1 = cantidadMc1 * postre1.precio;
  if(totalMc1 > 0){
    ticket.push(cantidadMc1+ " " +postre1.tipo+" = "+totalMc1);
  }

  const cantidadMc2 = parseInt(document.getElementById('cantidadMc2').value) || 0;
  const totalMc2 = cantidadMc2 * postre2.precio;
  if(totalMc2 > 0){
    ticket.push(cantidadMc2+ " " +postre2.tipo+" = "+totalMc2);
  } 

  const cantidadMc3 = parseInt(document.getElementById('cantidadMc3').value) || 0;
  const totalMc3 = cantidadMc3 * postre3.precio;
  if(totalMc3 > 0){
    ticket.push(cantidadMc3+ " " +postre3.tipo+" = "+totalMc3);
  }
  //Fin de añadir productos al ticket

  //Calcula el precio total
  const precioTotal = parseInt(totalBurguer100g) + parseInt(totalBurguer200g) + parseInt(totalBurguer300g) +
  parseInt(totalPatPeque) + parseInt(totalPatMed) + parseInt(totalPatGran) + parseInt(totalVaso05) + parseInt(totalVaso075) + parseInt(totalVaso1)
  + parseInt(totalNug1) + parseInt(totalNug2) + parseInt(totalNug3) + parseInt(totalMc1) + parseInt(totalMc2) + parseInt(totalMc3);


  //Imprime la compra en pantalla
  let resultadoDiv = document.getElementById("miTicket");
  for (let i = 0; i < ticket.length; i++) {
    resultadoDiv.innerHTML += ticket[i] + "<br>";
  }

  //Imprime el precio final
  let precioFinal = document.getElementById("precioF");
  precioFinal.innerHTML = precioTotal+" $";

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
    numTicket.innerHTML = ""+Math.floor(Math.random() * 100) + 1;
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
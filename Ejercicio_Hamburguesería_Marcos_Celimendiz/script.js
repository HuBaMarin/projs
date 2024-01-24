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


setInterval(function () {
  let mostrarFecha = document.getElementById("mostrarFecha");
  let fecha = new Date();
  const month = fecha.toLocaleString('default', { month: 'long' });
  mostrarFecha.innerHTML = fecha.getDate() + " de " + month + " de " + fecha.getFullYear() + "\n" + fecha.getHours() + ":"
    + fecha.getMinutes() + ":" + fecha.getSeconds();
}, 1000);

function informacionHamburguesa() {
  alert("Lechuga, tomate, queso, cebolla, pan");
}
function informacionPatatas() {
  alert("Patatas");
}
function informacionVasos() {
  alert("Azucar, agua carbonatada, cafeína");
}
function informacionNuggets() {
  alert("Pollo");
}
function informacionMcFlurry() {
  alert("Trozos de oreo, chocolate,azúcar, leche");
}

function respConfirmar() {
  //funcion cookieTxt1
  let cookieTxt = document.getElementById("txt1");
  localStorage.setItem("txt1", cookieTxt.value);

  //funcion recogerValores
  let valores = [
    { "nombre": "Hamburguesa de 100 gramos", "cantidad": document.getElementById("cantidadBurguer100g").value > 0 ? document.getElementById("cantidadBurguer100g").value : 0, "precio": 5 },
    { "nombre": "Hamburguesa de 200 gramos", "cantidad": document.getElementById("cantidadBurguer200g").value > 0 ? document.getElementById("cantidadBurguer200g").value : 0, "precio": 10 },
    { "nombre": "Hamburguesa de 300 gramos", "cantidad": document.getElementById("cantidadBurguer300g").value > 0 ? document.getElementById("cantidadBurguer300g").value : 0, "precio": 15 },

    { "nombre": "Patatas Pequeñas", "cantidad": document.getElementById("cantidadPatPeque").value > 0 ? document.getElementById("cantidadPatPeque").value : 0, "precio": 2 },
    { "nombre": "Patatas Medianas", "cantidad": document.getElementById("cantidadPatMed").value > 0 ? document.getElementById("cantidadPatMed").value : 0, "precio": 3 },
    { "nombre": "Patatas Grandes", "cantidad": document.getElementById("cantidadPatGran").value > 0 ? document.getElementById("cantidadPatGran").value : 0, "precio": 4 },

    { "nombre": "Vaso de 0,5 litros", "cantidad": document.getElementById("cantidadVaso05").value > 0 ? document.getElementById("cantidadVaso05").value : 0, "precio": 1 },
    { "nombre": "Vaso de 0,75 litros", "cantidad": document.getElementById("cantidadVaso075").value > 0 ? document.getElementById("cantidadVaso075").value : 0, "precio": 2 },
    { "nombre": "Vaso de 1 litro", "cantidad": document.getElementById("cantidadVaso1").value > 0 ? document.getElementById("cantidadVaso1").value : 0, "precio": 3 },

    { "nombre": "Pack Nuggets pequeño", "cantidad": document.getElementById("cantidadNug1").value > 0 ? document.getElementById("cantidadNug1").value : 0, "precio": 6 },
    { "nombre": "Pack Nuggets mediano", "cantidad": document.getElementById("cantidadNug2").value > 0 ? document.getElementById("cantidadNug2").value : 0, "precio": 10 },
    { "nombre": "Pack Nuggets grande", "cantidad": document.getElementById("cantidadNug3").value > 0 ? document.getElementById("cantidadNug3").value : 0, "precio": 15 },


    { "nombre": "MCFlurry Pequeño", "cantidad": document.getElementById("cantidadMc1").value > 0 ? document.getElementById("cantidadMc1").value : 0, "precio": 2 },
    { "nombre": "MCFlurry Mediano", "cantidad": document.getElementById("cantidadMc2").value > 0 ? document.getElementById("cantidadMc2").value : 0, "precio": 3 },
    { "nombre": "MCFlurry Grande", "cantidad": document.getElementById("cantidadMc3").value > 0 ? document.getElementById("cantidadMc3").value : 0, "precio": 4 },


  ];

  let numPedido = Math.floor(Math.random() * (2000 + 1));

  localStorage.setItem("valores", JSON.stringify(valores));

  localStorage.setItem("numPedido", JSON.stringify(numPedido));

  if (window.confirm('¿Desea continuar?')) {
    window.location.href = "confirmar.html";
  } else {
    document.getElementById("confirmar").href="";
    return false;
  }

}

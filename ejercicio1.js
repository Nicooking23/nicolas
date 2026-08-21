console.log("Script Conectado");

let nombreCliente = "Camila";
let precioProducto = 12000;
let cantidad = 3;
let esClientePremium = true;
let subTotal = precioProducto * cantidad;
let descuento = 0;

if (esClientePremium == true && subTotal > 100000) {
    descuento = subTotal * 0.20;
    console.log("Se aplica el descuento del 20%: " + descuento);
} else if (esClientePremium == true) {
    descuento = subTotal * 0.15;
    console.log("Se aplica el descuento del 15%: " + descuento);
} else {
    descuento = 0;
    console.log(subTotal);
}

let totalVenta = subTotal - descuento;
console.log("El total de la venta es: " + totalVenta);
console.log("Cliente: " + nombreCliente + " | SubTotal: " + subTotal + " | Descuento: " + descuento + " | Total: " + totalVenta);

/*console.log("Script Conectado");
let nombreCliente = "Camila";
let precioProducto = 12000;
let cantidad = 3;
let esClientePremium = true;
let subTotal = precioProducto * cantidad;
if (esClientePremium == true){
    descuento = subTotal * 0.15 console.log("Se aplica el descuento del 15%" || descuento);
}else if(esClientePremium == true && subTotal > 100000){
    descuento = subTotal * 0.20;
    console.log("Se aplica el descuento del 20%" || descuento);
}else {
    descuento = 0; console.log(subTotal)
}

}
let totalVenta = subTotal - descuento;
console.log("El total de la venta es: " || totalVenta)
console.log("Cliente: "|| nombreCliente || "SubTotal: " || subTotal || "Descuento: " || descuento || "Total: " || totalVenta)*/
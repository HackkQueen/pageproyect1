/* 
N cantidad de clientes
Cedula
Nombre
Genero
M cantidad de productos
codigo del producto
valor unitario del producto
cantidad comprada
tipo iva (1: Exento de iva 2: iva de bienes 5% 3: General 19%)

Que pide:
valor final del producto (valor unitario mas el valor del producto con iva)
el valor total del final de la compra (contador)
sumatoria del iva


*/

/* var N,cedula, nombre, genero, M, codigoProducto, valorUnitarioProducto, cantidadComprada,valorProducto,valorIvaProducto, tipoIva,valorFinalP,valorFinalProducto=0,valorIva=0, valorSinIva=0, cantidadHombres=0 , cantidadMujeres=0,listaIva = Array(), listaProducto = Array(), listaFinal= Array() */ 

/* N = parseInt (prompt("Cantidad de clientes: "))
for (var i=0; i<N; i++){*/
function calcularValorServicio(){
    var nombre = document.getElementById("nombreCliente").value
    var cedula = parseInt(document.getElementById("cedulaCliente").value)    
    var genero= parseInt(document.getElementById("genero").value)
   /* M = parseInt(prompt("Cantidad de productos comprados: "))
    for (var j=0; j<M; j++){*/
    var codigoProducto= parseInt(document.getElementById("codigoProducto").value)
    var valorUnitarioProducto = parseFloat(document.getElementById("valorUnitarioProducto").value)
    var cantidadComprada = parseInt(document.getElementById("cantidadComprada").value)
    var tipoIva = parseInt(document.getElementById("tipoIva").value)
    var valorProducto=0, valorFinalP= 0, valorIvaProducto=0, valorFinalProducto=0, valorIva=0, valorSinIva=0, cantidad=0, cantidadHombres=0 , cantidadMujeres=0
    var listaIva = Array(), listaProducto = Array(), listaFinal= Array()    
     // Get the modal
     let modal = document.getElementById("modal-hunters");
     let btn_hunters = document.getElementById("btn-hunters");
     let btnClose = document.getElementById("btn-close-hunters");
 

    valorProducto= valorUnitarioProducto* cantidadComprada

    switch(tipoIva){
        case 1:
                valorIvaProducto =0;
                break
        case 2:
                valorIvaProducto= valorProducto*0.05;
                break
        case 3:
                valorIvaProducto= valorProducto*0.19;
                break
        }
    valorFinalP= valorProducto+ valorIvaProducto

    listaProducto.push(valorProducto)
    listaIva.push(valorIvaProducto)
    listaFinal.push(valorFinalProducto)
    valorFinalProducto= valorFinalProducto+valorFinalP
    valorIva= valorIva+ valorIvaProducto
    valorSinIva= valorSinIva+ valorProducto

    btn_hunters.onclick = function() {
        modal.style.display = "block";
      }
      btnClose.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    /*}*/
    // switch(genero){
    //     case 'M':
    //         cantidadHombres++
    //     case 'F':
    //         cantidadMujeres++
    // }

    // cantidad = cantidadHombres+cantidadMujeres
    // alert("Valores Producto"+listaProducto)
    // alert("Valores Iva"+listaIva)
    // alert("Valores Final"+listaFinal)
    // alert("Valores Producto"+listaProducto)
    // alert("Valores Iva"+listaIva)
    // alert("Valores Final"+listaFinal)

/*}*/
// document.getElementById("titulo").innerHTML="Cantidad de clientes:"
// document.getElementById("cantidad").innerHTML=cantidad
// document.getElementById("titulodos").innerHTML="Cantidad de Hombres:"
// document.getElementById("cantidadHombres").innerHTML=cantidadHombres
// document.getElementById("titulotres").innerHTML="Cantidad de Mujeres:"
// document.getElementById("cantidadMujeres").innerHTML=cantidadMujeres
    document.getElementById("titulouno").innerHTML="Valor producto:"
    document.getElementById("valorProducto").innerHTML=valorProducto
    document.getElementById("titulodos").innerHTML="Valor iva producto:"
    document.getElementById("valorIvaProducto").innerHTML=valorIvaProducto
    document.getElementById("titulotres").innerHTML="Valor final producto:"
    document.getElementById("valorFinalProducto").innerHTML=valorFinalProducto

}
    // alert("cantidad clientes"+ cantidad)
    // alert("Cantidad de hombres"+ cantidadHombres)
    // alert("Cantidad de mujeres"+ cantidadMujeres)
//     alert("Valores finales"+ valorFinalProducto)

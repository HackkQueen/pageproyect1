lista = []
numMovCuenta(0)//Inicializa la funcion en cero para que no se muestre iniciando
numMovTotal, numMov = 0

//Si la seccion de movimientos ya es visible entonces se encarga de la seccion de movimientos
function movRealizados() {
    var tipoMovimiento = document.getElementById("tipoMov")
    var valorMovimiento = document.getElementById("valorMov")
    lista.push({ 'tipoMovimiento': tipoMovimiento.value, 'valorMov': parseInt(valorMovimiento.value) })
    tipoMovimiento.value = ""
    valorMovimiento.value = 0
    //oculta el boton
    numMov++
    //if (numMov + 1 <= numMovTotal) document.getElementById("btnMovRealizados").style.visibility = "hidden"
}

//Se encarga de mostrar o no la seccion de movimientos
function numMovCuenta(num) {
    numMovTotal = num
    //comentario con respecto a if (?)
    //x= (x<7)? 5:6
    //HACE QUE EL BOTON APAREZCA
    document.getElementById("btnMovRealizados").style.visibility = num > 1 ? "visible" : "hidden"
    var movCuentaItems = document.getElementsByClassName("movCuentaItems")
    for (i = 0; i < movCuentaItems.length; i++) {
        movCuentaItems.item(i).style.visibility = (num > 0) ? "visible" : "hidden"
    }
}

function saldoFinalCuenta() {
    var codigoEmpresa = document.getElementById("codEmpresa").value
    var nombreEmpresa = document.getElementById("nomEmpresa").value
    var fechaMovimiento = document.getElementById("fechaMov").value
    var tipoCuenta = document.getElementById("tipoCuenta").value
    var saldoInicialCuenta = parseInt(document.getElementById("saldoCuenta").value)
     // Llamar el modal
     let modal = document.getElementById("modal-hunters");
     let btn_hunters = document.getElementById("btn-hunters");
     let btnClose = document.getElementById("btn-close-hunters");

    var saldoMovimiento=0, saldoFinalCuenta=0, valSaldo=saldoInicialCuenta


    for (var i = 0; i < lista.length; i++) {
        //traigo el tipo de cuenta y tipo de movimiento para poder realizar la funcion principal
        //lista[i].tipoMovimiento
        //
        //nueva variable UNICA DENTRO DE LA FUNCION para llamar de la lista el valor del movimiento
        //valorMovimiento=lista[i].valorMov

        valorMovimiento=lista[i].valorMov
        if (tipoCuenta===lista[i].tipoMovimiento){
            saldoMovimiento=valSaldo+valorMovimiento
        }
        else if (tipoCuenta!=lista[i].tipoMovimiento){
            saldoMovimiento=valSaldo-valorMovimiento
        }
        valSaldo=saldoMovimiento
        saldoFinalCuenta=saldoMovimiento
    }

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

      
    document.getElementById("tip1").innerHTML = "Cod:"
    document.getElementById("codigoEmpresa").innerHTML = codigoEmpresa
    document.getElementById("tip2").innerHTML = "Empresa:"
    document.getElementById("nombreEmpresa").innerHTML = nombreEmpresa
    document.getElementById("titulo1").innerHTML = "Saldo Inicial: "
    document.getElementById("saldoInicialCuenta").innerHTML = saldoInicialCuenta
    document.getElementById("tip3").innerHTML = "Fecha del Movimento: "
    document.getElementById("fechaMovimiento").innerHTML = fechaMovimiento
    document.getElementById("titulo2").innerHTML = "Saldo Final: "
    document.getElementById("saldoFinalCuenta").innerHTML = saldoFinalCuenta

}



function liquidarNomina(){
    var cedula=parseInt(document.getElementById("cedula").value)
    var nombre=document.getElementById("nombre").value 
    var direccion=document.getElementById("direccion").value 
    var dias=parseInt(document.getElementById("dias").value)
    var salario=parseInt(document.getElementById("salario").value)
    var netoEmpleado=0,devengado=0,deducidos=0,seguridadSocial=0,pension=0
    // Get the modal
    let modal = document.getElementById("modal-hunters");
    let btn_hunters = document.getElementById("btn-hunters");
    let btnClose = document.getElementById("btn-close-hunters");


    if (salario<1160000){
      devengado=((salario/30)*dias)+140000
    } else {
      devengado=((salario/30)*dias)
    }

    seguridadSocial=salario*0.04
    pension=salario*0.04
    deducidos=seguridadSocial+pension

    netoEmpleado=devengado-deducidos
    cliente=nombre


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


    document.getElementById("titulo1").innerHTML="Nombre del Empleado: "
    document.getElementById("cliente").innerHTML=cliente
    
    document.getElementById("titulo2").innerHTML="Valor a pagar: "
    document.getElementById("netoEmpleado").innerHTML=netoEmpleado

    document.getElementById("titulo3").innerHTML="Pago por Seguridad Social: " 
    document.getElementById("seguridadSocial").innerHTML=seguridadSocial

    document.getElementById("titulo4").innerHTML="Pago por Pensión: " 
    document.getElementById("pension").innerHTML=pension


    
    
}
/*
 N=int(input("Numero de empleados de la empresa: "))
smmlv=1160000
nominaTotal=0
totalSeguridad=0
totalPension=0
resumen=[]

for i in range(N):

    cedula=int(input("Ingrese cedula: "))
    nombre=input("Ingrese el nombre: ")
    direccion=input("Ingrese la dirección: ")
    diasTabajados=int(input("Numero de dias trabajados: "))
    salarioBasico=int(input("Ingrese el salario basico: "))

    # Para devengados:
    devengado=salarioBasico*(diasTabajados/30)
    if salarioBasico<smmlv:
        devengado+=140000
    else:
        devengado+=0
    
    # Para deducidos:    .
    seguridadSocial=salarioBasico*0.04
    pension=salarioBasico*0.04
    deducidos=seguridadSocial+pension

    totalSeguridad+=seguridadSocial
    totalPension+=pension

    M=int(input("Ingrese las novedades del empleado: "))
    for i in range(M):
        tipoNovedad=int(input("Ingrese el tipo de novedad: \n1:Bonificacion\n2:Descuentos\n"))
        valorNovedad=int(input("Ingrese el valor de la novedad: "))

        if tipoNovedad==1:
            devengado+=valorNovedad
        else:
            deducidos+=valorNovedad
        
    netoPagar=devengado-deducidos

    resumen.extend([nombre,netoPagar])
    print("Resumen de la nomina del cliente: ",resumen)
    resumen.clear()

    nominaTotal+=netoPagar

print("El valor total de la nómina que debe pagar la empresa: ",nominaTotal)
print("El valor total de la seguridad social que debe pagar la empresa: ",totalSeguridad)
print("El valor total de la pension que debe pagar la empresa: ",totalPension)

 */
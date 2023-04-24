document.addEventListener("DOMContentLoaded", () => {
	const datosEstudianteCodificados = sessionStorage.getItem("datosEstudiante");
	// No hay datos
	if (!datosEstudianteCodificados) {
		return alert("No hay datos guardados. Asegúrate de enviar el formulario");
	}
	const datosEstudiante = JSON.parse(datosEstudianteCodificados);
	const notaLaboratorio = (datosEstudiante.notaTaller1 + datosEstudiante.notaTaller2) / 2;
	const notaUnidad = (notaLaboratorio * 4 / 10) + (datosEstudiante.notaParcial * 6 / 10);
	document.querySelector("#nombreEstudiante").textContent = datosEstudiante.nombreEstudiante;
	document.querySelector("#carnetEstudiante").textContent = datosEstudiante.carnetEstudiante;
	document.querySelector("#nombreAsignatura").textContent = datosEstudiante.nombreAsignatura;
	document.querySelector("#notaTaller1").textContent = datosEstudiante.notaTaller1;
	document.querySelector("#notaTaller2").textContent = datosEstudiante.notaTaller2;
	document.querySelector("#notaParcial").textContent = datosEstudiante.notaParcial;
	document.querySelector("#notaLaboratorio").textContent = notaLaboratorio;
	document.querySelector("#notaFinal").textContent = notaUnidad;
});
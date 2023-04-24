document.addEventListener("DOMContentLoaded", () => {
	const $formulario = document.querySelector("#formulario");
	const $notaTaller1 = document.querySelector("#notaTaller1"),
		$notaTaller2 = document.querySelector("#notaTaller2"),
		$notaParcial = document.querySelector("#notaParcial");
	$formulario.onsubmit = function (evento) {
		// Prevenir envío de formulario
		evento.preventDefault();
		// Recorrer elementos input y si alguno está vacío detenernos
		const elementos = $formulario.elements;
		for (const elemento of elementos) {
			if (elemento.tagName === "INPUT" && elemento.value === "") {
				return;
			}
		}

		// Hasta aquí todos los campos están llenos
		for (const $nota of [$notaTaller1, $notaTaller2, $notaParcial]) {
			const valor = parseFloat($nota.value);
			if (valor < 0 || valor > 10) {
				return alert(`El valor de ${$nota.placeholder} debe estar entre 0 y 10`);
			}
		}

		// Hasta aquí las notas son correctas
		const datos = {};
		for (const elemento of elementos) {
			if (elemento.tagName === "INPUT") {
				let valor = elemento.value;
				if (elemento.type === "number") {
					valor = parseFloat(elemento.value);
				}
				datos[elemento.id] = valor;
			}
		}
		sessionStorage.setItem("datosEstudiante", JSON.stringify(datos));
		window.location.href = "imprimir.html";
	}
});
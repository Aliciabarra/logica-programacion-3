while (true) {
    //Pide numero
    let entrada = parseFloat(prompt("Ingrese un numero:"));
    //verifica si se ingreso un numero
    if (!isNaN(entrada)) {
    //calculo
        let total = 1;
        for (let i = 1; i <= entrada; i++) {
            total *= i;
        }
    //añade parrafo y contenido para mostrar el resultado
        let resultadoFactorial = document.createElement("p");
        resultadoFactorial.textContent = "El factorial del numero " + entrada + " es: " + total;
    //añade el parrafo a html
        document.body.appendChild(resultadoFactorial);
    // salir del bucle si se ingreso un numero valido
        break;
    } else {
    //mensaje de error
        alert("Por favor, ingrese un número válido.");
    }
}

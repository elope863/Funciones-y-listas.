// Cambia el contenido de la etiqueta h1
document.querySelector("#main-heading").innerHTML = "Hora del desafio";

//funcion para el bnoton el boton "console""
function consoleClick() {
    console.log("El boton console fue clicado");
    alert("El boton console fue clicado");
}

//funcion para el boton "alert"
function alertClick() {
    alert("Yo Amo JS");
}

//Funcion para el boton "prompt"
function promptClick() {
    const ciudad = prompt("Ingresa el nombre de una ciudad de brasil:");
    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acorde de ti.`);
    } else {
        alert("No ingresaste ninguna ciudad");
    }
}

//Funcion para el boton "suma"
function sumaClick() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    while (isNaN(num1)) {
        num1 = parseFloat(prompt("Por favor, ingresa un número válido:"));
    }
    
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    while (isNaN(num2)) {
        num2 = parseFloat(prompt("Por favor, ingresa un número válido:"));
    }
    
    alert(`El resultado de la suma es: ${num1 + num2}`);
}

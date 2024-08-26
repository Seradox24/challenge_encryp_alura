/* scripts JS gets*/
const encriptarBtn = document.getElementById("encriptarBtn"); /* Obtiene el botón de encriptar */

const desencriptarBtn = document.getElementById("desencriptarBtn"); /* Obtiene el botón de desencriptar */

const copiarBtn = document.getElementById("copiarBtn"); /* Obtiene el botón de copiar */

const textoInput = document.getElementById("textoInput"); /* Obtiene el campo de texto de entrada */

const resultadoDiv = document.getElementById("resultado"); /* Obtiene la sección de resultados */

const mensajePrincipal = document.getElementById("mensajePrincipal"); /* Obtiene el mensaje principal */

const mensajeSecundario = document.getElementById("mensajeSecundario"); /* Obtiene el mensaje secundario */

const placeholderImg = document.getElementById("phImg"); /* Obtiene la imagen de placeholder */

/* agrega el event click al botón de encriptar */
/*PD: quiero mas cafe  */ 
encriptarBtn.addEventListener("click", () => {

    const texto = textoInput.value; /* obtiene el texto del campo de text area*/
    if (!validarTexto(texto)) {

        alert("Por favor, ingrese solo letras minúsculas y sin caracteres especiales."); /* mesaje amigable en caso que el usuario sea Pe... y no vea el primer mensaje en el html */
        return;}

    const textoEncriptado = encriptar(texto); /* encripta el texto */
    mostrarResultado(textoEncriptado); });/* tira el resujltado en el card resultado */


/* event click al botón de desencriptar */
desencriptarBtn.addEventListener("click", () => {

    const texto = textoInput.value; /* contro c para el primer boton pero para el segundo */

    if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas y sin caracteres especiales."); /* por si sigue estando pe...el usuario */
        return; }

    const textoDesencriptado = desencriptar(texto); /* desencripta el texto */

    mostrarResultado(textoDesencriptado);}); /* tira el resujltado en el card resultado */


/* event click al botón de copiar */
copiarBtn.addEventListener("click", () => {
    copiarTexto(mensajePrincipal.textContent); /* Copia el texto del mensaje principal al portapapeles */
});

/* función para copiar el texto al portapapeles */
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {alert("Texto copiado al portapapeles"); /* muestra una alert confirmando la copia */
    }).catch(err => {
        console.error('error al copiar el texto:', err); /* muestra un error en la consola si falla */
    });
}


/* Función para validar que el texto solo contenga letras minúsculas y espacios */
function validarTexto(texto) {
    //const regex = /^[a-z\s]+$/; /* expresión regular para validar el texto solo minusculas gracias gpt  */
    const regex = /^[a-z\s!]+$/; //v2
    return regex.test(texto); /* regresa true si el texto es válido y el usuario no esta pen.. */
}

/* funcion para encriptar el texto pd: por no leer como sufri cuando lo cree en orden aeiou T_T rpt I love GPT <3 */
function encriptar(texto) {
    return texto

    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}


/* funcion para desencriptar el texto */
function desencriptar(texto) {
    return texto 
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}



/* funcion para mostrar el resultado en la card de resultados */
function mostrarResultado(texto) {
    placeholderImg.style.display = "none"; /* Oculta la imagen del minino */
    mensajePrincipal.textContent = texto; /* muestra el texto en el mensaje principal */
    mensajeSecundario.textContent = ""; /* limpia el mensaje secundario */
    copiarBtn.style.display = "block"; /* muestra el botón de copiar */
}


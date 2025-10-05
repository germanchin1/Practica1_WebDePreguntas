let preguntas = [];
let nPregunta = 0

const cargarPreguntas = async () => {
    let response = await fetch('preguntas.json');
    preguntas = await response.json(); 
    preguntas.sort(function(){return 0.5 - Math.random()});
    preguntas.forEach(p => {
        console.log(p.pregunta);
    });
}

cargarPreguntas().then(() => {
    mostrarPreguntas();
});



function mostrarPreguntas() {
    const contenedor = document.getElementById("TODAS_LAS_PREGUNTAS");
   

    for (let i = nPregunta; i < nPregunta + 2 && i < preguntas.length; i++) {
        crearDivPregunta(preguntas[i]);
    }

    nPregunta += 2;
}
//hacer div preguntas
function crearDivPregunta(pregunta){  
    //div
    const divPregunta = document.createElement("div");
    divPregunta.className = "contenedorPreguntas"; //css

    //titulo
    const titulo = document.createElement("h2");
    titulo.className = "tituloPreguntas"; //css
    titulo.innerHTML = pregunta.pregunta; 

    divPregunta.appendChild(titulo);
    document.getElementById("TODAS_LAS_PREGUNTAS").appendChild(divPregunta);

    const DivRespuestas = document.createElement("div");
    DivRespuestas .className = "DivRespuestas";
    console.log(pregunta.respuestas)
    pregunta.respuestas.forEach((texto, i) => {
        const RadioButton = document.createElement("input")
        RadioButton.type = "radio";
        RadioButton.name =  "respuesta" + nPregunta;
        RadioButton.id = "res" + i;
       
        const textoRespuesta = document.createElement("label")
        textoRespuesta.innerHTML = texto;   
       
        textoRespuesta.appendChild(RadioButton); 
        DivRespuestas.appendChild(textoRespuesta);
    
    
        RadioButton.addEventListener("change", () => {
    comprobarRespuesta(i, pregunta.respuesta_correcta, divPregunta);
});

    });    
    divPregunta.appendChild(DivRespuestas); 

}

//checkear respuestas


    function comprobarRespuesta(indiceSeleccionado, indiceCorrecto, div) {
        if (indiceSeleccionado === indiceCorrecto) {
            div.style.backgroundColor = "#2b812bff";

        } else {
            div.style.backgroundColor = "#d83030ff"; 
        }
        const radios = div.querySelectorAll("input[type='radio']");
        radios.forEach(RadioButton => RadioButton.disabled = true);
        
        
    }

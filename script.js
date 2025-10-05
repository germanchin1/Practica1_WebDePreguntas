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
    for (let i = 0; i < preguntas.length; i++) {
        crearDivPregunta(preguntas[i]); 
    }
});

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
        textoRespuesta.htmlFor = RadioButton.id; 
        textoRespuesta.innerHTML = texto;   
        textoRespuesta.appendChild(RadioButton); 
        DivRespuestas.appendChild(textoRespuesta);


    });    
    divPregunta.appendChild(DivRespuestas); 

}
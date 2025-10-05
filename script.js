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
    crearDivPreguntas(preguntas)
    });




function crearDivPreguntas(preguntas){

}
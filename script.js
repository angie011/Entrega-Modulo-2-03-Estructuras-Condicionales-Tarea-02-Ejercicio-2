let opcion = 0;
let tiempoDormido = 0;
let tiempoSentado = 0;
let Dormido = 0.0;
let Sentado = 0.0;
let totalCaloriasD = 0.0;
let totalCaloriasS= 0.0;

opcion = Number(prompt('Seleccione la actividad: \n 1. Dormido  2. Sentado  3. Dormido y Sentado'));

if(opcion==1){
    tiempoDormido = Number(prompt('Ingrese el tiempo dormido (Horas):'));
    Dormido = tiempoDormido*60;
    totalCaloriasD = round(Dormido*1.08);
    alert(`Su cuerpo consume ${totalCaloriasD} calorías dormido`); 
}else if (opcion==2){
    tiempoSentado = Number (prompt('Ingrese el tiempo sentado (Horas):'));
    Sentado = tiempoSentado*60;
    totalCaloriasS = round(Sentado*1.66);
    alert(`Su cuerpo consume ${totalCaloriasS} calorías sentado.`);
}else if (opcion==3){
    tiempoDormido = Number(prompt('Ingrese el tiempo dormido (Horas):'));
    tiempoSentado = Number (prompt('Ingrese el tiempo sentado (Horas):'));
    Dormido = tiempoDormido*60;
    totalCaloriasD = round(Dormido*1.08);
    Sentado = tiempoSentado*60;
    totalCaloriasS = round(Sentado*1.66);
    alert(`Su cuerpo consume ${totalCaloriasD} calorías dormido ${totalCaloriasS} calorías sentado.`); 

}else{
    alert('La opción ingresada no está dentro del rango.');
}

function round(num) {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}




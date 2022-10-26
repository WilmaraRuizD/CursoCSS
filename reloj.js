alert("hola mundo");
var inicializarhora = function(){
   var fechaActual= new Date();
   var tiempoHoras = fechaActual.getHours();
   var tiempoMinutos= fechaActual.getMinutes();
   var tiempoSegundos= fechaActual.getSeconds();

   var mesActual = fechaActual.getMonth();
   var diaActual = fechaActual.getDay();
   var diaDelMes = fechaActual.getDate();
   var aActual = fechaActual.getFullYear();
   var amOpm;

   var meses=["Enero","Febrero","Marzo","Abril","Mayo","junio",
    "julio","agosto","Setiembre","Octubre","Noviembre","Diciembre"];

    var esteMes=meses[mesActual];

    var diaDelaSemanas=["Domingo","lunes","Martes","Miercoles","Jueves","viernes","Sabado"]
    var diaDeHoy=diaDelaSemanas[diaActual];
    amOpm = (tiempoHoras>12)?"pm":"am";
    tiempoHoras=(tiempoHoras>12)?tiempoHoras-12 : tiempoHoras;
    tiempoHoras=(tiempoHoras<10)?"0"+tiempoHoras:tiempoHoras;
    tiempoMinutos=(tiempoMinutos<10)?"0"+tiempoMinutos:tiempoMinutos;
    tiempoSegundos=(tiempoSegundos<10)?"0"+tiempoSegundos:tiempoSegundos;

    document.getElementById("laFecha").innerHTML=`${diaDeHoy} ${diaDelMes} de ${esteMes} del ${aActual}`
    document.getElementById("info").innerHTML = `${tiempoHoras}:${tiempoMinutos}:${tiempoSegundos} ${amOpm}`;
}
var seg=0;
var min=0;


inicializarhora();
setInterval(inicializarhora,1000);

let boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    alert('Este es el evento click');
    setInterval(() => {
        console.log(seg);
        if(seg<60){
        seg ++;
        console.log(seg);
        document.getElementById("temporizar").innerHTML=`${min} min:${seg} seg`
        }else{
            seg=0;
            if(min<60){
            min ++;}
            else{min=0}
        }
        
    }, 1000);
})
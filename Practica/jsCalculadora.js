//Funcion cambio aspecto
function cambioSkyn(option){
	var option= option.value;
	var nuevoColorContenedor=document.getElementById("contenedor");
	var nuevoColorContenedorCientifico=document.getElementById("contenedorCientifico");
		if(option=="azul"){
			nuevoColorContenedor.style.backgroundColor = '#0F7FC0';
			nuevoColorContenedorCientifico.style.backgroundColor = '#0F7FC0';
		}else if(option=="marron"){
			nuevoColorContenedor.style.backgroundColor = '#C06D0F';
			nuevoColorContenedorCientifico.style.backgroundColor ='#C06D0F';
		}else if(option=="amarilla"){
			nuevoColorContenedor.style.backgroundColor = '#EEC634';
			nuevoColorContenedorCientifico.style.backgroundColor = '#EEC634';
		}else if(option=="roja"){
			nuevoColorContenedor.style.backgroundColor = '#F75252';
			nuevoColorContenedorCientifico.style.backgroundColor = '#F75252';
		}else if(option=="clara"){
			nuevoColorContenedor.style.backgroundColor = '#D9D9CD';
			nuevoColorContenedorCientifico.style.backgroundColor = '#D9D9CD';
		}
	}

function sciMode(){
	var cCientifica=document.getElementById("contenedorCientifico");
	var pantallaCientifica=document.getElementById("pantallaCientifica");
	cCientifica.style.display="block";
	pantallaCientifica.style.display="block";
	//document.getElementsByClassName("pantallaCientifica").style.display="visibility";
}

function exit(){
	var cCientifica=document.getElementById("contenedorCientifico");
	var pantallaCientifica=document.getElementById("pantallaCientifica");
	cCientifica.style.display="none";
	pantallaCientifica.style.display="none";
	//document.getElementsByClassName("pantallaCientifica").style.display="visibility";
}
//Funciones calculadora simple.

//Declaro los distintos operandos
var operandoA;
var operandoB;
var operador;
var operacion;

function pulsarTecla(n){
	//Hago una llamada al valor de la pantalla
	document.getElementById("pantalla").value;
	//Concateno cada nuevo valor con el anterior utilizando el operador +=
	document.getElementById("pantalla").value += n.value;
	}
	
//Para limpiar la pantalla cada vez que se pulse un operador.
function limpiarPantalla(){
	document.getElementById("pantalla").value = "";
}

//Para limpiar con el botón C.
function borrarOperacion(){
	//Limpio todos los valores que pudieran estar almacenados en las variables.
	operandoA="";
	operandoB="";
	document.getElementById("pantalla").value = "";
}
//Obtener operandoA
//Obtener operando
//Cuando pulse una tecla de operador quiero que se guarde la primera pila de 
//	numeros en el operandoA

function operacion(o) {
	operador = o.value;
	operandoA = document.getElementById("pantalla").value;
	if (isNaN(operandoA)) {
		document.getElementById("pantalla").value="ERROR";
	}else{
			if(operandoA.includes(".")){
		operandoA=parseFloat(operandoA);
			}else{
		operandoA=parseInt(operandoA);
		}
	}
	//Controlo si es o no un numero decimla

	document.getElementById("pantalla").value="";
		//console.log(operador);	
		//console.log(operandoA);
}
function resultado(){
	operandoB=document.getElementById("pantalla").value;
	if(operandoB.includes(".")){
		operandoB = parseFloat(operandoB);
	}else{
		operandoB = parseInt(operandoB);
	}
	var resultado="";

		if(operador=="+"){
			resultado= operandoA+operandoB;
		}else if(operador=="-"){
			resultado=operandoA-operandoB;
		}else if(operador=="x"){
			resultado = operandoA*operandoB;
		}else if(operador=="/"){
			resultado = operandoA / operandoB;
		}else if(operador=="√"){
			resultado = Mat.pow(Math.sqrt(operandoA), operandoB);
		}
	if (isNaN(resultado)) {
	document.getElementById("pantalla").value="ERROR";
	}else{
		document.getElementById("pantalla").value=resultado;
		//console.log(operandoB);
	}
}

function cambiarSigno(){
		nPantalla =document.getElementById("pantalla").value;
	if (Math.sign(nPantalla)==1) {
		document.getElementById("pantalla").value=-nPantalla;
	}else if(Math.sign(nPantalla)==-1){
		document.getElementById("pantalla").value=(-1*nPantalla);
	}
}

function borrarUltimoN(){
	nPantalla =document.getElementById("pantalla").value;
	nPantalla = nPantalla.substring(0, (nPantalla.length-1));
	document.getElementById("pantalla").value=nPantalla;
}

//Funciones calculadora cientifica

function pi(){
	document.getElementById("pantalla").value += Math.PI;
}

function e(){
	document.getElementById("pantalla").value += Math.E;
}
	//HACEr chECK FLOAT
function abs(){
	nPantalla =document.getElementById("pantalla").value;
	document.getElementById("pantalla").value = 
		Math.abs(nPantalla);
}

function sin(){
	 nPantalla =document.getElementById("pantalla").value;
	 console.log(nPantalla);
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	//Grados:
		//document.getElementById("pantalla").value= Math.sin((nPantalla*Math.PI)/180);
	//Radianes:
	document.getElementById("pantalla").value= Math.sin(nPantalla);
}	

function cos(){
	nPantalla =document.getElementById("pantalla").value;
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	document.getElementById("pantalla").value = 
		Math.cos(nPantalla);
}

function tan(){
	nPantalla =document.getElementById("pantalla").value;
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	document.getElementById("pantalla").value = 
		Math.tan(nPantalla);
}

function log10(){
	nPantalla =document.getElementById("pantalla").value;
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	if(nPantalla<0){
		document.getElementById("pantalla").value = "ERROR";
	}else{
	document.getElementById("pantalla").value = 
		Math.log10(nPantalla);
	}
}

function log2(){
	nPantalla =document.getElementById("pantalla").value;
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	document.getElementById("pantalla").value = 
		Math.log2(nPantalla);
}

function ln(){
	nPantalla =document.getElementById("pantalla").value;
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	document.getElementById("pantalla").value = 
		Math.log(nPantalla);
}

function sqrt(){
	nPantalla =document.getElementById("pantalla").value;
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	document.getElementById("pantalla").value = 
		Math.sqrt(nPantalla);
}

function sqrtN(){
	nPantalla =document.getElementById("pantalla").value;
	if(nPantalla.includes(".")){
		nPantalla = parseFloat(nPantalla);
	}else{
		nPantalla = parseInt(nPantalla);
	}
	document.getElementById("pantalla").value += "√" ;
	//	Math.pow(nPantalla);
}

//canvas
function canvasBasico(){

var canvas = document.getElementById("pantallaCientifica");
var lienzo= canvas.getContext("2d");

var anchoPantalla = canvas.innerWidth;
var altoPantalla = canvas.innerHeigth;

x = 0;/* mejor empezarla siempre en 0 */
y = 0;
dimension = 1;
	//Eje x
lienzo.strokeStyle = "rgb(0,200,0)";
lienzo.beginPath();
lienzo.moveTo(0, 75);
lienzo.lineTo(290, 75);
lienzo.stroke();
	//Eje y
lienzo.strokeStyle = "rgb(200,0,0)";
lienzo.beginPath();
lienzo.moveTo(145, 0);
lienzo.lineTo(145, 150);
lienzo.stroke();
}

function dibujar(){
var canvas = document.getElementById("pantallaCientifica");
var lienzo= canvas.getContext("2d");
lienzo.strokeStyle = "rgb(0,0,200)";
        grafica(x)
        lienzo.fillRect(x+200,y, dimension, dimension);
        x= x + 0.1;
}
function grafica(z){
        y = 200 - Math.pow(z,2);
    }




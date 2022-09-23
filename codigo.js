
//**********1. Abrir y cerrar ventana**********/////

//let youtubeUrl = "https://youtube.com";
//let ventana = window.open(youtubeUrl);
//ventana.close();
//ventana.closed;
//detenemos un sitio web.
//ventana.stop;


//alert("Rancio");
//print()
//let respuesta =confirm("Seguro que quieres salir de sitio web")
//console.log(respuesta);


//**********Screen y scroll**********/////

////Screen: devuelve una referencia al objeto de pantalla asociado con la ventana
//const screen = window.screen;
//console.log(screen);
//document.write(screen);

////ScreenLeft, top: devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
//const ScreenLeft = window.screenLeft;
//const screenTop = window.screenTop;
//console.log(screenLeft);
//document.write(screenLeft);

////Scrollx: devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente.
//const Scrollx = window.scrollX;
//alert("Scrollx: "+Scrollx);


////Scrolly: devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente.
//const scrolly = window.scrollY;
//alert("Scrolly "+scrolly);


////Scroll(): deslaza la ventana a un lugar particular en el documento. (con options y con posiciones)
//window.scroll(0,50);


//**********resizeBy(),resizeTo(),moveBy(),moveTo()*********/////

////resizeBy(): cambia el tamaño de la ventana actual en una cantidad especifica de pixeles.
//ventana = window.open("https://youtube.com");
//ventana.resizeBy(100,200);

////resizeTo(): Redimensiona dinamicamente la ventana.
//ventana = window.open("https://youtube.com");
//ventana.resizeTo(100,200);

////moveBy(): mueve la ventana a una ubicacion relativa.
//ventana = window.open("https://youtube.com");
//ventana.moveBy(100,200);

////moveTo(): mueve la ventana a una ubicacion absoluta.
//ventana = window.open("https://youtube.com");
//ventana.moveTo(100,200);



//**********objetos barprop*********/////
//locationbar
//menubar
//personalbar
//scrollbar
//statusbar
//toolbar


//**********Location*********/////
//const href=window.location.href;
//document.write(href);

//const hostName=window.location.hostname;
//document.write(hostName);

//const pathName=window.location.pathname;
//document.write(pathName);

//const protocol=window.location.protocol;
//document.write(protocol);

////Carga un nuevo documento
//window.location.assign("https://youtube.com");


//**********Eventos*********/////

////EvenHandler.
//const button = document.querySelector(".button");
//button.onclick =()=>{
//alert("hola");
//}

////EvenListener

//const button=document.querySelector(".button")

////Con function normal
//button.addEventListener("click",saludar);

//function saludar(){
//    alert("Hola......");
//}

////with arrow function
//button.addEventListener("click",saludar=()=>{
    //alert("Hola......ptthgfd");
//});

////Event object
//const button=document.querySelector(".button")
//button.addEventListener("click",saludar=(event)=>{
  //  console.log(event.target);
//});

////Event flow
//Event Bubbling vs Event Capturing
//EventstopPropagation()

//const button=document.querySelector(".button");
//const contenedor = document.querySelector(".contenedor");

//button.addEventListener("click",saludar=(event)=>{
    //alert("di click en el boton");
    //event.stopPropagation();
//});

//Ejecutar por default el contenedor mas grande.
//contenedor.addEventListener("click",saludar=(event)=>{
//    alert("di click en el contenedor");
//},true);

//contenedor.addEventListener("click",saludar=(event)=>{
    //alert("di click en el contenedor");
//});


//************************************Muse Events********************************************/////
//const button=document.querySelector(".button");

////DoubleClick: dblclick
//button.addEventListener("dblclick",saludar=(event)=>{
  //alert("di click en el boton");
  //event.stopPropagation();
//});

////mouseover
//button.addEventListener("mouseover",saludar=(event)=>{
    //alert("mouse over button");    
  //});

  ////mouseout
  //button.addEventListener("mouseout",saludar=(event)=>{
    //alert("mouse out button");    
  //});

////contextmenu: ocurre con un click derecho en un elemento para abrir un menú
//button.addEventListener("contextmenu",saludar=(event)=>{
    //alert("context menu event");    
//});

////mouseenter: ocurre cuando el puntero se mueve sobre un elemento.
////mouseleave: ocurre cuando un puntero se mueve fuera de un elemento.
////mouseuo: ocurre cuando un usuario suelta un boton del mouse sobre un elemento.
////mousemove: ocurre cuando el puntero se mueve mientras esta sobre un elemento.
////mousedown: ocurre cuando el boton del mouse es presionado sobre un elemento.
    

//************************************Key Events************************************/////
//let inputprueba = document.querySelector(".input-prueba");

////keydown: ocurre cuando una tecla se deja de precionar.
//inputprueba.addEventListener("keydown",(event)=>{
  //  alert("una tecla fue presionada");
//});


////keypress: ocurre cuando una tecla se preciona y suelta
//inputprueba.addEventListener("keypress",(event)=>{
  //  alert("Un usuario presionando una tecla");
//})

////onkeyup: ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.
//inputprueba.addEventListener("onkeyup",(event)=>{
  //  alert("una tecla fue liberada");
//});


//************************************eventos de la interfaz************************************/////
//const img = document.querySelector(".img-prueba");

////error: ocurre cuando sucede un error durante la carga de un archivo multimedia.
//img.addEventListener("error",(event)=>{
  //alert("ha sucedido un error");
//});

////load: ocurre cuando un objeto se ha cargado
//window.addEventListener("load",(event)=>{
  // alert("ha cargado el sitio");
//});

////beforeunload: ocurre justo antes de que el documento se carge (antes de irte del sitio)
////unload: ocurre una vez que se ha descargado una pagina (te fuiste del sitio)
////resize: ocurre cuando se cambia el tamaño la vista del documento
////scroll: ocurre cuando se desplaza la barra de desplazamiento de un elemento.
//window.addEventListener("scroll",(event)=>{
  // console.log("se ha scrolleado ");
//});

////select: ocurre después de que el usuario selecciona agun texto de <input> o <textarea>
//const inputprueba = document.querySelector(".input-prueba");

//inputprueba.addEventListener("select",(event)=>{
  //  console.log(event);
//});

////Mas eventos en: https://www-weschools.com/jsref/obj_events.asp


//************************************Timers************************************/////
////setTimeout()
//const temporizador =setTimeout(()=>{
//document.write("Hola...");
//},2000);

//clearTimeout(temporizador);

////setInterval()
//clearInterval(xxxx);

////clearTimeout()
////clearInterval()


//************************************Exepciones y tipos de excepciones************************************/////


//************************************CallBacks************************************/////
//function prueba(callback){
  //callback("Pedro");
//}

//function decirNombre(nombre)
//{
  //console.log(nombre);
//}

//prueba(decirNombre);

//class Persona{
  //constructor(nombre,instagram){
  //this.nombre = nombre;
  //this.instagram=instagram;
//}
//};


//const protpersonas =[
  //["Nelsn","@faneus"],
  //["Diana","@chalarca"],
  //["Pepito","@pepito"]
//];

//const personas =[];


//for (let i = 0; i < protpersonas.length; i++) {
  //personas[i] = new Persona(protpersonas[i][0],protpersonas[i][1]);  
//}

//console.log(personas);

//************************************Promesas************************************/////
//let nombre ="pedro";
//const promesa = new Promise((resolve,reject)=>{
  //if(nombre != "pedro") reject("Lo siento, el nombre no es pedro");
  //else resolve(nombre)
//});

//console.log(promesa);


//************************************Await & async************************************/////
//************************************Ajax - Nativa************************************/////




//************************************CallBacks************************************/////

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




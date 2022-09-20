let href = window.location.href;
let pathName = window.location.pathname;
let hostName = window.location.hostname;
let protocol = window.location.protocol;

let htmlinfo=`Protocolo <b>${protocol}</b></br></br>`;
htmlinfo +=`PathName <b>${pathName}</b></br></br>`;
htmlinfo +=`HostName <b>${hostName}</b></br></br>`;
htmlinfo +=`URL <b>${href}</b></br></br>`;

document.write(htmlinfo);


let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es; ${ancho}`);

if(comprar){
    alert("Comra realizada exitosamente");
}else{
    alert("compra cancelada");
}


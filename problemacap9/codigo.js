const nombre=document.getElementById("fullname");
const email =document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(event)=>{        
    let error = verificarCampos();
    if(error[0]){
        resultado.innerHTML=error[1];
        resultado.classList.add("red");
    }
    else{
        resultado.innerHTML="Solicitud enviada";
        resultado.classList.add("green");
    }
});


const verificarCampos =()=>{
    let error =[];
    if(nombre.value.length <5 || nombre.value.length>40){
        error[0]=true;
        error[1]="El nombre no puede tener menos de 5 o mas de 40 caracteres";
        return error;
    }
    if(email.value.length<5 || email.value.length>40 || email.indexOf("@")==-1){
        error[0]=true;
        error[1]="Email no valido";
        return error;
    }

    error[0]=false;    
    return error;    
}
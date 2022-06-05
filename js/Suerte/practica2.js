// Creamos un juego de numeros de azar donde debemos elegir

// Colocar los numeros al azar

let  numb  = Math.ceil(Math.random()*10)

// Manejador de eventos

document.getElementById("boton").addEventListener("click", function(){

    // Obtener la información
    let number = document.getElementById("numero").value

    // Mostrar la respuesta deacuerdo a la condicion

    if(numb == number){
        alert("Has ganado una Toyota Hilux 🤑")
        // recargar la informacion o la pagina
        location.reload()
    }
    
    else{
        alert("Lo siento el numero era: " + numb + " si deseas puedes volver al jugar ")

        location.reload()
    }


})

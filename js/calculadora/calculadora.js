//Cargar el evento en una ventana
// => es una función alternativa
window.addEventListener("load",() =>{
    //Busco los botones y el resultado
    const botones = document.getElementsByClassName("boton")
    /* usar querySelector para que nos de el elemento solo */
    const result = document.querySelector(".resultado")

    /* Convierto la HTMLCollection a Array para poder iterar */
    const botonlista = Array.from(botones)

    /* Agrego un evento de click a cada boton */
    // forEach ---> una simple iteración en su lugar
    botonlista.forEach((boton) =>{
        boton.addEventListener("click", () =>{
            calculadora(boton, result)
        })
    })
})

/* Llamo a una funcion cada vez que ocurra un click */
function calculadora(boton,result){
    switch (boton.innerHTML) {
        case "C":
            // Se borrará todo los números
            borrar(result)
            break;

        case "=":
            //Se calculará la fórmula
            calcular(result)
            break;
    
        default:
            //Funcionará con los botones y el resultado
            actualizar(result,boton)
            break;
    }
}

function calcular(result){
    //evalúa un código JS representado como una cadena de caracteres (string)
    result.innerHTML = eval(result.innerHTML)
}

function borrar(result){
    if(result.innerHTML !=0){
        result.innerHTML = 0
    }
}

function actualizar(result,boton){
    if(result.innerHTML == 0){
        result.innerHTML = " "
    }

    result.innerHTML += boton.innerHTML
}



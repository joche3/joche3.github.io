const carrusel = document.querySelector(".carrusel")

let maxScroll = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null 
let step = 1

// como se ejecuta

const start = () =>{
    intervalo = setInterval(function(){
        carrusel.scrollLeft = carrusel.scrollLeft + step
        if(carrusel.scrollLeft === maxScrollLeft){
            step = step * -1
        }
        else if(carrusel.scrollLeft === 0) {
            step = step * -1
        }
    },10
    )
}

const stop = () =>{
    clearInterval(intervalo)
}

//eventos que se daran en el mouse
carrusel.addEventListener("mouseover" , () =>{
    stop()
})

carrusel.addEventListener("mouseout" ,  () =>{
    start()
})

start();
/* Crearemos  un saludo interactivo pidiendo sus datos y mostrandolos en pantalla */




// seleccion al boton que produzca un evento


document.getElementById("boton").addEventListener("click", function(){

    // Extraer los datos del usuario
    // Para obtener el dato usamos propiedad value
    let nomb = document.getElementById("nombre").value 

    let telf  = document.getElementById("telefono").value

    // Mostrar resultado en la pantalla

    document.getElementById("salida").innerHTML = "<b>Bienvenido </b>" + nomb + " <b>te has echo acrededor de un cupon del 50% de descuento, para poder confirmar que eres tú te llamaremos al numero:   </b>" + telf + " <b>Para explicarte en que productos podras gastar tu cupon.😎</b>"
})



// Hamburguesa
const hamburguesa = document.querySelector(".hamburguesa")
const menu = document.querySelector(".Menu")

hamburguesa.addEventListener("click", function() {
    menu.classList.toggle("activo")
})

// EmailJS
emailjs.init("2iA66LdavwzSa077Q")

const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value
    const telefono = document.getElementById("numero").value
    const mensaje = document.getElementById("mensaje").value

    if (nombre === "" || telefono === "" || mensaje === "") {
        alert("Por favor llena todos los campos")
        return
    }

    emailjs.send("service_x8vup6w", "template_m92es0r", {
        nombre: nombre,
        telefono: telefono,
        mensaje: mensaje
    })
    .then(function() {
        alert("¡Mensaje enviado correctamente!")
        form.reset()
    })
    .catch(function(error) {
        alert("Error al enviar. Intenta de nuevo.")
        console.log(error)
    })
})
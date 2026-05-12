// Hamburguesa
const hamburguesa = document.querySelector(".hamburguesa")
const menu = document.querySelector(".menu-grupo")

hamburguesa.addEventListener("click", function() {
    menu.classList.toggle("activo")
})

// Animaciones
const elementos = document.querySelectorAll(".animado")

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
        }
    })
}, { threshold: 0.01 })

elementos.forEach(function(elemento) {
    observer.observe(elemento)
})
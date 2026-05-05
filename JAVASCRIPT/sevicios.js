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

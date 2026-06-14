// 1. Lógica de la Ventana Modal
function prepararModal(nombreEquipo) {
    const spanEquipo = document.getElementById('equipoSeleccionado');
    if (spanEquipo) {
        spanEquipo.textContent = nombreEquipo;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    //2. Lógica de la Tabla Dinámica (Nosotros)
    const tbody = document.getElementById('tabla-inventario');
    if (tbody) {
        const inventario = [
            { id: 101, equipo: "Poco F8 Pro", procesador: "Snapdragon 8 Gen 3", stock: 15 },
            { id: 102, equipo: "RedMagic 10 Pro", procesador: "Snapdragon 8 Elite", stock: 4 },
            { id: 103, equipo: "Galaxy S24 Ultra", procesador: "SD 8 Gen 3 for Galaxy", stock: 0 },
            { id: 104, equipo: "OnePlus 12", procesador: "Snapdragon 8 Gen 3", stock: 8 }
        ];

        inventario.forEach(item => {
            let badgeClase = item.stock > 10 ? 'bg-success' : (item.stock > 0 ? 'bg-warning text-dark' : 'bg-danger');
            let estadoTexto = item.stock > 10 ? 'Disponible' : (item.stock > 0 ? 'Pocas Unidades' : 'Agotado');

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.id}</td>
                <td class="fw-bold text-warning">${item.equipo}</td>
                <td>${item.procesador}</td>
                <td>${item.stock} uds.</td>
                <td><span class="badge ${badgeClase}">${estadoTexto}</span></td>
            `;
            tbody.appendChild(tr);
        });
    }

    //3. Lógica de Validación del Formulario (Contacto)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevención de acciones por defecto (Requisito)
            event.stopPropagation();

            let isValid = true;

            const nombre = document.getElementById('nombre');
            if (nombre.value.trim() === '') {
                nombre.classList.add('is-invalid');
                isValid = false;
            } else {
                nombre.classList.remove('is-invalid');
                nombre.classList.add('is-valid');
            }

            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }

            const mensaje = document.getElementById('mensaje');
            if (mensaje.value.trim() === '') {
                mensaje.classList.add('is-invalid');
                isValid = false;
            } else {
                mensaje.classList.remove('is-invalid');
                mensaje.classList.add('is-valid');
            }

            if (isValid) {
                document.getElementById('exitoAlerta').classList.remove('d-none');
                form.reset();
                setTimeout(() => {
                    nombre.classList.remove('is-valid');
                    email.classList.remove('is-valid');
                    mensaje.classList.remove('is-valid');
                    document.getElementById('exitoAlerta').classList.add('d-none');
                }, 4000);
            }
        });
    }
});

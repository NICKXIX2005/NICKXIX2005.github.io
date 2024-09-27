document.addEventListener('DOMContentLoaded', () => {
    fetch('taller.json')
        .then(response => response.json())
        .then(data => {
            // Título y descripción de la tienda
            document.getElementById('titulo-pagina').textContent = data.titulo_pagina;
            document.getElementById('descripcion-tienda').textContent = `Bienvenidos a ${data.datos_tienda.nombre}, la mejor tienda de computadoras y accesorios.`;

            // Información de contacto
            document.getElementById('direccion').textContent = `Dirección: ${data.datos_tienda.direccion}`;
            document.getElementById('telefono').textContent = `Teléfono: ${data.datos_tienda.telefono}`;
            document.getElementById('correo').textContent = `Correo: ${data.datos_tienda.correo}`;

            // Lista de productos en una tabla sin imágenes
            const computadoresList = document.getElementById('computadores-list');

            data.computadores.forEach(computador => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${computador.nombre}</td>
                    <td>${computador.descripcion}</td>
                    <td>$${computador.precio}</td>
                `;

                computadoresList.appendChild(row);
            });
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
});

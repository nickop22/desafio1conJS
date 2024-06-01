precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

        let cantidad = 0;
        const precioPorProducto = 400000; // Puedes cambiar este valor al precio de tu producto

        function actualizarPantalla() {
            document.getElementById('cantidad').innerText = `Cantidad de productos: ${cantidad}`;
            document.getElementById('precio').innerText = `Precio total: $${cantidad * precioPorProducto}`;
        }

        function sumarProducto() {
            cantidad++;
            actualizarPantalla();
        }

        function restarProducto() {
            if (cantidad > 0) {
                cantidad--;
                actualizarPantalla();
            }
        }

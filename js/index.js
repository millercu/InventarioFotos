document.addEventListener('DOMContentLoaded', () => {
   
          //Mensaje si algo sale mal
          function malo(id){
            var caja = document.createElement('div');
            caja.id = id
            caja.style.background = 'red';
            caja.style.color = 'white';
            caja.style.padding = '20px';
            caja.style.textAlign = 'center';
            caja.style.marginTop = '20px';
            caja.style.display = 'block';
            caja.innerHTML = 'Por favor agrega todos los campos';
        
            // Si el mensaje ya existe, elimínalo antes de mostrar el nuevo mensaje
            var mensajeExistente = document.getElementById(id);
            if (mensajeExistente) {
                mensajeExistente.remove();
            }
        
            // Agregar 
            cajas_ = document.getElementById('caja_msj')
            cajas_.appendChild(caja);
        
            // Establecer un temporizador 
            setTimeout(() => {
                caja.remove();
            }, 6000);
        }

        //Mensaje si algo sale mal
        function bueno(id){
            var caja = document.createElement('div');
            caja.id = id;
            caja.style.background = 'green';
            caja.style.color = 'white';
            caja.style.padding = '20px';
            caja.style.textAlign = 'center';
            caja.style.marginTop = '20px';
            caja.style.display = 'block';
            caja.innerHTML = 'Se ha creado todo correctamente';
        
            var mensajeExistente = document.getElementById(id);
            if (mensajeExistente) {
                mensajeExistente.remove();
            }
        
            cajas_ = document.getElementById('caja_msj')
            cajas_.appendChild(caja);
        
            setTimeout(() => {
                caja.remove();
            }, 6000);
        }

        agregar = document.getElementById('agregar')
        contenedor = document.getElementById('contenedor')

        agregar.addEventListener('click', () => {
            console.log('funciona...')
            
            //Obtener datos ingresados
            titu = document.getElementById('title').value
            descri = document.getElementById('descripcion').value
            imagenInput = document.getElementById('foto');

            // Verificar si se obtuvieron los datos correctamente
            if (titu && descri && imagenInput.files.length > 0) {
                
            bueno('msj')
            imagenFile = imagenInput.files[0]; 

            var tituloElemento = document.createElement('p');
            tituloElemento.textContent = `${titu}`;

            var descripElemento = document.createElement('p');
            descripElemento.textContent = `${descri}`;

            var imagenElemento = document.createElement('img');
            imagenElemento.src = URL.createObjectURL(imagenFile);
            imagenElemento.alt = `${titu}`;

            // Agregar elementos al contenedor
            entryDiv = document.getElementById('caja_')
            entryDiv.appendChild(tituloElemento);
            entryDiv.appendChild(descripElemento);
            entryDiv.appendChild(imagenElemento);

            // Agregar el contenedor al contenedor principal
            contenedor.appendChild(entryDiv);
            
            //Resetear el form
            // document.getElementById('form_tdo').reset();
            } else {
                malo('msj')
            }
        })
        
})
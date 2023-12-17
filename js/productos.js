let data = []

const crearProducto = () => {

  const tituloProducto = document.getElementById("titulo").value;
  const precioProducto = document.getElementById("precio").value;
  const descripcionProducto = document.getElementById("descripcion").value;


  const objetoProducto = {
  
    titulo: tituloProducto,
    precio: precioProducto,
    descripcion: descripcionProducto
  
  };

  data.push(objetoProducto);
  

  /* Enviar data */

  const conteidoData =  document.getElementById('dataInfo')


  data.forEach((data)=>{

    const nuevaData = document.createElement('tr')
    const plantilla =`
  
    <td>${data.titulo}</td>
    <td>${data.precio}</td>
    <td>${data.descripcion}</td>
    <td class="boton" ><button >Eliminar</button></td>

  `
    nuevaData.innerHTML = plantilla
    nuevaData.dataset.data = data
    conteidoData.append(nuevaData)
  
  })
  data = [];

  const tituloValidacion = document.getElementById('titulo')
  const precioValidacion = document.getElementById('titulo')
  const descripcionValidacion = document.getElementById('titulo')


};






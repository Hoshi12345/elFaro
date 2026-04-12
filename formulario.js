//const wrapper = document.querySelector('.wrapper');
//const loginLink = document.querySelector('.login-link');
//const btnPopup = document.querySelector('btn-login');
//const iconClose = document.querySelector('.icon-close');

//loginLink.addEventListener('click',()=>{
   // wrapper.classList.add('active');
//})

//btnPopup.addEventListener('click',()=>{
 //   wrapper.classList.add('active-popup');
//});

//iconClose.addEventListener('click',()=>{
   // wrapper.classList.remove('active-popup');
//});

// Seleccionamos el formulario por su ID
const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
  // Evita que el formulario se envíe de la forma tradicional (recargando la página)
  event.preventDefault();

  // Obtener los datos usando FormData
  const datos = new FormData(formulario);
  const nombre = datos.get('nombre');
  const email = datos.get('email');

  // Validación o acción simple
  if (nombre && email) {
    document.getElementById('mensaje').innerText = `¡Gracias, ${nombre}! Hemos recibido tu correo: ${email}`;
    formulario.reset(); // Limpia los campos
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

const btnMostrar = document.getElementById('btnMostrar');
const formulario = document.getElementById('miFormulario');

btnMostrar.addEventListener('click', () => {
  // .toggle añade la clase si no está, y la quita si ya está
  formulario.classList.toggle('oculto');
  
  // Opcional: Cambiar el texto del botón según el estado
  if (formulario.classList.contains('oculto')) {
    btnMostrar.innerText = "Escribir Mensaje";
  } else {
    btnMostrar.innerText = "Cerrar Formulario";
  }
});
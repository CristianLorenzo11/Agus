function mostrarTabla(dia) {
  // Ocultar todas las tablas
  var tablas = document.querySelectorAll('.tabla-rutina , .recomendacion');
  tablas.forEach(function(tabla) {
    tabla.classList.remove('active');
  });

  // Mostrar solo la tabla del día seleccionado
  var tablaDia = document.getElementById('tabla-' + dia);
  if (tablaDia) {
    tablaDia.classList.add('active');
  }

  // Mostrar la información personal si se selecciona
  var infoPersonal = document.getElementById('info-personal');
  if (dia === 'informacion' && infoPersonal) {
    infoPersonal.classList.add('active');
  } else {
    infoPersonal.classList.remove('active');
  }

  // Mostrar la información personal si se selecciona
  var recomendacion = document.getElementById('recomendacion');
  if (dia === 'recomendacion' && recomendacion) {
    recomendacion.classList.add('active');
  } else {
recomendacion.classList.remove('active');
  }

  // Hacer scroll al contenido
  tablaDia.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const password = loginForm.password.value;
  
      // Verificar si la contraseña es correcta (aquí puedes establecer tu propia lógica)
      if (password === '12345') {
        loginContainer.classList.add('hidden');
        content.classList.remove('hidden');
      } else {
        alert('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
      }
    });
  });
  var temporizador; // Variable global para almacenar el identificador del temporizador
  var tiempo = 60; // Tiempo inicial en segundos
  var corriendo = false; // Variable para controlar si el temporizador está corriendo o pausado
  
  function iniciarTemporizador() {
      var boton = document.getElementById("boton-temporizador");
      if (!corriendo) { // Si el temporizador no está corriendo, iniciarlo
          temporizador = setInterval(actualizarTemporizador, 1000); // Iniciar el temporizador
          corriendo = true; // Actualizar el estado a corriendo
          boton.innerHTML = "Pausar"; // Cambiar el texto del botón a "Pausar"
      } else { // Si el temporizador está corriendo, pausarlo
          clearInterval(temporizador); // Detener el temporizador
          corriendo = false; // Actualizar el estado a pausado
          boton.innerHTML = "Reanudar"; // Cambiar el texto del botón a "Reanudar"
      }
  }
  
  function actualizarTemporizador() {
      var minutos = Math.floor(tiempo / 60);
      var segundos = tiempo % 60;
  
      // Agregar un cero delante si los segundos son menores a 10
      if (segundos < 10) {
          segundos = "0" + segundos;
      }
  
      // Actualizar el texto del temporizador
      document.getElementById("tiempo-restante").innerHTML = minutos + ":" + segundos;
  
      // Disminuir el tiempo
      tiempo--;
  
      // Cuando el tiempo llega a cero, detener el temporizador
      if (tiempo < 0) {
          clearInterval(temporizador);
          alert("¡Tiempo terminado!");
      }
  }
  function toggleMenu() {
    var menu = document.querySelector('.botones-dias');
    menu.classList.toggle('active');
  }
  var temporizadorentreejercicios;
  var tiempoLimite = 10 * 60 * 1000; // 8 minutos en milisegundos
  
  function marcarEjercicio(id) {
      clearTimeout(temporizadorentreejercicios); // Reiniciar el temporizadorentreejercicios cada vez que se marque un ejercicio
      var ejercicio = document.getElementById(id);
      if (ejercicio.checked) {
          ejercicio.parentNode.parentNode.classList.add('completado');
      } else {
          ejercicio.parentNode.parentNode.classList.remove('completado');
      }
      temporizadorentreejercicios = setTimeout(function() {
          mostrarAlertaentreejercicio(); // Llamada a la función para mostrar la alerta si pasa el tiempo límite
      }, tiempoLimite);
      verificarDiaCompleto(); // Llamar a la función para verificar si el día está completo
  }
  
  function mostrarAlerta() {
      document.getElementById("overlay").style.display = "block";
  }
  
  function mostrarAlertaentreejercicio() {
    document.getElementById("alertaentreejercicio").style.display = "block";
}
  function cerrarAlerta() {
      document.getElementById("alertaentreejercicio").style.display = "none"; // Ocultar la alerta
  }
  
  function verificarDiaCompleto() {
      var ejerciciosDelDia = document.querySelectorAll('#tabla-lunes .marcado-ejercicio input[type="checkbox"]');
      var todosCompletados = true;
      ejerciciosDelDia.forEach(function(ejercicio) {
          if (!ejercicio.checked) {
              todosCompletados = false;
              return;
          }
      });
      if (todosCompletados) {
          // Mostrar overlay
          document.getElementById("overlay").style.display = "block";
          document.getElementById("overlay").innerHTML = "<p>¡Felicidades!<br> Completaste todos los <br> ejercicios del día.<br> Podés volver a casa feliz.</p>";
          document.getElementById("alertaentreejercicio").style.display = "none"; // Ocultar la alerta
        }
  }
  
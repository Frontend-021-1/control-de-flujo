function jugarCachipun() {
  // Solicitar número de jugadas
  let jugadas = parseInt(prompt('¿Cuántas rondas quieres jugar?'));

  // Validar que jugadas sea un numero valido
  if (isNaN(jugadas) || jugadas <= 0) {
    console.error('Por favor ingresa un número válido de jugadas');
    return;
  }

  // Loop: por cada jugada tenemos que repetir lo mismo
  for (let i = 0; i < jugadas; i++) {
    // Turno del jugador 1
    let jugador1 = prompt(
      'Jugador 1: Elige piedra, papel o tijera'
    ).toLowerCase(); // piedra Piedra PIEDRA PIeDrA

    // Turno del jugador 2
    let jugador2 = prompt(
      'Jugador 2: Elige piedra, papel o tijera'
    ).toLowerCase();

    // Validación de las jugadas (de los 2 jugadores)
    if (jugador1 === '' || jugador2 === '') {
      console.error(
        'Al menos uno de los jugadores ingresó una opción inválida'
      );
    }

    // Lógica del juego
    if (jugador1 === jugador2) {
      console.log('Empate!');
    } else if (
      (jugador1 === 'piedra' && jugador2 === 'tijera') ||
      (jugador1 === 'papel' && jugador2 === 'piedra') ||
      (jugador1 === 'tijera' && jugador2 === 'papel')
    ) {
      console.log('Ganó el jugador 1️⃣');
    } else {
      console.log('Ganó el jugador 2️⃣');
    }
  }

  console.log('Juego terminado');
}

// jugarCachipun();

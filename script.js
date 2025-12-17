// Tengo una llave para abrir la puerta?
let tieneLlave = false;
let puertaAbierta = true;

if (tieneLlave) {
  // Si tengo llave...
  console.log('Abre la puerta');
} else if (puertaAbierta) {
  // Si es que no tengo la llave, pero la puerta está abierta...
  console.log('Entro');
} else {
  // Si es que no tengo llave, y la puerta está cerrada
  console.log('Toca el timbre');
}

// Usando IF Anidado
console.log('IF ANIDADO');
if (tieneLlave) {
  console.log('Entro con mi propia llave');
} else {
  // No tengo llave...
  if (puertaAbierta) {
    console.log('Entro porque la puerta estaba abierta');
  } else {
    // No tengo llave, la puerta está cerrada...
    console.log('Estoy frito, toco el timbre.');
  }
}

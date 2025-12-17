console.log('Semáforo');
let colorSemaforo = 'verde';

if (
  colorSemaforo !== 'verde' &&
  colorSemaforo !== 'amarillo' &&
  colorSemaforo !== 'rojo'
) {
  console.log('Ingrese un color válido de semáforo');
} else if (colorSemaforo === 'verde') {
  console.log('Avanzar');
} else {
  console.log('Detenerse');
}

// =======================

console.log('Par o Impar');
let numero = 4;
if (typeof numero !== 'number') {
  console.log('Ingrese un número válido');
} else if (numero % 2 === 0) {
  console.log(`El número ${numero} es par.`);
} else {
  console.log(`El número ${numero} es impar.`);
}

// =======================
console.log('Calificador de pruebas');
let nota = 3.945;

if (nota >= 6.5) {
  console.log('🏆 Excelente, aprobaste con honores');
} else if (nota >= 4) {
  console.log('👍 Aprobaste');
} else {
  console.log('👎 Reprobaste, sigue estudiando');
}

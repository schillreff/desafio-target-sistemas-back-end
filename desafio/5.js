// String a ser invertida (pode ser alterada ou recebida como entrada)
const originalString = "Uma string de exemplo";

// Função para inverter a string manualmente
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Chamando a função e exibindo o resultado
const reversedString = reverseString(originalString);
console.log(`String original: "${originalString}"`);
console.log(`String invertida: "${reversedString}"`);

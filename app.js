// Funciones para encriptación y desencriptación del texto
const encrypText = (text) => {
  console.log('Texto a encriptar:', text); // Agregado para depuración
  let encryptedText = text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  return encryptedText;
};

const decrypText = (text) => {
  console.log('Texto a desencriptar:', text); // Agregado para depuración
  let decryptedText = text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  console.log('Texto desencriptado:', decryptedText); // Agregado para depuración
  return decryptedText;
};

// Función para detectar si el texto está encriptado
const isEncrypted = (text) => {
  console.log('Texto recibido:', text); // Agregado para depuración
  const encryptionPatterns = ['enter', 'imes', 'ai', 'ober', 'ufat'];
  const cleanedText = text.trim(); // Eliminar espacios al inicio y al final

  // Convertir el texto a minúsculas para la comparación
  const lowerCaseText = cleanedText.toLowerCase();

  // Verificar si alguna de las cadenas de encriptación está presente en el texto en minúsculas
  const encrypted = encryptionPatterns.some((pattern) =>
    lowerCaseText.includes(pattern)
  );
  console.log('¿Está encriptado?', encrypted); // Agregado para depuración
  return encrypted;
};

// Función para copiar texto al portapapeles
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert('Texto copiado al portapapeles');
      // Limpiar textareas
      document.getElementById('inputText').value = '';
    },
    () => {
      alert('Error al copiar el texto');
    }
  );
};

// Manejadores de eventos
document.getElementById('encryptButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  if (isEncrypted(inputText)) {
    const decryptedText = decrypText(inputText);
    document.getElementById('outputText').value = decryptedText;
  } else {
    const encryptedText = encrypText(inputText);
    document.getElementById('outputText').value = encryptedText;
  }
});

document.getElementById('decryptButton').addEventListener('click', () => {
  const outputText = document.getElementById('outputText').value;
  const decryptedText = decrypText(outputText);
  document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyButton').addEventListener('click', () => {
  const outputText = document.getElementById('outputText').value;
  copyToClipboard(outputText);
});

// Manejador de evento para detectar cambios en el campo de entrada
document.getElementById('inputText').addEventListener('input', () => {
document.getElementById('inputText').addEventListener('input', () => {
  const inputText = document.getElementById('inputText').value.trim();
  const decryptButton = document.getElementById('decryptButton');
  const encryptButton = document.getElementById('encryptButton');

  // Verificar si el texto está encriptado
  if (isEncrypted(inputText)) {
    decryptButton.disabled = false;
    encryptButton.disabled = true;
  } else {
    decryptButton.disabled = true;
    encryptButton.disabled = false;
  }
});
});
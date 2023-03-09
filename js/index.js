import calculate from './calculate.js';
import copyToClipboard from './copyToClipboard.js';
import { handleButtonPress, handleClearButton, handleTyping } from './keyHandlers.js';
import themeSwitcher from './themeSwitcher.js';

// Funcionamento dos botões
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
	charKeyBtn.addEventListener('click', handleButtonPress);
});

// Funcionamento do botão Clear e foco na área de input
document.getElementById('clear').addEventListener('click', handleClearButton);
// Recursos de teclado (teclas especiais)
document.getElementById('input').addEventListener('keydown', handleTyping);
// Funcionamento do botãp igual
document.getElementById('equal').addEventListener('click', calculate);
// Botão de copiar para área de transferência
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard);
// Troca de tema
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher);

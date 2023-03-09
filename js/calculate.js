// Funções de cálculo
export default function calculate() {
	const resultInput = document.querySelector('#result');
	// Error warning
	resultInput.value = 'Error 🥵';
	resultInput.classList.add('error');
	// Result
	const result = eval(input.value);
	resultInput.value = result;
	resultInput.classList.remove('error');
}

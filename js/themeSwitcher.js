export default function () {
	const main = document.querySelector('main');
	const root = document.querySelector(':root');

	if (main.dataset.theme === 'dark') {
		root.style.setProperty('--bg-color', '#f1f5f9');
		root.style.setProperty('--border-color', '#aaa');
		root.style.setProperty('--font-color', '#44475a');
		root.style.setProperty('--primary-color', '#6272a4');
		main.dataset.theme = 'light';
	} else {
		root.style.setProperty('--bg-color', '#282a36');
		root.style.setProperty('--border-color', '#666');
		root.style.setProperty('--font-color', '#ff79c6');
		root.style.setProperty('--primary-color', '#bd93f9');
		main.dataset.theme = 'dark';
	}
}

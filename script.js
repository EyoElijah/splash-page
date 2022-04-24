const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		logoSpan.forEach((span, index) => {
			setTimeout(() => {
				span.classList.add('active');
			}, (index + 1) * 400);
		});
		setTimeout(() => {
			logoSpan.forEach((span, index) => {
				setTimeout(() => {
					span.classList.remove('active');
					span.classList.add('fade');
				}, (index + 1) * 50);
			});
		}, 2000);

		setTimeout(() => {
			intro.style.top = '-100vh';
		}, 2300);
	});
});

const menu_toggler = document.querySelector('.menu-toggler');

menu_toggler.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
	menu_toggler.classList.toggle('active');
});

const nav_links = document.querySelectorAll('.nav-link');
nav_links.forEach((link, index) => {
	link.style.setProperty('--delay', `${(index * .4 + 2)}s`);
});
const menu_toggler = document.querySelector('.menu-toggler');

menu_toggler.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
	menu_toggler.classList.toggle('active');
});
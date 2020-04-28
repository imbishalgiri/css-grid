(() =>  {

 const sidebar = document.querySelector('.sidebar');
 const button = document.querySelector('.sidebar__btn');
 const navItems = document.querySelector('.sidebar__nav');
 const container = document.querySelector('.sidebar__btn--container');
 const sidebarOverlay = document.querySelector('.sidebar__overlay');

 const btnClicked = () => {
 	console.log('done');
	sidebar.classList.toggle('sidebar__new');
	button.classList.toggle('sidebar__close-btn');
	container.classList.toggle('sidebar__close-btn--container');
	navItems.classList.toggle('sidebar__nav-display');
	sidebarOverlay.classList.toggle('sidebar__overlay--black');
	
 }



 container.addEventListener('click',btnClicked);


})();

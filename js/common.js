//переменные, что используются многоразово
let unlock = true;
//burger========================================================================================================================================================
/*let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}*/

//jquery burger
$(document).ready(function () {
	$('.menu__icon, .menu__link').click(function (event) {
		$('body').toggleClass('lock')
		$('.icon-menu, .menu__body').toggleClass('active')
		$('.welcome__link, .item-row__icon').toggleClass('z-index__hiden')
	})
});
//табы========================================================================================================================================================
var tabNavs = document.querySelectorAll(".tabs__item");
var tabPanes = document.querySelectorAll(".tabs__pane");
for (var i = 0; i < tabNavs.length; i++) {
	tabNavs[i].addEventListener("click", function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute("data-tab");
		for (var j = 0; j < tabNavs.length; j++) {
			var contentAttr = tabPanes[j].getAttribute("data-tab-content");
			if (activeTabAttr === contentAttr) {
				tabNavs[j].classList.add("active");
				tabPanes[j].classList.add("active");
			} else {
				tabNavs[j].classList.remove("active");
				tabPanes[j].classList.remove("active");
			}
		};
	});
}
//якоря========================================================================================================================================================
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
// блоку присвоить id, ссылке href="#название того куда перекинет"
//отслеживание скролла========================================================================================================================================================

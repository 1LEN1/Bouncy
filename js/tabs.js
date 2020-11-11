var tabNavs2 = document.querySelectorAll(".tabs-two__item");
var tabPanes2 = document.querySelectorAll(".tabs-two__pane-two");
for (var i = 0; i < tabNavs2.length; i++) {
	tabNavs2[i].addEventListener("click", function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute("data-tab");
		for (var j = 0; j < tabNavs2.length; j++) {
			var contentAttr = tabPanes2[j].getAttribute("data-tab-content");
			if (activeTabAttr === contentAttr) {
				tabNavs2[j].classList.add("active");
				tabPanes2[j].classList.add("active");
			} else {
				tabNavs2[j].classList.remove("active");
				tabPanes2[j].classList.remove("active");
			}
		};
	});
}
var tabNavs3 = document.querySelectorAll(".ex__item");
var tabPanes3 = document.querySelectorAll(".row-port");
for (var i = 0; i < tabNavs3.length; i++) {
	tabNavs3[i].addEventListener("click", function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute("data-tab");
		for (var j = 0; j < tabNavs3.length; j++) {
			var contentAttr = tabPanes3[j].getAttribute("data-tab-content");
			if (activeTabAttr === contentAttr) {
				tabNavs3[j].classList.add("active");
				tabPanes3[j].classList.add("active");
			} else {
				tabNavs3[j].classList.remove("active");
				tabPanes3[j].classList.remove("active");
			}
		};
	});
}
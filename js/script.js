const navigation = document.querySelector(".js-navigation");
const burgerButton = document.querySelector(".js-burger-button");
const allNavigationItems = document.querySelectorAll(".js-navigation__item");
const sections = document.querySelectorAll(".section");
const arrowDown = document.querySelector(".js-arrow-down");
const sectionAboutBaby = document.querySelector(".js-section-about-baby");
const forms = document.querySelectorAll(".js-form");

const toggleNavigation = () => {
	navigation.classList.toggle("navigation--active");

	allNavigationItems.forEach((item) => {
		item.addEventListener("click", () => {
			navigation.classList.remove("navigation--active");
		});
	});
};

const showSection = () => {
	allNavigationItems.forEach((item, index) => {
		item.addEventListener("click", () => {
			sections.forEach((section, sectionIndex) => {
				section.classList.remove("section--active");
				if (index === sectionIndex) {
					section.classList.add("section--active");
				}
			});
		});
	});
};

const arrowDownAction = () => {
	sectionAboutBaby.classList.add("section--active");
};

const blockSendForm = () => {
	forms.forEach((form) => {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
		});
	});
};

burgerButton.addEventListener("click", toggleNavigation);
showSection();
arrowDown.addEventListener("click", arrowDownAction);
blockSendForm();

const navigation = document.querySelector(".js-navigation");
const burgerButton = document.querySelector(".js-burger-button");
const allNavigationItems = document.querySelectorAll(".js-navigation__item");
const sections = document.querySelectorAll(".section");
const arrowDown = document.querySelector(".js-arrow-down");
const allArrowsLeft = document.querySelectorAll(".js-arrow-left");
const allArrowsRight = document.querySelectorAll(".js-arrow-right");
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

const showSelectedSection = () => {
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

const showNextSection = () => {
	allArrowsRight.forEach((arrowRight, index) => {
		arrowRight.addEventListener("click", () => {
			sections.forEach((section, sectionIndex) => {
				section.classList.remove("section--active");
				if (index + 2 === sectionIndex) {
					section.classList.add("section--active");
				}
			});
		});
	});
};

const showPreviousSection = () => {
	allArrowsLeft.forEach((arrowLeft, index) => {
		arrowLeft.addEventListener("click", () => {
			sections.forEach((section, sectionIndex) => {
				section.classList.remove("section--active");
				if (index === sectionIndex) {
					section.classList.add("section--active");
				}
			});
		});
	});
};
const showActiveSection = () => {
	showSelectedSection();
	showNextSection();
	showPreviousSection();
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
showActiveSection();
arrowDown.addEventListener("click", arrowDownAction);
blockSendForm();

const navigation = document.querySelector(".js-navigation");
const burgerButton = document.querySelector(".js-burger-button");
const allNavigationItems = document.querySelectorAll(".js-navigation__item");
const sections = document.querySelectorAll(".section");


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

burgerButton.addEventListener("click", toggleNavigation);
showSection();
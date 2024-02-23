const navigation = document.querySelector(".js-navigation");
const burgerButton = document.querySelector(".js-burger-button");
const allNavigationItems = document.querySelectorAll(".js-navigation__item");

const toggleNavigation = () => {
	navigation.classList.toggle("navigation--active");

	allNavigationItems.forEach((item) => {
		item.addEventListener("click", () => {
			navigation.classList.remove("navigation--active");
		});
	});
};

burgerButton.addEventListener("click", toggleNavigation);

const navigation = document.querySelector(".js-navigation");
const burgerButton = document.querySelector(".js-burger-button");

const toggleNavigation = () => {
	navigation.classList.toggle("navigation--active");
};

burgerButton.addEventListener("click", toggleNavigation);

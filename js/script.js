const navigation = document.querySelector(".js-navigation");
const burgerButton = document.querySelector(".js-burger-button");
const allNavigationItems = document.querySelectorAll(".js-navigation__item");
const sections = document.querySelectorAll(".section");
const arrowDown = document.querySelector(".js-arrow-down");
const allArrowsLeft = document.querySelectorAll(".js-arrow-left");
const allArrowsRight = document.querySelectorAll(".js-arrow-right");
const sectionAboutBaby = document.querySelector(".js-section-about-baby");
const forms = document.querySelectorAll(".js-form");
const buttonSaveAboutBaby = document.querySelector(
	".js-form__button-save-about-baby"
);
const allRadioInputs = document.querySelectorAll(".js-form__input--radio");
const allInputsAboutBaby = document.querySelectorAll(
	".js-form__input-about-baby"
);
const dataAboutBabySaved = document.querySelector(".js-data-saved-about-baby");
const labelsTextRadio = document.querySelector(".js-form__labelText--radio");

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

const saveDataAboutBaby = () => {
	const isAnyRadioChecked = Array.from(allRadioInputs).some(
		(radioInput) => radioInput.checked
	);

	const areEveryInputFilled = Array.from(allInputsAboutBaby).every(
		(inputAboutBaby) => inputAboutBaby.value.trim() !== ""
	);

	if (isAnyRadioChecked === true && areEveryInputFilled === true) {
		dataAboutBabySaved.innerText = "Dane zostały zapisane";
	} else if (isAnyRadioChecked === false) {
		labelsTextRadio.classList.add("unfilled");
	}
};

const clearErrors = () => {
	labelsTextRadio.classList.remove("unfilled");
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
buttonSaveAboutBaby.addEventListener("click", saveDataAboutBaby);
allRadioInputs.forEach((radioInput) => {
	radioInput.addEventListener("change", clearErrors);
});

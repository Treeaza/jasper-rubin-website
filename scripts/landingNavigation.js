const HOME = document.querySelector("#home");
const CREATIVE = document.querySelector("#creative");
const TECHNICAL = document.querySelector("#technical");

const HOME_LINKS = document.querySelectorAll("a[href='#home']");
const CREATIVE_LINKS = document.querySelectorAll("a[href='#creative']");
const TECHNICAL_LINKS = document.querySelectorAll("a[href='#technical']");

function swapToScreen(screen) {
	console.log(screen);

	switch (screen) {
		case "home":
			CREATIVE.style.transform = "initial";
			TECHNICAL.style.transform = "initial";
			HOME.style.transform = "initial";
			break;
		case "creative":
			CREATIVE.style.transform = "translateX(100%)";
			TECHNICAL.style.transform = "initial";
			HOME.style.transform = "initial";
			break;
		case "technical":
			CREATIVE.style.transform = "initial";
			TECHNICAL.style.transform = "translateX(-100%)";
			HOME.style.transform = "initial";
			break;
	}

	return false;
}

HOME_LINKS.forEach(element => {
	element.addEventListener("click", function (event) {
		event.preventDefault();
		return swapToScreen("home");
	}, false);
});

CREATIVE_LINKS.forEach(element => {
	element.addEventListener("click", function (event) {
		event.preventDefault();
		return swapToScreen("creative");
	}, false);
});

TECHNICAL_LINKS.forEach(element => {
	element.addEventListener("click", function (event) {
		event.preventDefault();
		return swapToScreen("technical");
	}, false);
});
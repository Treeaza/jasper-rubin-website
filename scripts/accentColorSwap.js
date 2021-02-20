const ACCENT_ITEMS = document.querySelectorAll(".accent-background-color");
const LOGO = document.querySelector("#logo");

const COLORS = ["darkorange", "green", "blanchedalmond", "darkcyan", "crimson", "indigo", "maroon"];

const THRESHOLD = 3;

var count = 0;
var ticker;

// start counter when mouse enters logo
function onMouseEnter() {
	console.log(ACCENT_ITEMS);
	ticker = setInterval(function () {
		if (++count > THRESHOLD) {
			// if mouse in logo for more than THRESHOLD seconds, randomize color
			LOGO.style.cursor = "none";
			count = 0;
			let newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
			ACCENT_ITEMS.forEach(i => {
				i.style.backgroundColor = newColor;
			});
		}
	}, 1000);
}

// remove interval when mouse leaves
function onMouseLeave() {
	clearInterval(ticker);
	count = 0;
	ACCENT_ITEMS.forEach(i => {
		i.style = undefined;
	});
}

// set up evemt listeners
LOGO.addEventListener("mouseenter", onMouseEnter, false);
LOGO.addEventListener("mouseleave", onMouseLeave, false);
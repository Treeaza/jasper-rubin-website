const CREATIVE_BUTTON = document.querySelector("#creative-button");
const TECHNICAL_BUTTON = document.querySelector("#technical-button");
const CREATIVE_PANEL = document.querySelector("#creative");
const TECHNICAL_PANEL = document.querySelector("#technical");

var open_c = false;
var open_t = false;

function onButtonClick(side, event) {
	console.log("button pressed");
	if (side == "creative") {
		open_c = !open_c;
		open_t = false;
	} else if (side == "technical") {
		open_t = !open_t;
		open_c = false;
	}
	TECHNICAL_PANEL.style.right = open_t ? "0" : "-500px";
	CREATIVE_PANEL.style.left = open_c ? "0" : "-500px";
}

console.log(CREATIVE_PANEL);

CREATIVE_BUTTON.addEventListener("click", (event) => { onButtonClick("creative", event); }, false);
TECHNICAL_BUTTON.addEventListener("click", (event) => { onButtonClick("technical", event); }, false);
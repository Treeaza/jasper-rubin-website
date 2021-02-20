const ITEMS = document.querySelectorAll(".back-button");

function onMouseClick(event) {
	window.history.back();
}

ITEMS.forEach(element => {
	element.addEventListener("click", onMouseClick, false);
});
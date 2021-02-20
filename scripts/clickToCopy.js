const ITEMS = document.querySelectorAll(".click-copy");

function onMouseClick(event) {
	navigator.clipboard.writeText(event.target.textContent);
}

ITEMS.forEach(element => {
	element.addEventListener("click", onMouseClick, false);
});
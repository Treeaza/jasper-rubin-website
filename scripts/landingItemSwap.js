const CREATIVE_ITEMS = document.querySelectorAll("div[class='creative-item']");
const CREATIVE_TITLES = document.querySelectorAll("li[class='creative-title']");

const TECHNICAL_ITEMS = document.querySelectorAll("div[class='technical-item']");
const TECHNICAL_TITLES = document.querySelectorAll("li[class='technical-title']");

function swapToItem(field, item) {
	console.log(field + ", " + item)

	if (field == "creative") {
		CREATIVE_ITEMS.forEach(element => {
			id = element.id.split("-");
			if (id[id.length - 1] == item) {
				element.style.display = "initial";
			} else {
				element.style.display = "none";
			}
		});
	} else if (field == "technical") {
		TECHNICAL_ITEMS.forEach(element => {
			id = element.id.split("-");
			if (id[id.length - 1] == item) {
				element.style.display = "initial";
			} else {
				element.style.display = "none";
			}
		});
	}

	return false;
}

CREATIVE_TITLES.forEach(element => {
	element.addEventListener("click", function (event) {
		event.preventDefault();
		title = element.id.split("-");
		return swapToItem("creative", title[title.length - 1]);
	}, false);
});

TECHNICAL_TITLES.forEach(element => {
	element.addEventListener("click", function (event) {
		event.preventDefault();
		title = element.id.split("-");
		return swapToItem("technical", title[title.length - 1]);
	}, false);
});
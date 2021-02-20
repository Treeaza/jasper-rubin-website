class Slideshow {
	constructor(length, images, dots) {
		this.length = length;
		this.images = images;
		this.dots = dots;
		this.position = 0;

		this.adjust = function (increment) {
			this.position += increment;

			//Normalize
			while (this.position < 0) {
				this.position += this.length;
			}

			while (this.position >= this.length) {
				this.position -= this.length;
			}

			//Actually update
			for (let i = 0; i < this.length; i++) {
				this.images[i].style.display = i == this.position ? "initial" : "none";
			}
		};
	}
}

const SLIDESHOW_PARENTS = document.querySelectorAll("div[class='slideshow']");

var slideshows = [];

function changeSlideshow(index, increment) {
	slideshows[index].adjust(increment);
}

function Dot() {
	let dot = document.createElement("span");
	dot.classList.add("dot");
	return dot;
}

var index = 0;
SLIDESHOW_PARENTS.forEach(
	element => {
		// Get all images in slideshow and push into slideshow array
		let images = element.querySelectorAll("img[class='slideshow-content']");
		let dots = element.querySelector("div[class='slideshow-dots']");
		slideshows.push(new Slideshow(images.length, images, dots));

		// Add event listeners to button controls
		element.querySelector("button[class='slideshow-left']").addEventListener("click", function (event) {
			changeSlideshow(index, -1);
		});
		element.querySelector("button[class='slideshow-right']").addEventListener("click", function (event) {
			changeSlideshow(index, 1);
		});

		// Set up index dots
		for (let i = 0; i < images.length; i++) {
			dots.appendChild(Dot());
		}

		// Load first image
		changeSlideshow(index, 0);
	}
);

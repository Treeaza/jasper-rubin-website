class Slideshow {
	constructor(length, images, numberIndicator) {
		this.length = length;
		this.images = images;
		this.numberIndicator = numberIndicator;
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

			this.numberIndicator.innerHTML = (this.position + 1) + "/" + this.length;
		};
	}
}

const SLIDESHOW_PARENTS = document.querySelectorAll("div[class='slideshow']");

var slideshows = [];

function changeSlideshow(index, increment) {
	slideshows[index].adjust(increment);
}

var index = 0;
SLIDESHOW_PARENTS.forEach(
	element => {
		// Get all images in slideshow and push into slideshow array
		let images = element.querySelectorAll("img[class='slideshow-content']");
		let ind = element.querySelector("span[class='slideshow-number']");
		slideshows.push(new Slideshow(images.length, images, ind));

		// Add event listeners to button controls
		element.querySelector("button[class='slideshow-left']").addEventListener("click", function (event) {
			changeSlideshow(index, -1);
		});
		element.querySelector("button[class='slideshow-right']").addEventListener("click", function (event) {
			changeSlideshow(index, 1);
		});

		// Load first image
		changeSlideshow(index, 0);
	}
);

var opacity = 0;
var intervalID = 0;

function fadeOut() {
	intervalID = setInterval(hide, 40);
}

function fadeIn() {
	intervalID = setInterval(show, 40);
}

function show() {
	var div1 = document.getElementById("feedbackFormModal");
	opacity = Number(window.getComputedStyle(div1).getPropertyValue("opacity"));
	if (opacity < 1) {
		opacity = opacity + 0.1;
		div1.style.opacity = opacity;
		console.log(opacity);
	} else {
		clearInterval(intervalID);
	}
}

function hide() {
	var div2 = document.getElementById("feedbackFormModal");
	opacity = Number(window.getComputedStyle(div2).getPropertyValue("opacity"));
	if (opacity > 0) {
		opacity = opacity - 0.1;
		div2.style.opacity = opacity;
		console.log(opacity);
	} else {
		clearInterval(intervalID);
	}
}

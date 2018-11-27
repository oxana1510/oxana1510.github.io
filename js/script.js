menu.onclick = function myFunction() {
	var x = document.getElementById('navMenu');

	if (x.className === "nav-menu") {
		x.className += " responsive";
	} else {
		x.className = "nav-menu";
	}
}
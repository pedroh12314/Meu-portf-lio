
function openNav() {

	var nav =  document.getElementById("navigation");
	var profile =  document.getElementById("profile");

	if (nav.className === "navigation") {
		nav.className += " menujs";
		document.getElementById("threeline-icon").innerHTML = "&Cross;";

	} else {
		nav.className = "navigation";
		document.getElementById("threeline-icon").innerHTML = "&#9776;";

	}


	
}
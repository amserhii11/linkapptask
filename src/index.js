window.addEventListener("load", () => onload());

function onload() {
	const button = document.getElementById("button");
	const menu = document.getElementsByClassName("dropdown")[0];

	button.onclick = function() {
		if (menu.className === "dropdown open") {
			menu.className = "dropdown";
			button.className = "category-input-header";
		} else {
			menu.className += " open";
			button.className += " open";
		}
	};
}

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const LOOP_NUM = 5

for (i=1; i<=LOOP_NUM; i++){

	newImage = document.createElement('img');
	newImage.setAttribute('src', "./images/pic" + i + ".jpg");
	thumbBar.appendChild(newImage);
	
	newImage.addEventListener("click", switch_displayImg)

}

function switch_displayImg(event){

	attribute_str = event.target.getAttribute("src");	
	displayedImage.setAttribute("src", attribute_str);


}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", switch_DarkLight);

function switch_DarkLight(event_test) {

	btn_state =	event_test.target.getAttribute("class");
	if (btn_state == "dark") {

		event_test.target.setAttribute("class", "light");
		event_test.target.textContent = "Lighten";
		overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

	} else {
	
		event_test.target.setAttribute("class", "dark");
		event_test.target.textContent = "Darken";
		overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

	}

}


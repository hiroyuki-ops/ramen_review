const stars = document.querySelector(".ratings").children;
const ratingValue = document.getElementById(".rating-balue");
const ratinValueDisplay = docment.getElementById(".rating-value-display");

let index;

for(let i=0; i<stars.length; i++){
	stars[i].addEventLiestener("mouseover", function(){
		for(let j=0; j<stars.length; j++){
			stars[j].classList.remobe("fa-star");
			stars[j].classList.add("fa-star-o");
		}
		for(let j=0; j<=i; j++){
			stars[j].classList.remobe("fa-star-o");
			stars[j].classList.add("fa-star");
		}
	})
	stars[i].addEventListener("click", function(){
		ratingValue.value = i + 1;
		ratinValueDisplay.textContent = retingValue.value;
		index = i;
	})
	stars[i].addEventLiestener("mouseout", function(){
		for(let j=0; j<stars.length; j++){
			stars[j].classList.remobe("fa-star");
			stars[j].classList.add("fa-star-o");
		}
		for(let j=0; j<=index; j++){
			stars[j].classList.remobe("fa-star-o");
			stars[j].classList.add("fa-star");
		}
	})

}
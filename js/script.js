$(document).ready(function(){
	$(function () {
		$("#slider-range").slider({
			range: true,
			orientation: "horizontal",
			min: 0,
			max: 300,
			values: [32, 186],
			step: 1,

			slide: function (event, ui) {
				if (ui.values[0] == ui.values[1]) {
					return false;
				}

				$("#min_price").html(ui.values[0]);
				$("#max_price").html(ui.values[1]);
			}
		});

	});
});

$(document).ready(function(){
	$(function () {
		$("#slider-range2").slider({
			range: true,
			orientation: "horizontal",
			min: 0,
			max: 20,
			values: [1.5, 17.5],
			step: 0.1,

			slide: function (event, ui) {
				if (ui.values[0] == ui.values[1]) {
					return false;
				}

				$("#min_price2").html(ui.values[0]);
				$("#max_price2").html(ui.values[1]);
			}
		});

	});
});

let btnElemLeft = document.querySelector(".left-arrow-btn");
let btnElemRight = document.querySelector(".right-arrow-btn");
let firstVideo = document.querySelector(".video");
let secondVideo = document.querySelector(".video2");


btnElemRight.addEventListener("click", () => {
	secondVideo.style.display = secondVideo.style.display === 'block' ? 'none' : 'block';
	firstVideo.style.display = firstVideo.style.display === 'none' ? 'block' : 'none';

})

btnElemLeft.addEventListener("click", () => {
	firstVideo.style.display = firstVideo.style.display === 'none' ? 'block' : 'none';
	secondVideo.style.display = secondVideo.style.display === 'block' ? 'none' : 'block';
})



let dineIn = document.getElementById("dine-in");
let takeAway = document.getElementById("take-away");
let formNomorMeja = document.querySelector(".formNomorMeja");
let formNoHP = document.querySelector(".formNoHP");
let formAlamat = document.querySelector(".formAlamat");

document.querySelector("#disabledSelect").onchange = (e) => {
	if(e.target.value === 'take-away'){
		// aksi bila take-away
        formNomorMeja.className = "item-hide";
        formNoHP.className = "item-visible";
        formAlamat.className = "item-visible";
	} else {
		// aksi bila dine-in
        formNomorMeja.className = "item-visible";
        formNoHP.className = "item-hide";
        formAlamat.className = "item-hide";
	}
}
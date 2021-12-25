let dineIn = document.getElementById("dine-in");
let takeAway = document.getElementById("take-away");
let formNomorMeja = document.querySelector(".formNomorMeja");
let formNoHP = document.querySelector(".formNoHP");
let formAlamat = document.querySelector(".formAlamat");

let selectPemesanan = document.querySelector("#disabledSelect")
function handlePemesanan(){
	if(selectPemesanan.value === 'take-away'){
		formNomorMeja.className = "item-hide";
        formNoHP.className = "item-visible my-3";
        formAlamat.className = "item-visible";
	} else {
		formNomorMeja.className = "item-visible";
        formNoHP.className = "item-hide";
        formAlamat.className = "item-hide";
	}
}

handlePemesanan()

selectPemesanan.onchange = (e) => {
	handlePemesanan()
}
function jumlah() {
	let angka = document.querySelectorAll('input');
	let i1= angka[0].value ; //angka pertama
	let i2= angka[1].value ; //angka kedua
	angka[2].value= parseInt(i1) + parseInt(i2);
}

function kurang() {
	let angka = document.querySelectorAll('input');
	let i1= angka[0].value ; //angka pertama
	let i2= angka[1].value ; //angka kedua
	angka[2].value= parseInt(i1) - parseInt(i2);
}

function kali() {
	let angka = document.querySelectorAll('input');
	let i1= angka[0].value ; //angka pertama
	let i2= angka[1].value ; //angka kedua
	angka[2].value= parseInt(i1) * parseInt(i2);
}

function bagi() {
	let angka = document.querySelectorAll('input');
	let i1= angka[0].value ; //angka pertama
	let i2= angka[1].value ; //angka kedua
	angka[2].value= parseInt(i1) / parseInt(i2);
}

let tombol = document.querySelectorAll('button');
tombol[0].addEventListener('click', jumlah);
tombol[1].addEventListener('click', kurang);
tombol[2].addEventListener('click', kali);
tombol[3].addEventListener('click', bagi);
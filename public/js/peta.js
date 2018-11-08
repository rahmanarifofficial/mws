var mymap = L.map('mapid').setView([-7.949574, 112.617680], 15);

var places = [
	{"lokasi": [-7.946437, 112.617530], "sponsor" : "Toko Serbaguna"},
	{"lokasi": [-7.948519, 112.616515], "sponsor" : "Toko Swalayan"},
	{"lokasi": [-7.947329, 112.619594], "sponsor" : "Toko Ikan"},
	{"lokasi": [-7.945724, 112.616064], "sponsor" : "Pasar Tradisional"},
	{"lokasi": [-7.944119, 112.615292], "sponsor" : "Pasar Modern"}
];

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 20,
	id: 'mapbox.streets',
	accessToken:
	'pk.eyJ1IjoicmFobWFuYXJpZm9mZmljaWFsIiwiYSI6ImNqbzVldzVudDA4NnQzcWs4M3lyNHFzbmwifQ._dq2Q9pWDjeSDEbL0GI9bw'
}).addTo(mymap);

//marker
for (var p of places) {
	 var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}

var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("Lokasi yang dipilih: " + e.latlng.toString())
		.openOn(mymap);
}
mymap.on('click', onMapClick);

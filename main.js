let latitude = 20.78685422
let longitude = 80.36423296

//initializing mapbox
mapboxgl.accessToken = "pk.eyJ1IjoibG93ZW5lcmd5IiwiYSI6ImNrejR2bWdyNTBrcGUyb3R2ZDhwaXg5cXEifQ.2_62iGSwzz-D1mmO-xcedw";

var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
})
var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#gateway")
var img3 = document.querySelector("#gate")
var img4 = document.querySelector("#lotus")
var img5 = document.querySelector("#victoria")

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([72.83452, 18.92289]) //22.79898806430237, 88.37045920567964
.addTo(map);

var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.16253, 29.42099])
.addTo(map);

var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.25984, 28.55695])
.addTo(map);

var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([88.37045, 22.79898])
.addTo(map);

map.addControl(
    new mapboxgl.GeolocateControl({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)
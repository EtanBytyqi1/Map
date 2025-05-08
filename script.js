// var map = L.map('map').setView([23.89637106924762, -102.77180375349653], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var marker = L.marker([23.89637106924762, -102.77180375349653]).addTo(map); //metoda e vjeter qysh e shtojshum ni pik

// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);


// var greenIcon = L.icon({
//     iconUrl: 'leaf-green.png',
//     shadowUrl: 'leaf-shadow.png',

//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// L.marker([42.6583829017232, 21.20167441043654]).addTo(map)
//     .bindPopup('Germia')
//     .openPopup();


//     L.marker([42.53055753326615, 21.62433329807007]).addTo(map)
//     .bindPopup('Kamenica')
//     .openPopup();
//     21.305705527494155

//     L.marker([42.353899085746065, 21.305705527494155]).addTo(map)
//     .bindPopup('Sllatina')
//     .openPopup();

//     var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

// var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

// var map = L.map('map', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [osm, cities]
// });




// var baseMaps = {
//     "OpenStreetMap": osm,
//     "OpenStreetMap.HOT": osmHOT
// };

// var overlayMaps = {
//     "Cities": cities
// };






// var baseMaps = {
//     "OpenStreetMap": osm,
//     "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
// };




// var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
//     rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
    
// var parks = L.layerGroup([crownHill, rubyHill]);
// var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
// });

// layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
// layerControl.addOverlay(parks, "Parks");






var littleton = L.marker([42.675660, 21.210061]).bindPopup('Germia'),
    denver    = L.marker([42.661789, 21.169164]).bindPopup(''),
    aurora    = L.marker([42.663355, 21.162868]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([42.667753, 21.150870]).bindPopup('This is Golden, CO.');






    var cities = L.layerGroup([littleton, denver, aurora, golden]);







    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    });
    
    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});
    
    var map = L.map('map', {
        center: [42.631539, 20.717846],
        zoom: 10,
        layers: [osm, cities]
    });



    var baseMaps = {
        "OpenStreetMap": osm,
        "OpenStreetMap.HOT": osmHOT
    };
    
    var overlayMaps = {
        "Cities": cities
    };


    var baseMaps = {
        "OpenStreetMap": osm,
        "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
    };



    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

    var baseMaps = {
        "OpenStreetMap": osm,
        "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
    };



    var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
    rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");























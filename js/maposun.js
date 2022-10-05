
 // Initialise leaflet map
     var map = L.map('map').setView([7.43, 4.42], 6);



// Add osm tile layer to map
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


// Add Google streets layer to map
var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


// Add Google hybrid layer to map
var googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


// Add Google satellite layer to map
var googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})//.addTo(map);


//Add Google terrain layer to map
var googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})//.addTo(map);

// Add TopoMap tile layer to map
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
})//.addTo(map);

//var marker = L.marker([7.43, 4.42]).addTo(map);

// Add point layer style
// var healthstyle = {
//     radius: 6,
//     fillColor: "red",
//     //color: "#c71b82",
//     weight: 1.5,
// }

var marketstyle = {
    radius: 6,
    fillColor: "#9f1d6b",
    //color: "#c71b82",
    weight: 1.5,
}

var osunstyle = {
    //color: "blue",
    opacity: 0.8,
    weight: 2,
}

var parkstyle = {
    radius: 6,
    fillColor: "orange",
    color: "orange",
    weight: 1.5,
}

var communitiestyle = {
    radius: 6,
    fillColor: "red",
    color: "red",
    weight: 1.5,
}


var pryschstyle = {
    radius: 6,
    fillColor: "black",
    //color: "#c71b82",
    weight: 1.5,
}

var secschstyle = {
    radius: 6,
    fillColor: "green",
    //color: "#c71b82",
    weight: 1.5,
}





// Add Geojson Layers
//var healthlayer = L.geoJson(healthfacilities).addTo(map)

var osunlayer = L.geoJson(osunstate, {
    style:osunstyle,
     onEachFeature:function (feature, layer) {

        // area= turf.area(feature)
        // console.log(area)

        area = (turf.area(feature)/1000000).toFixed(2)
        //console.log(area)
        center_lng = turf.center(feature).geometry.coordinates[0].toFixed(2)
        center_lat = turf.center(feature).geometry.coordinates[1].toFixed(2)

        //console.log(center)

        label= `Name: ${feature.properties.ADM2_NAME}<br>`
        label+=`Area: ${area}<br>`
        label+=`Center:Lng: ${center_lng} , Lat: ${center_lat} <br>`

        layer.bindPopup(label)

        // label=''
        //layer.bindPopup(feature.properties.ADM1_NAME)
    }
}).addTo(map)
//         layer.bindPopup(feature.properties.ADM2_NAME)
//     } 
// }).addTo(map)


var communitieslayer = L.geoJson(communities,{
    pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng,communitiestyle)
},

onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.name)
}
}).addTo(map)



// var healthlayer = L.geoJson(healthfacilities,{
//     pointToLayer: function(feature, latlng) {
//     return L.circleMarker(latlng,healthstyle)
// },

// onEachFeature:function (feature, layer) {
//         layer.bindPopup(feature.properties.FullName)
// }
// }).addTo(map)




//var marketslayer = L.geoJson(markets).addTo(map)

var marketslayer = L.geoJson(markets,{
    pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng,marketstyle)
},

onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.FullName)
}
}).addTo(map)



//var parkslayer = L.geoJson(parks).addTo(map)

var parkslayer = L.geoJson(parks,{
    pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng,parkstyle)
},

onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.FullName)
}
}).addTo(map)


//var osunlayer = L.geoJson(osunstate).addTo(map)



//var pryschlayer = L.geoJson(pryschool).addTo(map)

var pryschlayer = L.geoJson(pryschool,{
    pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng,pryschstyle)
},

onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.FullName)
}
}).addTo(map)



//var secschlayer = L.geoJson(secschool).addTo(map)

var secschlayer = L.geoJson(secschool,{
    pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng,secschstyle)
},

onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.FullName)
}
}).addTo(map)






// Basemaps
var baseLayers = {
    "OpenStreetMap": osm,
    "Google Street": googleStreets,
    "Google Hybrid": googleHybrid,
    "Google satelite": googleSat,
    "Google Terrain": googleTerrain,
    "OpenTopoMap": OpenTopoMap,
};


// Layers
var overlays = {
    //"Marker": marker,
    // "Health Faciities": healthlayer,
    "Markets": marketslayer,
    "Parks": parkslayer,
    "Osun State": osunlayer,
    "Primary Schools": pryschlayer,
    "Secondary Schools": secschlayer,
    "Communities": communitieslayer,

};


// Add Layer control to map
L.control.layers(baseLayers, overlays, {collapsed:true}).addTo(map);

// Add leaflet browser print control to map
L.control.browserPrint({position: 'topleft'}).addTo(map);

// Mouse move coordinates
map.on("mousemove",function(e) {
    // console.log(e)
    $("#coordinate").html(`Lat:${e.latlng.lat.toFixed(2)}, Lng:${e.latlng.lng.toFixed(2)}`)
})



// Add Scale to map 
L.control.scale({position:"bottomright"}).addTo(map)







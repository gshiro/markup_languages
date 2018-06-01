var map;
map = L.map('map').
setView([43.327441, -1.970837],
14);

//To go to  a specific location writing the lat and lng
   function zoomTo() {
      var lat;
      var lng;
      lat=prompt("Ingrese Latitud");
      lng=prompt("Ingrese Longitud");
       map.panTo(new L.LatLng(lat, lng));
   }
// The layer we use
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
   maxZoom: 20
}).addTo(map);

L.control.scale().addTo(map);
//function toggle Map
function togglemap() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('restaurant').style.display = 'none';
    document.getElementById('monument').style.display = 'none';
    document.getElementById('museum').style.display = 'none';
    document.getElementById('mapspace').style.display = 'block';
    document.getElementById('map').style.display = 'block';
}
function togglerest() {
    document.getElementById('monument').style.display = 'none';
    document.getElementById('museum').style.display = 'none';
    document.getElementById('mapspace').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('restaurant').style.display = 'block';

  }
function togglemus() {
      document.getElementById('restaurant').style.display = 'none';
      document.getElementById('monument').style.display = 'none';
      document.getElementById('mapspace').style.display = 'none';
      document.getElementById('map').style.display = 'none';
      document.getElementById('homepage').style.display = 'none';
      document.getElementById('museum').style.display = 'block';
}
function togglemon() {
      document.getElementById('restaurant').style.display = 'none';
      document.getElementById('museum').style.display = 'none';
      document.getElementById('mapspace').style.display = 'none';
      document.getElementById('map').style.display = 'none';
      document.getElementById('homepage').style.display = 'none';
      document.getElementById('monument').style.display = 'block';

    }
// The function to show and hide the markers of the places.
function restaurants () {
  togglemap();
  $(document).ready(function(){
    $( '.rest' ).css( 'visibility', 'visible' )
    $( '.mon' ).css( 'visibility', 'hidden' )
    $( '.mus' ).css( 'visibility', 'hidden' )
  });
}
function museums () {
  togglemap();
  $(document).ready(function(){
    $( '.rest' ).css( 'visibility', 'hidden' )
    $( '.mon' ).css( 'visibility', 'hidden' )
    $( '.mus' ).css( 'visibility', 'visible' )
  });
}
function monuments () {
  togglemap();
  $(document).ready(function(){
    $( '.rest' ).css( 'visibility', 'hidden' )
    $( '.mon' ).css( 'visibility', 'visible' )
    $( '.mus' ).css( 'visibility', 'hidden' )
  });
}
function deletemarkers () {
  $(document).ready(function(){
    $( '.rest' ).css( 'visibility', 'hidden' )
    $( '.mon' ).css( 'visibility', 'hidden' )
    $( '.mus' ).css( 'visibility', 'hidden' )
  });
}
function showmarkers () {
  $(document).ready(function(){
    $( '.rest' ).css( 'visibility', 'visible' )
    $( '.mon' ).css( 'visibility', 'visible' )
    $( '.mus' ).css( 'visibility', 'visible' )
  });
}
// The variable to custom the icon of the markes.
    var redMarker = L.icon({
  	iconUrl: 'img/restaurant.png',
      icon: 'home',
      iconSize: [20, 25],
      markerColor: 'red',
      className: 'rest'
    });
  var redMarker2 = L.icon({
  	iconUrl: 'img/museum.png',
      icon: 'star',
      iconSize: [20, 25],
      markerColor: 'red',
      className: 'mus'
    });
  var redMarker3 = L.icon({
  	iconUrl: 'img/monument.png',
      icon: 'star',
      iconSize: [20, 25],
      markerColor: 'red',
      className: 'mon'
    });
  // The markers and the location of them.

       marker=L.marker([43.326977, -1.971104], {icon: redMarker}).addTo(map).bindPopup
    ('<div style="color: red">This is<br>Campero</div>');;
        marker=L.marker([43.321470, -1.949362], {icon: redMarker}).addTo(map).bindPopup
    ('<div style="color: red">This is<br>Azark</div>');;
     marker=L.marker([43.320747, -1.981751], {icon: redMarker}).addTo(map).bindPopup
    ('<div style="color: red">This is<br>Bideluze</div>');;
    marker=L.marker([43.325047, -1.984834], {icon: redMarker2}).addTo(map).bindPopup
   ('<div style="color: dark">This is<br>San Telmo</div>');;
   marker=L.marker([43.322783, -1.991849], {icon: redMarker2}).addTo(map).bindPopup
  ('<div style="color: dark">This is<br>Aquarium</div>');;
  marker=L.marker([43.290518, -1.984326], {icon: redMarker2}).addTo(map).bindPopup
 ('<div style="color: dark">This is<br>Eureka</div>');;
 marker=L.marker([43.316750, -1.981544], {icon: redMarker3}).addTo(map).bindPopup
('<div style="color: blue">This is<br>Buen Pastor</div>');;
marker=L.marker([43.321780, -2.005394], {icon: redMarker3}).addTo(map).bindPopup
('<div style="color: blue">This is<br>Peine del viento</div>');;
marker=L.marker([43.324457, -1.978649], {icon: redMarker3}).addTo(map).bindPopup
('<div style="color: blue">This is<br>Kursaal</div>');;
// The button to search the sections.
function search () {
  if ( document.getElementById('searchbox').value == 'restaurant' ) {
      togglerest();
  } else if ( document.getElementById('searchbox').value == 'monuments' ) {
      togglemon();
  } else if ( document.getElementById('searchbox').value == 'museums' ) {
      togglemus();
  } else if ( document.getElementById('searchbox').value == 'map' ) {
      togglemap();
  } else {
    alert('Thats not a section');
  }
}

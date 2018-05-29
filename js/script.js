var map;
map = L.map('map').
setView([43.327441, -1.970837],
14);


   function zoomTo() {
      var lat;
      var lng;
      lat=prompt("Ingrese Latitud");
      lng=prompt("Ingrese Longitud");
       map.panTo(new L.LatLng(lat, lng));
   }

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
   maxZoom: 20
}).addTo(map);

L.control.scale().addTo(map);
//function toggle Map
function togglemap() {
    document.getElementById('mapspace').style.display = 'block';
    document.getElementById('map').style.display = 'block';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('restaurant').style.display = 'none';
    document.getElementById('monument').style.display = 'none';
    document.getElementById('museum').style.display = 'none';

}
function togglerest() {
    document.getElementById('restaurant').style.display = 'block';
    document.getElementById('monument').style.display = 'none';
    document.getElementById('museum').style.display = 'none';
    document.getElementById('mapspace').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('homepage').style.display = 'none';
  }
function togglemus() {
      document.getElementById('restaurant').style.display = 'none';
      document.getElementById('monument').style.display = 'none';
      document.getElementById('museum').style.display = 'block';
      document.getElementById('mapspace').style.display = 'none';
      document.getElementById('map').style.display = 'none';
      document.getElementById('homepage').style.display = 'none';
}
function togglemon() {
      document.getElementById('restaurant').style.display = 'none';
      document.getElementById('monument').style.display = 'block';
      document.getElementById('museum').style.display = 'none';
      document.getElementById('mapspace').style.display = 'none';
      document.getElementById('map').style.display = 'none';
      document.getElementById('homepage').style.display = 'none';
    }

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

function search () {
  if ( document.getElementById('searchbox').value == 'restaurant' ) {
      togglerest();
  } else if ( document.getElementById('searchbox').value == 'monuments' ) {
      togglemon();
  } else if ( document.getElementById('searchbox').value == 'museums' ) {
      togglemus();
  } else {
    alert('Thats not a section');
  }
}

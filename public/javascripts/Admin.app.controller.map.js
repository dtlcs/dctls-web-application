"use strict";
app.controller('App-controller-map',function ($scope,$http) {
$scope.map='aa';
console.log('aaa');

    $scope.latlang={
        //lat:'0.0000',
       // lang:'0.0000'
    }


        // var lat=$scope.latlang.lat;
        // var lang=$scope.latlang.lang;

       //  function initialize() {
       //      var myLatlng = new google.maps.LatLng(-34.397, 150.644);//-34.397, 150.644
       //      var mapOptions = {
       //          zoom: 18,
       //          center: myLatlng
       //      };
       //
       //      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
       //
       //      var contentString = '<div id="content">' +
       //          '<div id="siteNotice">' +
       //          '</div>' +
       //          '<h1 id="firstHeading" class="firstHeading">Junction ID:A-14</h1>' +
       //          '<div id="bodyContent">' +
       //          '<table style="background-color: burlywood">' +
       //          '<tr>' +
       //          '<td>Traffic density</td>'+
       //          '<td>3.5/m</td>'+
       //          '</tr>'+
       //          '<tr>' +
       //          '<td>status</td>'+
       //          '<td>ON</td>'+
       //          '</tr>'+
       //          '<tr>' +
       //          '<td>Time</td>'+
       //          '<td>10/sec</td>'+
       //          '</tr>'+
       //          '</table>'+
       //          '</div>' +
       //          '</div>';
       //
       //      var infowindow = new google.maps.InfoWindow({
       //          content: contentString
       //      });
       //
       //
       //      var marker = new google.maps.Marker({
       //          position: myLatlng,
       //          map: map,
       //          title: 'Uluru (Ayers Rock)'
       //      });
       //
       //      marker.addListener('click', function() {
       //          infowindow.open(map, this);
       //      });
       //  }
       //  initialize();
       //  google.maps.event.addDomListener(window, 'load', initialize);
       // /* window.addEventListener('load',function(){
       //
       //      var script = document.createElement('script');
       //      script.type = 'text/javascript';
       //      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB693OGyXpXPdwHgeQY03CH_9_okwjReRc&callback=initialize';
       //      document.body.appendChild(script);
       //  });*/
    $(function () {

        function initMap() {

            var location0 = new google.maps.LatLng(6.955828, 79.884022);
            var location1 = new google.maps.LatLng(60.0875726, 14.4189987);
            var location2 = new google.maps.LatLng(70.0875726, 14.4189987);
            var location3 = new google.maps.LatLng(80.0875726, 14.4189987);
            var location4 = new google.maps.LatLng(90.0875726, 14.4189987);

            var mapCanvas = document.getElementById('map');
            var mapOptions = {
                center: location0,
                zoom: 18,
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);

            var markerImage = './marker.png';

            var marker = new google.maps.Marker({
                position: location0,
                map: map,
               //icon: markerImage
            });

            var contentString = '<div class="info-window">' +
                '<h3>Info Window Content</h3>' +
                '<div class="info-content">' +
                '<p>abc.</p>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 400
            });

            marker.addListener('click', function () {
                infowindow.open(map, markers);
            });


        }

        google.maps.event.addDomListener(window, 'load', initMap);
    });




});

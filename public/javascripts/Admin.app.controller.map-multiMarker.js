"use strict";
app.controller('App-controller-map',function ($scope,$http) {

    /**
     * http GET request to get all junction locations
     */
    $http.get('/').then(function (response) {
        $scope.locations=response.data;
        console.log(response.data);
    });
    
   var locations=$scope.locations;

 
    $(function () {
        function initialize() {

            var myOptions = {
                center: new google.maps.LatLng(6.955828,79.884022),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP

            };
            var map = new google.maps.Map(document.getElementById("map"),
                myOptions);

            setMarkers(map, locations);
        }

        function setMarkers(map,locations) {
            for(var i=0;i<locations.length;i++){
                var lat=locations[i].lat;
                var lang=locations[i].lang;
                var id=locations[i].junction_id;
                var name=locations[i].junction_name;

                var latlngset = new google.maps.LatLng(lat, lang);

                var marker = new google.maps.Marker({
                    map: map, position: latlngset
                });

                map.setCenter(marker.getPosition());

                /*create infoWindow*/
                var infowindow = new google.maps.InfoWindow();

                /*make infoWindow key*/
                marker.infowindow = infowindow;

                /*set infoWindow content*/
                $(document).ready(function()
                {
                    $.get("../public/map-infoWindow.html", function(result)
                    {
                       var content3=result;
                        infowindow.setContent('<div id="myInfoWinDiv">'+  content3+'</div>');
                    },'html');
                });

                /*load infoWindow*/
                google.maps.event.addListener(marker, 'click', (function() {
                    this.infowindow.open(map, this);
                }));
            }
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    });
});

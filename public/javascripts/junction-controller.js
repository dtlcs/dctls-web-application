/**
 * Created by Sachini on 12/9/2017.
 */

"use strict";
app.controller('App-controller-junction',function ($scope,$http,$cookieStore) {

    //Add new Junction
    $scope.add=function () {
        console.log($scope.newJunction);
        $http.post('http://localhost:8080/api/junction/add', $scope.newJunction).then(function (res, err) {
            console.log(res);
        }, function (err) {
            console.log("error :" + err);
        });
    };

    //Get all junctions
    $http.get('http://localhost:8080/api/junctions/name').then(function (response) {
        $scope.locations=response.data;
        // console.log(response.data);

        //get response data
        var locations=$scope.locations;
        console.log(locations);

        /**
         * function to set markers to all locations and init with infoWindow
         */
        function setMarkers(map,locations) {
            // console.log('set mark');
            // console.log(locations[0]);
            // console.log(locations.length);
            // console.log(typeof (locations));
            for(var i=0;i<locations.length;i++){
                // console.log('loop');
                var lat=locations[i].latitude;
                var lang=locations[i].longitude;

                // /*set junction details*/
                var id=locations[i].id;
                var name=locations[i].name;
                var description=locations[i].description;
                var pi_mac=locations[i].pi_mac;
                var city=locations[i].city;

                var latlngset = new google.maps.LatLng(lat, lang);
                var marker = new google.maps.Marker({
                    map: map, position: latlngset
                });
                map.setCenter(marker.getPosition());

                /*create infoWindow*/
                var infowindow = new google.maps.InfoWindow();

                /**load external html to the div*/

                $(document).ready(function()
                {//map-infoWindow
                    $.get("map-infoWindow.html", function(locations)
                    {    var result;
                        /**set content string to the info window*/
                        var content3=result;
                        infowindow.setContent('<div id="myInfoWinDiv">'+  content3+'</div>'); //wrap content to add js function

                    },'html');
                });

                /*make infoWindow key*/
                marker.infowindow = infowindow;

                /*load infoWindow*/
                google.maps.event.addListener(marker, 'click', (function() {
                    this.infowindow.open(map, this);
                }));
            }
            // console.log('end mark');
        }
        /**
         * function to int map object
         */
        function initMap() {
            // console.log('init map');
            var myOptions = {
                center: new google.maps.LatLng(6.955828,79.884022),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var newMap = new google.maps.Map(document.getElementById("m_gmap_3"),
                myOptions);

            setMarkers(newMap, locations);
        }

        /**
         * function to init map- set markers- set infoWindow
         */
        $(function () {
            // console.log('globall function');
            /*load map on winodow.load event*/
            google.maps.event.addDomListener(window, 'load', initMap);
        });
    });

    // var location1=
    //     {
    //         junction_id:"001",
    //         junction_name:"AA",
    //         lat:"6.955828",
    //         lang:"79.884022"
    //     }
    // var location2=
    //     {
    //         junction_id:"002",
    //         junction_name:"BB",
    //         lat:"6.892297",
    //         lang:" 79.876929"
    //     }
    // var location3=
    //     {
    //         junction_id:"003",
    //         junction_name:"CC",
    //         lat:"6.886874",
    //         lang:"79.887064"
    //     }
    //var locations=[location1,location2,location3];

});



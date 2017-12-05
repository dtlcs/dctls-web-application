"use strict";
app.controller('App-controller-map',function ($scope,$http) {

    $http.get('/').then(function (response) {
        $scope.locations=response.data;
        console.log(response.data);
    });
   var locations=$scope.locations;
    console.log(locations);

    var location1=
    {
        junction_id:"001",
        junction_name:"AA",
        lat:"6.955828",
        lang:"79.884022"
    }
    var location2=
        {
            junction_id:"002",
            junction_name:"BB",
            lat:"6.892297",
            lang:" 79.876929"
        }
    var location3=
        {
            junction_id:"003",
            junction_name:"CC",
            lat:"6.886874",
            lang:"79.887064"
        }

 var locations=[location1,location2,location3];
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
               // var content = "Junction ID: " + id + "Junction Name: " + name;
                var content='<div class="info-window">' +
                    '<h4>JUNCTION</h4>' +
                    '<div class="info-content">' +
                    '<table style="background-color: burlywood">' +
                    '<tr>' +
                    '<td>Junction ID</td>'+
                    '<td>'+ id+'</td>'+
                    '</tr>'+
                    '<tr>' +
                    '<td>Junction Name</td>'+
                    '<td>'+ name+'</td>'+
                    '</tr>'+
                    '</table>'+
                    '</div>' +
                    '</div>';
                /////////////////////
                var content2 = document.createElement('div');
                content2.setAttribute('id', 'info');
                content2.setAttribute('src', 'map-infoWindow.html');
                content2.setAttribute('data', '300');
                content2.setAttribute('height', '200');
                ////////////////////
                ///////////////////////
                $(document).ready(function()
                {
                    $.get("../public/map-infoWindow.html", function(result)
                    {
                       var content3=result;
                        infowindow.setContent('<div id="myInfoWinDiv">'+  content3+'</div>');

                        google.maps.event.addListener(infowindow,'domready',function(){
                            $('#myInfoWinDiv').click(function() {
                                ///////////////////////

                                var ctx = $('#myInfoWindow').document.getElementById("traffic-graph").getContext('2d');
                                var myChart = new Chart(ctx, {
                                    type: 'line',
                                    data: {
                                        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                                        datasets: [{
                                            label: '# of Votes',
                                            data: [12, 19, 3, 5, 2, 3],
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                                'rgba(153, 102, 255, 0.2)',
                                                'rgba(255, 159, 64, 0.2)'
                                            ],
                                            borderColor: [
                                                'rgba(255,99,132,1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 159, 64, 1)'
                                            ],
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                        maintainAspectRatio:false,
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero:true
                                                }
                                            }]
                                        }
                                    }
                                });

                                //////////////////////

                            });
                        });
                    },'html');    // this is the change now its working


                });
                ///////////////////////////
                var content4='';
                ///////////////////////////



                /*load infoWindow*/
                google.maps.event.addListener(marker, 'click', (function() {
                    this.infowindow.open(map, this);
                }));
            }
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    });
});

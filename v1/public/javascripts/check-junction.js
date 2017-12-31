/**
 * Created by Sachini on 12/10/2017.
 */

/**
 * Created by Sachini on 12/7/2017.
 */
"use strict";
app.controller('App-controller-checkJunction',function ($scope,$http,$cookieStore) {

//== Class definition

    //Remove Junction
    // $scope.deleteJunction = function () {
    //     $http.post('http://localhost:8080/api/junction/delete',$scope.removeUserId).then(function (response) {
    //         console.log(response);
    //     });
    //     Refresh();
    // };

    var Refresh=function () {
        // //Get all junctions
        $http.get('http://localhost:8080/api/junctions/name').then(function (response) {

            var data2=response.data;
            console.log(data2);
            var DatatableDataLocalDemo = function (data) {
                //== Private functions
                // demo initializer
                var demo = function (data) {
                    var datatable = $('.m_datatable').mDatatable({
                        // datasource definition
                        data: {
                            type: 'local',
                            source:data ,
                            pageSize: 10
                        },

                        // layout definition
                        layout: {
                            theme: 'default', // datatable theme
                            class: '', // custom wrapper class
                            scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                            height: 450, // datatable's body's fixed height
                            footer: false // display/hide footer
                        },

                        // column sorting(refer to Kendo UI)
                        sortable: true,

                        // column based filtering(refer to Kendo UI)
                        filterable: false,

                        pagination: true,

                        // inline and bactch editing(cooming soon)
                        // editable: false,
                    //{"id":1,"name":"Borella Junction","description":"Just a crowded place","street":"Borella street","city":"Colombo","province":"Western","postal_code":"00800","latitude":6.914832,"longitude":79.877595,"pi_mac":"001c42146bac"}
                        columns: [{
                            field: "id",
                            title: "User ID"
                        }, {
                            field: "name",
                            title: "Full Name",
                            responsive: {visible: 'lg'}
                        },{
                            field: "street",
                            title: "Street"
                        },{
                            field: "city",
                            title: "City"
                        },{
                            field: "province",
                            title: "Province"
                        },{
                            field: "postal_code",
                            title: "Postal Code"
                        },{
                            field: "latitude",
                            title: "Latitude"
                        },{
                            field: "longitude",
                            title: "Longitude"
                        },{
                            field: "pi_mac",
                            title: "Pi Mac"
                        },{
                            field: "description",
                            title: "Description"
                        }
                            , {
                                field: "Actions",
                                width: 110,
                                title: "Actions",
                                sortable: false,
                                overflow: 'visible',
                                template: function (row) {

                                    var dropup = (row.getDatatable().getPageSize() - row.getIndex()) <= 4 ? 'dropup' : '';


                                    //Remove junction when #delete-user btn is clicked
                                    // $("#delete-junction").click(function(e) {
                                    //     deleteJunction();
                                    // });

                                    return '\
						<div class="dropdown '+ dropup +'">\
							<a href="edit_junction.html" id="edit-junction" class="btn m-btn m-btn--hover-info m-btn--icon m-btn--icon-only m-btn--pill" >\
							\
                                 <i class="fa fa-pencil"></i>\
                            \
                            </a>\
						</div>\
						<a href="#" id="delete-junction" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="View ">\
                            <i class="fa fa-remove"></i>\
                        </a>\
					';
                                }
                            }]
                    });

                    // var query = datatable.getDataSourceQuery();
                    //
                    // $('#m_form_search').on('keyup', function (e) {
                    //     datatable.search($(this).val().toLowerCase());
                    // }).val(query.generalSearch);
                    //
                    // $('#m_form_status').on('change', function () {
                    //     datatable.search($(this).val(), 'Status');
                    // }).val(typeof query.Status !== 'undefined' ? query.Status : '');
                    //
                    // $('#m_form_type').on('change', function () {
                    //     datatable.search($(this).val(), 'Type');
                    // }).val(typeof query.Type !== 'undefined' ? query.Type : '');
                    //
                    //
                    // $('#m_edit').on('click', function () {
                    //     datatable.search($(this).val(), 'Type');
                    // });

                    $('#m_form_status, #m_form_type').selectpicker();


                };

                return {
                    //== Public functions
                    init: function () {
                        // init dmeo
                        demo(data2);
                    }
                };
            }();

            jQuery(document).ready(function () {
                DatatableDataLocalDemo.init(data2);
            });
        });
    }

    Refresh();

});
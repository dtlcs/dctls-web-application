/**
 * Created by Sachini on 12/7/2017.
 */
"use strict";
app.controller('App-controller-check',function ($scope,$http,$cookieStore) {

//== Class definition

    $scope.datasetArray=[];
    $scope.removeUserId.id=1;

    //Remove User
    $scope.deleteUser = function () {
        $http.post('http://localhost:8080/api/user/delete',$scope.removeUserId).then(function (response) {
            console.log(response);
        });
        Refresh();
    };
var Refresh=function () {
    // //Get all users
    $http.get('http://localhost:8080/api/users/all').then(function (response) {

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

                    columns: [{
                        field: "id",
                        title: "User ID"
                    }, {
                        field: "name",
                        title: "Full Name",
                        responsive: {visible: 'lg'}
                    }, {
                        field: "nic",
                        title: "NIC"
                    }, {
                        field: "role_id",
                        title: "Role ID"
                    },{
                        field: "email",
                        title: "Email"
                    },{
                        field: "telephone",
                        title: "Telephone",
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
                    }
                        , {
                            field: "Actions",
                            width: 110,
                            title: "Actions",
                            sortable: false,
                            overflow: 'visible',
                            template: function (row) {

                                var dropup = (row.getDatatable().getPageSize() - row.getIndex()) <= 4 ? 'dropup' : '';


                                //Remove user when #delete-user btn is clicked
                                $("#delete-user").click(function(e) {
                                    deleteUser();
                                });

                                return '\
						<div class="dropdown '+ dropup +'">\
							<a href="edit_user.html" id="edit-user" class="btn m-btn m-btn--hover-info m-btn--icon m-btn--icon-only m-btn--pill" >\
							\
                                 <i class="fa fa-pencil"></i>\
                            \
                            </a>\
						</div>\
						<a href="#" id="delete-user" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="View ">\
                            <i class="fa fa-remove"></i>\
                        </a>\
					';
                            }
                        }]
                });

                var query = datatable.getDataSourceQuery();

                $('#m_form_search').on('keyup', function (e) {
                    datatable.search($(this).val().toLowerCase());
                }).val(query.generalSearch);

                $('#m_form_status').on('change', function () {
                    datatable.search($(this).val(), 'Status');
                }).val(typeof query.Status !== 'undefined' ? query.Status : '');

                $('#m_form_type').on('change', function () {
                    datatable.search($(this).val(), 'Type');
                }).val(typeof query.Type !== 'undefined' ? query.Type : '');


                $('#m_edit').on('click', function () {
                    datatable.search($(this).val(), 'Type');
                });

                $('#m_form_status, #m_form_type').selectpicker();


            };

            // var getbtn=function () {
            //
            //     $('.m_datatable tbody').on('click', '#edit-user', function () {
            //         var tr = $(this).closest('tr');
            //         var row = dataTable.row(tr);
            //         var rowData = row.data();
            //         console.log(rowData);
            //
            //         $scope.datasetArray.push(rowData);
            //         var json = JSON.stringify(rowData);
            //     });
            //
            //     $('.m_datatable tbody').on('click', '#delete-user', function () {
            //         var tr = $(this).closest('tr');
            //         var row = dataTable.row(tr);
            //         var rowData = row.data();
            //
            //         $scope.datasetArray.push(rowData);
            //         var json = JSON.stringify(rowData);
            //     });
            // }

            return {
                //== Public functions
                init: function () {
                    // init dmeo
                    demo(data2);
                    // getbtn();
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
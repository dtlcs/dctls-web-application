/**
 * Created by Sachini on 12/7/2017.
 */
"use strict";
app.controller('App-controller-check',function ($scope,$http,$cookieStore) {

//== Class definition
    $scope.editUser={
        id:'',
        name:'',
        role_id:'',
        email:'',
        phone:'',
        street:'',
        city:'',
        province:'',
        postal_code:''
    };

    //function to edit users
    $scope.editUser=function(){
        $http.post('http://localhost:8080/api/user/update',$scope.editUser).then(function (response) {
            console.log(response);
        });
    };

// //Get all users
    $http.get('http://localhost:8080/api/users/all').then(function (response) {
        console.log(response);
        var DatatableDataLocalDemo = function () {
            //== Private functions
            // demo initializer
            var demo = function () {
               // var data=[{"id":1,"name":"Oshan","nic":"950722355V","role_id":1,"email":"oshan.ivantha@gmail.com","telephone":"0719084020","street":null,"city":null,"province":null,"postal_code":null},{"id":2,"name":"Sachini","nic":"100000001V","role_id":2,"email":"sachini.thaksala@gmail.com","telephone":"071 325603","street":null,"city":null,"province":null,"postal_code":null},{"id":4,"name":"Sameera","nic":"100000003V","role_id":3,"email":"ppathumm@gmail.com","telephone":"071 403781","street":null,"city":null,"province":null,"postal_code":null},{"id":5,"name":"001c42146bac","nic":"123","role_id":2,"email":"001c42146bac","telephone":"NULL","street":"NULL","city":"NULL","province":"NULL","postal_code":"NULL"},{"id":6,"name":"fgh","nic":"35","role_id":2,"email":"fgh@.bom","telephone":"567","street":"dfg","city":"fggh","province":"fff","postal_code":"fff"},{"id":7,"name":"Sachini Palliyaguru","nic":"369","role_id":2,"email":"sachi@gmail.com","telephone":"4566","street":"\"Awanthi\",Kohuliyadda,Hakmana.","city":"Pannipityia","province":"Sri Lanka","postal_code":"10230"}];
                var data2;
                var datatable = $('.m_datatable').mDatatable({
                    // datasource definition
                    data: {
                        type: 'local',
                        source:data2 ,
                        pageSize: 10
                    },

                    // layout definition
                    layout: {
                        theme: 'default', // datatable theme
                        class: '', // custom wrapper class
                        scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
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
                        title: "NIC",
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

                                return '\
						<div class="dropdown '+ dropup +'">\
							<a href="#" class="btn m-btn m-btn--hover-info m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown" ng-click="editUser()">\
                                <i class="fa fa-pencil"></i>\
                            </a>\
						</div>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="View ">\
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

                $('#m_form_status, #m_form_type').selectpicker();

            };

            return {
                //== Public functions
                init: function () {
                    // init dmeo
                    demo();
                }
            };
        }();

        jQuery(document).ready(function () {
            DatatableDataLocalDemo.init();
        });
    });







});

        
        var pagenum = 1;
        var pages = 1;
        function display(n) {
            $('#form').hide();
            pagenum = n;
            $.ajax({
                url: "https://reqres.in/api/users?page=" + pagenum,
                type: "GET",

                success: function (response) {
                    $("tbody").children().remove();
                    pages = response.total_pages;
                    $.each(response.data, function (i, f) {
                        console.log(f.first_name + f.last_name);
                        var tblRow = '<tr>' + '<td>' + f.first_name + f.last_name + '</td>' +
                            '<td>' + f.email + '</td>' +
                            '<td> <img src="' + f.avatar + '"/></td>' +
                            '<td><a class="edit"  id="ed" title="Edit" data-toggle="modal" data-target="#formModal"><i  style="color:green" class="material-icons">&#xE254;</i></a>  <a class="delete" id="delete" title="Delete" data-toggle="modal" data-target="#deletemodal" ><i style="color:red" class="material-icons">&#xE872;</i></a>' +
                            '</td></tr>';
                        //" <td><i  style='color:yellow' data-toggle='modal' data-target='#edit' data-uid="+pagenum+"class='update btn btn-warning btn-sm'><span class='glyphicon glyphicon-pencil'></span></i>"+
                        //" <i style='color:red' data-toggle='modal' data-target='#delete' data-uid="+pagenum+"class='delete btn btn-danger btn-sm'><span class='glyphicon glyphicon-trash'></span></i></td></tr>";
                        $(tblRow).appendTo("#entrydata tbody");
                    });
                }

            });
        }

        function toggleform() {
            $('#form').toggle();
        }

        function addData() {
            $('#form').toggle();
            var fname = document.getElementById('firstname').value;
            var emailid = document.getElementById('email').value;
            var lname = document.getElementById('lastname').value;
          
                    $.ajax({
                        url: "https://reqres.in/api/users?page=1",
                        type: "POST",
                        data: {
                            first_name: fname,
                            last_name: lname,
                            email:emailid
                        },
                        success: function (response) {
                            console.log(response);
                        }
                    });
                    var tblRow = '<tr>' + '<td>' + fname + lname + '</td>' +
                            '<td>' + emailid + '</td>' +
                            '<td> <img src="'  + '"/></td>' +
                            '<td><a class="edit"  id="ed" title="Edit" data-toggle="modal" data-target="#formModal"><i  style="color:green" class="material-icons">&#xE254;</i></a>  <a class="delete" id="delete" title="Delete" data-toggle="modal" data-target="#deletemodal" ><i style="color:red" class="material-icons">&#xE872;</i></a>' +
                            '</td></tr>';
                        $(tblRow).appendTo("#entrydata tbody");

                                
              
        }

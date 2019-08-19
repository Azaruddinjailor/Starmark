
        
        var pagenum = 1;
        var pages = 1;
        var trs=0;
        function display(n) {
            trs=trs+1;
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
                        var tblRow = "<tr id="+ f.first_name+"><td>" + f.first_name + f.last_name + "</td>" +
                        "<td>" + f.email + "</td>" +
                       
                        "<td> <img src='"  + f.avatar+"'/></td>" +
                        "<td><a class='edit'  id='ed' title='Edit'><i  style='color:green' class='material-icons'  >&#xE254;</i></a> <button class='deletebtn'> <i style='color:red' class='material-icons' data-toggle='modal' data-target='#exampleModal'>&#xE872;</i>  </button>" +
                        "</td></tr>";
                    $(tblRow).appendTo("#entrydata tbody");
                        //" <td><i  style='color:yellow' data-toggle='modal' data-target='#edit' data-uid="+pagenum+"class='update btn btn-warning btn-sm'><span class='glyphicon glyphicon-pencil'></span></i>"+
                        //" <i style='color:red' data-toggle='modal' data-target='#delete' data-uid="+pagenum+"class='delete btn btn-danger btn-sm'><span class='glyphicon glyphicon-trash'></span></i></td></tr>";
                       });
                }

            });
        }

        function toggleform() {
            $('#form').toggle();
        }

        function addData() {

       
            trs=trs+1;
            $('#form').toggle();
            var fname = document.getElementById('firstname').value;
            var emailid = document.getElementById('email').value;
            var lname = document.getElementById('lastname').value;
           // var im = document.getElementById('image1').value;
           // console.log(im);
          
                    $.ajax({
                        url: "https://reqres.in/api/users?page=1",
                        type: "POST",
                        data: {
                            first_name: fname,
                            last_name: lname,
                            email:emailid,
                            avatar:''
                        },
                        success: function (response) {
                            console.log(response);
                        }
                    });
                    var tblRow = "<tr id="+(trs)+"><td>" + fname + lname + "</td>" +
                            "<td>" + emailid + "</td>" +
                            "<td> <img id='myImg' src='#' alt='your image' /></td>" +
                            "<td><a class='edit'  id='ed' title='Edit'><i  style='color:green' class='material-icons'  >&#xE254;</i></a>  <button class='deletebtn'><i style='color:red' class='material-icons'   data-toggle='modal' data-target='#exampleModal'>&#xE872;</i> </button> " +
                            "</td></tr>";
                        $(tblRow).appendTo("#entrydata tbody");
                        console.log("entered out");
                        $(function () {
                            
                            $(":file").change(function () {
                                console.log("entered l in");
                                if (this.files && this.files[0]) {
                                    
                                    var reader = new FileReader();
                                    reader.onload = imageIsLoaded;
                                    reader.readAsDataURL(this.files[0]);
                                }
                            });
                        });
                        
                        function imageIsLoaded(e) {
                            console.log("entered");
                            $('#myImg').attr('src', e.target.result);
                        };
                                      
               
        }

       

        $(document).on('click', '.deletebtn', function () {
           var dltrow = $(this).closest('tr');
         
           $(document).on('click', '#deletebtn', function () {
           
                dltrow.remove();
                  return false;
            
             
          });
             
          
           
        });

       

$(document).ready(function() {

    //10 marks for using for validation
    $("#reservation_form").submit(
        function(event) {

            var isValid = true;

            $("#visit_date").focus();

            //Validate Arrive date

            var arriveDate = $("#visit_date").val().trim();



            if (arriveDate == "") {

                $("#visit_date").next().text("This field is required.");

                isValid = false;

            }

            else {
                $("#visit_date").next().text("");
            }

            $("#visit_date").val(arriveDate);

            // validate the region

            var _realname = $("#region").val().trim();

            if (_realname == "") {
                $("#region").next().text("This field is required.");
                isValid = false;
            }

            else {
                $("#region").next().text("");
            }
            $("#region").val(_realname);


            // Validate the name

            var name = $("#name").val().trim();
            if (name == "") {

                $("#name").next().text("This field is required.");

                isValid = false;

            }
            else {
                $("#name").next().text("");
                $("#name").val(name);
            }


            //validate the email entry with a regular expression

            var email = $("#email").val().trim();
            var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (email == "") {
                $("#email").next().text("This field is required.");
                isValid = false;
            }
            else if (!emailPattern.test(email)) {
                $("#email").next().text("Enter a valid email address.");
                isValid = false;

            }
            //15 marks for using logical AND, OR, NOT
            else {
                $("#email").next().text("");

            }

            $("#email").val(email);  // return the trimmed email address

            // Validate the phone number

            var phone = $("#phone").val().trim();
            var phonePattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            if (phone == "") {

                $("#phone").next().text("This field is required.");

                isValid = false;

            }
            //5 marks Use if else 
            else if (!phonePattern.test(phone)) {
                $("#phone").next().text("Enter a valid phone numer.");
                isValid = false;

            }


            else {
                $("#phone").next().text("");
            }

            $("#phone").val(phone);



            //prevent the submission of the form if any entries are invalid

            if (isValid == false) {
                event.preventDefault();
            }

        }

    );  //end submit

}); // end ready

//Total score for this page is: 30
//Whole score: 42+49+30=121
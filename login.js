
"use strict";
$(document).ready( () => {
    
    $("#member_form").submit( event => { 
        var isValid = 1;
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") {    //validates email entered by the user
            $("#email").next().text("This field is required.");
            isValid = 2;
        }
        else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = 2;
        }
        else {
            $("#email").next().text("");
        }
        $("#email").val(email);


        const password = $("#password").val().trim();
        if ( password.length < 6) {    //validates password entered by the user
            $("#password").next().text("Must be 6 or more characters.");
            isValid = 2;
        }
        else {
            $("#password").next().text("");
        }
        $("#password").val(password);
        if (isValid == 2) {
            event.preventDefault();
        }
    });

    $("#signup_form").submit( event => {
        let isValid = 1;
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const fname =$("#fname").val().trim();
        const lname =$("#lname").val().trim();
        if (fname == "") {                    //validates firstname entered by the user
            $("#fname").next().text("This field is required.");
            isValid = 2;
        }
        else {
            $("#fname").next().text("");
        }
        $("#fname").val(fname);
        if (lname == "") {        //validates lastname entered by the user
            $("#lname").next().text("This field is required.");
            isValid = 2;
        }
        else {
            $("#lname").next().text("");
        }
        $("#lname").val(lname);
        const email = $("#email").val().trim();   //validates email entered by the user
        if (email == "") {
            $("#email").next().text("This field is required.");
            isValid = 2;
        }
        else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = 2;
        }
        else {
            $("#email").next().text("");
        }
        $("#email").val(email);


        const password = $("#password").val().trim();    //validates password entered by the user
        const cpassword = $("#cpassword").val().trim();
        if ( password.length < 6) {
            $("#password").next().text("Must be 6 or more characters.");
            isValid = 2;
        }
        else {
            $("#password").next().text("");
        }
        $("#password").val(password);
        if (cpassword == "") {
            $("#cpassword").next().text("This field is required.");
            isValid = 2;
        }
        else if(cpassword !=password){
            $("#cpassword").next().text("Passwords should match.");
            isValid = 2;
        }
        else {
            $("#cpassword").next().text("");
        }
        $("#cpassword").val(cpassword);
        
        if (isValid == 2) {
            event.preventDefault();           //prevents default submission
        }
    });
});
    



 
    

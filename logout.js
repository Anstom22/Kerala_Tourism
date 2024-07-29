"use strict";

jQuery(document).ready(function() {   //checks if DOM is ready

    Parse.$ = jQuery;
    Parse.initialize("...", "...");

    $('.form-logout').on('submit', function (e) {
        e.preventDefault();                //prevent default submission
        if ( Parse.User.current() ) {
            Parse.User.logOut();
            if (Parse.User.current())
                console.log("Failed to log out!");
        }
        window.location.href = "index.html";       //takes to another window location
    });
});
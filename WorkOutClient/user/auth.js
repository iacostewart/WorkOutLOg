(function(){
    $.extend(WorkOutLog, {

        //signup method
signup: function(){
        //username & password Variables. 
        let username = $("#su_username".val();
        let password = $("#su_password").val();
        //user object
        let user ={ 
                user:{
                        username: username,
                        password: password
                }
        };

        //signup post
    let signup = $.ajax({
        type: "POST",
        url: WorkOutLog.API_BASE + "USER",
        data:JSON.stringify( user ),
        contentType: "application/json"
    });
    // signup done/fail
    signup.done(function(data) {
        if(data.sessionToken) {
            WorkOutLog.setAuthHeader(data.sessionToken);
        } 
        $("#signup-modal").modal("hide");
        $(".disabled").removeClass("disabled");
        $("#loginout").text("Lougout");
             }).fail(function() {
        $("#su_error").text("there was an issue with sign up").show();
    });
    }
        //login method

        //loginout method

    }) $("#signup").on("click", WorkOutLog.signup);

            //bind events
});

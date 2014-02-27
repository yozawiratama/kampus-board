Template.tmp_signupbar.created = function () {};
Template.tmp_signupbar.rendered = function () {};
Template.tmp_signupbar.events({
    'submit': function (e) {
        e.preventDefault();
        if ($('#inp_pwd').val() == $('#inp_repwd').val()) {
            if ($('#cbx_aggrement').prop('checked')) {
                var newIns = Institution.insert({
                    Name: "",
                    Address: ""
                });
                var newUsIns = UserInstitution.insert({
                    Email: $('#inp_email').val(),
                    Password: $('#inp_pwd').val(),
                    Institution_ID: newIns
                });
                if (newUsIns) {
                    $.growl.notice({
                        message: "Sign Up Success"
                    });
                    $('#inp_email').val("");
                    $('#inp_pwd').val("");
                    $('#inp_repwd').val("");
                } else
                    $.growl.error({
                        message: "Sign Up Fail"
                    });
            } else {
                $.growl.error({
                message: "Please accepted the aggrement"
            });
            
            }


        } else {
            $.growl.error({
                message: "Confirmation Password Incorrect"
            });
        }

    }




});
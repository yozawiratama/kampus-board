Template.tmp_usr_signup.created = function () {};
Template.tmp_usr_signup.rendered = function () {};
Template.tmp_usr_signup.events({
    'submit': function (e) {
        e.preventDefault();

        if ($('#inpUsrPwd').val() == $('#inpUsrRePwd').val()) {
            if ($('#cbxTerms').prop('checked')) {
                var usr = UserMember.findOne({
                    Email: $('#inpUserEmail').val()
                });
                if (usr == undefined) {
                    var newUsr = Member.insert({
                        FName: "",
                        LName: "",
                        Gender: "",
                        HandPhone: "",
                        BirthDate: "",
                        Occupation: "",
                        CreatedDate: new Date(),
                        LastModifiedDate: new Date()
                    });
                    var newUsUsr = UserMember.insert({
                        Email: $('#inpUserEmail').val(),
                        Password: $('#inpUsrPwd').val(),
                        CreatedDate: new Date(),
                        LastModifiedDate: new Date()
                    });
                    if (newUsUsr) {
                        $.growl.notice({
                            message: "Sign Up Success"
                        });
                        $('#inpUserEmail').val("");
                        $('#inpUsrPwd').val("");
                        $('#inpUsrRePwd').val("");
                    } else
                        $.growl.error({
                            message: "Sign Up Fail"
                        });
                } else
                    $.growl.error({
                        message: "Email Has been used"
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

    },
    'click #hplUserSignIn': function (e) {
        e.preventDefault();
        Router.navigate("/signin", true);
    }




});

Template.tmp_ins_signup.created = function () {};
Template.tmp_ins_signup.rendered = function () {};
Template.tmp_ins_signup.events({
    'submit': function (e) {
        e.preventDefault();
        var email = $('#inpInsEmail');
        var pwd = $('#inpInsPwd');
        var repwd = $('#inpInsRePwd');
        var name = $('#inpInsName');
        var rsperson = $('#inpInsCP');
        var rshp = $('#inpInsCPHP');
        if (pwd.val() == repwd.val()) {
            if ($('#cbxTerms').prop('checked')) {
                var usr = UserInstitution.findOne({
                    Email: email.val()
                });
                if (usr == undefined) {
                    var newUsr = Institution.insert({
                        Name: name.val(),
                        Address: "",
                        CPName: rsperson.val(),
                        CPPhone: rshp.val(),
                        CreatedDate: new Date(),
                        LastModifiedDate: new Date()
                    });
                    var newInUsr = UserInstitution.insert({
                        Email: email.val(),
                        Password: pwd.val(),
                        Institution_ID: newUsr,
                        CreatedDate: new Date(),
                        LastModifiedDate: new Date(),
                        IsVerified: false
                    });
                    if (newInUsr) {
                        bootbox.alert("Congratulation! Sign Up is Success. Our team will verify your institution in 48 hour to your Email and Contact Person");
                        email.val("");
                        pwd.val("");
                        repwd.val("");
                        name.val("");
                        rsperson.val("");
                        rshp.val("");
                    } else
                        $.growl.error({
                            message: "Sign Up Fail"
                        });
                } else
                    $.growl.error({
                        message: "Email Has been used"
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
    },
    'click #hplInsSignIn': function(e){
    e.preventDefault();
        Router.navigate("/institution/signin",true);
    }

});
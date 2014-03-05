Template.tmp_usr_signin.created = function () {};
Template.tmp_usr_signin.rendered = function () {};
Template.tmp_usr_signin.events({
    'submit': function (e) {
        e.preventDefault();
        if ($('#inpUserEmail').val() != "" && $('#inpUsrPwd').val() != "") {
            var usr = UserMember.findOne({
                Email: $('#inpUserEmail').val(),
                Password: $('#inpUsrPwd').val()

            });
            if (usr) {
                Session.set(SessionRef.Name.ActiveUserId, usr._id);
                Session.set(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Member);
                Router.navigate("", true);

            } else {
                $.growl.error({
                    message: "Sign In Fail, email and password incorrect"
                });
            }

        } else {
            $.growl.error({
                message: "Please fill the blank"
            });
        }

    },
    'click #hplUserSignUp': function (e) {
        e.preventDefault();
        Router.navigate("/signup", true);
    }
});

Template.tmp_ins_signin.created = function () {};
Template.tmp_ins_signin.renvered = function () {};
Template.tmp_ins_signin.events({
    'submit': function (e) {
        e.preventDefault();
        if ($('#inpInsEmail').val() != "" && $('#inpInsPwd').val() != "") {
            var usr = UserInstitution.findOne({
                Email: $('#inpInsEmail').val(),
                Password: $('#inpInsPwd').val(),
                IsVerified : true
            });
            if (usr) {
                Session.set(SessionRef.Name.ActiveUserId, usr._id);
                Session.set(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Institution);
                Router.navigate("institution/"+usr._id, true);

            } else {
                $.growl.error({
                    message: "Sign In Fail, email and password incorrect"
                });
            }

        } else {
            $.growl.error({
                message: "Please fill the blank"
            });
        }


    },
    'click #hplUserSignUp': function (e) {
        e.preventDefault();
        Router.navigate("/signup", true);
    }
});

Template.tmp_adm_signin.created = function () {};
Template.tmp_adm_signin.rendered = function () {};
Template.tmp_adm_signin.events({
    'submit': function (e) {
        e.preventDefault();
        if ($('#inpAdmUsername').val() == "kampusboard" && $('#inpAdmPwd').val() == "Pass@word1") {
            
                Session.set(SessionRef.Name.ActiveUserId, "adminkampusboard");
                Session.set(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Administrator);
                Router.navigate("administrator/", true);


        } else {
            $.growl.error({
                message: "Please fill the blank"
            });
        }


    }
});
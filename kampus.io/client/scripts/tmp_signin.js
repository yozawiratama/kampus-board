Template.tmp_signin.events({
    'submit': function (e) {
        e.preventDefault();
        var email = $('#inpSigninEmail').val();
        var pwd = $('#inpSigninPwd').val();
        Meteor.loginWithPassword(email, pwd, function (err) {
            if (err) {
                console.log(err.message);
                alert("Email and password doesn't match");
            } else {
                Router.go("/");
            }
        });
    }
});
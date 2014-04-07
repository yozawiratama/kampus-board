Template.tmp_signin.events({
    'submit': function (e) {
        e.preventDefault();
        $('#btnSignin').text('Signin In ...');
        $('#btnSignin').attr('disabled', true);
        var email = $('#inpSigninEmail').val();
        var pwd = $('#inpSigninPwd').val();
        Meteor.loginWithPassword(email, pwd, function (err) {
            if (err) {
                $('#btnSignin').text('Sign In');
                $('#btnSignin').attr('disabled', false);
                alert("Email and password doesn't match");
            } else {
                Router.go("/");
            }
        });
    }
});
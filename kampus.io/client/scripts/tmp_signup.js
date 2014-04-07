Template.tmp_signup.rendered = function () {
    $('#inpSignupFor').selectpicker();
};

Template.tmp_signup.events({
    'submit': function (e) {
        e.preventDefault();
        $('#btnSignup').text('Signing Up ...');
        $('#btnSignup').attr('disabled', true);
        var name = $('#inpSignupName').val();
        var un = $('#inpSignupUsername').val();
        var email = $('#inpSignupEmail').val();
        var pwd = $('#inpSignupPwd').val();
        var repwd = $('#inpSignupRePwd').val();
        if (pwd == repwd) {
            Accounts.createUser({
                username: un,
                email: email,
                password: pwd,
                profile: {
                    Name: name,
                    Picture : "http://placehold.it/150x150"
                }
            }, function (err) {
                if (err) {
                    $('#btnSignup').attr('disabled', false);
                    $('#btnSignup').text('Sign Up');
                    alert("Fail");
                } else Router.go("/");
            });
        }
    }
});
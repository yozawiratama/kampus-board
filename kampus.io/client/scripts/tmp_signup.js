Template.tmp_signup.rendered = function(){
$('#inpSignupFor').selectpicker();
};

Template.tmp_signup.events({
    'submit': function (e) {
        e.preventDefault();
        var suFor = $('#inpSignupFor').val();
        var name = $('#inpSignupName').val();
        var un = $('#inpSignupUsername').val();
        var email = $('#inpSignupEmail').val();
        var pwd = $('#inpSignupPwd').val();
        var repwd = $('#inpSignupRePwd').val();
        if (pwd == repwd) {
            Accounts.createUser({
                username : un,
                email: email,
                password: pwd,
                profile: {
                    Name : name,
                    Type: suFor
                }
            }, function (err) {
                if (err) alert("Fail");
                else Router.go("/");
            });
        }
    }
});
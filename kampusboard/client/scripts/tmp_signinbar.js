Template.tmp_signinbar.created = function () {};
Template.tmp_signinbar.rendered = function () {};
Template.tmp_signinbar.events({
    'submit': function (e) {
        e.preventDefault();
        if ($('#inp_email_signin').val() != "" && $('#inp_pwd_signin').val() != "") {
            var usr = UserInstitution.findOne({
                Email: $('#inp_email_signin').val(),
                Password: $('#inp_pwd_signin').val()
                
            });
            if(usr){
                alert("berhasil");
            
            } else {
                alert("gagal");    
            }

        } else {
            $.growl.error({
                message: "Please fill the blank"
            });
        }
        
    }
});
Template.tmp_header.loggedin = function () {
    if (Meteor.userId()) return true;
};

Template.tmp_header.org = function () {
    if (Meteor.user())
        if (Meteor.user().profile.Type == "organization") return true;
};

Template.tmp_header.org_name = function () {
    return Meteor.user().username;
};



Template.tmp_header.events({
    'click #hplSignout': function (e) {
        e.preventDefault();
        Meteor.logout(function (err) {
            if (err){}
            else {
                Router.go("/");
            }
        });
    }
});
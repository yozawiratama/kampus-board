Template.tmp_header.loggedin = function () {
    if (Meteor.userId()) return true;
};

Template.tmp_header.org_name = function () {
    if (Meteor.userId())
        return Meteor.user().username;
};



Template.tmp_header.events({
    'click #hplSignout': function (e) {
        e.preventDefault();
        Meteor.logout(function (err) {
            if (err) {} else {
                Router.go("/");
            }
        });
    }
});
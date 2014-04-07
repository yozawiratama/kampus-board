Template.tmp_modal_add_event.rendered = function () {
    $('#selAddEvtType').selectpicker();
};

Template.tmp_modal_add_event.events({
    'submit': function (e) {
        e.preventDefault();
        var name = $.trim($('#inpEvtName').val());
        var type = $.trim($('#selAddEvtType').val());
        var unique = $.trim($('#inpEvtUnique').val());
        if (name != "" && type != "" && unique != "") {
            if (!hasSpace(unique)) {

                Meteor.call('EventUniqueCheck', unique, function (err, res) {
                    if (err) {

                    } else {
                        if (Meteor.userId()) {
                            Meteor.call('EventCreate', name, unique, type, Meteor.user().username, Meteor.user().profile.Name, function (err, res) {
                                if (err) {} else {
                                    $('#modalAddEvent').modal('hide');
                                    Router.go('/' + unique);
                                }
                            });
                        } else {
                            $.bootstrapGrowl("We detect no sign in, please sign in.", {
                                type: 'danger'
                            });
                            $('#modalAddEvent').modal('hide');
                            Router.go('/signin/'+name+'/'+unique+'/'+type);
                        }
                    }
                });

            } else {
                alert("unique may not have space");
            }
        } else {
            $.bootstrapGrowl("Please fill all input", {
                type: 'danger'
            });
        }

    }
});
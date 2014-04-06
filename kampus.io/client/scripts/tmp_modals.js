Template.tmp_modal_add_event.rendered = function () {
    $('#selAddEvtType').selectpicker();
};

Template.tmp_modal_add_event.events({
    'submit': function (e) {
        e.preventDefault();
        var name = $('#inpEvtName').val();
        var type = $('#selAddEvtType').val();
        var unique = $.trim($('#inpEvtUnique').val());
        if (!hasSpace(unique)) {
            Meteor.call('EventUniqueCheck', unique, function (err, res) {
                if (err) {

                } else {
                    Meteor.call('EventCreate', name, unique, type, Meteor.user().username, Meteor.user().profile.Name, function (err, res) {
                        if (err) {} else {
                            $('#modalAddEvent').modal('hide');
                            Router.go('/' + unique);
                        }
                    });
                }
            });
        } else {
            alert("unique may not have space");
        }

    }
});
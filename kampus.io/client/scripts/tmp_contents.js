Template.tmp_event_item.isPromoter = function () {
    if (Meteor.userId()) {
        if (Meteor.user().username == $(this)[0].CreatedBy) return true;
    }
};

Template.tmp_event_item.events({
    'click a': function (e) {
        if (e.target.innerText == "Delete") {
            alert('delete');
            Meteor.call('EventSetDelete', $(this)[0].Unique, function (err, res) {
                if (err) alert('del err');
                else alert('del sucssess')
            });
        }
    }

});
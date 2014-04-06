Template.tmp_events.created = function () {
    Session.set(SessionRef.Name.ActiveEventType, 'all');
};

Template.tmp_events.rendered = function () {
    $('#selEvtTypeFilter').selectpicker();
};
Template.tmp_events.all_events = function () {
    if (Session.equals(SessionRef.Name.ActiveEventType, 'all'))
        return Events.find();
    else
        return Events.find({
            Type: Session.get(SessionRef.Name.ActiveEventType)
        });
};
Template.tmp_events.events({
    'change #selEvtTypeFilter': function () {
        Session.set(SessionRef.Name.ActiveEventType, $('#selEvtTypeFilter').val());
    }
});
Template.tmp_new_event.created = function () {
    Session.set('CreateNewEventType', 'job');
};

Template.tmp_new_event.rendered = function () {
    $('#selEvtTypeFilter').selectpicker();
};

Template.tmp_new_event.events({
    'change #selEvtTypeFilter': function () {
        Session.set('CreateNewEventType', $('#selEvtTypeFilter').val());
    }
});

Template.tmp_new_event.isJob = function () {
    return Session.equals('CreateNewEventType', 'job');
};

Template.tmp_new_event.isEvent = function () {
    return Session.equals('CreateNewEventType', 'event');
};

Template.tmp_new_event.isWorkshop = function () {
    return Session.equals('CreateNewEventType', 'workshop');
};

Template.tmp_new_event.isSeminar = function () {
    return Session.equals('CreateNewEventType', 'seminar');
};

Template.tmp_new_event.isCompetition = function () {
    return Session.equals('CreateNewEventType', 'comptition');
};
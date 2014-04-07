Template.tmp_event_page.evt_name = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    return event && event.Name;
};

Template.tmp_event_page.evt_promoter = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    return event && event.Promoter;
};

Template.tmp_event_page.promoter_username = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    return event && event.CreatedBy;
};

Template.tmp_event_page.evt_type = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    return event && event.Type;
};

Template.tmp_event_page.sameEvents = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    if (event)
        return Events.find({
            IsDeleted: false,
            IsExpired: false,
            Type: event.Type
        }, {
            limit: 4
        });
};

Template.tmp_event_page.profpic = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    if (event) {
        return event.Picture;
    }
};

Template.tmp_event_page.loggedinAsPromoter = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    if (Meteor.userId()) {
        if (event.CreatedBy == Meteor.user().username) return true;
    }
};

Template.tmp_event_page.rendered = function () {
    var evt = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    if (Meteor.userId()) {
        if (evt.CreatedBy == Meteor.user().username) {

            $('#evtContentEditor').wysihtml5();
            $('#evtContentEditor').val(evt.Content);
            $.fn.editable.defaults.mode = 'inline';
            $('#evtName').editable({
                emptytext: "Event Name"
            });
            $('#evtType').editable({
                source: [
                    {
                        value: 'job',
                        text: 'Job'
                },
                    {
                        value: 'event',
                        text: 'Event'
                },
                    {
                        value: 'workshop',
                        text: 'Workshop'
                },
                    {
                        value: 'seminar',
                        text: 'Seminar'
                },
                    {
                        value: 'competition',
                        text: 'Competition'
                }
           ]
            });

            $('#evtType').on('save', function (e, params) {
                Meteor.call("EventSetType", Session.get(SessionRef.Name.EventUnique), params.newValue);
            });

        }
    } else {
        $('#divEvtContent').html(evt.Content);
        $('img').addClass('img-responsive');
    }

};

Template.tmp_event_page.events({
    'click #btnSaveEvtContent': function (e) {
        e.preventDefault();
        Meteor.call('EventSetContent', Session.get(SessionRef.Name.EventUnique), $('#evtContentEditor').val(), function (err, res) {
            if (err) {} else {
                $('#btnSaveEvtContent').text("saved");
            }
        });
    },
    'click #imgProfpic': function (e) {
        e.preventDefault();
        var event = Events.findOne({
            Unique: Session.get(SessionRef.Name.EventUnique)
        });
        if (Meteor.userId()) {
            if (event.CreatedBy == Meteor.user().username) {
                bootbox.prompt("Insert Image Link", function (result) {
                    if (result === null) {} else {
                        Meteor.call('EventSetPicture', Session.get(SessionRef.Name.EventUnique), result, function (err, res) {
                            if (err) {
                                $.bootstrapgrowl('error');
                            }
                        });
                    }
                });
            }
        }

    }
});
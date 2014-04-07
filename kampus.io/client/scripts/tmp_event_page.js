Template.tmp_event_page.evt_name = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    console.log(event);
    return event && event.Name;
};

Template.tmp_event_page.evt_promoter = function () {
    return Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    }).Promoter;
};

Template.tmp_event_page.promoter_username = function () {
    return Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    }).CreatedBy;
};

Template.tmp_event_page.evt_type = function () {
    
    return Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    }).Type;
};

Template.tmp_event_page.loggedinAsPromoter = function () {
    var event = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    if (Meteor.user())
        if (event.CreatedBy == Meteor.user().username) return true;
};

Template.tmp_event_page.rendered = function () {
    var evt = Events.findOne({
        Unique: Session.get(SessionRef.Name.EventUnique)
    });
    if (Meteor.user()) {
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
        console.log(evt);
        $('#divEvtContent').html(evt.Content);
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
    }
});
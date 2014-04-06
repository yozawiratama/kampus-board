Template.tmp_ins_db_mng_event.created = function () {};
Template.tmp_ins_db_mng_event.rendered = function () {};
Template.tmp_ins_db_mng_event.event_items = function () {
    var evt = Event.find({
        CreatedBy: Session.get(SessionRef.Name.ActiveUserId)
    }).fetch();
    var res = new Array();
    for (var ii = 0; ii < evt.length; ii++) {
        res[ii] = {
            evtid: evt[ii]._id,
            Name: evt[ii].Name,
            Type: evt[ii].Type,
            DueDate : new Date(evt[ii].StartDate).toDateString() + " - " + new Date(evt[ii].EndDate).toDateString()
        };
    }
    return res;
};
Template.tmp_ins_db_mng_event.events({

});
Template.tmp_modal_new_event.cretaed = function () {};
Template.tmp_modal_new_event.rendered = function () {
    $('#ddlNewEvtType').selectpicker();
    $('#ddlNewEvtProv').selectpicker();
    $('#inpNewEvtDueDate').daterangepicker();
};
Template.tmp_modal_new_event.evt_type = function () {
    var res = new Array();
    var type = new Array();
    type[0] = "Seminar";
    type[1] = "Workshop";
    type[2] = "Competition";
    type[3] = "Bazaar";
    type[4] = "Festival";
    type[5] = "Job";
    for (var ii = 0; ii < type.length; ii++) {
        res[ii] = {
            Name: type[ii]
        };
    }
    return res;
};
Template.tmp_modal_new_event.province = function () {
    var res = new Array();
    var prov = new Array();
    prov[0] = "Aceh";
    prov[1] = "Sumatera Selatan";
    prov[2] = "Jambi";
    for (var ii = 0; ii < prov.length; ii++) {
        res[ii] = {
            Name: prov[ii]
        };
    }
    return res;
};
Template.tmp_modal_new_event.events({
    'submit': function (e) {
        e.preventDefault();
        var name = $('#inpNewEvtName');
        var type = $('#ddlNewEvtType');
        var prov = $('#ddlNewEvtProv');
        var duedate = $('#inpNewEvtDueDate').val().split(' - ');
        console.log(duedate);
        var newEvt = Event.insert({
            Name: name.val(),
            Slogan: "",
            StartDate: duedate[0],
            EndDate: duedate[1],
            Thumb: "http://placehold.it/200x200",
            Poster: "http://placehold.it/1200x800",
            Type: type.val(),
            Province: prov.val(),
            Location: "",
            Content: "",
            CreatedDate: new Date(),
            CreatedBy: Session.get(SessionRef.Name.ActiveUserId),
            LastModifiedDate: new Date(),
            lastModifiedBy: Session.get(SessionRef.Name.ActiveUserId)
        });
        if (newEvt) {
            $.growl.notice({
                message: "Event Created"
            });
            $('#modalNewEvent').modal('hide');
        }

    }
});
Template.tmp_ctn_ins_list.verify_color = function () {
    var data = $(this)[0];
    console.log(data);
    if (data.IsVerified == true) {
        return "btn-success";
    } else return "btn-danger"
};
Template.tmp_ctn_ins_list.verify_disable = function () {
    var data = $(this)[0];
    if (data.IsVerified == true) {
        return "disabled";
    } else return ""
};
Template.tmp_ctn_ins_list.verify = function () {
    var data = $(this)[0];
    if (data.IsVerified == true) {
        return "Verified";
    } else return "Verify"
};

Template.tmp_ctn_ins_list.events({
    'click .btn-verify': function (e) {
        e.preventDefault();
        console.log("verify " + $(this)[0].UserInsId);
        UserInstitution.update({
            _id: $(this)[0].UserInsId
        }, {
            $set: {
                "IsVerified": true
            }
        });
    },
    'click .btn-edit': function (e) {
        e.preventDefault();
        console.log("open " + $(this)[0].UserInsId);
    },
    'click .btn-delete': function (e) {
        e.preventDefault();
        console.log("delete " + $(this)[0].UserInsId);
        console.log("delete " + $(this)[0].InsId);
        Session.set(SessionRef.Name.InstitutionId, $(this)[0].InsId);
        Session.set(SessionRef.Name.UserInstitutionId, $(this)[0].UserInsId);
        bootbox.dialog({
            message: "Are you sure want permanent delete this Institution? This action will delete all event created by deleted Institution.",
            title: "Delete Institution",
            buttons: {
                success: {
                    label: "Cancel",
                    className: "btn-default",
                    callback: function () {}
                },
                main: {
                    label: "Yes, Delete!",
                    className: "btn-danger",
                    callback: function () {
                        Institution.remove({
                            _id: Session.get(SessionRef.Name.InstitutionId)
                        });
                        UserInstitution.remove({
                            _id: Session.get(SessionRef.Name.UserInstitutionId)
                        });
                    }
                }
            }
        });
    },
});

Template.tmp_ctn_event_list.events({
    'click .btn-open': function (e) {
        e.preventDefault();
        console.log($(this)[0]);
    },
    'click .btn-edit': function (e) {
        e.preventDefault();
        console.log("edit " + $(this)[0].evtid);
    },
    'click .btn-delete': function (e) {
        e.preventDefault();
        console.log("delete " + $(this)[0].evtid);
        
    },
});
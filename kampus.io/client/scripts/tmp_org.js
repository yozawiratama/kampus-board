Template.tmp_org.created = function () {
    Session.set(SessionRef.Name.ActiveEventType, 'all');
};
Template.tmp_org.org_events = function () {
    if (Session.equals(SessionRef.Name.ActiveEventType, 'all'))
        return Events.find({
            IsDeleted: false,
            IsExpired: false,
            CreatedBy: Session.get(SessionRef.Name.OrgUn)
        });
    else
        return Events.find({
            IsDeleted: false,
            IsExpired: false,
            Type: Session.get(SessionRef.Name.ActiveEventType),
            CreatedBy: Session.get(SessionRef.Name.OrgUn)
        });
}
Template.tmp_org.org_name = function () {
    var user = Meteor.users.findOne({
        username: Session.get(SessionRef.Name.OrgUn)
    });
    return user && user.profile.Name;
}
Template.tmp_org.org_desc = function () {
    var user = Meteor.users.findOne({
        username: Session.get(SessionRef.Name.OrgUn)
    });
    return user && user.profile.Desc;
}
Template.tmp_org.org_addr = function () {
    var user = Meteor.users.findOne({
        username: Session.get(SessionRef.Name.OrgUn)
    });
    return user && user.profile.Address;
}
Template.tmp_org.org_cpname = function () {
    var user = Meteor.users.findOne({
        username: Session.get(SessionRef.Name.OrgUn)
    });
    return user && user.profile.CPName;
}
Template.tmp_org.org_cpnumber = function () {
    var user = Meteor.users.findOne({
        username: Session.get(SessionRef.Name.OrgUn)
    });
    return user && user.profile.CPNumber;
}

Template.tmp_org.rendered = function () {
    $('#selEvtTypeFilter').selectpicker();
    if (Meteor.user()) {
        if (Meteor.user().username == Session.get(SessionRef.Name.OrgUn)) {
            $.fn.editable.defaults.mode = 'inline';
            $('#orgName').editable({
                emptytext: "Name"
            });
            $('#orgDesc').editable({
                emptytext: "Description"
            });
            $('#orgAddr').editable({
                emptytext: "Address"
            });
            $('#orgCPName').editable({
                emptytext: "Contact Person Name"
            });
            $('#orgCPNumber').editable({
                emptytext: "Contact Person Name"
            });

            $('#orgName').on('save', function (e, params) {
                Meteor.call('SetOrgName', Meteor.userId(), params.newValue);
            });
            $('#orgDesc').on('save', function (e, params) {
                Meteor.call('SetOrgDesc', Meteor.userId(), params.newValue);
            });
            $('#orgAddr').on('save', function (e, params) {
                Meteor.call('SetOrgAddr', Meteor.userId(), params.newValue);
            });
            $('#orgCPName').on('save', function (e, params) {
                Meteor.call('SetOrgCPName', Meteor.userId(), params.newValue);
            });
            $('#orgCPNumber').on('save', function (e, params) {
                Meteor.call('SetOrgCPNumber', Meteor.userId(), params.newValue);
            });
        }
    }
};

Template.tmp_org.events({
    'change #selEvtTypeFilter': function () {
        Session.set(SessionRef.Name.ActiveEventType, $('#selEvtTypeFilter').val());
    }
});
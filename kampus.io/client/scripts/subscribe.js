Meteor.subscribe('events');

Deps.autorun(function () {
    var orghandle = Session.get(SessionRef.Name.OrgUn);
    orghandle = Meteor.subscribe('organization', orghandle);
});
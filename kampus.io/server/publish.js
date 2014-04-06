Meteor.publish('events', function () {
    return Events.find();
});

Meteor.publish('organization', function (un) {
    return Meteor.users.find({username : un});
});

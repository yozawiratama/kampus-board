Meteor.methods({
    SetOrgName: function (userid, name) {
        Meteor.users.update({
            _id: userid
        }, {
            $set: {
                "profile.Name": name
            }
        });
    },
    SetOrgDesc: function (userid, desc) {
        Meteor.users.update({
            _id: userid
        }, {
            $set: {
                "profile.Desc": desc
            }
        });
    },
    SetOrgAddr: function (userid, addr) {
        Meteor.users.update({
            _id: userid
        }, {
            $set: {
                "profile.Address": addr
            }
        });
    },
    SetOrgCPName: function (userid, cpname) {
        Meteor.users.update({
            _id: userid
        }, {
            $set: {
                "profile.CPName": cpname
            }
        });
    },
    SetOrgCPNumber: function (userid, cpnumber) {
        Meteor.users.update({
            _id: userid
        }, {
            $set: {
                "profile.CPNumber": cpnumber
            }
        });
    },
    OrgGetNamebyUsername: function (un) {
        return Meteor.users.findOne({
            username: un
        }).profile.Name;
    }
});

Meteor.methods({
    EventCreate: function (name, unique, type, username, promoterName) {
        var now = new Date();
        var expireDate;
        if (now.getMonth() == 11) {
            expireDate = new Date(now.getFullYear() + 1, 3, now.getDate());
        } else {
            expireDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
        }
        Events.insert({
            Name: name,
            Unique: unique,
            Type: type,
            Promoter: promoterName,
            CreatedBy: username,
            ExpireDate: expireDate,
            IsDeleted: false,
            IsExpired: false
        });
    },
    EventUniqueCheck: function (unique) {
        if (Events.find({
            Unique: unique
        }).count() == 0)
            return true;
        else return false;
    },
    EventSetType: function (unique, type) {
        Events.update({
            Unique: unique
        }, {
            $set: {
                Type: type
            }
        });
    },
    EventSetContent: function (unique, content) {
        Events.update({
            Unique: unique
        }, {
            $set: {
                Content: content
            }
        });
    },
    EventSetDelete: function (unique) {
        Events.update({
            Unique: unique
        }, {
            $set: {
                Unique: "",
                IsDeleted: true
            }
        });
    }
});
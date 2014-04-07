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
    OrgSetTwitter: function (userid, twitId) {
        Meteor.users.update({
            _id: userid
        }, {
            $set: {
                "profile.Twitter": twitId
            }
        });
    },
    OrgSetPicture: function (userid, url) {
        Meteor.users.update({
            _id: userid
        }, {
            $set: {
                "profile.Picture": url
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
            Picture : "http://placehold.it/150x150",
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
    EventSetPicture: function (unique, url) {
        Events.update({
            Unique: unique
        }, {
            $set: {
                Picture: url
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
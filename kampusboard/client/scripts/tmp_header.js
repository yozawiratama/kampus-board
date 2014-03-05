Template.tmp_header.created = function () {};

Template.tmp_header.dashboard = function () {
    console.log(Session.get(SessionRef.Name.PageType));
    if (Session.equals(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard))
        return true;
    else return false;
};

Template.tmp_header.logged_in_as_admin = function () {
    if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Administrator)) return true;
    else return false;
};

Template.tmp_header.msg_amount = function () {
    return 0;
};

Template.tmp_header.admin = function () {
    if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Administrator)) return true;
    else return false;
};

Template.tmp_header.not_logged_in = function () {
    if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Anonymous) || Session.equals(SessionRef.Name.ActiveUserType, undefined)) return true;
    else
        return false;
};
Template.tmp_header.logged_in_as_institution = function () {
    if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Institution)) return true;
    else
        return false;
};
Template.tmp_header.logged_in_as_member = function () {
    if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Member)) return true;
    else
        return false;
};
Template.tmp_header.activeName = function () {
    var usr;
    if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Member))
        usr = UserMember.findOne(Session.get(SessionRef.Name.ActiveUserId));
    else if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Institution))
        usr = UserInstitution.findOne(Session.get(SessionRef.Name.ActiveUserId));
    return usr && usr.Email;
};
Template.tmp_header.rendered = function () {};
Template.tmp_header.events({
    'click #hplUserSignIn': function (e) {
        e.preventDefault();
        Router.navigate("/signin", true);
    },
    'click #hplUserSignUp': function (e) {
        e.preventDefault();
        Router.navigate("/signup", true);
    },
    'click #hplInsSignUp': function (e) {
        e.preventDefault();
        Router.navigate("/institution/signup", true);
    },
    'click #hplFAQ': function (e) {
        e.preventDefault();
        Router.navigate("/faq", true);
    },
    'click #hplWhatIs': function (e) {
        e.preventDefault();
        Router.navigate("/whatis", true);
    },
    'click #hplLanding': function (e) {
        e.preventDefault();
        Router.navigate("", true);
    },
    'click #hplManageIns': function (e) {
        e.preventDefault();
        Router.navigate("/administrator/Institution", true);
    },
    'click #hplManageEvt': function (e) {
        e.preventDefault();
        if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Administrator)) {
            Router.navigate("/administrator/events", true);
        } else if (Session.equals(SessionRef.Name.ActiveUserType, SessionRef.Value.UserType.Institution)) {
            Router.navigate("/institution/events/"+Session.get(SessionRef.Name.ActiveUserId), true);
        }
    },
    'click #hplManageMember': function (e) {
        e.preventDefault();
        Router.navigate("/administrator/members", true);
    }
});
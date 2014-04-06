var KampusBoardRouter = Backbone.Router.extend({
    routes: {
        "": "Main",
        "event/:evt_id": "EventPage",
        "faq": "FAQ",
        "whatis": "WhatIs",
        "signin": "UserSignIn",
        "signup": "UserSignUp",

        "institution/signin": "InstitutionSignIn",
        "institution/signup": "InstitutionSignUp",
        "institution/:ins_id": "InstitutionDBHome",
        "institution/events/:ins_id": "InstitutionDBEvent",
        "institution/detail/event/:ins_id/:evt_id": "InstitutionDBDetailEvent",

        "administrator/signin": "AdministratirSignIn",
        "administrator/": "AdministratirDBHome",
        "administrator/inbox": "AdministratirDBInbox",
        "administrator/events": "AdministratirDBEvents",
        "administrator/members" : "AdministratirDBMembers",
        "administrator/Institution": "AdministratirDBInstitution",
        "administrator/detail/event/:ins_id/:evt_id": "AdministratirDBDetailEvent",


    },
    Main: function () {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Front);
        Render(TemplateRef.User.Landing);

    },
    EventPage: function (evt_id) {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Front);
        Render(TemplateRef.User.Event);
    },
    FAQ: function () {
        Render(TemplateRef.User.FAQ);
    },
    WhatIs: function () {
        Render(TemplateRef.User.WhatIs);
    },
    UserSignIn: function () {
        Render(TemplateRef.User.SignIn);
    },
    UserSignUp: function () {
        Render(TemplateRef.User.SignUp);
    },

    InstitutionSignIn: function () {
        Render(TemplateRef.Institution.SignIn);
    },
    InstitutionSignUp: function () {
        Render(TemplateRef.Institution.SignUp);
    },
    InstitutionDBHome: function (ins_id) {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Institution.Home);
    },
    InstitutionDBEvent: function (ins_id) {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Institution.Manage.Event);
    },
    InstitutionDBDetailEvent: function (ins_id, evt_id) {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Institution.Detail.Event);
    },

    AdministratirSignIn: function () {
        Render(TemplateRef.Administrator.SignIn);
    },
    AdministratirDBHome: function () {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Administrator.Home);
    },
    AdministratirDBInbox: function () {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Administrator.Inbox);
    },
    AdministratirDBEvents: function () {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Administrator.Manage.Event);
    },
    AdministratirDBMembers : function(){
    Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Administrator.Manage.Members);
    },
    AdministratirDBInstitution : function(){
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Administrator.Manage.Institution);
    },
    AdministratirDBDetailEvent: function (ins_id, evt_id) {
        Session.set(SessionRef.Name.PageType, SessionRef.Value.PageType.Dashboard);
        Render(TemplateRef.Administrator.Detail.Event);
    }

});

function Render(template) {
    var fragment = Meteor.render(function () {
        if (Template[template] !== undefined) {
            return Template[template]();
        }
    });
    $('#BodyContent').html(fragment);
}

Router = new KampusBoardRouter;

Meteor.startup(function () {
    Backbone.history.start({
        pushState: true
    });
});
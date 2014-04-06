Router.configure({
    layoutTemplate: 'layout_main',
    //    loadingTemplate: 'loading',
    //    notFoundTemplate: 'page_404',
    yieldTemplates: {
        'tmp_header': {
            to: 'header'
        },
        'tmp_footer': {
            to: 'footer'
        }
    }
});
Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'tmp_events',
        onAfterAction: function () {
            console.log("test");
        },
        data: {
            all_events: function () {
                console.log("on events");
                return Events.find();
            }
        }
    });
    this.route('signin', {
        path: '/signin',
        template: 'tmp_signin',
        onAfterAction: function () {
            if (Meteor.userId()) Router.go("/");
        }

    });
    this.route('signup', {
        path: '/signup',
        template: 'tmp_signup',
        onAfterAction: function () {
            if (Meteor.userId()) Router.go("/");
        }
    });
    this.route('event_page', {
        path: '/:evt_unique',
        template: 'tmp_event_page',
        onAfterAction: function () {
            Session.set(SessionRef.Name.EventUnique, this.params.evt_unique);
        }

    });
    this.route('org_page', {
        path: '/org/:org_un',
        template: 'tmp_org',
        onBeforeAction: function () {
            Session.set(SessionRef.Name.OrgUn, this.params.org_un);
            
        },
        onAfterAction: function () {

        }
    });
    this.route('new_event', {
        path: '/new/event',
        template: 'tmp_new_event',
        onBeforeAction: function () {
            
        },
        onAfterAction: function () {

        }
    });

});
TemplateRef = {
    User: {
        Landing: "tmp_landing",
        Event: "tmp_event_page",
        FAQ : "tmp_faq",
        WhatIs : "tmp_whatis",
        SignIn: "tmp_usr_signin",
        SignUp: "tmp_usr_signup",
    },
    Institution: {
        SignIn: "tmp_ins_signin",
        SignUp: "tmp_ins_signup",
        Home: "tmp_ins_db_home",
        Manage: {
            Event: "tmp_ins_db_mng_event"

        },
        Detail: {
            Event: "tmp_detail_event"
        }
    },
    Administrator: {
        SignIn: "tmp_adm_signin",
        Home: "tmp_adm_db_home",
        Inbox: "tmp_adm_msg",
        Manage: {
            Event: "tmp_adm_db_mng_event",
            Institution : "tmp_adm_db_mng_ins",
            Members : "tmp_adm_db_mng_member"
        },
        Detail: {
            Event: "tmp_detail_event"
        }
    }
};

SessionRef = {
    Name: {
        ActiveUserId : "activeuserid",
        ActiveUserType : "activeusertype",
        MemberId : "memberid",
        UserMemberId : "usermemberid",
        InstitutionId : "institutionid",
        UserInstitutionId : "userinstitutionid",
        EventId : "eventid",
        PageType : "pagetype"
    },
    Value: {
        UserType: {
            Anonymous: "anonymous",
            Member: "member",
            Institution: "insttitution",
            Administrator: "administrator"
        },
        PageType : {
            Dashboard : "dashboard",
            Front : "front"
        }
    },
};
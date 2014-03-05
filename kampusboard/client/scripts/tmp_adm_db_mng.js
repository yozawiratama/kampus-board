Template.tmp_adm_db_mng_ins.ins_items = function () {
    var ins = Institution.find().fetch();
    var res = new Array();
    for (var ii = 0; ii < ins.length; ii++) {
        var usIns = UserInstitution.findOne({
            Institution_ID: ins[ii]._id
        });
        if (usIns) {
            res[ii] = {
                UserInsId : usIns._id,
                InsId : ins[ii]._id,
                Name: ins[ii].Name,
                Email: usIns.Email,
                CPName: ins[ii].CPName,
                CPPhone: ins[ii].CPPhone,
                CreatedDate: new Date(usIns.CreatedDate).toDateString(),
                IsVerified: usIns.IsVerified
            };
        }
    }
    return res;
};
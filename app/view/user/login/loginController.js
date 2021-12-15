Ext.define('AmazSync.view.user.login.loginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-login-login',
    init: function () {
        var me = this, vm = me.getViewModel(), view = me.getView(), form = view.getForm();

        view.setHidden(true);
        var token = tokenStorage.retrieve();
        if (Ext.isEmpty(token)) {
            view.setHidden(false);
            view.setLoading(false)
            return false;
        }
        view.setLoading(true)
        Ext.Ajax.request({
            url: commonutil.getUrl("users/validateToken"),
            headers: {
                "authorization": token
            },
            success: function (response) {
                view.setLoading(false);
                // Ext.Ajax.on('beforerequest', function (conn, options) {
                //     options.headers['Authorization'] = tokenStorage.retrieve();
                // });
                Ext.create('AmazSync.view.main.Main');
                view.destroy();
            },
            failure: function (response) {
                view.setLoading(false)
                view.setHidden(false);
            }
        })
    },

    showRegister: function () {
        var vm = this.getViewModel();
        vm.set('hideResiter', false);
        vm.set('hideLogin', true);
    },
    login: function (btn) {
        var me = this, vm = me.getViewModel(), view = me.getView(), form = view.getForm();
        if (form.isValid()) {
            view.setLoading(true);
            Ext.Ajax.request({
                url: commonutil.getUrl("users/login"),
                params: form.getValues(),
                success: function (response) {
                    view.setLoading(false);
                    var res = JSON.parse(response.responseText);
                    if (Ext.isEmpty(res.token)) {
                        vm.set("error", "Something wrong. Please contact to Admin");
                        return false
                    }
                    Ext.create('AmazSync.view.main.Main');
                    tokenStorage.save(res.token);
                    Ext.Ajax.on('beforerequest', function (conn, options) {
                        options.headers['Authorization'] = tokenStorage.retrieve();
                    });
                    view.destroy();
                },
                failure: function (response) {
                    view.setLoading(false);
                    vm.set("error", response.responseText);
                }
            });
        } else {

        }
    }
});

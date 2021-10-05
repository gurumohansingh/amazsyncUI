Ext.define('AmazSync.view.settings.amazonConnect.settingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings-amazonconnect-setting',

    init: function () {
        var me = this, form = me.getView().getForm();
        commonutil.apiCall('settings/getsellerSetting', commonutil.GET, null, me.getView())
            .then(response => {
                var setting = JSON.parse(response)
                me.getViewModel().set(JSON.parse(setting.settings));
            })
    },

    UpdateSetting: function (dtn) {
        var me = this, form = me.getView().getForm();
        commonutil.apiCall('settings/update', commonutil.POST, form.getValues(), me.getView());
    }

});

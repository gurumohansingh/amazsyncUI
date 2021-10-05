
Ext.define('AmazSync.view.settings.setting', {
    extend: 'Ext.tab.Panel',
    xtype: 'settings',
    requires: [
        'AmazSync.view.settings.settingController',
        'AmazSync.view.settings.settingModel',
        'AmazSync.view.settings.amazonConnect.setting'
    ],
    title: 'Settings',
    controller: 'settings-setting',
    viewModel: {
        type: 'settings-setting'
    },
    items: [{
        xtype: 'amazonConnectSetting',
        title: 'Amazon Connect'
    }, {
        title: 'SMTP Setting'
    },
    {
        title: 'Job'
    }]
});

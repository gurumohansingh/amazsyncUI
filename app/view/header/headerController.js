Ext.define('AmazSync.view.header.headerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header-header',
    init: function () {
        var vm = this.getViewModel();
        commonutil.apiCall('info/getLastSync', "GET", null, null).then(responce => {
            var responseJson = JSON.parse(responce)
            vm.set('lastRun', Ext.util.Format.date(responseJson['timespan'], 'd M, Y g:i a'));
        })
    },
    setting: function (btn) {
        navigation.addComponent({
            xtype: 'settings',
            tabName: 'setting',
            title: 'Setting'
        });
    },
    openproductList: function (btn) {
        navigation.addComponent({
            xtype: 'productsPanel',
            tabName: 'ProductList',
            title: 'Product List'
        });
    },
    openSuppliers: function (btn) {
        navigation.addComponent({
            xtype: 'suppliers',
            tabName: 'Suppliers',
            title: 'Suppliers'
        });
    },
    updateInventory: function (btn) {
        Ext.Msg.show({
            title: 'Updating Local Inventory',
            message: 'Do you want to run process in background?',
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    commonutil.apiCall('mws/sync', "GET", null, null).then(responce => {
                        Ext.getStore('productList').reload();
                        Ext.Msg.alert('Local Inventory', 'Local Inventory Updated successfully.');
                    })
                }
            }
        });
    }
});

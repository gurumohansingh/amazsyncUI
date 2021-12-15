Ext.define('AmazSync.view.inventory.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-inventory',
    init: function () {
        var vm = this.getViewModel();
        commonutil.apiCall('settings/getsetting', commonutil.GET, { settinggroup: 'defaultWarehouse' }, this.getView())
            .then(response => {
                var setting = JSON.parse(response);
                var value = JSON.parse(setting.settings)
                vm.set('defaultWarehouse', value.defaultWarehouse);
            })
    },

    filterByWareHouse: function (combo, newValue, oldValue) {

    }

});

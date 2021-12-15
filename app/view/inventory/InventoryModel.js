Ext.define('AmazSync.view.inventory.InventoryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.inventory-inventory',
    data: {
        name: 'AmazSync',
        defaultWarehouse: null,
    },
    stores: {
        // warehousesStore: {
        //     autoLoad: true,
        //     method: 'GET',
        //     type: 'ajaxStore',
        //     proxy: {
        //         type: 'ajax',
        //         url: commonutil.getUrl('location/getwarehouses'),
        //         reader: {
        //             type: 'json',
        //             rootProperty: ''
        //         }
        //     },
        // }
    }
});

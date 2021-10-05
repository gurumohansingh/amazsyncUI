Ext.define('AmazSync.view.products.ProductsPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.products-productspanel',
    applyFilter: function (radio, newValue) {
        var me = this, view = me.getView();
        var statusFilterValue = view.lookupReference('statusFilter').getValue(),
            searchFilterValue = view.lookupReference('searchFilter').getValue().toLowerCase();
        var store = Ext.getStore('productList');
        store.clearFilter(true);
        var statusFilter = true, searchFilter = true;
        console.log(statusFilterValue['status'], searchFilterValue);
        store.filterBy((record) => {
            if (statusFilterValue['status'] == "All") {
                statusFilter = true;
            }
            else {
                statusFilter = record.get('status') == statusFilterValue['status'];
            }
            if (searchFilterValue.trim() == "") {
                searchFilter = true;
            }
            else {
                searchFilter = record.get('itemName').toLowerCase().includes(searchFilterValue) || record.get('sellerSKU').toLowerCase().includes(searchFilterValue) || record.get('amazonASIN').toLowerCase().includes(searchFilterValue);
            }
            return statusFilter && searchFilter;
        });
        view.lookupReference('productList').getController().updateCount();
    }
});

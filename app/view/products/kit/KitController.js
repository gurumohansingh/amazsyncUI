Ext.define('AmazSync.view.products.kit.KitController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.products-kit-kit',
    init: function () {
        var me = this, view = me.getView(), vm = me.getViewModel(), kitStore = vm.getStore('productskitStore'),
            AllProductskitStore = vm.getStore('AllProductskitStore');
        var parentProduct = view.parentProduct;

        view.lookupReference('image').setSrc(parentProduct.imageUrl);
        view.lookupReference('sku').setValue(parentProduct.sellerSKU);
        view.lookupReference('productName').setValue(parentProduct.itemName);

        kitStore.getProxy().setExtraParam('parentSku', parentProduct.sellerSKU);
        kitStore.load();

        AllProductskitStore.getProxy().setExtraParam('sellerSKU', parentProduct.sellerSKU);
        AllProductskitStore.load();
    },

    applyFilter: function (searchCmp) {
        var newValue = searchCmp.getValue();
        var searchValue = newValue.toLowerCase().trim();
        var me = this, view = me.getView(), vm = me.getViewModel(), kitStore = vm.getStore('productskitStore'),
            AllProductskitStore = vm.getStore('AllProductskitStore'),
            allFilterdProductskitStore = vm.getStore('allFilterdProductskitStore');
        AllProductskitStore.clearFilter(true);
        allFilterdProductskitStore.removeAll();
        if (!Ext.isEmpty(newValue)) {
            AllProductskitStore.filterBy((record) => {
                if (record.get('itemName').toLowerCase().includes(searchValue) || record.get('sellerSKU').toLowerCase().includes(searchValue) || record.get('amazonASIN').toLowerCase().includes(searchValue)) {
                    allFilterdProductskitStore.add(record);
                }
            });
        }
        return true;
    },

    removeProductFromKit: function (grid, rowIndex, colIndex) {
        var me = this, view = me.getView(), vm = me.getViewModel(), store = grid.getStore();
        var product = store.getAt(rowIndex);

        AllProductskitStore = vm.getStore('AllProductskitStore');
        var params = {
            sku: product.get('sellerSKU'),
            parentSku: view.parentProduct.sellerSKU
        };
        commonutil.apiCall('kit/deletekitproduct', commonutil.DELETE, params, view)
            .then((res) => {
                delete
                    Ext.toast('Deleted Successfully');
                AllProductskitStore.reload();
                store.reload();
            })
            .catch((err) => {

                Ext.toast('Enable to delete');
            })

    },

    addProductInKit: function (grid, rowIndex, colIndex) {
        var me = this, view = me.getView(), store = grid.getStore(), vm = me.getViewModel();
        var product = store.getAt(rowIndex);
        var kitStore = vm.getStore('productskitStore'),
            AllProductskitStore = vm.getStore('AllProductskitStore');
        var params = {
            sku: product.get('sellerSKU'),
            parentSku: view.parentProduct.sellerSKU
        };
        var checkExist = kitStore.find('sellerSKU', product.get('sellerSKU'));

        if (checkExist > -1) {
            Ext.toast('SKU already in kit list');
            return false;
        }
        commonutil.apiCall('kit/addkitproduct', commonutil.POST, params, view)
            .then((res) => {
                Ext.toast('Added Successfully');
                AllProductskitStore.reload();
                kitStore.reload();
            })
            .catch((err) => {
                Ext.toast('Enable to add');
            })

    }
});

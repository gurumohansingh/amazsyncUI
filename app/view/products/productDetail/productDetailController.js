Ext.define('AmazSync.view.products.productDetail.productDetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.products-productdetail-productdetail',

    init: function () {

        var me = this, view = me.getView(), vm = me.getViewModel();


    },
    afterrender: function () {

        var me = this, view = me.getView(), vm = me.getViewModel();
        var tagField = view.lookupReference('tagField');
        tagField.setValue(vm.get('tag'));

        view.lookupReference('supplierList').getproductsuppliers(vm.get('sellerSKU'));
    },
    saveProduct: function (btn) {

        var me = this, view = me.getView(), vm = me.getViewModel();
        var updatedata = vm.getData();

        var dimensionsLocal = {
            Length: updatedata['dimensionsLLocal'],
            Width: updatedata['dimensionsWLocal'],
            Height: updatedata['dimensionsHLocal']
        };

        var parmas = {
            sellerSKU: updatedata['sellerSKU'],
            location: updatedata['location'],
            suppliers: updatedata['suppliers'],
            reshippingCost: updatedata['reshippingCost'],
            prepMaterialCost: updatedata['prepMaterialCost'],
            prepLaborCost: updatedata['prepLaborCost'],
            tag: updatedata['tag'],
            kit: updatedata['kit'],
            targetDaysInAmazon: updatedata['targetDaysInAmazon'],
            targetDaysInWarehouse: updatedata['targetDaysInWarehouse'],
            isPartSKUOnly: updatedata['isPartSKUOnly'] == true ? 1 : 0,
            casePackUPC: updatedata['casePackUPC'],
            EANLocal: updatedata['EANLocal'],
            packageWeightLocal: updatedata['packageWeightLocal'],
            itemNoteLocal: updatedata['itemNoteLocal'],
            dimensionsLocal: JSON.stringify(dimensionsLocal),
            UPCLocal: updatedata['UPCLocal'],
            isActiveLocal: updatedata['isActiveLocal'] == true ? 1 : 0,
            additionalPrepInstructions: updatedata['additionalPrepInstructions'],
            warehouse: updatedata['warehouse']
        }
        commonutil.apiCall('products/update', commonutil.PUT, parmas, view)
            .then((res) => {
                Ext.toast('Submit Successfully');
                Ext.getStore('productList').reload();
            })
            .catch((err) => {
                Ext.toast('Enable to submit');
            })
    },

    loadBiLocation: function (combo, newValue) {
        var me = this, view = me.getView(), vm = me.getViewModel();
        var store = vm.getStore('warehouseStore');
        store.getProxy().setExtraParam('warehouseId', newValue);
        store.load(function () {
            combo.setValue(vm.get('warehouse'));
        });

    },

    validateBilocation: function (combo, newValue, oldValue) {
        var me = this, view = me.getView(), vm = me.getViewModel();
        if (!Ext.isEmpty(newValue)) {
            var selected = combo.getSelectedRecord().getData();
            selected['sellerSKU'] = vm.get('sellerSKU');
            commonutil.apiCall('location/validatebilocation', commonutil.GET, selected, view)
                .then((res) => {
                    combo.setValue(vm.get('location'));
                    var products = JSON.parse(res);
                    if (products && products[0] && !Ext.isEmpty(products[0].sellerSKU)) {

                        Ext.MessageBox.show({
                            title: 'Location',
                            msg: `Selected location is associted with ${products[0].sellerSKU}. Are you sure you want to proceed?<br> It will remove the location of sku ${products[0].sellerSKU}`,
                            buttons: Ext.MessageBox.OKCANCEL,
                            icon: Ext.MessageBox.WARNING,
                            fn: function (btn) {
                                if (btn == 'ok') {
                                    me.removeLocation(selected);
                                } else {
                                    combo.setValue(oldValue);
                                }
                            }
                        });
                    }

                })
                .catch((err) => {
                    Ext.toast('Enable to fetch');
                })
        }
    },

    removeLocation: function (location) {
        var me = this, view = me.getView();
        commonutil.apiCall('location/removeproductlocation', commonutil.DELETE, location, view)
            .then((res) => {
                Ext.toast('Location removed successfully');
                Ext.getStore('productList').reload();
            })
            .catch((err) => {
                Ext.toast('Enable to remove');
            })
            .catch((err) => {
                Ext.toast('Enable to remove');
            })
    }
});

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
        debugger
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
            targetDaysOnHand: updatedata['targetDaysOnHand'],
            isPartSKUOnly: updatedata['isPartSKUOnly'] == true ? 1 : 0,
            casePackUPC: updatedata['casePackUPC'],
            EANLocal: updatedata['EANLocal'],
            packageWeightLocal: updatedata['packageWeightLocal'],
            itemNoteLocal: updatedata['itemNoteLocal'],
            dimensionsLocal: JSON.stringify(dimensionsLocal),
            UPCLocal: updatedata['UPCLocal'],
            isActiveLocal: updatedata['isActiveLocal'] == true ? 1 : 0,
            additionalPrepInstructions: updatedata['additionalPrepInstructions'],
        }
        commonutil.apiCall('products/update', commonutil.PUT, parmas, view)
            .then((res) => {
                Ext.toast('Submit Successfully');
                Ext.getStore('productList').reload();
            })
            .catch((err) => {
                Ext.toast('Enable to submit');
            })
    }

});

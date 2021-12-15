Ext.define('AmazSync.view.products.productList.productListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.products-productlist-productlist',
    init: function () {
        var me = this, view = me.getView(), store = view.getStore();
        store.on('load', () => {
            me.updateCount();
        }, me)
        store.load();
    },
    syncProducts: function (tool) {
        var me = this, view = me.getView(), store = view.getStore();
        store.reload();
        me.updateCount();
    },
    updateCount: function () {
        var me = this, view = me.getView(), store = view.getStore(),
            vm = me.getViewModel();
        vm.set('totalCount', store.getCount());
    },
    editProduct: function (grid, rowIndex, colIndex) {
        var me = this, view = me.getView(), store = view.getStore();
        var product = store.getAt(rowIndex);
        var emtyCheckList = ['EAN', 'packageWeight', 'itemNote', 'UPC', 'isActive', 'amazonPrepInstructions'];

        var productDetailView = Ext.create('AmazSync.view.products.productDetail.productDetail', {
            title: product.get('sellerSKU')
        });
        var productData = product.getData();
        productData['dimensionsLLocal'] = "";
        productData['dimensionsL'] = "";
        productData['dimensionsWLocal'] = "";
        productData['dimensionsW'] = "";
        productData['dimensionsHLocal'] = "";
        productData['dimensionsH'] = "";
        productData['tag'] = productData['tag'].split(',');
        if (!Ext.isEmpty(productData['expirationDateRequired'])) {
            productData['expirationDateRequired'] == 1 ? "Yes" : "No";
        }
        if (!Ext.isEmpty(productData['dimensions'])) {
            debugger
            var dimensions = JSON.parse(productData['packageDimensions']);
            productData['dimensionsL'] = dimensions['Length'].Value;
            productData['dimensionsW'] = dimensions['Width'].Value;
            productData['dimensionsH'] = dimensions['Height'].Value;
        }
        if (!Ext.isEmpty(productData['dimensionsLocal'])) {

            var dimensions = JSON.parse(productData['dimensionsLocal']);
            productData['dimensionsLLocal'] = dimensions['Length'];
            productData['dimensionsWLocal'] = dimensions['Width'];
            productData['dimensionsHLocal'] = dimensions['Height'];
        }
        if (productData['productIdType'] == 3) {
            productData['UPC'] = productData['productId'];
        }
        if (productData['productIdType'] == 4) {
            productData['EAN'] = productData['productId']
        }
        if (!Ext.isEmpty(productData['packageWeight'])) {

            var packageWeight = JSON.parse(productData['packageWeight']);
            productData['packageWeight'] = packageWeight['Value'];
        }
        else {

            productData['packageWeight'] = "N/A";
        }

        productData['isActive'] = productData['isActive'] == 1 ? "Yes" : "No";
        for (var key in productData) {

            if (Ext.isEmpty(productData[key]) && emtyCheckList.includes(key) > 0) {
                productData[key] = 'N/A';
            }

        }

        productDetailView.getViewModel().set(productData);
        navigation.addComponent({
            productDetailView,
            directComponent: true,
            tabName: product.get('sellerSKU')
        });
    },

    getProductSuppliers: function (grid, rowIndex, colIndex) {
        var me = this, view = me.getView(), store = view.getStore();
        var product = store.getAt(rowIndex);
        Ext.ComponentQuery.query('supplierList')[0].getproductsuppliers(product.get('sellerSKU'));
    },

    viewKit: function (grid, rowIndex, colIndex) {
        var me = this, view = me.getView(), store = view.getStore();
        var product = store.getAt(rowIndex);
        var win = Ext.create('Ext.window.Window', {
            title: 'Kit',
            items: [{
                xtype: 'kit',
                parentProduct: product.getData(),
            }],
            width: '90%',
            height: Ext.getBody().getHeight() - 200,
            listeners: {
                close: function () {
                    store.reload();
                }
            }
        });
        win.show();
    }

});

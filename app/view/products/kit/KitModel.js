Ext.define('AmazSync.view.products.kit.KitModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.products-kit-kit',
    data: {
        name: 'AmazSync'
    },
    stores: {
        productskitStore: {
            autoLoad: false,
            method: 'GET',
            type: 'ajaxStore',
            proxy: {
                type: 'ajax',
                url: commonutil.getUrl('kit/getkitproducts'),
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            }
        },
        AllProductskitStore: {
            autoLoad: false,
            method: 'GET',
            type: 'ajaxStore',
            proxy: {
                type: 'ajax',
                url: commonutil.getUrl('kit/getallkitproducts'),
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            }
        },
        allFilterdProductskitStore: {
            autoLoad: false,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            }
        },

    }

});

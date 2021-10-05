Ext.define('AmazSync.view.suppliers.SuppliersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.suppliers-suppliers',
    data: {
        name: 'AmazSync'
    },

    stores: {
        suppierStore: {
            autoLoad: true,
            fields: [{
                name: 'totalPackcost', type: 'number',
                convert: function (v, rec) {
                    if (Ext.isEmpty(rec.get('costPerUnit')) || Ext.isEmpty(rec.get('casePackQuantity'))) {
                        return null
                    }
                    return rec.get('costPerUnit') * rec.get('casePackQuantity');
                }
            }],
            method: 'GET',
            type: 'ajaxStore',
            proxy: {
                type: 'ajax',
                url: commonutil.getUrl('supplier'),
                reader: {
                    type: 'json',
                    rootProperty: 'users'
                }
            }
        }
    }

});

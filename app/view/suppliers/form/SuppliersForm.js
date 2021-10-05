
Ext.define('AmazSync.view.suppliers.form.SuppliersForm', {
    extend: 'Ext.form.Panel',

    xtype: 'suppliersForm',
    requires: [
        'AmazSync.store.skuStore'
    ],
    reference: 'suppliersForm',
    title: 'Add/Update Suppliers',
    buttonAlign: 'center',
    margin: 10,
    border: false,
    scrollable: true,
    layout: {
        type: 'form'
    },

    items: [{
        layout: 'vbox',
        defaults: {
            labelWidth: 100,
            xtype: 'textfield',
            margin: 10,
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'id',
        }, {
            fieldLabel: 'Supplier Name',
            name: 'supplierName',
            allowBlank: false,
        },
        {
            fieldLabel: 'Address',
            name: 'address',
            allowBlank: false,
            height: 50,
        },
        {
            fieldLabel: 'City',
            name: 'city'
        },
        {

            fieldLabel: 'State',
            name: 'state'
        },
        {

            fieldLabel: 'Country',
            name: 'country',
            inputValue: 1,
        },
        {

            fieldLabel: 'Zip Code',
            name: 'zipCode'
        }, {

            fieldLabel: 'Phone',
            name: 'phone'
        }, {

            fieldLabel: 'Contact Name',
            name: 'contactName'
        }, {

            fieldLabel: 'Contact Email',
            name: 'contactEmail',
            vtype: 'email'
        }, {

            fieldLabel: 'MAP',
            name: 'MAP'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'MSRP',
            name: 'MSRP'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'MRP',
            name: 'MRP'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Lead Time',
            name: 'leadTime'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Default Days of Stock',
            name: 'defaultDaysofStock'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Free Freight Min',
            name: 'freeFreightMin'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Min Purchase Budget',
            name: 'minPurchaseBudget'
        }, {
            fieldLabel: 'Payment Terms',
            name: 'paymentTerms'
        }, {
            xtype: 'textarea',
            fieldLabel: 'PO Notes',
            name: 'PONotes'
        }, {
            xtype: 'combo',
            fieldLabel: 'Default Currency',
            name: 'defaultCurrency',
            displayField: 'value',
            valueField: 'value',
            store: {
                data: [{ value: 'USD' }, { value: 'JPY' }, { value: 'EUR' }, { value: 'GBP' }, { value: 'AUD' }, { value: 'CAD' }, { value: 'CHF' }, { value: 'CNH' },]
            }
        }, {
            xtype: 'textarea',
            fieldLabel: 'Internal Notes',
            name: 'internalNotes'
        }, {
            xtype: 'combo',
            fieldLabel: 'Shipment Method',
            name: 'shipmentMethod',
            displayField: 'value',
            valueField: 'value',
            store: {
                data: [{ value: 'Air' }, { value: 'Train' }, { value: 'Truckload' }, { value: 'LTL' }, { value: 'Ocean' }]
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Default Tax',
            name: 'defaultTax'
        }]
    }],
    buttons: [{
        text: 'Submit',
        handler: 'submit'
    }, {
        text: 'Delete',
        handler: 'delete'
    }, {
        text: 'Cancel',
        handler: 'cancel'
    }]

});

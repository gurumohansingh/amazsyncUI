
Ext.define('AmazSync.view.products.ProductsPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'productsPanel',
    requires: [
        'AmazSync.view.products.ProductsPanelController',
        'AmazSync.view.products.ProductsPanelModel',
        'AmazSync.view.products.productList.suppliers.SupplierList'
    ],

    controller: 'products-productspanel',
    viewModel: {
        type: 'products-productspanel'
    },
    layout: 'border',
    items: [{
        xtype: 'form',
        region: 'north',
        layout: 'hbox',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Search By',
            width: '30%',
            minWidth: 300,
            labelAlign: 'left',
            name: 'sreachBy',
            emptyText: 'Search by Name, SKU, ASIN',
            reference: 'searchFilter',
            bind: {
                value: '{searchFilter}'
            },
            triggers: {
                clear: {
                    cls: 'x-form-clear-trigger',
                    handler: function () {
                        this.setValue(null);
                    }
                }
            },
            listeners: {
                change: 'applyFilter'
            }
        }, {
            xtype: 'radiogroup',
            labelAlign: 'left',
            reference: 'statusFilter',
            minWidth: 600,
            labelWidth: 50,
            defaults: {
                name: 'status',
                width: 50
            },
            bind: {
                value: '{statusFilter}'
            },
            listeners: {
                change: 'applyFilter'
            },
            items: [
                {
                    boxLabel: 'All',
                    inputValue: 'All',
                    width: 30
                    //checked: true
                },
                {
                    boxLabel: 'Active',
                    inputValue: 'Active',
                    width: 30
                },
                {
                    boxLabel: 'Inactive',
                    inputValue: 'Inactive',
                    width: 80
                },
                {
                    boxLabel: ' Incomplete',
                    inputValue: 'Incomplete',
                    width: 80
                },
                {
                    boxLabel: 'Listing Removed',
                    inputValue: 'Listing Removed',
                    width: 130
                }
            ]
        }]
    }, {
        xtype: 'productList',
        region: 'center',
        width: '100%',
    }, {
        xtype: 'supplierList',
        region: 'east',
        width: 300,
        split: true,
        collapsible: true,
        collapsed: true,
        collapseDirection: 'right'
    }
    ]
});

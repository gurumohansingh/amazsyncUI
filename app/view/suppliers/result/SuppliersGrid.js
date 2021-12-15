
Ext.define('AmazSync.view.suppliers.result.SuppliersGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'suppliersGrid',
    cls: 'productlistgrid',
    reference: 'productList',
    bind: {
        store: '{suppierStore}'
    },
    plugins: 'gridfilters',
    titlePosition: 3,
    padding: 5,
    rowLines: false,
    //forceFit: true,
    tools: [{
        iconCls: 'x-fa fa-sync fontcolorgreen',
        tooltip: 'Refresh',
        title: 'Sync',
        handler: 'syncSupplier',
        margin: '0 0 0 10px'
    },
    {
        iconCls: 'x-fa fa-plus fontmustard',
        tooltip: 'Add New Supplier',
        margin: '0 0 0 10px',
        handler: 'addNewSupplier',
    }, {
        xtype: 'textfield',
        emptyText: 'Search',
        listeners: {
            change: 'applySearch'
        },
        triggers: {
            clear: {
                cls: 'x-form-clear-trigger',
                handler: function () {
                    this.setValue(null);
                }
            }
        },
    }],

    viewConfig: {
        enableTextSelection: true,
        emptyText: '<span class="emptytext">No Suppliers found</span>',
        textAlight: 'center'
    },
    columns: {
        defaults: {
            align: 'center',
            width: 100
        },
        items: [{
            xtype: "actioncolumn",
            align: "center",
            text: 'Action',
            width: 100,
            items: [
                {
                    tooltip: 'Edit Suppliers',
                    iconCls: 'x-fa fa-edit fontmustard',
                    handler: 'editSupplier'
                },
                {
                    tooltip: 'Remove Suppliers',
                    iconCls: 'x-fa fa-trash fontcolorred',
                    handler: 'removeSupplier'
                },
            ]
        }, {
            text: 'Supplier Name',
            dataIndex: 'supplierName',
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Address',
            dataIndex: 'address',
            width: 200,
            filter: {
                type: 'string'
            }
        },
        {
            text: 'City',
            dataIndex: 'city',
            filter: {
                type: 'string'
            }
        },
        {
            text: 'State',
            dataIndex: 'state',
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Country',
            dataIndex: 'country',
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Zip Code',
            dataIndex: 'zipCode',
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Contact Name',
            dataIndex: 'contactName',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Contact Email',
            dataIndex: 'contactEmail',
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Lead Time',
            dataIndex: 'leadTime',
            filter: {
                type: 'number'
            }
        }, {
            text: 'Free Freight Min',
            dataIndex: 'freeFreightMin',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Min Purchase Budget',
            dataIndex: 'minPurchaseBudget',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Payment Terms',
            dataIndex: 'paymentTerms',
            filter: {
                type: 'string'
            }
        }, {
            text: 'PO Notes',
            dataIndex: 'PONotes',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Default Currency',
            dataIndex: 'defaultCurrency',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Internal Notes',
            dataIndex: 'internalNotes',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Shipment Method',
            dataIndex: 'shipmentMethod',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Default Tax',
            dataIndex: 'defaultTax',
            filter: {
                type: 'string'
            }
        }, {
            text: 'Time Stamp ',
            dataIndex: 'timestamp',
            filter: {
                type: 'date'
            }
        }]
    }
});
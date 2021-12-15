
Ext.define('AmazSync.view.inventory.Inventory', {
    extend: 'Ext.panel.Panel',
    xtype: 'inventory',
    requires: [
        'AmazSync.view.inventory.InventoryController',
        'AmazSync.view.inventory.InventoryModel',
        'AmazSync.view.inventory.list.InventoryList'
    ],

    controller: 'inventory-inventory',
    viewModel: {
        type: 'inventory-inventory'
    },
    layout: 'border',
    items: [
        {
            xtype: 'container',
            layout: { type: 'hbox', pack: 'center' },
            region: 'north',
            items: [{
                xtype: 'combo',
                fieldLabel: 'Warehouse',
                name: 'warehouse',
                displayField: 'name',
                valueField: 'id',
                forceSelection: true,
                labelAlign: 'left',
                allowBlank: false,
                labelWidth: 100,
                store: 'warehouseStore',
                bind: {
                    value: '{defaultWarehouse}'
                },
                listeners: {
                    change: 'filterByWareHouse'
                }
            }, {
                xtype: "textfield",
                emptyText: 'Search By SKU, Name, ASIN',
                width: 300,
                triggers: {
                    clear: {
                        cls: 'x-form-clear-trigger',
                        handler: function () {
                            this.reset();
                        }
                    }
                },
                listeners: {
                    change: 'applyFilter'
                }

            }, {
                xtype: 'radiogroup',

                columns: 3,
                //margin: '5px 0 0 20px',
                items: [
                    { boxLabel: 'IN Stock', name: 'rb', inputValue: '1', width: 80, checked: true },
                    { boxLabel: 'OUT Of Stock', name: 'rb', inputValue: '2', width: 110 },
                    { boxLabel: 'ALL', name: 'rb', inputValue: '3', width: 30 },
                ]
            }]
        }, {
            xtype: 'inventoryList',
            region: 'center',
            margin: '10px 0 0 0',
            scrollable: true
        }
    ]
});

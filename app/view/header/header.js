
Ext.define('AmazSync.view.header.header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.headerToolBar',
    requires: [
        'AmazSync.view.header.headerController',
        'AmazSync.view.header.headerModel'
    ],

    controller: 'header-header',
    viewModel: {
        type: 'header-header'
    },
    width: '100%',
    items: ["->",
        {
            xtype: 'component',
            bind: {
                html: `Last Sync on: {lastRun}`
            }
        },
        {
            xtype: 'button',
            icon: 'resources/img/amazonProducts.png',
            cls: 'headerbtn',
            margin: '0 0 0 30px',
            text: 'Products',
            handler: 'openproductList'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-dolly fa-lg fontmustard',
            cls: 'headerbtn',
            margin: '0 0 0 30px',
            text: 'Suppliers',
            handler: 'openSuppliers'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-warehouse fa-lg fontmustard',
            cls: 'headerbtn',
            margin: '0 0 0 30px',
            text: 'Inventory',
            handler: 'localInventory'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-location-arrow  fa-lg fontmustard',
            cls: 'headerbtn',
            margin: '0 0 0 30px',
            text: 'Locations',
            handler: 'openlocation'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-sync fa-lg fontmustard',
            cls: 'headerbtn',
            margin: '0 0 0 30px',
            text: 'Sync Inventory',
            handler: 'updateInventory'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-user fa-lg fontmustard',
            cls: 'headerbtn',
            bind: {
                text: '{loggedUser}'
            },
            margin: '0 0 0 30px'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-cog fa-lg fontmustard',
            cls: 'headerbtn',
            text: 'Settings',
            margin: '0 0 0 30px',
            handler: 'setting'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-sign-out-alt fa-lg fontmustard',
            cls: 'headerbtn',
            text: 'Sign Out',
            margin: '0 0 0 30px'
        }]
});


Ext.define('AmazSync.view.products.kit.Kit', {
    extend: 'Ext.panel.Panel',
    xtype: 'kit',
    requires: [
        'AmazSync.view.products.kit.KitController',
        'AmazSync.view.products.kit.KitModel'
    ],

    controller: 'products-kit-kit',
    viewModel: {
        type: 'products-kit-kit'
    },

    buttonAlign: 'center',
    margin: 2,
    border: false,
    scrollable: true,
    layout: {
        type: 'vbox',
        pack: 'start'
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            items: [{

                xtype: 'image',
                align: 'center',
                reference: 'image',
                width: 100,
                tpsrcl: `<img src="{imageUrl}" alt="No" style="height:{imageHeight}px;width:{imageWidth}px"/>`
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'SKU',
                reference: 'sku'
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Product',
                reference: 'productName'
            }]
        },
        {
            xtype: 'grid',
            width: '100%',
            height: 300,
            flex: 1,
            title: 'Kit Products',
            cls: 'contentcenter',
            reference: 'productskitGrid',
            forceFit: true,
            viewConfig: {
                emptyText: '<span class="emptytext">No kit product found.</span>',
            },
            bind: {
                store: '{productskitStore}'
            },
            columns: [{
                text: 'Image',
                align: 'center',
                xtype: 'templatecolumn',
                align: 'center',
                width: 100,
                tpl: `<img src="{imageUrl}" alt="No" style="height:{imageHeight}px;width:{imageWidth}px"/>`
            }, {
                text: 'SKU',
                align: 'center',
                dataIndex: 'sellerSKU',
                flex: 1,
            }, {
                text: 'ASIN',
                align: 'center',
                dataIndex: 'amazonASIN',
                flex: 0.5,
            }, {
                text: 'Product Name',
                align: 'center',
                dataIndex: 'itemName',
                flex: 2,
            }, {
                xtype: "actioncolumn",
                align: 'center',
                align: "center",
                width: 50,
                items: [
                    {
                        tooltip: 'Remove From Kit',
                        iconCls: 'x-fa fa-trash fontcolorred',
                        handler: 'removeProductFromKit',

                    },
                ]
            }]
        },
        {
            xtype: "textfield",
            fieldLabel: 'Search By SKU, Name, ASIN',
            width: 400,
            enableKeyEvents: true,
            triggers: {
                clear: {
                    cls: 'x-form-clear-trigger',
                    handler: function () {
                        this.reset();
                    }
                }
            },
            listeners: {
                keypress: 'applyFilter'
            }

        },
        {
            xtype: 'grid',
            margin: '10px 0 0 0',
            width: '100%',
            splitter: true,
            height: 250,
            scrollable: true,
            cls: 'contentcenter',
            title: 'All Products',
            reference: 'allProductskitGrid',
            forceFit: true,
            viewConfig: {
                emptyText: '<span class="emptytext">No product found. Search By SKU, Name, ASIN.</span>',
            },
            bind: {
                store: '{allFilterdProductskitStore}'
            },
            columns: [{
                text: 'Image',
                xtype: 'templatecolumn',
                align: 'center',
                width: 100,
                tpl: `<img src="{imageUrl}" alt="No" style="height:{imageHeight}px;width:{imageWidth}px"/>`
            }, {
                text: 'SKU',
                dataIndex: 'sellerSKU',
                align: 'center',
                flex: 1,
            }, {
                text: 'ASIN',
                dataIndex: 'amazonASIN',
                align: 'center',
                flex: 0.5,
            }, {
                text: 'Product Name',
                dataIndex: 'itemName',
                align: 'center',
                flex: 2,
            }, {
                xtype: "actioncolumn",
                align: "center",
                align: 'center',
                width: 50,
                items: [
                    {
                        tooltip: 'Add In Kit',
                        iconCls: 'x-fa fa-plus-circle fontcolorgreen',
                        handler: 'addProductInKit'
                    },
                ]
            }]
        }]
});

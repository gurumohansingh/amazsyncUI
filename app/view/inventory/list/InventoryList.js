
Ext.define('AmazSync.view.inventory.list.InventoryList', {
    extend: 'Ext.grid.Panel',
    xtype: 'inventoryList',
    requires: [
        'AmazSync.view.inventory.list.InventoryListController',
        'AmazSync.view.inventory.list.InventoryListModel'
    ],

    controller: 'inventory-list-inventorylist',
    viewModel: {
        type: 'inventory-list-inventorylist'
    },
    //cls: 'productlistgrid',
    reference: 'inventoryList',
    store: 'inventoryProductListStore',
    plugins: 'gridfilters',
    padding: 5,
    rowLines: false,
    titlePosition: 2,
    padding: 5,
    rowLines: false,
    selModel: 'cellmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    viewConfig: {
        enableTextSelection: true,
        emptyText: '<span class="emptytext">No product found</span>',
        textAlight: 'center'
    },
    columns: {
        defaults: {
            align: 'center',
            width: 'auto'
        },
        items: [
            {
                text: 'Image',
                xtype: 'templatecolumn',
                align: 'center',
                width: 100,
                tpl: `<img src="{imageUrl}" alt="No" style="height:{imageHeight}px;width:{imageWidth}px"/>`
            },
            {
                text: 'Title',
                dataIndex: 'itemName',
                width: 300,
                tdCls: 'linebreak',
                align: 'left',
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Amazon SKU',
                dataIndex: 'sellerSKU',
                width: 200,
                tdCls: 'linebreak',
                enableTextSelection: true,
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Status',
                dataIndex: 'status',
                width: 100,
                filter: {
                    type: 'list'
                }
            }, {
                text: 'Warehouse ',
                dataIndex: 'warehouse',
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Bin Location',
                dataIndex: 'location',
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Stock',
                dataIndex: 'inventoryCount',
                editor: {
                    xtype: 'numberfield'
                },
                width: 50,
                filter: {
                    type: 'number'
                }
            },
            {
                text: 'Is Part SKU Only',
                dataIndex: '',
            },
            {
                text: 'UPC',
                dataIndex: 'productId',
                width: 100,
                filter: {
                    type: 'string'
                },
                renderer: function (value, metaData, record) {
                    var productTypeId = record.get('productIdType');
                    if (productTypeId == 3) {
                        return value
                    }
                }
            },
            {
                text: 'EAN',
                dataIndex: 'productId',
                width: 100,
                filter: {
                    type: 'string'
                },
                renderer: function (value, metaData, record) {
                    var productTypeId = record.get('productIdType');
                    if (productTypeId == 4) {
                        return value
                    }
                }
            },
            {
                text: 'Case Pack UPC',
                dataIndex: ''
            },
            // {
            //     text: 'Package Weight<br><span class="fontcolorgreen">Unit</span>',
            //     dataIndex: 'dimensions',
            //     renderer: function (value) {
            //         try {
            //             if (!Ext.isEmpty(value)) {
            //                 var weight = JSON.parse(value).Weight;
            //                 return weight ? `${Ext.util.Format.number(weight.Value, "0.00")}<br><span class="fontcolorgreen">${weight.Units}</span>` : '';
            //             }
            //         }
            //         catch (err) { console.log(err); }
            //     }
            // },
            // {
            //     text: 'Amazon Package Weight<br><span class="fontcolorgreen">Unit</span>',
            //     dataIndex: 'packageDimensions',
            //     renderer: function (value) {
            //         try {
            //             if (!Ext.isEmpty(value)) {
            //                 var weight = JSON.parse(value).Weight;
            //                 return weight ? `${Ext.util.Format.number(weight.Value, "0.00")}<br><span class="fontcolorgreen">${weight.Units}</span>` : '';
            //             }
            //         }
            //         catch (err) { console.log(err); }
            //     }
            // },
            // {
            //     text: 'Dimensions (Amazon)LxWxH<br><span class="fontcolorgreen">Unit</span>',
            //     dataIndex: 'packageDimensions',
            //     renderer: function (value) {
            //         try {
            //             if (!Ext.isEmpty(value)) {
            //                 var x = '<span class="fontcolorgreen"> x </span>'
            //                 var dimensions = JSON.parse(value);
            //                 return `${Ext.util.Format.number(dimensions.Length.Value, "0.00")}${x}${Ext.util.Format.number(dimensions.Width.Value, "0.00")}${x}${Ext.util.Format.number(dimensions.Height.Value, "0.00")}<br><span class="fontcolorgreen">${dimensions.Height.Units}</span>`
            //             }
            //         }
            //         catch (err) { console.log(err); }
            //     }
            // },
            {
                text: 'Date Added',
                xtype: 'datecolumn',
                dataIndex: 'dateAdded',
                filter: {
                    type: 'date'
                }
            },
            {
                text: 'Amazon ASIN (Amazon)',
                dataIndex: 'amazonASIN',
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Amazon Oversized (Amazon)',
                dataIndex: 'amazonOversized'
            },
            {
                text: 'Hazmat (Amazon)',
                dataIndex: ''
            },

            {
                text: 'Notes',
                dataIndex: 'itemNote',
                width: 200,
                tdCls: 'linebreak',
                align: 'left',
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Amazon FNSKU (Amazon)',
                dataIndex: 'amazonFNSKU',
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Last Update from Amazon',
                dataIndex: '',
                filter: {
                    type: 'date'
                }
            },
            {
                text: 'Amazon Prep Instructions',
                dataIndex: '',
                filter: {
                    type: 'string'
                }
            },

            {
                text: 'Expiration Date Required? (Amazon)',
                dataIndex: '',
                filter: {
                    type: 'date'
                }
            },
            {
                text: 'Reshipping Cost',
                dataIndex: ''
            },
            {
                text: 'Prep Material Cost',
                dataIndex: ''
            },
            {
                text: 'Prep Labor Cost',
                dataIndex: ''
            },
            {
                text: 'Tag',
                dataIndex: '',
                filter: {
                    type: 'string'
                }
            },
            {
                text: 'Amazon S&L',
                dataIndex: ''
            },

            {
                text: 'Target Days In Warehouse',
                dataIndex: 'targetDaysInWarehouse'
            },
            {
                text: 'Target Days In Amazon',
                dataIndex: 'targetDaysInAmazon'
            },
            {
                xtype: 'datecolumn',
                text: 'Time Stamp',
                dataIndex: 'timeStamp'
            },
            {
                text: 'Update By',
                dataIndex: 'user'
            }
        ]
    }
});

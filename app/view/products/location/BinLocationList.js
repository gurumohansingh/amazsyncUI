
Ext.define('AmazSync.view.products.location.BinLocationList', {
    extend: 'Ext.panel.Panel',
    xtype: 'binLocationList',
    layout: 'hbox',
    title: 'Location',
    margin: 10,
    height: '100%',
    bind: {
        disabled: '{binlocation}',
        title: 'Bin Location for Warehouse: {warehouseName}',
    },
    items: [{
        xtype: 'grid',
        margin: 10,
        forceFit: true,
        flex: 3,
        height: '100%',
        store: 'binLocatioStore',
        title: 'Locations',
        scrollable: true,
        viewConfig: {
            enableTextSelection: true,
            emptyText: '<span class="emptytext">No location found</span>',
            textAlight: 'center'
        },

        columns: [{
            text: 'Name',
            dataIndex: 'name'
        }, {
            text: 'Description',
            dataIndex: 'description'
        }, {
            xtype: "actioncolumn",
            align: "center",
            text: 'Action',
            width: 100,
            items: [
                {
                    tooltip: 'Edit Location',
                    iconCls: 'x-fa fa-edit fontmustard',
                    handler: 'editBinLocation'
                },
                {
                    tooltip: 'Remove Suppliers',
                    iconCls: 'x-fa fa-trash fontcolorred',
                    handler: 'removeBinLocation'
                },
            ]
        },]
    }, {
        xtype: 'form',
        margin: 10,
        flex: 2,
        layout: 'vbox',
        title: 'Add/Update Location',
        reference: 'wareBinLocation',
        buttonAlign: 'center',
        defaults: {
            xtype: 'textfield',
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'id'
        }, {
            xtype: 'hiddenfield',
            name: 'warehouseId'
        }, {
            fieldLabel: 'Name',
            allowBlank: true,
            name: 'name'
        }, {
            fieldLabel: 'Description',
            name: 'description'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'filefield',
                name: 'locationfile',
                fieldLabel: 'Location CSV',
                labelWidth: 50,
                msgTarget: 'side',
                width: 250,
                buttonText: 'Browse File'
            }, {
                xtype: 'button',
                text: 'Upload',
                handler: 'uploadcsv',
                margin: '29px 0 0 5px'
            }]
        }],
        buttons: [{
            text: 'Add New',
            formBind: true,
            handler: 'submitBinLocation'
        }, {
            text: 'Update',
            formBind: true,
            handler: 'updateBinLocation'
        }, {
            text: 'Download Sample file',
            handler: 'downloadSample',
        }]
    }]
});

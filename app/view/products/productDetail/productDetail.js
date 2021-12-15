Ext.define("AmazSync.view.products.productDetail.productDetail", {
    extend: "Ext.form.Panel",
    xtype: "productDetail",
    requires: [
        "AmazSync.view.products.productDetail.productDetailController",
        "AmazSync.view.products.productDetail.productDetailModel",
    ],

    controller: "products-productdetail-productdetail",
    viewModel: {
        type: "products-productdetail-productdetail",
    },
    layout: 'hbox',
    buttonAlign: 'center',
    scrollable: true,
    listeners: {
        afterrender: 'afterrender'
    },
    items: [
        {
            xtype: "fieldset",

            //layout: "vbox",
            layout: 'vbox',
            border: false,
            margin: 10,
            flex: 1,
            height: 'auto',
            scrollable: true,
            defaults: {
                labelAlign: "left",
                anchor: '100%'
            },
            items: [
                {
                    xtype: "image",
                    bind: {
                        src: "{imageUrl}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "Product Name",
                    bind: {
                        value: "{itemName}"
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "SKU",
                    bind: {
                        value: "{sellerSKU}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "Status",
                    bind: {
                        value: "{status}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "ASIN",
                    bind: {
                        value: "{amazonASIN}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "Oversized",
                    dataIndex: "amazonOversized",
                    bind: {
                        value: "{amazonOversized}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "Hazmat",
                    dataIndex: "",
                    bind: {
                        value: "{hazmat}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "FNSKU",
                    bind: {
                        value: "{amazonFNSKU}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "S&L",
                    bind: {
                        value: "{amazonSnL}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "Last Update from Amazon",
                    bind: {
                        value: "{timeStamp}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "Expiration Date Required",
                    dataIndex: "",
                    bind: {
                        value: "{expirationDateRequired}",
                    },
                },
                {
                    xtype: "displayfield",
                    fieldLabel: "Last Update On",
                    dataIndex: "lastUpdateFromAmazon",
                }
            ],
        },
        {
            xtype: "fieldset",
            layout: {
                type: "hbox",
                pack: 'center',
            },
            flex: 2,
            border: false,
            margin: 10,

            items: [
                {
                    xtype: "container",
                    layout: "vbox",
                    defaults: {
                        xtype: "textfield",
                    },
                    items: [{
                        fieldLabel: "EAN",
                        bind: {
                            value: "{EANLocal}"
                        }

                    },
                    {
                        xtype: 'label',
                        margin: '-5px 0 0 5px',
                        componentCls: 'fontcolorAmz',
                        bind: {
                            text: '{EAN}',
                        }
                    },
                    //Weight
                    {
                        fieldLabel: 'Package Weight(pound)',
                        bind: {
                            value: '{packageWeightLocal}',
                        }
                    }, {
                        xtype: 'label',
                        margin: '-5px 0 0 5px',
                        componentCls: 'fontcolorAmz',
                        bind: {
                            text: '{packageWeight}',
                        }
                    },
                    //note
                    {
                        xtype: 'textarea',
                        fieldLabel: "Notes",
                        bind: {
                            value: '{itemNoteLocal}',
                        }
                    },
                    {
                        xtype: "textarea",
                        fieldLabel: "Additional Prep Instructions",
                        bind: {
                            value: '{additionalPrepInstructions}'
                        },
                    },
                    //Dimensions
                    {
                        xtype: "fieldset",
                        title: 'Dimensions(Inches)',
                        width: 300,
                        defaults: {
                            labelAlign: 'left',
                            width: 250
                        },
                        margin: '10px 0 0 5px',
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'L',
                            bind: {
                                value: '{dimensionsLLocal}'
                            }
                        }, {
                            xtype: 'label',
                            margin: '-5px 0 0 110px',
                            componentCls: 'fontcolorAmz',
                            bind: {
                                text: '{dimensionsL}',
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'W',
                            bind: {
                                value: '{dimensionsWLocal}'
                            }

                        }, {
                            xtype: 'label',
                            margin: '-5px 0 0 110px',
                            componentCls: 'fontcolorAmz',
                            bind: {
                                text: '{dimensionsW}',
                            }
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'H',
                            bind: {
                                value: '{dimensionsHLocal}',
                            }
                        }, {
                            xtype: 'label',
                            margin: '-5px 0 0 110px',
                            componentCls: 'fontcolorAmz',
                            bind: {
                                text: '{dimensionsH}',
                            }
                        }]
                    }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        //UPC
                        {
                            xtype: 'textfield',
                            fieldLabel: "UPC",
                            bind: {
                                value: '{UPCLocal}',
                            }
                        },
                        {
                            xtype: 'label',
                            margin: '-5px 0 0 5px',
                            componentCls: 'fontcolorAmz',
                            bind: {
                                text: '{UPC}',
                            }
                        },
                        //Is active
                        {
                            xtype: 'checkbox',
                            fieldLabel: "Is Active",
                            bind: {
                                value: '{isActiveLocal}'
                            }
                        },
                        {
                            xtype: 'label',
                            margin: '-5px 0 0 5px',
                            componentCls: 'fontcolorAmz',
                            bind: {
                                text: '{isActive}',
                            }
                        },
                        //
                        {
                            xtype: 'textarea',
                            fieldLabel: "Amazon Notes",
                            readOnly: true,
                            bind: {
                                value: '{itemNote}'
                            }
                        },
                        {
                            xtype: "textarea",
                            readOnly: true,
                            fieldLabel: "Amazon Prep Instructions",
                            bind: {
                                value: '{amazonPrepInstructions}',
                            },
                        }
                    ]
                }]
        },
        {
            xtype: "fieldset",
            border: false,
            margin: 10,
            flex: 1,
            layout: "vbox",
            defaults: {
                xtype: "textfield",
            },
            items: [
                {
                    xtype: 'combo',
                    fieldLabel: "Warehouse",
                    valueField: 'id',
                    forceSelection: true,
                    displayField: 'name',
                    bind: {
                        value: '{warehouse}'
                    },
                    store: 'warehouseStore',
                    listeners: {
                        change: 'loadBiLocation'
                    }
                },
                {
                    xtype: 'combo',
                    fieldLabel: "Bin Location",
                    forceSelection: true,
                    valueField: 'id',
                    displayField: 'name',
                    bind: {
                        value: '{location}',
                        store: '{warehouseStore}'
                    },
                    listeners: {
                        change: 'validateBilocation'
                    }
                },
                {
                    fieldLabel: "Reshipping Cost",
                    bind: {
                        value: '{reshippingCost}'
                    }
                },
                {
                    fieldLabel: "Prep Material Cost",
                    bind: {
                        value: '{prepMaterialCost}'
                    }
                },
                {
                    fieldLabel: "Prep Labor Cost",
                    bind: {
                        value: '{prepLaborCost}'
                    }
                },
                {
                    xtype: 'tagfield',
                    fieldLabel: "Tag",
                    reference: 'tagField',
                    tooltip: 'Use , to end the tag',
                    height: 120,
                    growMax: 100,
                    delimiter: ",",
                    forceSelection: false,
                    filterPickList: true,
                    queryMode: 'local',
                    autoLoadOnValue: true,
                    bind: {
                        store: '{tagStore}',
                        value: '{tag}'
                    }
                },

                {
                    fieldLabel: "Kit",
                    bind: {
                        value: '{kit}'
                    }
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: "Target Days In Warehouse",
                    bind: {
                        value: '{targetDaysInWarehouse}'
                    }
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: "Target Days In Amazon",
                    bind: {
                        value: '{targetDaysInAmazon}'
                    }
                },
                {
                    xtype: 'checkbox',
                    fieldLabel: "Is Part SKU Only",
                    bind: {
                        value: '{isPartSKUOnly}'
                    }
                }, {
                    xtype: 'textfield',
                    fieldLabel: "Case Pack UPC",
                    bind: {
                        value: '{casePackUPC}'
                    }
                }
            ]
        },
        {
            xtype: 'supplierList',
            height: '100%',
            reference: 'supplierList',
            width: 300,
            header: false,
            margin: 10,
        }
    ],
    buttons: [
        {
            text: 'Submit',
            handler: 'saveProduct'
        },
        {
            text: 'Print Label',
            handler: 'PrintProduct'
        },
        {
            text: 'Cancel',
            handler: 'discard'
        }
    ]
});

Ext.define('AmazSync.view.products.productDetail.productDetailModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.products-productdetail-productdetail',
    data: {
        EAN: null,
        UPC: null,
        additionalPrepInstructions: null,
        amazonASIN: null,
        amazonFNSKU: null,
        amazonOversized: null,
        amazonPrepInstructions: null,
        amazonSnL: null,
        casePackUPC: null,
        changeLog: null,
        dateAdded: null,
        dimensions: null,
        expirationDateRequired: null,
        hazmat: null,
        history: null,
        imageHeight: null,
        imageUrl: null,
        imageWidth: null,
        isPartSKUOnly: null,
        itemName: null,
        itemNote: null,
        kit: null,
        lastUpdateFromAmazon: null,
        location: null,
        packageDimensions: null,
        prepLaborCost: null,
        prepMaterialCost: null,
        productId: null,
        productIdType: null,
        reshippingCost: null,
        sellerId: null,
        sellerSKU: null,
        status: null,
        suppliers: null,
        tag: null,
        targetDaysOnHand: null,
        timeStamp: null,
        dimensionsLLocal: null,
        dimensionsL: null,
        dimensionsWLocal: null,
        dimensionsW: null,
        dimensionsHLocal: null,
        dimensionsH: null
    },
    stores: {
        tagStore: {
            autoLoad: true,
            data: [{
                tag: 'New Arrival'
            }, {
                tag: 'Used'
            }],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            }
        }
    }

});

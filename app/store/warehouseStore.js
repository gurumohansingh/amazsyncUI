Ext.define('AmazSync.store.warehouseStore', {
     extend: 'AmazSync.store.AjaxStore',
     autoLoad: true,
     alias: 'store.warehouseStore',
     storeId: 'warehouseStore',
     proxy: {
          type: 'ajax',
          url: commonutil.getUrl('location/getwarehouses'),
          reader: {
               type: 'json',
               rootProperty: ''
          }
     }
});
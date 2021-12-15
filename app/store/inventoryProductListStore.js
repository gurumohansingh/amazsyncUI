Ext.define('AmazSync.store.inventoryProductListStore', {
     extend: 'AmazSync.store.AjaxStore',
     autoLoad: true,
     alias: 'store.inventoryProductListStore',
     storeId: 'inventoryProductListStore',
     proxy: {
          type: 'ajax',
          url: commonutil.getUrl('products/getallproduct'),
          reader: {
               type: 'json',
               rootProperty: 'users'
          }
     }
});
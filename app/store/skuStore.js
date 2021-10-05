Ext.define('AmazSync.store.skuStore', {
     extend: 'AmazSync.store.AjaxStore',
     autoLoad: true,
     alias: 'store.skuStore',
     storeId: 'skuStore',
     proxy: {
          type: 'ajax',
          url: commonutil.getUrl('products/skulist'),
          reader: {
               type: 'json',
               rootProperty: 'users'
          }
     }
});
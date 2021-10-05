Ext.define('AmazSync.store.AjaxStore', {
     extend: 'Ext.data.Store',
     alias: 'store.ajaxStore',
     proxy: {
          type: 'ajax',
          headers: {
               Authorization: tokenStorage.retrieve()
          },
          reader: {
               type: 'json',
               rootProperty: ''
          }
     }
});
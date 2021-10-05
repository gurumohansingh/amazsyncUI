
Ext.define('AmazSync.view.util.navigation', {
    alternateClassName: 'navigation',
    singleton: true,
    tabs: [],
    addComponent: function (component) {
        var centerPanel = Ext.ComponentQuery.query('centerPanel')[0];
        var tabId = "tabname-".concat(component.tabName);
        var tab = Ext.ComponentQuery.query(`#${tabId}`)[0];
        if (!tab) {

            if (component.directComponent) {
                component.productDetailView['itemId'] = tabId;
                centerPanel.add(component.productDetailView);
            }
            else {
                component['itemId'] = tabId;
                centerPanel.add(component);
            }
            this.tabs.push(component);
            centerPanel.setActiveTab(tabId);
        }
        else {
            centerPanel.setActiveTab(tab);
        }
    },
    remove: function () {

    },
    getTabs: function () {
        return this.tabs;
    }
});

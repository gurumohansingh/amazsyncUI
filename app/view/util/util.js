
Ext.define('AmazSync.view.util', {
    singleton: true,
    alternateClassName: 'commonutil',
    getUrl: function (url) {
        var apiHost = "http://localhost:3000/"
        return apiHost.concat(url);
    },
    POST: 'POST',
    GET: "GET",
    DELETE: 'DELETE',
    PUT: 'PUT',
    apiCall: function (url, type, params, view) {
        view && view.setLoading(true);
        return new Promise((resolve, reject) => {
            Ext.Ajax.request({
                url: commonutil.getUrl(url),
                method: type,
                headers: {
                    Authorization: tokenStorage.retrieve()
                },
                params: params,
                success: function (response) {
                    view && view.setLoading(false);
                    resolve(response.responseText);
                },
                failure: function (response) {
                    view && view.setLoading(false);
                    reject(response);
                }
            })
        })
    },

    formCall: function (url, type, params, view, standardSubmit) {
        var form = Ext.create('Ext.form.Panel', {
            standardSubmit: standardSubmit,
            useDefaultXhrHeader: false,
            url: commonutil.getUrl(url),
            method: type,
        });
        form.submit({
            params: params,
            headers: {
                Authorization: tokenStorage.retrieve(),
            },
        });
    }
});

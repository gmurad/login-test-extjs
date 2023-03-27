Ext.define('LoginTestApp.store.Credentials', {
    extend: 'Ext.data.ArrayStore',
    model: 'LoginTestApp.model.Credential',
    storeId: 'credentials',
    data: [
        ['user', 'user'],
        ['admin', 'unbreakable']
    ]
});
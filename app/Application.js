Ext.define('LoginTestApp.Application', {
    extend: 'Ext.app.Application',
    name: 'LoginTestApp',

    models: ['LoginTestApp.model.Credential'],
    stores: ['LoginTestApp.store.Credentials'],

    views: [
        'LoginTestApp.view.main.Main',
        'LoginTestApp.view.login.Login'
    ]
});
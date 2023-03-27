Ext.define('LoginTestApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'LoginTestApp.view.main.MainController',
    ],

    controller: 'main',
    plugins: 'viewport',

    title: 'Main',
    with: 'fit',
    heigth: 'fit',

    tbar: [
        {
            xtype: 'button',
            text: 'Документы',
            handler: 'onDocButtonClick'
        }
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'tabpanel',
            reference: 'tabPanel',
            flex: 1,
            items: [
                {
                    title: 'Документы',
                    itemId: 'docTab',
                    tabConfig: {
                        hidden: true
                    }
                },
            ]
        },
        {
            xtype: 'container',
            width: 200,
            layout:{
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    html: 'Item 2',
                    border: false
                },
                {
                    xtype: 'button',
                    text: 'Выход',
                    handler: 'onButtonLogout'
                }
            ]
        }
    ]
});
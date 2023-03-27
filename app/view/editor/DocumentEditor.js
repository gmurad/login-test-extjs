Ext.define('LoginTestApp.view.editor.DocumentEditor' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.doceditwindow',

    reference: 'docEdit',

	title: 'Document Editor',
	closable: true,
	modal: true,
    padding:'5px',
    height: 150,
    layout: 'fit',

	initComponent: function() {
        let me = this;
        Ext.apply(me, {
            items: [{
                xtype: 'form',
                layout: 'anchor',
                defaults:{
                    padding: '5px'
                },
                items: [{
                xtype: 'textfield',
                margin: '10 0 0 0',
                fieldLabel: 'Name',
                    bind: '{users.name}'
                },{
                xtype: 'checkboxfield',
                fieldLabel: 'Подписать документ',
                    bind: '{users.issigned}'
                }]
            }]
		});
	    me.callParent(arguments);
	}
});
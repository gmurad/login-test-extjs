Ext.define('LoginTestApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: ['LoginTestApp.view.login.LoginController'],

	controller: 'login',

	title: 'Окно входа',
    bodyPadding: 10,
    autoShow: true,
	closable: false,

	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			reference: 'username',
            fieldLabel: 'Пользователь:',
			allowBlank: false
		}, {
			xtype: 'textfield',
			name: 'password',
            inputType: 'password',
			reference: 'password',
            fieldLabel: 'Пароль:',
            allowBlank: false
		}],
		buttons: [{
			text: 'Login',
			formBind: true,
			listeners: {
				click: 'onLoginClick'
			}
		}]
	}
});

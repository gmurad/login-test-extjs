Ext.define('LoginTestApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: ['LoginTestApp.view.login.LoginController'],

	controller: 'login',

	title: 'Окно входа',
    padding:'5px',
    autoShow: true,
	closable: false,

	items: {
		xtype: 'form',
		reference: 'loginform',
		defaults:{
			padding: '5px',
			margin: '5px',
		},
		items: [
			{
				xtype: 'textfield',
				name: 'username',
				reference: 'username',
				fieldLabel: 'Пользователь:',
				allowBlank: false
			},
			{
				xtype: 'textfield',
				name: 'password',
				inputType: 'password',
				reference: 'password',
				fieldLabel: 'Пароль:',
				allowBlank: false
			}
		],
		buttons: [
			{
				text: 'Login',
				formBind: true,
				listeners: {
					click: 'onLoginClick'
				}
			}
		]
	}
});

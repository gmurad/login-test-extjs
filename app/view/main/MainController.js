Ext.define('LoginTestApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	routes: {
		'login': 'onLogin'
	},

	beforeInit: function() {
		if (!localStorage.getItem("checkedUser")) {
			this.redirectTo('login');
		}
	},

    onLogin: function() {
		this.getView().destroy();
		Ext.create('LoginTestApp.view.login.Login');
	},
	onButtonLogout: function() {
		localStorage.removeItem('checkedUser');
		this.redirectTo('login')
	},
	onDocButtonClick: function() {
		let tabPanel = this.lookupReference('tabPanel');
		let docTab = tabPanel.child('#docTab');
		let documentList = Ext.create('LoginTestApp.view.document.DocumentList');
		docTab.add(documentList);
		docTab.tab.show();

	}
})
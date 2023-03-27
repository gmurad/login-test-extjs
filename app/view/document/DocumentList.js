Ext.define('LoginTestApp.view.document.DocumentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'documentlist',

    store: {
        fields:[ 'id', 'name', 'description', 'issigned'],
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'app/data/documents.json',
            reader:{
                type: 'json'
            }
        }
    },
    columns: [
        {
            text: '№',
            dataIndex: 'id',
            width: 40,
        },
        {
            text: 'Наименование',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Описание',
            dataIndex: 'description',
            flex: 5
        },
        {
            text: 'Подпись',
            dataIndex: 'issigned',
            width: 60,
            renderer: function(value, metaData){
                const color = value ? 'green' : 'red';
                metaData.tdStyle = `background: ${color}`;
                return value ? 'Да' : 'Нет';
            }
        }
    ],
    listeners: {
        cellclick: function(view, cell, cellIndex, record){
            let editDoc = Ext.create('LoginTestApp.view.editor.DocumentEditor', {
                viewModel: {
                    data: { users: record }
                }
            }).show();
        }
    }
})
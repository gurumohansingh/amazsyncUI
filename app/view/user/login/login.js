
Ext.define('AmazSync.view.user.login.login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login',
    requires: [
        'AmazSync.view.user.login.loginController',
        'AmazSync.view.user.login.loginModel'
    ],
    controller: 'user-login-login',
    viewModel: {
        type: 'user-login-login'
    },
    bind:{
        hidden:'{hideLogin}'
    },
    cls: 'formborder',
    layout: 'vbox',
    height: 350,
    padding: 20,
    margin: 5,
    buttonAlign: 'center',
    border:false,
    listeners:{
        afterrender:function(form){
            form.setLoading("Authenticating");
        }
    },
    items: [{
        xtype:'component',
        html: '<h1>Sign-In</h1>'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Email or mobile phone number',
        allowBlank: false,
        name: 'user'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Password',
        inputType:'password',
        allowBlank: false,
        name: 'password'
    },{
        xtype:'component',
        cls:'error',
        bind:{
            html:'{error}'
        }
    }],
    buttons: [
        {
            text: 'Create New Account',
            handler:'showRegister',
            iconCls: 'x-fa fa-user-plus'
        }, {
            text: 'Login',
            handler:'login',
            iconCls: 'x-fa fa-user'
        }]
});

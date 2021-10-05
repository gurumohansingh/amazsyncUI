Ext.define('AmazSync.view.user.register.newUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-register-newuser',
    showLogin:function(){        
        var vm=this.getViewModel();
        vm.set('hideResiter',true);
        vm.set('hideLogin',false);
    },
    addNewUser:function(){
        var me=this, view=me.getView(), vm= me.getViewModel();
        var form = view.getForm(),error=[];
        if(form.getValues()['password'] != form.getValues()['confirmPassword']){
            error.push("Password and confirm password is not same");
            form.findField('password').markInvalid("Password and confirm password is not same");
            form.findField('confirmPassword').markInvalid("Password and confirm password is not same");
        }
        if(error.length>0){
            vm.set('error',error.join("<br>"));
        }else
        {   
            commonutil.apiCall("users/register","POST",form.getValues(),view)
            .then((response)=>{
                debugger
                vm.set('error',response.responseText);
            })
            .catch((error)=>{
                debugger
                vm.set('error',error.responseText);
            })
        }
    }

});

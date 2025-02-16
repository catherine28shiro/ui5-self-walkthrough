//nested controller
sap.ui.define([
    //modules
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast,Fragment) {
        "use stricct";
        return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMsg = oBundle.getText("helloMsg", [sRecipient]); //helloMsg is from 118n.properties

                MessageToast.show(sMsg);
            },
            onOpenDialog: function(){
                var oView = this.getView();

                //create the dialog
                if (!this.byId("helloDialog")){
                    //load asychronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name:"ui5.walkthrough.view.HelloDialog",
                        controller: this
                    }).then(function(oDialog){
                        //connect dialog to the root view of this component(models, lifecycle)
                        oView.addDependent(oDialog); //add the dialog as a dependent to the view
                        oDialog.open();
                    })                        //use promise (async)

                }else{
                    this.byId("helloDialog").open();
                }
            },
            onCloseDialog: function(){
                this.byId("helloDialog").close();
            }
        })
    });

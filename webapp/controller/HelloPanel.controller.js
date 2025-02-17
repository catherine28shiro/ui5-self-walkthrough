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
                //getResourceBundle() is typically used to: Get translated text from the i18n model.
                //oBundle contains localized text from an i18n properties file (e.g., i18n.properties).
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMsg = oBundle.getText("helloMsg", [sRecipient]); //helloMsg is from 118n.properties

                MessageToast.show(sMsg);
            },
            onOpenDialog: function(){
                this.getOwnerComponent().openHelloDialog();
            },
            onCloseDialog: function(){
                this.byId("helloDialog").close();
            }
        })
    });

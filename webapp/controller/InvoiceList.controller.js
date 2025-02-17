sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],function(Controller,JSONModel,formatter){
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList",{
        formatter: formatter,
        onInit: function(){
            var oViewModel = new JSONModel({
                currency:"CAD"
            });
            this.getView().setModel(oViewModel,"view");
        }
    })
})
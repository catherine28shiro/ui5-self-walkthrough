//is the entry point of an SAPUI5 application. It defines the application configuration, metadata, routing, and model initialization.
//Think of Component.js as the main controller that sets up the app before it starts running.
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],function(UIComponent, JSONModel,ResourceModel,HelloDialog){
    "use sctrict";
    return UIComponent.extend("ui5.walkthrough.Component",{
        metadata:{
            // rootView:{
            //     "viewName":"ui5.walkthrough.view.App",
            //     "type":"XML",
            //     "async": true,
            //     "id":"app"
            // }
            manifest:"json"
        },
        init : function (){
            //call the init function of the parent ui component
            //UIComponent.prototype.init	Refers to the original init function from UIComponent (SAPUI5 base class)
            //.apply(this, arguments);	Calls the parent init() method in the context of this component (inherits SAPUI5 lifecycle)
            UIComponent.prototype.init.apply(this,arguments);
            jQuery.sap.includeStyleSheet(sap.ui.require.toUrl("ui5/walkthrough/css/style.css"));
            var oData ={
                recipient:{
                    name:"UI5"
                }
            };
            //initialize the global model
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            
            // var i18nModel = new ResourceModel({
            //     bundleName: "ui5.walkthrough.i18n.i18n",
            //     supportedLocales: [""],  // Supports all locales
            //     fallbackLocale: "" 
            // });
            // this.setModel(i18nModel,"i18n") //alias

            //set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());

        },
        exit: function(){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog : function(){
            this._helloDialog.open();
        }
    })
})
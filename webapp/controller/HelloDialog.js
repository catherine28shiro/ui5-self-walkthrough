sap.ui.define([
    //modules
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict";
    return ManagedObject.extend("ui5.walkthrough.controller.HelloDialog", {
        //*****CONSTRUCTOR*****
        constructor: function (oView) {
            this._oView = oView

        },
        exit: function () {
            delete this._oView;
        },
        open: function () {
            //this refer to this js file(the controller itself)
            var oView = this._oView;
            //create the dialog
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                //load asynchrous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "ui5.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    //connect dialog to the root view of the component(models,lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                oView.byId("helloDialog").open();
            }

        }
    })
});
//standard controller layout
// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],function(Controller){
//     "use strict"; //execute code in strict mode
//     return Controller.extend("",{

//     });
// });

sap.ui.define([
    //modules
    "sap/ui/core/mvc/Controller",
    
], function (Controller) {
    "use strict"; //execute code in strict mode
    return Controller.extend("ui5.walkthrough.App", {
        //empty controller
        onOpenDialog: function(){
            this.getOwnerComponent().openHelloDialog();
        }
    })
});

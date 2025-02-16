sap.ui.define([
    "sap/ui/core/ComponentContainer"

],function(ComponentContainer){
    "use strict";
    new ComponentContainer({
        //this name must match: in component.js: return UIComponent.extend("ui5.walkthrough.Component", {  // ✅ Must match "ui5.walkthrough"

        name:"ui5.walkthrough",
        settings:{
            id:"walkthrough"
        },
        async:true
    }).placeAt("content");

    
});


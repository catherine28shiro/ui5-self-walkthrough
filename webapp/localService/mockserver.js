//A mock server in SAPUI5 is used to simulate an OData backend service. This is useful for:
// Developing and testing UI5 applications without a real backend
// Creating test data locally instead of connecting to an actual database
// Avoiding backend dependency during UI development
// Simulating server responses and HTTP requests (GET, POST, PUT, DELETE)

sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
    "use strict";

    return {
        init: function () {
            // Ensure requests go to the mock server, NOT the real API
            var oMockServer = new MockServer({
                rootUri: "/V2/Northwind/Northwind.svc/"
            });

            var oUriParameters = new UriParameters(window.location.href);

            // Configure response delay
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            });

            // Ensure correct path resolution
            var sPath = sap.ui.require.toUrl("ui5/walkthrough/localService");

            // Simulate metadata & mock data
            oMockServer.simulate(sPath + "/metadata.xml", {
                sMockdataBaseUrl: sPath + "/mockdata",
                bGenerateMissingMockData: true
            });

            // ✅ Start the mock server
            oMockServer.start();
            console.log("✅ Mock server started at: " + oMockServer.getRootUri());
        }
    };
});

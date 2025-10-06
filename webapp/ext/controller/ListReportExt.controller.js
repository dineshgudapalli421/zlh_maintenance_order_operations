sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    'use strict';

    return {
        onInit: function () {
            debugger;
            var oTable = this.byId("com.sap.lh.mr.zlhmaintenanceorderoperations::sap.suite.ui.generic.template.ListReport.view.ListReport::MaintenanceOrderOperations--responsiveTable-listUl");
            if (oTable && oTable.getPlugins && getPlugins()[0]) {
                oTable.getPlugins()[0].attachSelectionChange(this.onSelectionChange.bind(this));
            }
        },
        onSelection: function (oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onSelectionChange: function (oEvent) {
            debugger;
            var oSelectedContexts = this.extensionAPI.getSelectedContexts();
        },
        isEnabledForSingleSelection: function (oBindingContext, aSelectedContexts) {
            debugger;
            if (aSelectedContexts && aSelectedContexts.length === 1) {
                return true;
            }
            return false;
        }
    }
});

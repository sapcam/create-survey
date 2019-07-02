sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";
	
	return Controller.extend("sap.ui.demo.walkthrough.controller.SurveyTitle", {
		getTitle   : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/InputValue");
			var sMsg = oBundle.getText("title", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},
		onOpenTDialog : function () {
			this.getOwnerComponent().openSaveTDialog();
		},
		onInit : function () {
			var oModel = new JSONModel({data : {}});
			this.getView().setModel(oModel);
		},
		handleLiveChange : function (oEvent) {
			var sValue = oEvent.getParameter("value");
			this.byId("enterT").setText(sValue);
		}
	});
});
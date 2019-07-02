sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.SurveyQuestion", {
		getQuestion : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/InputValue");
			var sMsg = oBundle.getText("question", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},
		onOpenQDialog : function () {
			this.getOwnerComponent().openSaveQDialog();
		},
		onInit : function () {
			var oModel = new JSONModel({data : {}});
			this.getView().setModel(oModel);
		},
		handleLiveChange : function (oEvent) {
			var sValue = oEvent.getParameter("value");
			this.byId("enterQ").setText(sValue);
		}
	});
});
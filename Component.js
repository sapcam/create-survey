sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"./controller/SaveQDialog",
	"./controller/SaveTDialog"
], function (UIComponent, JSONModel, SaveQDialog, SaveTDialog) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					title : "Please enter the Survey Title here",
					question : "Please enter the question here"
					// question : sap.ui.getCore().byId("enterQ").getText()
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			// set dialog
			this._saveQDialog = new SaveQDialog(this.getRootControl());
			this._saveTDialog = new SaveTDialog(this.getRootControl());
		},
		
		exit : function () {
			this._saveQDialog.destroy();
			this._saveTDialog.destroy();
			delete this._saveQDialog;
			delete this._saveTDialog;
		},
		openSaveQDialog : function () {
			this._saveQDialog.open();
		},
		openSaveTDialog : function () {
			this._saveTDialog.open();
		}
	});

});
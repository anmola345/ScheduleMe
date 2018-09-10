sap.ui.jsview("skedme.setMeUp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skedme.setMeUp
	*/ 
	getControllerName : function() {
		return "skedme.setMeUp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skedme.setMeUp
	*/ 
	createContent : function(oController) {
 		var listItems = {items: [{opt:"Doctor"},{opt: "Insurance Agent"}, {opt:"Salon"},{opt: "Car Service"}, {opt: "Boss"}]};
 		
 		var oModel = new sap.ui.model.json.JSONModel();
 		oModel.setData(listItems);
 		sap.ui.getCore().setModel(oModel,"myContacts");
 		
 		var template = new sap.m.StandardListItem({
 				type:"Navigation",
				title: {
					parts:["opt"]
				}
			})
 		
 		var list = new sap.m.List({
 			mode:"SingleSelectMaster",
 			itemPress:[oController.fnSetMeUp,oController],
 			items: {
 				//type:"Navigation",
 				path:"/items", 
 				template: template
 			}
 		});
 		list.setModel(oModel);
 		
		return new sap.m.Page({
			title: "Set Me Up",
			content: [list]
		});
	}

});
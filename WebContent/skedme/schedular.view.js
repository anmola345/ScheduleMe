sap.ui.jsview("skedme.schedular", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skedme.schedular
	*/ 
	getControllerName : function() {
		return "skedme.schedular";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skedme.schedular
	*/ 
	createContent : function(oController) {
		
		
		var listItems = {items: [{opt:"09:00 - 10:00",slot:"09"},{opt: "10:00 - 11:00",slot:"10"}, {opt:"11:00 - 12:00",slot:"11"},
		                         {opt: "12:00 - 13:00",slot:"12"},{opt: "13:00 - 14:00",slot:"13"},{opt: "14:00 - 15:00",slot:"14"},
		                         {opt: "15:00 - 16:00",slot:"15"},
		                         {opt: "16:00 - 17:00",slot:"16"}]};
 		
 		var oModel = new sap.ui.model.json.JSONModel();
 		oModel.setData(listItems);
 		sap.ui.getCore().setModel(oModel,"timeSlots");
 		
 		var template = new sap.m.StandardListItem({
 				type:"Navigation",
				title: {
					parts:["opt"]
				}
			})
 		
 		var list = new sap.m.List("timeSlotsList",{
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
			title: "Set Me Up with Doctor",
			content: [list]
		});
	}

});

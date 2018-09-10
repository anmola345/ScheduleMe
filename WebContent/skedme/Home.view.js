sap.ui.jsview("skedme.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented or that "null" is returned, this View does not have a Controller.
	* @memberOf skedme.Home
	*/ 
	getControllerName : function() {
		return "skedme.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skedme.Home
	*/ 
	createContent : function(oController) {
 		var listItems = {items: [{opt:"Set Me Up"},{opt: "My Profile"}, {opt:"My Schedule"},{opt: "My Recents"}]};
 		
		var oModel = new sap.ui.model.json.JSONModel();
 		oModel.setData(listItems);
 		sap.ui.getCore().setModel(oModel,"navItems");
 	    
 		var template = new sap.m.StandardListItem({
 				type:"Navigation",
				title: {
					parts:["opt"]
				}
			})
 		
 		var list = new sap.m.List({
 			mode:"SingleSelectMaster",
 			itemPress:[oController.fnNavOption,oController],
 			items: {
 				//type:"Navigation",
 				path:"/items", 
 				template: template
 			}
 		});
 		list.setModel(oModel);
 		
		return new sap.m.Page({
			title: "Home",
			content: [list]
		});
		
	}
});
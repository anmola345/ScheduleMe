sap.ui.jsview("skedme.myRecents", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skedme.myRecents
	*/ 
	getControllerName : function() {
		return "skedme.myRecents";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skedme.myRecents
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "My Recents",
			content: [
			
			]
		});
	}

});
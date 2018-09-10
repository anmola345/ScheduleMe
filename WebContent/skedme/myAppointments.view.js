sap.ui.jsview("skedme.myAppointments", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skedme.myAppointments
	*/ 
	getControllerName : function() {
		return "skedme.myAppointments";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skedme.myAppointments
	*/ 
	createContent : function(oController) {
 		/*var listItems = {items: [{summary:"Appt 1"},{summary: "Appt 2"}]};
 		
		var oModel = new sap.ui.model.json.JSONModel();
 		oModel.setData(listItems);
 		sap.ui.getCore().setModel(oModel,"timeLineItems");*/
 		
		var timeline = new sap.suite.ui.commons.Timeline("timeline");
	
		//timeline.setModel(oModel);
		
 		return new sap.m.Page({
			title: "My Schedule",
			content: [timeline]
		});
	}

});
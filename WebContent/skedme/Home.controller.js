sap.ui.controller("skedme.Home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skedme.Home
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skedme.Home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skedme.Home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skedme.Home
*/
//	onExit: function() {
//
//	}
	
	fnNavOption:function(e){
		if (e.getParameter("listItem").getBindingContext().getObject().opt=="Set Me Up"){
			sap.ui.getCore().byId("myNavPane").toDetail(sap.ui.getCore().byId("idSetMeUp"));
		}
		if (e.getParameter("listItem").getBindingContext().getObject().opt=="My Profile"){
			sap.ui.getCore().byId("myNavPane").toDetail(sap.ui.getCore().byId("idProfile"));
		}
		if (e.getParameter("listItem").getBindingContext().getObject().opt=="My Schedule"){
			sap.ui.getCore().byId("myNavPane").toDetail(sap.ui.getCore().byId("idAppointment"));
		}
		if (e.getParameter("listItem").getBindingContext().getObject().opt=="My Recents"){
			sap.ui.getCore().byId("myNavPane").toDetail(sap.ui.getCore().byId("idRecent"));
		}
	}

});
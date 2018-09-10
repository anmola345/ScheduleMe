sap.ui.jsview("skedme.Profile", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf skedme.Profile
	*/ 
	getControllerName : function() {
		return "skedme.Profile";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf skedme.Profile
	*/ 
	createContent : function(oController) {
/*		Full Name
		Date of Birth
		Insurance
		Phone Number
		Email
		Medical Insurance Name
		Medical Insurance Policy Number
*/
		
		var info = new sap.ui.layout.form.Form({
			editable:true,
			layout:new sap.ui.layout.form.ResponsiveGridLayout(),
			formContainers:[new sap.ui.layout.form.FormContainer({
				formElements:[new sap.ui.layout.form.FormElement({
					label:new sap.m.Label({
						text:"Name"
					}),
					fields:[new sap.m.Input({
						
					})]
				}),new sap.ui.layout.form.FormElement({
					label:new sap.m.Label({
						text:"Date of Birth"
					}),
					fields:[new sap.ui.unified.Calendar({
						
					})]
				}),new sap.ui.layout.form.FormElement({
					label:new sap.m.Label({
						text:"Phone no"
					}),
					fields:[new sap.m.Input({
						
					})]
				}),new sap.ui.layout.form.FormElement({
					label:new sap.m.Label({
						text:"Email"
					}),
					fields:[new sap.m.Input({
						
					})]
				}),new sap.ui.layout.form.FormElement({
					label:new sap.m.Label({
						text:"Medical Insurance Name"
					}),
					fields:[new sap.m.Input({
						
					})]
				}),new sap.ui.layout.form.FormElement({
					label:new sap.m.Label({
						text:"Policy No."
					}),
					fields:[new sap.m.Input({
						
					})]
				}),new sap.ui.layout.form.FormElement({
					label:new sap.m.Label({
						text:""
					}),
					fields:[new sap.m.Button({
						text:"Save",
						press:oController.fnSave
					})]
				})]
			})]
		});
		
		return new sap.m.Page({
			title: "My Profile",
			content: [info]
		});
	}

});